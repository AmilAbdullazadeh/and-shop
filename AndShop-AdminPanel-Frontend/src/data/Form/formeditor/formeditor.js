import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import { EditorState,convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

//wrapper
export const Wrappers = () => {

  const [description, setDescription] = useState({
    htmlValue: "<p>fsegfvfrgdzfgzfdzb</p>\n",
    editorState: EditorState.createEmpty()
  });

  const onEditorStateChange = editorValue => {
    const editorStateInHtml = draftToHtml(
      convertToRaw(editorValue.getCurrentContent())
    );

    setDescription({
      htmlValue: editorStateInHtml,
      editorState: editorValue
    });
  };
function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}
  return (
      <Editor
        toolbarHidden={false}
        editorState={description.editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="Quill is a free, open dfgdfgdghsource WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.
        The icons use here as a replacement to default svg icons are from Line Awesome Icons."
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
        }}
      />
  );
};
//FromInline-EditEditor

  const content = {
    entityMap: {},
    blocks: [
      {
        key: "637gr",
        text: "It is a long established faccvbdt that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {}
      }
    ]
  };
  export class FromInlineEditEditor extends React.Component {
  
    constructor(props) {
      super(props);
      const contentState = convertFromRaw(content);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        contentState,
        editorState
      };
    }
  
    onContentStateChange = contentState => {
      this.setState({
        contentState
      });
    };
  
    onEditorStateChange = editorState => {
      this.setState({
        editorState
      });
    };
  
    render() {
      const { editorState } = this.state;
      return (
      
          <Editor
            editorClassName={"report-editor"}
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onContentStateChange}
          />

      );
    }
  
};
//FormEditorstyle1
export const FormEditorstyle1 = () => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
  });
  const handleSubmitOnClick = ({ editor_content }) => {
    console.log("editor_content ==> ", editor_content);
  };


  return (
    <section>
      <form className="richText br-5" onSubmit={handleSubmit(handleSubmitOnClick)}>
        <Controller
          name="editor_content"
          control={control}
          defaultValue=""
          render={(props) => (
            <Editor
              {...props}
              onEditorStateChange={(editorState) => {
                if (editorState.blocks) {
                  props.onChange(editorState.blocks[0]);
                }
              }}
            />
          )}
        />
      </form>
    </section>
  );
};
//LargeModaleditor
export function LargeModaleditor() {
  const [lgShow, setLgShow] = useState(false);
  const { handleSubmit, control } = useForm({
    mode: "onChange",
  });

  const handleSubmitOnClick = ({ editor_content }) => {
    console.log("editor_content ==> ", editor_content);
  };

  const values = [true];

  return (
    <>
      {values.map((v, idx) => (
        <Button
          variant="primary"
          className="mt-3 me-2"
          key={idx}
          onClick={() => setLgShow(true)}
        >
          View Live Demo
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Create New Document
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section>
            <form
              className="richText rich"
              onSubmit={handleSubmit(handleSubmitOnClick)}
            >
              <Controller
                name="editor_content"
                control={control}
                defaultValue=""
                render={(props) => (
                  <Editor
                    {...props}
                    onEditorStateChange={(editorState) => {
                      if (editorState.blocks) {
                        props.onChange(editorState.blocks[0]);
                      }
                    }}
                  />
                )}
              />
            </form>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

