import React from 'react';
import Table from '../components/Table';
import styled from '../css/mainpage.module.css';

function MainPage() {
  return (
    <div className={ styled.mainPageContainer } >
      <hr />
      <h2 className={ styled.nfTitle } >Notas Fiscais</h2>
      <p className={ styled.nfSubTitle } >Visualize as notas fiscais que você tem.</p>
      <Table />
    </div>
  );
}

export default MainPage;
