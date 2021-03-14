import React from "react";
import { Table } from "react-bootstrap";
// Hook pour le bouton Trouvez votre stagiaire
function SecteursActivite() {
  return (
    <>
      <h4>Secteurs d'activité - (voir br)</h4>
      <Table striped bordered hover size="sm">
        <tbody>
          <tr>
            <td></td>
            <td className="w-100">@mdo</td>
          </tr>
          <tr>
            <td></td>
            <td>@fat</td>
          </tr>
          <tr>
            <td></td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default SecteursActivite;
