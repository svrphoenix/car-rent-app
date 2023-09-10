import{s as l,u as e,j as o,i as d,a as r,b as p,c as u,d as h}from"./index-2dabbdf9.js";import{S as x,C as g}from"./SearchForm-53d37ae1.js";import{S as m}from"./common.styled-45ffa5c9.js";const b=l.button`
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
`,f=()=>{const t=e();return o.jsx(b,{type:"button",onClick:()=>t(d()),children:"Load more"})},k=()=>{const t=e(),s=r(p),a=!!s.length,n=r(u),i=c=>t(h(c));return o.jsxs(m,{children:[o.jsx(x,{}),o.jsxs("section",{children:[a&&o.jsx(g,{cars:s,handleFavoriteClick:i}),n&&o.jsx(f,{})]})]})};export{k as default};
