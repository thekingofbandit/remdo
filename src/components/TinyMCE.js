// this demo is using TyniMCE with self-hosted files
import React, { useState } from "react";
import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/plugins/paste";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/table";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/content/default/content.min.css";
import { Editor } from "@tinymce/tinymce-react";

const TinyMCE = () => {
  const [contentEditor, setContentEditor] = useState();
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setContentEditor(content);
  };

  return (
    <Editor
      initialValue="<p>because tineyMCE is 1 million times better than this shit</p> "
      init={{
        skin: false,
        content_css: false,
        height: 500,
        menubar: false,
        plugins: ["link image", "table paste"],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help"
      }}
      value={contentEditor}
      onEditorChange={(e) => handleEditorChange(e)}
    />
  );
};

export default TinyMCE;
