import React from "react";
import {Table,Container} from "react-bootstrap";

export const Users=()=>(
    <Container>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry Fawler</td>
      <td>@twitter</td>
    </tr>
  <tr>
      <td>4</td>
      <td>Juper</td>
      <td>Scrembleton</td>
      <td>@scr</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Natan</td>
      <td>Canton</td>
      <td>@nuts</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Wendi</td>
      <td>Candy</td>
      <td>@can_ND</td>
    </tr>
  <tr>
      <td>7</td>
      <td>Ben</td>
      <td>Decken</td>
      <td>@benslow</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Xzen</td>
      <td>Zxen</td>
      <td>@chinatown</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Big</td>
      <td>Smoke</td>
      <td>@follow_damn_trainCJ</td>
    </tr>
  </tbody>
</Table>
</Container>
)
