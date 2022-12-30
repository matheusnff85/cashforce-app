import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Table() {
  const [orders, setOrders] = useState([]);
  const orderStatus = [
    'Pendente de confirmação',
    'Pedido confirmado',
    'Não reconhece o pedido',
    'Mercadoria não recebida',
    'Recebida com avaria',
    'Devolvida',
    'Recebida com devolução parcial',
    'Recebida e confirmada',
    'Pagamento Autorizado'
  ];

  useEffect(() => {
    axios
      .get('http://localhost:3001/orders')
      .then((res) => { setOrders(res.data) })
      .catch((err) => console.error(err));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        { orders.map((order) => (
          <tr key={ order.id }>
            <td>{ order.nNf }</td>
            <td>{ order.buyers.name }</td>
            <td>{ order.providers.name }</td>
            <td>{ order.emissionDate }</td>
            <td>{ Number(order.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</td>
            <td>{ orderStatus[order.orderStatusBuyer] }</td>
            <td>
              <button>Dados do cedente</button>
            </td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
