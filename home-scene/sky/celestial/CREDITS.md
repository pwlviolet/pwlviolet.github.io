# 天体素材署名

## 月球颜色贴图

- 文件：`lroc_color_2k.jpg`
- 来源：NASA Scientific Visualization Studio — CGI Moon Kit
- 页面：https://svs.gsfc.nasa.gov/4720/
- 数据：Lunar Reconnaissance Orbiter Camera / Lunar Orbiter Laser Altimeter
- 项目用途：江南昼夜 GI Demo 的月球球面颜色贴图
- 本地处理：未修改原始 JPG；运行时由 Shader 进行经纬映射、月相照明和独立月晕合成

发布作品页时建议显示：`Moon texture: NASA Scientific Visualization Studio / LRO`。

## 银河范围纹理

- 文件：`galaxy-band-mask-v2-generated.png`
- 来源：OpenAI 内置图像生成工具，2026-08-02 生成
- 用途：江南昼夜 GI Demo 的银河范围、亮脊与暗带提取
- 后续处理：运行时保持线性数据空间，由 Shader 进行 UV 扰动、邻域采样和分层着色
- 生成约束：无星点、无天空底色、无文字、无水印，仅作为项目数据纹理使用

## 银河颜色纹理 v3

- 文件：`galaxy-band-color-v3-generated.png`
- 来源：OpenAI 内置图像生成工具，2026-08-02 生成
- 用途：当前正式使用的银河范围与基础颜色纹理
- 视觉目标：参考图中的窄幅斜向蓝色银道、破碎尘埃暗带和低对比星云层次
- 运行时处理：sRGB 解码后提取亮度范围，并与双层 FBM、星点和夜间曝光合成
- 生成约束：无星点、无地景、无月亮、无文字、无水印
