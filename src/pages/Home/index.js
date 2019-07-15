import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-contrast-masculino/02/D22-1776-002/D22-1776-002_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>
          Tênis olympikus com o título tão grande que quebra em um monte de
          linhas
        </strong>
        <span>R$ 130,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-contrast-masculino/02/D22-1776-002/D22-1776-002_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis olympikus</strong>
        <span>R$ 130,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-contrast-masculino/02/D22-1776-002/D22-1776-002_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis olympikus</strong>
        <span>R$ 130,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-contrast-masculino/02/D22-1776-002/D22-1776-002_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis olympikus</strong>
        <span>R$ 130,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-contrast-masculino/02/D22-1776-002/D22-1776-002_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis olympikus</strong>
        <span>R$ 130,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-contrast-masculino/02/D22-1776-002/D22-1776-002_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis olympikus</strong>
        <span>R$ 130,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
