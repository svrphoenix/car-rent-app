import{s as p,u as a,j as s,i as u,a as o,b as g,c as h,d as m,e as x}from"./index-e68ad5b0.js";import{u as b,g as f,S as C,C as j}from"./SearchForm-ebaefec1.js";import{S}from"./common.styled-3908b10f.js";const k=p.button`
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
`,y=()=>{const t=a();return s.jsx(k,{type:"button",onClick:()=>t(u()),children:"Load more"})},B=()=>{const t=a(),e=o(g),r=b(o(h),"make"),n=!!e.length,c=o(m),i=f(),l=d=>t(x(d));return s.jsxs(S,{children:[s.jsx(C,{brands:r,prices:i}),s.jsxs("section",{children:[n&&s.jsx(j,{cars:e,handleFavoriteClick:l}),c&&s.jsx(y,{})]})]})};export{B as default};
