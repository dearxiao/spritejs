(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{577:function(n,t,e){"use strict";e.r(t),t.default="const {Scene} = spritejs;\nconst {Sphere, Vec3, Curve, Polyline3d, shaders} = spritejs.ext3d;\nconst container = document.getElementById('container');\nconst scene = new Scene({\n  container,\n  displayRatio: 2,\n});\n\nconst layer = scene.layer3d('fglayer', {\n  camera: {\n    fov: 35,\n  },\n});\nlayer.camera.attributes.pos = [0, 0, 4];\nlayer.camera.lookAt([0, 0, 0]);\n\n/* globals d3,topojson */\n(async function () {\n  const data = await (await fetch('https://s0.ssl.qhres.com/static/6a08177cb2f066a5.json')).json();\n  const countries = topojson.feature(data, data.objects.countries);\n\n  // \u9ed8\u8ba4\u5bbd\u9ad8 960 X 500\uff0c\u9ed8\u8ba4 translate \u662f 480 X 250\n  const projection = d3.geoEquirectangular().scale(159); // scale 159 \u8ba9\u5730\u56fe\u5145\u6ee1\u6574\u4e2a texture\n  projection.scale(projection.scale() * 2).translate([960, 500]);\n\n  const canvas = new OffscreenCanvas(1920, 1000);\n  const context = canvas.getContext('2d');\n  const path = d3.geoPath(projection).context(context);\n\n  context.strokeStyle = '#fff';\n  context.lineWidth = 0.25;\n  context.fillStyle = '#000';\n  context.beginPath();\n  path(countries);\n  context.fill();\n  context.stroke();\n\n  const texture = layer.createTexture({image: canvas});\n\n  const program = layer.createProgram({\n    ...shaders.GEOMETRY_WITH_TEXTURE,\n    cullFace: null,\n    texture,\n  });\n\n  const s = new Sphere(program);\n  s.attr({\n    radius: 1,\n    colors: '#7cf',\n  });\n\n  function get_coordinate(latitude, longitude, radius = 1) {\n    const [a, b] = projection([longitude, latitude]);\n    const u = a / 1920;\n    const v = b / 1000;\n    const pLength = Math.PI * 2;\n    const tLength = Math.PI;\n    const x = -radius * Math.cos(u * pLength) * Math.sin(v * tLength);\n    const y = radius * Math.cos(v * tLength);\n    const z = radius * Math.sin(u * pLength) * Math.sin(v * tLength);\n    return new Vec3(x, y, z);\n  }\n\n  function mix(v1, v2, p) {\n    const t1 = new Vec3();\n    const t2 = new Vec3();\n    t1.copy(v1).scale(1 - p);\n    t2.copy(v2).scale(p);\n    return t1.add(t2);\n  }\n\n  // \u5317\u4eac\u5e02\u533a\u5750\u6807\u4e3a:\u5317\u7eac39.9\u201d,\u4e1c\u7ecf116. 3\u201d\u3002\n  // \u4e0a\u6d77\u4f4d\u4e8e\u5317\u7eac31\u5ea611\u5206,\u4e1c\u7ecf121\u5ea629\u5206\u3002\n  const beijingLoc = get_coordinate(39.9, 116.3);\n  const shanghaiLoc = get_coordinate(31.11, 121.29);\n\n  const mid1 = mix(beijingLoc, shanghaiLoc, 0.333); // \u53d6\u5317\u4eac\u3001\u4e0a\u6d77\u4e2d\u95f4\u70b9\n  const mid2 = mix(beijingLoc, shanghaiLoc, 0.667); // \u53d6\u5317\u4eac\u3001\u4e0a\u6d77\u4e2d\u95f4\u70b9\n  mid1.normalize().scale(1.1); // \u4e2d\u95f4\u70b9\n  mid2.normalize().scale(1.1);\n\n  const curve = new Curve({\n    points: [\n      beijingLoc,\n      mid1,\n      mid2,\n      shanghaiLoc,\n    ],\n    type: Curve.CUBICBEZIER,\n  });\n\n  const points = curve.getPoints(50);\n  const curveProgram = layer.createProgram({\n    // ...shaders.POLYLINE,\n    ...shaders.DASHLINE,\n    transparent: true,\n    uniforms: {\n      uThickness: {value: 3},\n      uDashLength: {value: 0.02},\n      uDashOffset: {value: 0},\n    },\n  });\n\n  const p = new Polyline3d(curveProgram, {\n    points,\n    colors: 'orange',\n  });\n  layer.append(s);\n  s.append(p);\n\n  s.attributes.rotateY = 210;\n  s.attributes.rotateX = -30;\n\n  layer.setOrbit();\n\n  layer.tick(() => {\n    s.attributes.rotateY -= 0.1;\n    curveProgram.uniforms.uDashOffset.value -= 0.001;\n  });\n}());"}}]);