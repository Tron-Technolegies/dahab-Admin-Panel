import React, { useState } from "react";
import FormInput from "../../../FormInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useAddTerms from "../../../../hooks/adminMining/useAddTerms";
import Loading from "../../../Loading";
import { toast } from "react-toastify";

export default function AddNewTermsForm({ refetch }) {
  const [version, setVersion] = useState(0);
  const [content, setContent] = useState("");
  const { loading, addTerms } = useAddTerms();
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ align: [] }],
      ["link", "image", "video"], // enables image + video
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
    "video",
  ];
  return (
    <div className="p-5 rounded-md bg-gray-50">
      <FormInput
        admin
        title={"Version"}
        type={"number"}
        placeholder={"Enter the version"}
        value={version}
        onchange={(e) => setVersion(e.target.value)}
      />
      <p className="text-sm mb-3">Content</p>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={(value) => setContent(value)}
        className="bg-white rounded-lg mb-5"
        modules={modules}
        formats={formats}
      />
      <button
        onClick={async () => {
          if (!content || !version) {
            toast.error("Please fill all fields");
            return;
          }
          await addTerms({ content, version });
          setVersion("");
          setContent("");
          refetch();
        }}
        className="px-4 py-2 bg-homeBg hover:bg-homeBgGradient text-white rounded-md"
      >
        Add
      </button>
      {loading && <Loading />}
    </div>
  );
}
