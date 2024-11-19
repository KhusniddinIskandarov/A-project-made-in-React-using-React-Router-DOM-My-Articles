import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

function ArticlesDetail() {
  // const id = useParams()
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data: article, error, isPending } = useFetch(url);

  // console.log(id)

  return (
    <div>
      {/* <div>ArticlesDetail { id }</div> */}
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>} 

      {article && <>
          <img src={article.image} alt={article.title} height="300" />
          <h2>Title: {article.title}</h2>
          <p>
            Author: <i>{article.author}</i>
          </p>
          <p>{article.body}</p>
        </>}
    </div>
  );
}

export default ArticlesDetail;
