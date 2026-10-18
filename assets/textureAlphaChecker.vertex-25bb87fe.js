import{h2 as r}from"./index-6c25af1d.js";const e="textureAlphaCheckerVertexShader",t=`
attribute uv: vec2f;varying vUv: vec2f;@vertex
fn main(input: VertexInputs)->FragmentInputs {vertexOutputs.vUv=vertexInputs.uv;vertexOutputs.position=vec4f(
(vertexInputs.uv % 1.0)*2.0-1.0,
0.0,
1.0
);}
`;r.ShadersStoreWGSL[e]=t;const v={name:e,shader:t};export{v as TextureAlphaCheckerVertexShader};
