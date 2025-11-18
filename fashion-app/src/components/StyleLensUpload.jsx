import { useState, useEffect, useCallback } from "react";

export default function StyleLensUpload() {
    const [image, setImage] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        return () => {
            if (image && image.url) URL.revokeObjectURL(image.url);
        };
    }, [image]);

    const handleFile = useCallback((file) => {
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            setError("Please select a valid image file.");
            return;
        }
        setError("");
        if (image && image.url) URL.revokeObjectURL(image.url);
        setImage({ file, url: URL.createObjectURL(file) });
    }, [image]);

    const handleChange = (e) => {
        handleFile(e.target.files?.[0]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dt = e.dataTransfer;
        if (dt?.files?.[0]) handleFile(dt.files[0]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const removeImage = () => {
        if (image?.url) URL.revokeObjectURL(image.url);
        setImage(null);
        setError("");
    };

    return (
        <div style={{ maxWidth: 600, margin: "1rem auto", fontFamily: "sans-serif" }}>
            <label
                htmlFor="lens-image-input"
                style={{
                    display: "block",
                    padding: "1rem",
                    border: "2px dashed #bbb",
                    borderRadius: 8,
                    textAlign: "center",
                    cursor: "pointer",
                    marginBottom: 8,
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <input
                    id="lens-image-input"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    style={{ display: "none" }}
                />
                Click to upload an outfit image or drag & drop
            </label>

            {error && <div style={{ color: "crimson", marginBottom: 8 }}>{error}</div>}

            {image ? (
                <div style={{ textAlign: "center" }}>
                    <img
                        src={image.url}
                        alt={image.file.name}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: 6,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        }}
                    />

                    <div style={{ marginTop: 8 }}>
                        <small>
                            {image.file.name} — {(image.file.size / 1024).toFixed(1)} KB
                        </small>
                    </div>

                    <button
                        onClick={removeImage}
                        style={{ padding: "0.5rem 1rem", marginTop: 8 }}
                    >
                        Remove image
                    </button>
                </div>
            ) : (
                <div style={{ color: "#666", textAlign: "center", padding: "1rem 0" }}>
                    No image selected yet
                </div>
            )}
        </div>
    );
}
