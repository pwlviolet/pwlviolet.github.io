# 沙丁鱼风暴素材目录

下载的素材直接放在本目录中，网页可以通过 `/sardine-storm/assets/...` 访问。

## 建议目录

```text
fish/          鱼模型、贴图和许可证
caustics/      水下焦散贴图或序列帧
environment/  岩石、海床、海草等环境素材
audio/        水下环境音
CREDITS.md     素材来源与许可证记录
```

## 推荐鱼模型

首选 Quaternius 的 **Animated Fish Bundle**：

https://poly.pizza/bundle/Animated-Fish-Bundle-44zhHN1UbT

- 选择页面上的 `Download GLTF`。
- 授权为 CC0，可用于个人和商业项目。
- 包中优先尝试 `Tuna`，其次是 `Cardinal Fish` 或 `Red Snapper`。
- 不要求严格还原沙丁鱼物种；细长鱼身、分叉尾鳍和银蓝材质就能形成可信的鱼群观感。
- 下载后的完整 GLTF/GLB 文件和贴图放入 `fish/quaternius/`。

更轻量的备选是 Kenney 的单鱼模型：

https://poly.pizza/m/bJs4f0SFlO

它同样是 CC0，并直接提供 OBJ/GLTF。造型更简化，但很适合中远景大规模实例。

## 接入前检查

- 优先选择单个网格、低面数、材质数量少的模型。
- 鱼头最好朝本地 `+X`、背部朝 `+Y`；方向不一致可以在代码或 Blender 中修正。
- 保留原始许可证或下载页面信息，并填写 `CREDITS.md`。
- 若模型自带骨骼，当前版本可以先只提取静态网格；GPU 顶点变形负责统一摆尾。
- 文件会被 Vite 复制到构建产物中，不要放无关压缩包、超大高模或 `.blend` 工程。

