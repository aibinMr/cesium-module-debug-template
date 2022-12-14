//This file is automatically rebuilt by the Cesium build process.
export default "#if defined(HAS_NORMALS) && !defined(HAS_TANGENTS) && !defined(LIGHTING_UNLIT)\n\
#ifdef GL_OES_standard_derivatives\n\
#extension GL_OES_standard_derivatives : enable\n\
#endif\n\
#endif\n\
czm_modelMaterial defaultModelMaterial()\n\
{\n\
czm_modelMaterial material;\n\
material.diffuse = vec3(0.0);\n\
material.specular = vec3(1.0);\n\
material.roughness = 1.0;\n\
material.occlusion = 1.0;\n\
material.normalEC = vec3(0.0, 0.0, 1.0);\n\
material.emissive = vec3(0.0);\n\
material.alpha = 1.0;\n\
return material;\n\
}\n\
vec4 handleAlpha(vec3 color, float alpha)\n\
{\n\
#ifdef ALPHA_MODE_MASK\n\
if (alpha < u_alphaCutoff) {\n\
discard;\n\
}\n\
#endif\n\
return vec4(color, alpha);\n\
}\n\
SelectedFeature selectedFeature;\n\
void main()\n\
{\n\
#ifdef HAS_MODEL_SPLITTER\n\
modelSplitterStage();\n\
#endif\n\
czm_modelMaterial material = defaultModelMaterial();\n\
ProcessedAttributes attributes;\n\
geometryStage(attributes);\n\
FeatureIds featureIds;\n\
featureIdStage(featureIds, attributes);\n\
Metadata metadata;\n\
MetadataClass metadataClass;\n\
metadataStage(metadata, metadataClass, attributes);\n\
#ifdef HAS_SELECTED_FEATURE_ID\n\
selectedFeatureIdStage(selectedFeature, featureIds);\n\
#endif\n\
#ifndef CUSTOM_SHADER_REPLACE_MATERIAL\n\
materialStage(material, attributes, selectedFeature);\n\
#endif\n\
#ifdef HAS_CUSTOM_FRAGMENT_SHADER\n\
customShaderStage(material, attributes, featureIds, metadata, metadataClass);\n\
#endif\n\
lightingStage(material, attributes);\n\
#ifdef HAS_SELECTED_FEATURE_ID\n\
cpuStylingStage(material, selectedFeature);\n\
#endif\n\
#ifdef HAS_MODEL_COLOR\n\
modelColorStage(material);\n\
#endif\n\
#ifdef HAS_PRIMITIVE_OUTLINE\n\
primitiveOutlineStage(material);\n\
#endif\n\
vec4 color = handleAlpha(material.diffuse, material.alpha);\n\
#ifdef HAS_CLIPPING_PLANES\n\
modelClippingPlanesStage(color);\n\
#endif\n\
#if defined(HAS_SILHOUETTE) && defined(HAS_NORMALS)\n\
silhouetteStage(color);\n\
#endif\n\
gl_FragColor = color;\n\
}\n\
";
