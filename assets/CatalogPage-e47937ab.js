import{s as d,u as a,j as s,i as p,a as r,b as u,c as g,d as h}from"./index-15be8fd9.js";import{g as m,S as x,u as b,C as f}from"./SearchForm-6bf5b025.js";import{S as j}from"./common.styled-5ae14ed1.js";const C=d.button`
  cursor: pointer;
  display: block;
  margin: 100px auto 0 auto;
  padding: 0;
  background-color: transparent;
  border-color: transparent;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  text-decoration-line: underline;
  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
    border-color: transparent;
  }
`,S=()=>{const o=a();return s.jsx(C,{type:"button",onClick:()=>o(p()),children:"Load more"})},P=()=>{const o=a(),t=r(u),e=!!t.length,n=r(g),i=m(),c=l=>o(h(l));return s.jsxs(j,{children:[s.jsx(x,{brands:b(t,"make"),priceOptions:i}),s.jsxs("section",{children:[e&&s.jsx(f,{cars:t,handleFavoriteClick:c}),n&&s.jsx(S,{})]})]})};export{P as default};
