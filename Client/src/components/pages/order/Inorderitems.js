function Inorderitems(props) {
  return (
    <table>     
      <tr className="row">
        <td className="col-lg-4">{props.name}</td>
        <td className="col-lg-4">
          {[
            props.type.wash ? "Wash" : "",
            props.type.fold ? "Dryclean" : "",
            props.type.pack ? "Bleach" : "",
            props.type.iron ? "Iron" : "",
          ]
            .filter((x) => x.length > 0)
            .join(",")} X {props.quantity}
        </td>
        <td className="col-lg-4 rate-head"> = {props.cost}</td>
      </tr>
    </table>
  );
}

export default Inorderitems;
