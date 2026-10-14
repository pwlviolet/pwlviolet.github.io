# 荷花素材 · 第 8 轮

三档 GLB 为 2,614 / 996 / 522 个三角面，各有花心、花瓣、花茎三组材质，保留 22 片花瓣。textures/ 含对应 15 张 PNG；LOD0 内嵌标准图，LOD1/2 引用外部图。

模型在原点，单位米、Y 向上。flower_instances.json 含原场景三处 position、quaternion、scale 与列主序 matrix。一个模型的三个材质 primitive 可各建一组 InstancedMesh，再应用记录的 matrix 和子网格相对矩阵。GLB 的根和三个子节点均为单位变换。

basecolor 使用 sRGB；normal、ORM、AO、roughness 为线性数据。ORM 是 R=AO、G=roughness、B=metallic。额外替换 glTF PNG 时保持 flipY=false。花瓣有 KHR_materials_specular 设置，已在 Three.js 0.180.0 验证。

flower_instances.json 只负责原场景位置，单体包不包含场景灯光、亭子或水面。完整效果与复现脚本在 lotus_threejs_runtime_round8.zip。
