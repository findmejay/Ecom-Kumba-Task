"use client";

import "@pqina/pintura/pintura.css";

export default function PinturaEditor({ imageUrl, setImage }) {
    console.log(imageUrl);
  const openEditor = async () => {
    const pintura = await import("@pqina/pintura");

    const instance = pintura.openDefaultEditor({
      src: imageUrl,
    });

    instance.on("process", (res) => {
      const editedUrl = URL.createObjectURL(res.dest);

      setImage(editedUrl); 
      instance.close();
    });
  };

  return (
    <button
      onClick={openEditor}
      className="mt-4 w-full bg-transparent border sm:text-[0.875rem] lg:text-[1.1rem] rounded-sm border-[#707070] text-[#232323] flex justify-center items-center px-4 py-2"
    >
      Edit Image
    </button>
  );
}