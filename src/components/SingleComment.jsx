import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg2ZWFiNTBmZTRlMjAwMTU2Njg4NWEiLCJpYXQiOjE3MzY4OTUxNTcsImV4cCI6MTczODEwNDc1N30.RRNb5kI4DxJhWsg0gqJqpjoX8SJecanJtuaJHtaUfKo`,
          },
        }
      );

      if (response.ok) {
        alert("La recensione è stata eliminata!");
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span>{comment.comment}</span>
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id || comment.asin)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
