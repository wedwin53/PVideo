import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home.js';
//import Playlist from './src/playlist/components/playlist';
import data from '../api.json';

const homeContainer = document.getElementById('home-container')

//ReactDom.render(que voy a renderizar, donde lo hare);
// const holaMundo = <h1>Hola mundo!!</h1>;
render(<Home data={data}/>, homeContainer);