//This file is automatically rebuilt by the Cesium build process.
export default "void instancingStage(inout ProcessedAttributes attributes)\n\
{\n\
vec3 positionMC = attributes.positionMC;\n\
vec3 normalMC = attributes.normalMC;\n\
mat4 instancingTransform = getInstancingTransform();\n\
attributes.positionMC = (instancingTransform * vec4(positionMC, 1.0)).xyz;\n\
attributes.normalMC = (instancingTransform * vec4(normalMC, 0.0)).xyz;\n\
#ifdef USE_2D_INSTANCING\n\
mat4 instancingTransform2D = getInstancingTransform2D();\n\
attributes.position2D = (instancingTransform2D * vec4(positionMC, 1.0)).xyz;\n\
#endif\n\
}\n\
";
