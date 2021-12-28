import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function HtmlEditor() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="g2u67qa1sji9b2bggoumnusvio51i5zykxzx0povup1iz9ej"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>
        <p>this is a great HTML Editor.<br />Fast and work great as hell than ckedtor as shit</p>
        <p>&nbsp;</p>
        <p>this is a healthy component than a foolish component.<br />This plugin has been known for ages.</p> "
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount"
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}
