import{s as l,u as e,j as o,i as d,a,b as p,c as u,d as h}from"./index-9a7a2c71.js";import{S as x,a as g,C as b}from"./common.styled-0668b0de.js";const m=l.button`
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
`,f=()=>{const t=e();return o.jsx(m,{type:"button",onClick:()=>t(d()),children:"Load more"})},S=()=>{const t=e(),s=a(p),r=!!s.length,n=a(u),c=i=>t(h(i));return o.jsxs(x,{children:[o.jsx(g,{}),o.jsxs("section",{children:[r&&o.jsx(b,{cars:s,handleFavoriteClick:c}),n&&o.jsx(f,{})]})]})};export{S as default};
