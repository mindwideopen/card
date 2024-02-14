import React from 'react';
import './App.css';
import Card from "./components/Card";
import {FlexWrapper} from "./components/FlexWrapper";
import dunes from './assets/Training.png'
import axe from './assets/Axe.jpg'
import druid from './assets/Lone_Druid_Large.png'
import tinker from'./assets/Tinker_icon.webp'

function App() {
  return (
      <FlexWrapper gap={'20px'}  wrap={'wrap'} >

        <Card cardTheme={'dunes'}
              picture={dunes}
              headline={'Пустыня'}
              description={'В пустыне бывает очень-очень жарко днем и невыносимо холодно ночью'}
        />
          <Card cardTheme={'tinker'}
                picture={tinker}
                headline={'Это Тинкерос'}
                description={'От его ракет не убежать'}
          />
          <Card cardTheme={'druid'}
                picture={druid}
                headline={'Медведь'}
                description={'Берегите свои тевера'}
          />
          <Card cardTheme={'axe'}
                picture={axe}
                headline={'Аксянский'}
                description={'Не ясно порезали его или нет'}
          />





      </FlexWrapper>
  );
}

export default App;

