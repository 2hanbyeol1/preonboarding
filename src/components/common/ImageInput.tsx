import { ComponentProps, forwardRef, useEffect, useId, useState } from "react";
import defaultImage from "../../assets/default-image.png";

interface ImageInputProps {
  avatarFiles?: FileList;
  defaultAvatar: string;
}

const ImageInput = forwardRef<
  HTMLInputElement,
  ImageInputProps & ComponentProps<"input">
>(({ avatarFiles, defaultAvatar, disabled, ...props }, ref) => {
  const imageInputId = useId();
  const [imagePreview, setImagePreview] = useState<string>("");

  useEffect(() => {
    if (avatarFiles && avatarFiles.length > 0) {
      const file = avatarFiles[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [avatarFiles]);

  // ! delete Image
  return (
    <>
      <input
        ref={ref}
        id={imageInputId}
        className="hidden"
        type="file"
        accept="image/*"
        disabled={disabled}
        {...props}
      />
      <label
        className={`border-4 ${
          disabled ? "border-slate-300" : "border-blue-500"
        } rounded-full overflow-hidden`}
        htmlFor={imageInputId}
      >
        <img
          className={`w-32 h-32 object-cover ${
            disabled ? "" : "cursor-pointer hover:brightness-90"
          }`}
          src={avatarFiles ? imagePreview : defaultAvatar || defaultImage}
          alt="프로필 이미지"
        />
      </label>
    </>
  );
});

export default ImageInput;
