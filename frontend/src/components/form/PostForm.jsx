import Form from "./Form";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const PostForm = ({ post, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-4">
        <Input
          label="Title"
          type="text"
          id="title"
          name="title"
          defaultValue={post?.title}
          placeholder="Enter your title"
          required
        />
      </div>
      <div className="mb-4">
        <Input
          label="Content"
          type="text"
          id="content"
          name="content"
          defaultValue={post?.content}
          placeholder="Enter your content"
          required
        />
      </div>
      <SubmitButton value="save" />
    </Form>
  );
};
export default PostForm;
