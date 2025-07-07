var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointSpring' )
  var i691 = data
  i690.spring = i691[0]
  i690.damper = i691[1]
  i690.targetPosition = i691[2]
  return i690
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointMotor' )
  var i693 = data
  i692.m_TargetVelocity = i693[0]
  i692.m_Force = i693[1]
  i692.m_FreeSpin = i693[2]
  return i692
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointLimits' )
  var i695 = data
  i694.m_Min = i695[0]
  i694.m_Max = i695[1]
  i694.m_Bounciness = i695[2]
  i694.m_BounceMinVelocity = i695[3]
  i694.m_ContactDistance = i695[4]
  i694.minBounce = i695[5]
  i694.maxBounce = i695[6]
  return i694
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointDrive' )
  var i697 = data
  i696.m_PositionSpring = i697[0]
  i696.m_PositionDamper = i697[1]
  i696.m_MaximumForce = i697[2]
  i696.m_UseAcceleration = i697[3]
  return i696
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i699 = data
  i698.m_Spring = i699[0]
  i698.m_Damper = i699[1]
  return i698
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i701 = data
  i700.m_Limit = i701[0]
  i700.m_Bounciness = i701[1]
  i700.m_ContactDistance = i701[2]
  return i700
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i703 = data
  i702.m_ExtremumSlip = i703[0]
  i702.m_ExtremumValue = i703[1]
  i702.m_AsymptoteSlip = i703[2]
  i702.m_AsymptoteValue = i703[3]
  i702.m_Stiffness = i703[4]
  return i702
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i705 = data
  i704.m_LowerAngle = i705[0]
  i704.m_UpperAngle = i705[1]
  return i704
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i707 = data
  i706.m_MotorSpeed = i707[0]
  i706.m_MaximumMotorTorque = i707[1]
  return i706
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i709 = data
  i708.m_DampingRatio = i709[0]
  i708.m_Frequency = i709[1]
  i708.m_Angle = i709[2]
  return i708
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i711 = data
  i710.m_LowerTranslation = i711[0]
  i710.m_UpperTranslation = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i713 = data
  i712.position = new pc.Vec3( i713[0], i713[1], i713[2] )
  i712.scale = new pc.Vec3( i713[3], i713[4], i713[5] )
  i712.rotation = new pc.Quat(i713[6], i713[7], i713[8], i713[9])
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i715 = data
  i714.enabled = !!i715[0]
  request.r(i715[1], i715[2], 0, i714, 'sharedMaterial')
  var i717 = i715[3]
  var i716 = []
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 2, i716, '')
  }
  i714.sharedMaterials = i716
  i714.receiveShadows = !!i715[4]
  i714.shadowCastingMode = i715[5]
  i714.sortingLayerID = i715[6]
  i714.sortingOrder = i715[7]
  i714.lightmapIndex = i715[8]
  i714.lightmapSceneIndex = i715[9]
  i714.lightmapScaleOffset = new pc.Vec4( i715[10], i715[11], i715[12], i715[13] )
  i714.lightProbeUsage = i715[14]
  i714.reflectionProbeUsage = i715[15]
  i714.color = new pc.Color(i715[16], i715[17], i715[18], i715[19])
  request.r(i715[20], i715[21], 0, i714, 'sprite')
  i714.flipX = !!i715[22]
  i714.flipY = !!i715[23]
  i714.drawMode = i715[24]
  i714.size = new pc.Vec2( i715[25], i715[26] )
  i714.tileMode = i715[27]
  i714.adaptiveModeThreshold = i715[28]
  i714.maskInteraction = i715[29]
  i714.spriteSortPoint = i715[30]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'animatorController')
  request.r(i721[2], i721[3], 0, i720, 'avatar')
  i720.updateMode = i721[4]
  i720.hasTransformHierarchy = !!i721[5]
  i720.applyRootMotion = !!i721[6]
  var i723 = i721[7]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.humanBones = i722
  i720.enabled = !!i721[8]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i727 = data
  i726.bodyType = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'material')
  i726.simulated = !!i727[3]
  i726.useAutoMass = !!i727[4]
  i726.mass = i727[5]
  i726.drag = i727[6]
  i726.angularDrag = i727[7]
  i726.gravityScale = i727[8]
  i726.collisionDetectionMode = i727[9]
  i726.sleepMode = i727[10]
  i726.constraints = i727[11]
  return i726
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i728 = root || request.c( 'PlayerController' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, '_manager')
  i728.moveSpeed = i729[2]
  request.r(i729[3], i729[4], 0, i728, 'hand')
  request.r(i729[5], i729[6], 0, i728, 'introText')
  request.r(i729[7], i729[8], 0, i728, 'targetObj')
  var i731 = i729[9]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i728.player = i730
  request.r(i729[10], i729[11], 0, i728, 'cam')
  i728.offScreen = i729[12]
  i728.ClampledValue = i729[13]
  request.r(i729[14], i729[15], 0, i728, 'anim')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i735 = data
  i734.usedByComposite = !!i735[0]
  i734.autoTiling = !!i735[1]
  i734.size = new pc.Vec2( i735[2], i735[3] )
  i734.edgeRadius = i735[4]
  i734.enabled = !!i735[5]
  i734.isTrigger = !!i735[6]
  i734.usedByEffector = !!i735[7]
  i734.density = i735[8]
  i734.offset = new pc.Vec2( i735[9], i735[10] )
  request.r(i735[11], i735[12], 0, i734, 'material')
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i737 = data
  i736.name = i737[0]
  i736.tagId = i737[1]
  i736.enabled = !!i737[2]
  i736.isStatic = !!i737[3]
  i736.layer = i737[4]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i738 = root || new pc.UnityMaterial()
  var i739 = data
  i738.name = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'shader')
  i738.renderQueue = i739[3]
  i738.enableInstancing = !!i739[4]
  var i741 = i739[5]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i741[i + 0]) );
  }
  i738.floatParameters = i740
  var i743 = i739[6]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i743[i + 0]) );
  }
  i738.colorParameters = i742
  var i745 = i739[7]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i745[i + 0]) );
  }
  i738.vectorParameters = i744
  var i747 = i739[8]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i747[i + 0]) );
  }
  i738.textureParameters = i746
  var i749 = i739[9]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i749[i + 0]) );
  }
  i738.materialFlags = i748
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i753 = data
  i752.name = i753[0]
  i752.value = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i757 = data
  i756.name = i757[0]
  i756.value = new pc.Color(i757[1], i757[2], i757[3], i757[4])
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i761 = data
  i760.name = i761[0]
  i760.value = new pc.Vec4( i761[1], i761[2], i761[3], i761[4] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i765 = data
  i764.name = i765[0]
  request.r(i765[1], i765[2], 0, i764, 'value')
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i769 = data
  i768.name = i769[0]
  i768.enabled = !!i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i771 = data
  i770.name = i771[0]
  i770.width = i771[1]
  i770.height = i771[2]
  i770.mipmapCount = i771[3]
  i770.anisoLevel = i771[4]
  i770.filterMode = i771[5]
  i770.hdr = !!i771[6]
  i770.format = i771[7]
  i770.wrapMode = i771[8]
  i770.alphaIsTransparency = !!i771[9]
  i770.alphaSource = i771[10]
  i770.graphicsFormat = i771[11]
  i770.sRGBTexture = !!i771[12]
  i770.desiredColorSpace = i771[13]
  i770.wrapU = i771[14]
  i770.wrapV = i771[15]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i773 = data
  i772.pivot = new pc.Vec2( i773[0], i773[1] )
  i772.anchorMin = new pc.Vec2( i773[2], i773[3] )
  i772.anchorMax = new pc.Vec2( i773[4], i773[5] )
  i772.sizeDelta = new pc.Vec2( i773[6], i773[7] )
  i772.anchoredPosition3D = new pc.Vec3( i773[8], i773[9], i773[10] )
  i772.rotation = new pc.Quat(i773[11], i773[12], i773[13], i773[14])
  i772.scale = new pc.Vec3( i773[15], i773[16], i773[17] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i775 = data
  i774.cullTransparentMesh = !!i775[0]
  return i774
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.Image' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_Sprite')
  i776.m_Type = i777[2]
  i776.m_PreserveAspect = !!i777[3]
  i776.m_FillCenter = !!i777[4]
  i776.m_FillMethod = i777[5]
  i776.m_FillAmount = i777[6]
  i776.m_FillClockwise = !!i777[7]
  i776.m_FillOrigin = i777[8]
  i776.m_UseSpriteMesh = !!i777[9]
  i776.m_PixelsPerUnitMultiplier = i777[10]
  request.r(i777[11], i777[12], 0, i776, 'm_Material')
  i776.m_Maskable = !!i777[13]
  i776.m_Color = new pc.Color(i777[14], i777[15], i777[16], i777[17])
  i776.m_RaycastTarget = !!i777[18]
  i776.m_RaycastPadding = new pc.Vec4( i777[19], i777[20], i777[21], i777[22] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i779 = data
  i778.enabled = !!i779[0]
  i778.isTrigger = !!i779[1]
  i778.usedByEffector = !!i779[2]
  i778.density = i779[3]
  i778.offset = new pc.Vec2( i779[4], i779[5] )
  request.r(i779[6], i779[7], 0, i778, 'material')
  i778.edgeRadius = i779[8]
  var i781 = i779[9]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
    i780.push( new pc.Vec2( i781[i + 0], i781[i + 1] ) );
  }
  i778.points = i780
  i778.useAdjacentStartPoint = !!i779[10]
  i778.adjacentStartPoint = new pc.Vec2( i779[11], i779[12] )
  i778.useAdjacentEndPoint = !!i779[13]
  i778.adjacentEndPoint = new pc.Vec2( i779[14], i779[15] )
  return i778
}

Deserializers["PlatformScript"] = function (request, data, root) {
  var i784 = root || request.c( 'PlatformScript' )
  var i785 = data
  i784.jumpForce = i785[0]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D' )
  var i787 = data
  i786.enabled = !!i787[0]
  i786.useColliderMask = !!i787[1]
  i786.colliderMask = i787[2]
  return i786
}

Deserializers["Shroom"] = function (request, data, root) {
  var i788 = root || request.c( 'Shroom' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'particle')
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i791 = data
  i790.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i791[0], i790.main)
  i790.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i791[1], i790.colorBySpeed)
  i790.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i791[2], i790.colorOverLifetime)
  i790.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i791[3], i790.emission)
  i790.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i791[4], i790.rotationBySpeed)
  i790.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i791[5], i790.rotationOverLifetime)
  i790.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i791[6], i790.shape)
  i790.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i791[7], i790.sizeBySpeed)
  i790.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i791[8], i790.sizeOverLifetime)
  i790.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i791[9], i790.textureSheetAnimation)
  i790.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i791[10], i790.velocityOverLifetime)
  i790.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i791[11], i790.noise)
  i790.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i791[12], i790.inheritVelocity)
  i790.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i791[13], i790.forceOverLifetime)
  i790.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i791[14], i790.limitVelocityOverLifetime)
  i790.useAutoRandomSeed = !!i791[15]
  i790.randomSeed = i791[16]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemMain()
  var i793 = data
  i792.duration = i793[0]
  i792.loop = !!i793[1]
  i792.prewarm = !!i793[2]
  i792.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.startDelay)
  i792.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[4], i792.startLifetime)
  i792.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[5], i792.startSpeed)
  i792.startSize3D = !!i793[6]
  i792.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[7], i792.startSizeX)
  i792.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[8], i792.startSizeY)
  i792.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[9], i792.startSizeZ)
  i792.startRotation3D = !!i793[10]
  i792.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[11], i792.startRotationX)
  i792.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[12], i792.startRotationY)
  i792.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[13], i792.startRotationZ)
  i792.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i793[14], i792.startColor)
  i792.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[15], i792.gravityModifier)
  i792.simulationSpace = i793[16]
  request.r(i793[17], i793[18], 0, i792, 'customSimulationSpace')
  i792.simulationSpeed = i793[19]
  i792.useUnscaledTime = !!i793[20]
  i792.scalingMode = i793[21]
  i792.playOnAwake = !!i793[22]
  i792.maxParticles = i793[23]
  i792.emitterVelocityMode = i793[24]
  i792.stopAction = i793[25]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i794 = root || new pc.MinMaxCurve()
  var i795 = data
  i794.mode = i795[0]
  i794.curveMin = new pc.AnimationCurve( { keys_flow: i795[1] } )
  i794.curveMax = new pc.AnimationCurve( { keys_flow: i795[2] } )
  i794.curveMultiplier = i795[3]
  i794.constantMin = i795[4]
  i794.constantMax = i795[5]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i796 = root || new pc.MinMaxGradient()
  var i797 = data
  i796.mode = i797[0]
  i796.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i797[1], i796.gradientMin)
  i796.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i797[2], i796.gradientMax)
  i796.colorMin = new pc.Color(i797[3], i797[4], i797[5], i797[6])
  i796.colorMax = new pc.Color(i797[7], i797[8], i797[9], i797[10])
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i799 = data
  i798.mode = i799[0]
  var i801 = i799[1]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i801[i + 0]) );
  }
  i798.colorKeys = i800
  var i803 = i799[2]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i803[i + 0]) );
  }
  i798.alphaKeys = i802
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i807 = data
  i806.color = new pc.Color(i807[0], i807[1], i807[2], i807[3])
  i806.time = i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i811 = data
  i810.alpha = i811[0]
  i810.time = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemColorBySpeed()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i813[1], i812.color)
  i812.range = new pc.Vec2( i813[2], i813[3] )
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemColorOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i815[1], i814.color)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemEmitter()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.rateOverTime)
  i816.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.rateOverDistance)
  var i819 = i817[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i819[i + 0]) );
  }
  i816.bursts = i818
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemBurst()
  var i823 = data
  i822.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[0], i822.count)
  i822.cycleCount = i823[1]
  i822.minCount = i823[2]
  i822.maxCount = i823[3]
  i822.repeatInterval = i823[4]
  i822.time = i823[5]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemRotationBySpeed()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.x)
  i824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.y)
  i824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.z)
  i824.separateAxes = !!i825[4]
  i824.range = new pc.Vec2( i825[5], i825[6] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemRotationOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.separateAxes = !!i827[4]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemShape()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.shapeType = i829[1]
  i828.randomDirectionAmount = i829[2]
  i828.sphericalDirectionAmount = i829[3]
  i828.randomPositionAmount = i829[4]
  i828.alignToDirection = !!i829[5]
  i828.radius = i829[6]
  i828.radiusMode = i829[7]
  i828.radiusSpread = i829[8]
  i828.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[9], i828.radiusSpeed)
  i828.radiusThickness = i829[10]
  i828.angle = i829[11]
  i828.length = i829[12]
  i828.boxThickness = new pc.Vec3( i829[13], i829[14], i829[15] )
  i828.meshShapeType = i829[16]
  request.r(i829[17], i829[18], 0, i828, 'mesh')
  request.r(i829[19], i829[20], 0, i828, 'meshRenderer')
  request.r(i829[21], i829[22], 0, i828, 'skinnedMeshRenderer')
  i828.useMeshMaterialIndex = !!i829[23]
  i828.meshMaterialIndex = i829[24]
  i828.useMeshColors = !!i829[25]
  i828.normalOffset = i829[26]
  i828.arc = i829[27]
  i828.arcMode = i829[28]
  i828.arcSpread = i829[29]
  i828.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[30], i828.arcSpeed)
  i828.donutRadius = i829[31]
  i828.position = new pc.Vec3( i829[32], i829[33], i829[34] )
  i828.rotation = new pc.Vec3( i829[35], i829[36], i829[37] )
  i828.scale = new pc.Vec3( i829[38], i829[39], i829[40] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemSizeBySpeed()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[1], i830.x)
  i830.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.y)
  i830.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[3], i830.z)
  i830.separateAxes = !!i831[4]
  i830.range = new pc.Vec2( i831[5], i831[6] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemSizeOverLifetime()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.x)
  i832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.y)
  i832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.z)
  i832.separateAxes = !!i833[4]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.mode = i835[1]
  i834.animation = i835[2]
  i834.numTilesX = i835[3]
  i834.numTilesY = i835[4]
  i834.useRandomRow = !!i835[5]
  i834.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[6], i834.frameOverTime)
  i834.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[7], i834.startFrame)
  i834.cycleCount = i835[8]
  i834.rowIndex = i835[9]
  i834.flipU = i835[10]
  i834.flipV = i835[11]
  i834.spriteCount = i835[12]
  var i837 = i835[13]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.sprites = i836
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[1], i838.x)
  i838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.y)
  i838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[3], i838.z)
  i838.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[4], i838.radial)
  i838.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[5], i838.speedModifier)
  i838.space = i839[6]
  i838.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[7], i838.orbitalX)
  i838.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[8], i838.orbitalY)
  i838.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[9], i838.orbitalZ)
  i838.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[10], i838.orbitalOffsetX)
  i838.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[11], i838.orbitalOffsetY)
  i838.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[12], i838.orbitalOffsetZ)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemNoise()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.separateAxes = !!i841[1]
  i840.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.strengthX)
  i840.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.strengthY)
  i840.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[4], i840.strengthZ)
  i840.frequency = i841[5]
  i840.damping = !!i841[6]
  i840.octaveCount = i841[7]
  i840.octaveMultiplier = i841[8]
  i840.octaveScale = i841[9]
  i840.quality = i841[10]
  i840.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[11], i840.scrollSpeed)
  i840.scrollSpeedMultiplier = i841[12]
  i840.remapEnabled = !!i841[13]
  i840.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[14], i840.remapX)
  i840.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[15], i840.remapY)
  i840.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[16], i840.remapZ)
  i840.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[17], i840.positionAmount)
  i840.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[18], i840.rotationAmount)
  i840.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[19], i840.sizeAmount)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemInheritVelocity()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.mode = i843[1]
  i842.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.curve)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemForceOverLifetime()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[1], i844.x)
  i844.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[2], i844.y)
  i844.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[3], i844.z)
  i844.space = i845[4]
  i844.randomized = !!i845[5]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[1], i846.limit)
  i846.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[2], i846.limitX)
  i846.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[3], i846.limitY)
  i846.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[4], i846.limitZ)
  i846.dampen = i847[5]
  i846.separateAxes = !!i847[6]
  i846.space = i847[7]
  i846.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[8], i846.drag)
  i846.multiplyDragByParticleSize = !!i847[9]
  i846.multiplyDragByParticleVelocity = !!i847[10]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i849 = data
  i848.enabled = !!i849[0]
  request.r(i849[1], i849[2], 0, i848, 'sharedMaterial')
  var i851 = i849[3]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.sharedMaterials = i850
  i848.receiveShadows = !!i849[4]
  i848.shadowCastingMode = i849[5]
  i848.sortingLayerID = i849[6]
  i848.sortingOrder = i849[7]
  i848.lightmapIndex = i849[8]
  i848.lightmapSceneIndex = i849[9]
  i848.lightmapScaleOffset = new pc.Vec4( i849[10], i849[11], i849[12], i849[13] )
  i848.lightProbeUsage = i849[14]
  i848.reflectionProbeUsage = i849[15]
  request.r(i849[16], i849[17], 0, i848, 'mesh')
  i848.meshCount = i849[18]
  i848.activeVertexStreamsCount = i849[19]
  i848.alignment = i849[20]
  i848.renderMode = i849[21]
  i848.sortMode = i849[22]
  i848.lengthScale = i849[23]
  i848.velocityScale = i849[24]
  i848.cameraVelocityScale = i849[25]
  i848.normalDirection = i849[26]
  i848.sortingFudge = i849[27]
  i848.minParticleSize = i849[28]
  i848.maxParticleSize = i849[29]
  i848.pivot = new pc.Vec3( i849[30], i849[31], i849[32] )
  request.r(i849[33], i849[34], 0, i848, 'trailMaterial')
  return i848
}

Deserializers["Winner"] = function (request, data, root) {
  var i852 = root || request.c( 'Winner' )
  var i853 = data
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i855 = data
  i854.name = i855[0]
  i854.index = i855[1]
  i854.startup = !!i855[2]
  return i854
}

Deserializers["GameManager"] = function (request, data, root) {
  var i856 = root || request.c( 'GameManager' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'player')
  request.r(i857[2], i857[3], 0, i856, 'endCardTitle')
  request.r(i857[4], i857[5], 0, i856, 'endDescription')
  request.r(i857[6], i857[7], 0, i856, 'endInstall')
  request.r(i857[8], i857[9], 0, i856, 'score')
  request.r(i857[10], i857[11], 0, i856, 'Intro')
  request.r(i857[12], i857[13], 0, i856, 'retry')
  request.r(i857[14], i857[15], 0, i856, 'Target')
  request.r(i857[16], i857[17], 0, i856, 'endCard')
  request.r(i857[18], i857[19], 0, i856, 'introText')
  request.r(i857[20], i857[21], 0, i856, 'Hand')
  request.r(i857[22], i857[23], 0, i856, 'targetObj')
  request.r(i857[24], i857[25], 0, i856, 'retryBtn')
  i856.title = i857[26]
  i856.description = i857[27]
  i856.installText = i857[28]
  i856.retryText = i857[29]
  i856.IntroText = i857[30]
  i856.targetText = i857[31]
  i856.textColours = new pc.Color(i857[32], i857[33], i857[34], i857[35])
  i856.type = i857[36]
  request.r(i857[37], i857[38], 0, i856, 'iconTex')
  i856.maxCount = i857[39]
  request.r(i857[40], i857[41], 0, i856, 'iconIMG')
  return i856
}

Deserializers["PauseManager"] = function (request, data, root) {
  var i858 = root || request.c( 'PauseManager' )
  var i859 = data
  return i858
}

Deserializers["LevelGenerator"] = function (request, data, root) {
  var i860 = root || request.c( 'LevelGenerator' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'platform')
  request.r(i861[2], i861[3], 0, i860, 'mushroom')
  i860.spawnHeight = i861[4]
  i860.division = i861[5]
  i860.numberOfPlatform = i861[6]
  i860.levelWidth = i861[7]
  i860.minY = i861[8]
  i860.maxY = i861[9]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i863 = data
  i862.enabled = !!i863[0]
  i862.aspect = i863[1]
  i862.orthographic = !!i863[2]
  i862.orthographicSize = i863[3]
  i862.backgroundColor = new pc.Color(i863[4], i863[5], i863[6], i863[7])
  i862.nearClipPlane = i863[8]
  i862.farClipPlane = i863[9]
  i862.fieldOfView = i863[10]
  i862.depth = i863[11]
  i862.clearFlags = i863[12]
  i862.cullingMask = i863[13]
  i862.rect = i863[14]
  request.r(i863[15], i863[16], 0, i862, 'targetTexture')
  i862.usePhysicalProperties = !!i863[17]
  i862.focalLength = i863[18]
  i862.sensorSize = new pc.Vec2( i863[19], i863[20] )
  i862.lensShift = new pc.Vec2( i863[21], i863[22] )
  i862.gateFit = i863[23]
  i862.commandBufferCount = i863[24]
  i862.cameraType = i863[25]
  return i862
}

Deserializers["CamraFollow"] = function (request, data, root) {
  var i864 = root || request.c( 'CamraFollow' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'target')
  i864.smoothSpeed = i865[2]
  return i864
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i867 = data
  i866.m_RenderShadows = !!i867[0]
  i866.m_RequiresDepthTextureOption = i867[1]
  i866.m_RequiresOpaqueTextureOption = i867[2]
  i866.m_CameraType = i867[3]
  var i869 = i867[4]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 1, i868, '')
  }
  i866.m_Cameras = i868
  i866.m_RendererIndex = i867[5]
  i866.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i867[6] )
  request.r(i867[7], i867[8], 0, i866, 'm_VolumeTrigger')
  i866.m_VolumeFrameworkUpdateModeOption = i867[9]
  i866.m_RenderPostProcessing = !!i867[10]
  i866.m_Antialiasing = i867[11]
  i866.m_AntialiasingQuality = i867[12]
  i866.m_StopNaN = !!i867[13]
  i866.m_Dithering = !!i867[14]
  i866.m_ClearDepth = !!i867[15]
  i866.m_AllowXRRendering = !!i867[16]
  i866.m_AllowHDROutput = !!i867[17]
  i866.m_UseScreenCoordOverride = !!i867[18]
  i866.m_ScreenSizeOverride = new pc.Vec4( i867[19], i867[20], i867[21], i867[22] )
  i866.m_ScreenCoordScaleBias = new pc.Vec4( i867[23], i867[24], i867[25], i867[26] )
  i866.m_RequiresDepthTexture = !!i867[27]
  i866.m_RequiresColorTexture = !!i867[28]
  i866.m_Version = i867[29]
  i866.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i867[30], i866.m_TaaSettings)
  return i866
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i873 = data
  i872.m_Quality = i873[0]
  i872.m_FrameInfluence = i873[1]
  i872.m_JitterScale = i873[2]
  i872.m_MipBias = i873[3]
  i872.m_VarianceClampScale = i873[4]
  i872.m_ContrastAdaptiveSharpening = i873[5]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i875 = data
  i874.enabled = !!i875[0]
  i874.planeDistance = i875[1]
  i874.referencePixelsPerUnit = i875[2]
  i874.isFallbackOverlay = !!i875[3]
  i874.renderMode = i875[4]
  i874.renderOrder = i875[5]
  i874.sortingLayerName = i875[6]
  i874.sortingOrder = i875[7]
  i874.scaleFactor = i875[8]
  request.r(i875[9], i875[10], 0, i874, 'worldCamera')
  i874.overrideSorting = !!i875[11]
  i874.pixelPerfect = !!i875[12]
  i874.targetDisplay = i875[13]
  i874.overridePixelPerfect = !!i875[14]
  return i874
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i877 = data
  i876.m_UiScaleMode = i877[0]
  i876.m_ReferencePixelsPerUnit = i877[1]
  i876.m_ScaleFactor = i877[2]
  i876.m_ReferenceResolution = new pc.Vec2( i877[3], i877[4] )
  i876.m_ScreenMatchMode = i877[5]
  i876.m_MatchWidthOrHeight = i877[6]
  i876.m_PhysicalUnit = i877[7]
  i876.m_FallbackScreenDPI = i877[8]
  i876.m_DefaultSpriteDPI = i877[9]
  i876.m_DynamicPixelsPerUnit = i877[10]
  i876.m_PresetInfoIsWorld = !!i877[11]
  return i876
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i879 = data
  i878.m_IgnoreReversedGraphics = !!i879[0]
  i878.m_BlockingObjects = i879[1]
  i878.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i879[2] )
  return i878
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.Text' )
  var i881 = data
  i880.m_FontData = request.d('UnityEngine.UI.FontData', i881[0], i880.m_FontData)
  i880.m_Text = i881[1]
  request.r(i881[2], i881[3], 0, i880, 'm_Material')
  i880.m_Maskable = !!i881[4]
  i880.m_Color = new pc.Color(i881[5], i881[6], i881[7], i881[8])
  i880.m_RaycastTarget = !!i881[9]
  i880.m_RaycastPadding = new pc.Vec4( i881[10], i881[11], i881[12], i881[13] )
  return i880
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.FontData' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'm_Font')
  i882.m_FontSize = i883[2]
  i882.m_FontStyle = i883[3]
  i882.m_BestFit = !!i883[4]
  i882.m_MinSize = i883[5]
  i882.m_MaxSize = i883[6]
  i882.m_Alignment = i883[7]
  i882.m_AlignByGeometry = !!i883[8]
  i882.m_RichText = !!i883[9]
  i882.m_HorizontalOverflow = i883[10]
  i882.m_VerticalOverflow = i883[11]
  i882.m_LineSpacing = i883[12]
  return i882
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.Button' )
  var i885 = data
  i884.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i885[0], i884.m_OnClick)
  i884.m_Navigation = request.d('UnityEngine.UI.Navigation', i885[1], i884.m_Navigation)
  i884.m_Transition = i885[2]
  i884.m_Colors = request.d('UnityEngine.UI.ColorBlock', i885[3], i884.m_Colors)
  i884.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i885[4], i884.m_SpriteState)
  i884.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i885[5], i884.m_AnimationTriggers)
  i884.m_Interactable = !!i885[6]
  request.r(i885[7], i885[8], 0, i884, 'm_TargetGraphic')
  return i884
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i887 = data
  i886.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i887[0], i886.m_PersistentCalls)
  return i886
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i889 = data
  var i891 = i889[0]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('UnityEngine.Events.PersistentCall', i891[i + 0]));
  }
  i888.m_Calls = i890
  return i888
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'm_Target')
  i894.m_TargetAssemblyTypeName = i895[2]
  i894.m_MethodName = i895[3]
  i894.m_Mode = i895[4]
  i894.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i895[5], i894.m_Arguments)
  i894.m_CallState = i895[6]
  return i894
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'm_ObjectArgument')
  i896.m_ObjectArgumentAssemblyTypeName = i897[2]
  i896.m_IntArgument = i897[3]
  i896.m_FloatArgument = i897[4]
  i896.m_StringArgument = i897[5]
  i896.m_BoolArgument = !!i897[6]
  return i896
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i899 = data
  i898.m_Mode = i899[0]
  i898.m_WrapAround = !!i899[1]
  request.r(i899[2], i899[3], 0, i898, 'm_SelectOnUp')
  request.r(i899[4], i899[5], 0, i898, 'm_SelectOnDown')
  request.r(i899[6], i899[7], 0, i898, 'm_SelectOnLeft')
  request.r(i899[8], i899[9], 0, i898, 'm_SelectOnRight')
  return i898
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i901 = data
  i900.m_NormalColor = new pc.Color(i901[0], i901[1], i901[2], i901[3])
  i900.m_HighlightedColor = new pc.Color(i901[4], i901[5], i901[6], i901[7])
  i900.m_PressedColor = new pc.Color(i901[8], i901[9], i901[10], i901[11])
  i900.m_SelectedColor = new pc.Color(i901[12], i901[13], i901[14], i901[15])
  i900.m_DisabledColor = new pc.Color(i901[16], i901[17], i901[18], i901[19])
  i900.m_ColorMultiplier = i901[20]
  i900.m_FadeDuration = i901[21]
  return i900
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'm_HighlightedSprite')
  request.r(i903[2], i903[3], 0, i902, 'm_PressedSprite')
  request.r(i903[4], i903[5], 0, i902, 'm_SelectedSprite')
  request.r(i903[6], i903[7], 0, i902, 'm_DisabledSprite')
  return i902
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i905 = data
  i904.m_NormalTrigger = i905[0]
  i904.m_HighlightedTrigger = i905[1]
  i904.m_PressedTrigger = i905[2]
  i904.m_SelectedTrigger = i905[3]
  i904.m_DisabledTrigger = i905[4]
  return i904
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'm_FirstSelected')
  i906.m_sendNavigationEvents = !!i907[2]
  i906.m_DragThreshold = i907[3]
  return i906
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i909 = data
  i908.m_HorizontalAxis = i909[0]
  i908.m_VerticalAxis = i909[1]
  i908.m_SubmitButton = i909[2]
  i908.m_CancelButton = i909[3]
  i908.m_InputActionsPerSecond = i909[4]
  i908.m_RepeatDelay = i909[5]
  i908.m_ForceModuleActive = !!i909[6]
  i908.m_SendPointerHoverToParent = !!i909[7]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i911 = data
  i910.ambientIntensity = i911[0]
  i910.reflectionIntensity = i911[1]
  i910.ambientMode = i911[2]
  i910.ambientLight = new pc.Color(i911[3], i911[4], i911[5], i911[6])
  i910.ambientSkyColor = new pc.Color(i911[7], i911[8], i911[9], i911[10])
  i910.ambientGroundColor = new pc.Color(i911[11], i911[12], i911[13], i911[14])
  i910.ambientEquatorColor = new pc.Color(i911[15], i911[16], i911[17], i911[18])
  i910.fogColor = new pc.Color(i911[19], i911[20], i911[21], i911[22])
  i910.fogEndDistance = i911[23]
  i910.fogStartDistance = i911[24]
  i910.fogDensity = i911[25]
  i910.fog = !!i911[26]
  request.r(i911[27], i911[28], 0, i910, 'skybox')
  i910.fogMode = i911[29]
  var i913 = i911[30]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i913[i + 0]) );
  }
  i910.lightmaps = i912
  i910.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i911[31], i910.lightProbes)
  i910.lightmapsMode = i911[32]
  i910.mixedBakeMode = i911[33]
  i910.environmentLightingMode = i911[34]
  i910.ambientProbe = new pc.SphericalHarmonicsL2(i911[35])
  i910.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i911[36])
  i910.useReferenceAmbientProbe = !!i911[37]
  request.r(i911[38], i911[39], 0, i910, 'customReflection')
  request.r(i911[40], i911[41], 0, i910, 'defaultReflection')
  i910.defaultReflectionMode = i911[42]
  i910.defaultReflectionResolution = i911[43]
  i910.sunLightObjectId = i911[44]
  i910.pixelLightCount = i911[45]
  i910.defaultReflectionHDR = !!i911[46]
  i910.hasLightDataAsset = !!i911[47]
  i910.hasManualGenerate = !!i911[48]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'lightmapColor')
  request.r(i917[2], i917[3], 0, i916, 'lightmapDirection')
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i918 = root || new UnityEngine.LightProbes()
  var i919 = data
  return i918
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'panelPrefab')
  var i929 = i927[2]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i929[i + 0]));
  }
  i926.prefabs = i928
  return i926
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i933 = data
  i932.type = i933[0]
  request.r(i933[1], i933[2], 0, i932, 'prefab')
  return i932
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i935 = data
  i934.m_Spacing = i935[0]
  i934.m_ChildForceExpandWidth = !!i935[1]
  i934.m_ChildForceExpandHeight = !!i935[2]
  i934.m_ChildControlWidth = !!i935[3]
  i934.m_ChildControlHeight = !!i935[4]
  i934.m_ChildScaleWidth = !!i935[5]
  i934.m_ChildScaleHeight = !!i935[6]
  i934.m_ReverseArrangement = !!i935[7]
  i934.m_Padding = UnityEngine.RectOffset.FromPaddings(i935[8], i935[9], i935[10], i935[11])
  i934.m_ChildAlignment = i935[12]
  return i934
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i937 = data
  i936.m_HorizontalFit = i937[0]
  i936.m_VerticalFit = i937[1]
  return i936
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'contentHolder')
  return i938
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'nameLabel')
  request.r(i941[2], i941[3], 0, i940, 'scrollRect')
  request.r(i941[4], i941[5], 0, i940, 'viewport')
  request.r(i941[6], i941[7], 0, i940, 'Canvas')
  return i940
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i943 = data
  i942.m_IgnoreLayout = !!i943[0]
  i942.m_MinWidth = i943[1]
  i942.m_MinHeight = i943[2]
  i942.m_PreferredWidth = i943[3]
  i942.m_PreferredHeight = i943[4]
  i942.m_FlexibleWidth = i943[5]
  i942.m_FlexibleHeight = i943[6]
  i942.m_LayoutPriority = i943[7]
  return i942
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'm_Content')
  i944.m_Horizontal = !!i945[2]
  i944.m_Vertical = !!i945[3]
  i944.m_MovementType = i945[4]
  i944.m_Elasticity = i945[5]
  i944.m_Inertia = !!i945[6]
  i944.m_DecelerationRate = i945[7]
  i944.m_ScrollSensitivity = i945[8]
  request.r(i945[9], i945[10], 0, i944, 'm_Viewport')
  request.r(i945[11], i945[12], 0, i944, 'm_HorizontalScrollbar')
  request.r(i945[13], i945[14], 0, i944, 'm_VerticalScrollbar')
  i944.m_HorizontalScrollbarVisibility = i945[15]
  i944.m_VerticalScrollbarVisibility = i945[16]
  i944.m_HorizontalScrollbarSpacing = i945[17]
  i944.m_VerticalScrollbarSpacing = i945[18]
  i944.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i945[19], i944.m_OnValueChanged)
  return i944
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i947 = data
  i946.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i947[0], i946.m_PersistentCalls)
  return i946
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Mask' )
  var i949 = data
  i948.m_ShowMaskGraphic = !!i949[0]
  return i948
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'm_HandleRect')
  i950.m_Direction = i951[2]
  i950.m_Value = i951[3]
  i950.m_Size = i951[4]
  i950.m_NumberOfSteps = i951[5]
  i950.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i951[6], i950.m_OnValueChanged)
  i950.m_Navigation = request.d('UnityEngine.UI.Navigation', i951[7], i950.m_Navigation)
  i950.m_Transition = i951[8]
  i950.m_Colors = request.d('UnityEngine.UI.ColorBlock', i951[9], i950.m_Colors)
  i950.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i951[10], i950.m_SpriteState)
  i950.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i951[11], i950.m_AnimationTriggers)
  i950.m_Interactable = !!i951[12]
  request.r(i951[13], i951[14], 0, i950, 'm_TargetGraphic')
  return i950
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i953 = data
  i952.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i953[0], i952.m_PersistentCalls)
  return i952
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i955 = data
  var i957 = i955[0]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i957[i + 0]));
  }
  i954.m_Delegates = i956
  return i954
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i961 = data
  i960.eventID = i961[0]
  i960.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i961[1], i960.callback)
  return i960
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i963 = data
  i962.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i963[0], i962.m_PersistentCalls)
  return i962
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'nameLabel')
  request.r(i965[2], i965[3], 0, i964, 'valueLabel')
  i964.colorDefault = new pc.Color(i965[4], i965[5], i965[6], i965[7])
  i964.colorSelected = new pc.Color(i965[8], i965[9], i965[10], i965[11])
  return i964
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'nameLabel')
  request.r(i967[2], i967[3], 0, i966, 'valueToggle')
  request.r(i967[4], i967[5], 0, i966, 'checkmarkImage')
  i966.colorDefault = new pc.Color(i967[6], i967[7], i967[8], i967[9])
  i966.colorSelected = new pc.Color(i967[10], i967[11], i967[12], i967[13])
  return i966
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i969 = data
  i968.toggleTransition = i969[0]
  request.r(i969[1], i969[2], 0, i968, 'graphic')
  i968.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i969[3], i968.onValueChanged)
  request.r(i969[4], i969[5], 0, i968, 'm_Group')
  i968.m_IsOn = !!i969[6]
  i968.m_Navigation = request.d('UnityEngine.UI.Navigation', i969[7], i968.m_Navigation)
  i968.m_Transition = i969[8]
  i968.m_Colors = request.d('UnityEngine.UI.ColorBlock', i969[9], i968.m_Colors)
  i968.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i969[10], i968.m_SpriteState)
  i968.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i969[11], i968.m_AnimationTriggers)
  i968.m_Interactable = !!i969[12]
  request.r(i969[13], i969[14], 0, i968, 'm_TargetGraphic')
  return i968
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i971 = data
  i970.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i971[0], i970.m_PersistentCalls)
  return i970
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'nameLabel')
  request.r(i973[2], i973[3], 0, i972, 'valueLabel')
  i972.colorDefault = new pc.Color(i973[4], i973[5], i973[6], i973[7])
  i972.colorSelected = new pc.Color(i973[8], i973[9], i973[10], i973[11])
  return i972
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'nameLabel')
  request.r(i975[2], i975[3], 0, i974, 'valueLabel')
  i974.colorDefault = new pc.Color(i975[4], i975[5], i975[6], i975[7])
  i974.colorSelected = new pc.Color(i975[8], i975[9], i975[10], i975[11])
  return i974
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'nameLabel')
  request.r(i977[2], i977[3], 0, i976, 'valueLabel')
  i976.colorDefault = new pc.Color(i977[4], i977[5], i977[6], i977[7])
  i976.colorSelected = new pc.Color(i977[8], i977[9], i977[10], i977[11])
  return i976
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'nextButtonText')
  request.r(i979[2], i979[3], 0, i978, 'previousButtonText')
  request.r(i979[4], i979[5], 0, i978, 'nameLabel')
  request.r(i979[6], i979[7], 0, i978, 'valueLabel')
  i978.colorDefault = new pc.Color(i979[8], i979[9], i979[10], i979[11])
  i978.colorSelected = new pc.Color(i979[12], i979[13], i979[14], i979[15])
  return i978
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'nameLabel')
  i980.colorDefault = new pc.Color(i981[2], i981[3], i981[4], i981[5])
  i980.colorSelected = new pc.Color(i981[6], i981[7], i981[8], i981[9])
  return i980
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'nameLabel')
  request.r(i983[2], i983[3], 0, i982, 'valueToggle')
  i982.colorDefault = new pc.Color(i983[4], i983[5], i983[6], i983[7])
  i982.colorSelected = new pc.Color(i983[8], i983[9], i983[10], i983[11])
  return i982
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i985 = data
  i984.toggleTransition = i985[0]
  request.r(i985[1], i985[2], 0, i984, 'graphic')
  i984.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i985[3], i984.onValueChanged)
  request.r(i985[4], i985[5], 0, i984, 'content')
  request.r(i985[6], i985[7], 0, i984, 'arrowOpened')
  request.r(i985[8], i985[9], 0, i984, 'arrowClosed')
  request.r(i985[10], i985[11], 0, i984, 'm_Group')
  i984.m_IsOn = !!i985[12]
  i984.m_Navigation = request.d('UnityEngine.UI.Navigation', i985[13], i984.m_Navigation)
  i984.m_Transition = i985[14]
  i984.m_Colors = request.d('UnityEngine.UI.ColorBlock', i985[15], i984.m_Colors)
  i984.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i985[16], i984.m_SpriteState)
  i984.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i985[17], i984.m_AnimationTriggers)
  i984.m_Interactable = !!i985[18]
  request.r(i985[19], i985[20], 0, i984, 'm_TargetGraphic')
  return i984
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'nameLabel')
  request.r(i987[2], i987[3], 0, i986, 'valueToggle')
  request.r(i987[4], i987[5], 0, i986, 'colorImage')
  request.r(i987[6], i987[7], 0, i986, 'fieldR')
  request.r(i987[8], i987[9], 0, i986, 'fieldG')
  request.r(i987[10], i987[11], 0, i986, 'fieldB')
  request.r(i987[12], i987[13], 0, i986, 'fieldA')
  i986.colorDefault = new pc.Color(i987[14], i987[15], i987[16], i987[17])
  i986.colorSelected = new pc.Color(i987[18], i987[19], i987[20], i987[21])
  return i986
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'nameLabel')
  request.r(i989[2], i989[3], 0, i988, 'valueLabel')
  i988.colorDefault = new pc.Color(i989[4], i989[5], i989[6], i989[7])
  i988.colorSelected = new pc.Color(i989[8], i989[9], i989[10], i989[11])
  return i988
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'nameLabel')
  request.r(i991[2], i991[3], 0, i990, 'valueToggle')
  request.r(i991[4], i991[5], 0, i990, 'fieldX')
  request.r(i991[6], i991[7], 0, i990, 'fieldY')
  i990.colorDefault = new pc.Color(i991[8], i991[9], i991[10], i991[11])
  i990.colorSelected = new pc.Color(i991[12], i991[13], i991[14], i991[15])
  return i990
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'nameLabel')
  request.r(i993[2], i993[3], 0, i992, 'valueToggle')
  request.r(i993[4], i993[5], 0, i992, 'fieldX')
  request.r(i993[6], i993[7], 0, i992, 'fieldY')
  request.r(i993[8], i993[9], 0, i992, 'fieldZ')
  i992.colorDefault = new pc.Color(i993[10], i993[11], i993[12], i993[13])
  i992.colorSelected = new pc.Color(i993[14], i993[15], i993[16], i993[17])
  return i992
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'nameLabel')
  request.r(i995[2], i995[3], 0, i994, 'valueToggle')
  request.r(i995[4], i995[5], 0, i994, 'fieldX')
  request.r(i995[6], i995[7], 0, i994, 'fieldY')
  request.r(i995[8], i995[9], 0, i994, 'fieldZ')
  request.r(i995[10], i995[11], 0, i994, 'fieldW')
  i994.colorDefault = new pc.Color(i995[12], i995[13], i995[14], i995[15])
  i994.colorSelected = new pc.Color(i995[16], i995[17], i995[18], i995[19])
  return i994
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i997 = data
  i996.colorDefault = new pc.Color(i997[0], i997[1], i997[2], i997[3])
  i996.colorSelected = new pc.Color(i997[4], i997[5], i997[6], i997[7])
  return i996
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i999 = data
  i998.m_Spacing = i999[0]
  i998.m_ChildForceExpandWidth = !!i999[1]
  i998.m_ChildForceExpandHeight = !!i999[2]
  i998.m_ChildControlWidth = !!i999[3]
  i998.m_ChildControlHeight = !!i999[4]
  i998.m_ChildScaleWidth = !!i999[5]
  i998.m_ChildScaleHeight = !!i999[6]
  i998.m_ReverseArrangement = !!i999[7]
  i998.m_Padding = UnityEngine.RectOffset.FromPaddings(i999[8], i999[9], i999[10], i999[11])
  i998.m_ChildAlignment = i999[12]
  return i998
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i1001 = data
  i1000.colorDefault = new pc.Color(i1001[0], i1001[1], i1001[2], i1001[3])
  i1000.colorSelected = new pc.Color(i1001[4], i1001[5], i1001[6], i1001[7])
  return i1000
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'nameLabel')
  request.r(i1003[2], i1003[3], 0, i1002, 'header')
  i1002.colorDefault = new pc.Color(i1003[4], i1003[5], i1003[6], i1003[7])
  i1002.colorSelected = new pc.Color(i1003[8], i1003[9], i1003[10], i1003[11])
  return i1002
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'nameLabel')
  request.r(i1005[2], i1005[3], 0, i1004, 'valueToggle')
  var i1007 = i1005[4]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i1004.toggles = i1006
  i1004.colorDefault = new pc.Color(i1005[5], i1005[6], i1005[7], i1005[8])
  i1004.colorSelected = new pc.Color(i1005[9], i1005[10], i1005[11], i1005[12])
  return i1004
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'nameLabel')
  request.r(i1011[2], i1011[3], 0, i1010, 'valueToggle')
  request.r(i1011[4], i1011[5], 0, i1010, 'checkmarkImage')
  i1010.colorDefault = new pc.Color(i1011[6], i1011[7], i1011[8], i1011[9])
  i1010.colorSelected = new pc.Color(i1011[10], i1011[11], i1011[12], i1011[13])
  return i1010
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'nameLabel')
  request.r(i1013[2], i1013[3], 0, i1012, 'valueToggle')
  request.r(i1013[4], i1013[5], 0, i1012, 'checkmarkImage')
  i1012.colorDefault = new pc.Color(i1013[6], i1013[7], i1013[8], i1013[9])
  i1012.colorSelected = new pc.Color(i1013[10], i1013[11], i1013[12], i1013[13])
  return i1012
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'nextButtonText')
  request.r(i1015[2], i1015[3], 0, i1014, 'previousButtonText')
  request.r(i1015[4], i1015[5], 0, i1014, 'nameLabel')
  request.r(i1015[6], i1015[7], 0, i1014, 'valueLabel')
  i1014.colorDefault = new pc.Color(i1015[8], i1015[9], i1015[10], i1015[11])
  i1014.colorSelected = new pc.Color(i1015[12], i1015[13], i1015[14], i1015[15])
  return i1014
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'nameLabel')
  request.r(i1017[2], i1017[3], 0, i1016, 'valueToggle')
  i1016.colorDefault = new pc.Color(i1017[4], i1017[5], i1017[6], i1017[7])
  i1016.colorSelected = new pc.Color(i1017[8], i1017[9], i1017[10], i1017[11])
  return i1016
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'nameLabel')
  i1018.colorDefault = new pc.Color(i1019[2], i1019[3], i1019[4], i1019[5])
  i1018.colorSelected = new pc.Color(i1019[6], i1019[7], i1019[8], i1019[9])
  return i1018
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'nameLabel')
  request.r(i1021[2], i1021[3], 0, i1020, 'valueLabel')
  request.r(i1021[4], i1021[5], 0, i1020, 'progressBarRect')
  i1020.colorDefault = new pc.Color(i1021[6], i1021[7], i1021[8], i1021[9])
  i1020.colorSelected = new pc.Color(i1021[10], i1021[11], i1021[12], i1021[13])
  return i1020
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'nameLabel')
  request.r(i1023[2], i1023[3], 0, i1022, 'valueLabel')
  i1022.colorDefault = new pc.Color(i1023[4], i1023[5], i1023[6], i1023[7])
  i1022.colorSelected = new pc.Color(i1023[8], i1023[9], i1023[10], i1023[11])
  return i1022
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'nameLabel')
  request.r(i1025[2], i1025[3], 0, i1024, 'valueLabel')
  i1024.colorDefault = new pc.Color(i1025[4], i1025[5], i1025[6], i1025[7])
  i1024.colorSelected = new pc.Color(i1025[8], i1025[9], i1025[10], i1025[11])
  return i1024
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'nextButtonText')
  request.r(i1027[2], i1027[3], 0, i1026, 'previousButtonText')
  request.r(i1027[4], i1027[5], 0, i1026, 'nameLabel')
  request.r(i1027[6], i1027[7], 0, i1026, 'valueLabel')
  i1026.colorDefault = new pc.Color(i1027[8], i1027[9], i1027[10], i1027[11])
  i1026.colorSelected = new pc.Color(i1027[12], i1027[13], i1027[14], i1027[15])
  return i1026
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'nextButtonText')
  request.r(i1029[2], i1029[3], 0, i1028, 'previousButtonText')
  request.r(i1029[4], i1029[5], 0, i1028, 'nameLabel')
  request.r(i1029[6], i1029[7], 0, i1028, 'valueLabel')
  i1028.colorDefault = new pc.Color(i1029[8], i1029[9], i1029[10], i1029[11])
  i1028.colorSelected = new pc.Color(i1029[12], i1029[13], i1029[14], i1029[15])
  return i1028
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'panel')
  request.r(i1031[2], i1031[3], 0, i1030, 'valuePrefab')
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1033 = data
  i1032.AdditionalLightsPerObjectLimit = i1033[0]
  i1032.AdditionalLightsRenderingMode = i1033[1]
  i1032.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1033[2], i1032.LightRenderingMode)
  i1032.ColorGradingLutSize = i1033[3]
  i1032.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1033[4], i1032.ColorGradingMode)
  i1032.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1033[5], i1032.MainLightRenderingMode)
  i1032.MainLightRenderingModeValue = i1033[6]
  i1032.SupportsMainLightShadows = !!i1033[7]
  i1032.MixedLightingSupported = !!i1033[8]
  i1032.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1033[9], i1032.MsaaQuality)
  i1032.MSAA = i1033[10]
  i1032.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1033[11], i1032.OpaqueDownsampling)
  i1032.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1033[12], i1032.MainLightShadowmapResolution)
  i1032.MainLightShadowmapResolutionValue = i1033[13]
  i1032.SupportsSoftShadows = !!i1033[14]
  i1032.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1033[15], i1032.SoftShadowQuality)
  i1032.SoftShadowQualityValue = i1033[16]
  i1032.ShadowDistance = i1033[17]
  i1032.ShadowCascadeCount = i1033[18]
  i1032.Cascade2Split = i1033[19]
  i1032.Cascade3Split = new pc.Vec2( i1033[20], i1033[21] )
  i1032.Cascade4Split = new pc.Vec3( i1033[22], i1033[23], i1033[24] )
  i1032.CascadeBorder = i1033[25]
  i1032.ShadowDepthBias = i1033[26]
  i1032.ShadowNormalBias = i1033[27]
  i1032.RenderScale = i1033[28]
  i1032.RequireDepthTexture = !!i1033[29]
  i1032.RequireOpaqueTexture = !!i1033[30]
  i1032.SupportsHDR = !!i1033[31]
  i1032.SupportsTerrainHoles = !!i1033[32]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1035 = data
  i1034.Disabled = i1035[0]
  i1034.PerVertex = i1035[1]
  i1034.PerPixel = i1035[2]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1037 = data
  i1036.LowDynamicRange = i1037[0]
  i1036.HighDynamicRange = i1037[1]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1039 = data
  i1038.Disabled = i1039[0]
  i1038._2x = i1039[1]
  i1038._4x = i1039[2]
  i1038._8x = i1039[3]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1041 = data
  i1040.None = i1041[0]
  i1040._2xBilinear = i1041[1]
  i1040._4xBox = i1041[2]
  i1040._4xBilinear = i1041[3]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1043 = data
  i1042._256 = i1043[0]
  i1042._512 = i1043[1]
  i1042._1024 = i1043[2]
  i1042._2048 = i1043[3]
  i1042._4096 = i1043[4]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1045 = data
  i1044.UsePipelineSettings = i1045[0]
  i1044.Low = i1045[1]
  i1044.Medium = i1045[2]
  i1044.High = i1045[3]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1047 = data
  var i1049 = i1047[0]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1049[i + 0]));
  }
  i1046.ShaderCompilationErrors = i1048
  i1046.name = i1047[1]
  i1046.guid = i1047[2]
  var i1051 = i1047[3]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( i1051[i + 0] );
  }
  i1046.shaderDefinedKeywords = i1050
  var i1053 = i1047[4]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1053[i + 0]) );
  }
  i1046.passes = i1052
  var i1055 = i1047[5]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1055[i + 0]) );
  }
  i1046.usePasses = i1054
  var i1057 = i1047[6]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1057[i + 0]) );
  }
  i1046.defaultParameterValues = i1056
  request.r(i1047[7], i1047[8], 0, i1046, 'unityFallbackShader')
  i1046.readDepth = !!i1047[9]
  i1046.isCreatedByShaderGraph = !!i1047[10]
  i1046.compiled = !!i1047[11]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1061 = data
  i1060.shaderName = i1061[0]
  i1060.errorMessage = i1061[1]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1066 = root || new pc.UnityShaderPass()
  var i1067 = data
  i1066.id = i1067[0]
  i1066.subShaderIndex = i1067[1]
  i1066.name = i1067[2]
  i1066.passType = i1067[3]
  i1066.grabPassTextureName = i1067[4]
  i1066.usePass = !!i1067[5]
  i1066.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[6], i1066.zTest)
  i1066.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[7], i1066.zWrite)
  i1066.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[8], i1066.culling)
  i1066.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1067[9], i1066.blending)
  i1066.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1067[10], i1066.alphaBlending)
  i1066.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[11], i1066.colorWriteMask)
  i1066.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[12], i1066.offsetUnits)
  i1066.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[13], i1066.offsetFactor)
  i1066.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[14], i1066.stencilRef)
  i1066.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[15], i1066.stencilReadMask)
  i1066.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[16], i1066.stencilWriteMask)
  i1066.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1067[17], i1066.stencilOp)
  i1066.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1067[18], i1066.stencilOpFront)
  i1066.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1067[19], i1066.stencilOpBack)
  var i1069 = i1067[20]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1069[i + 0]) );
  }
  i1066.tags = i1068
  var i1071 = i1067[21]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( i1071[i + 0] );
  }
  i1066.passDefinedKeywords = i1070
  var i1073 = i1067[22]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1073[i + 0]) );
  }
  i1066.passDefinedKeywordGroups = i1072
  var i1075 = i1067[23]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1075[i + 0]) );
  }
  i1066.variants = i1074
  var i1077 = i1067[24]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1077[i + 0]) );
  }
  i1066.excludedVariants = i1076
  i1066.hasDepthReader = !!i1067[25]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1079 = data
  i1078.val = i1079[0]
  i1078.name = i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1081 = data
  i1080.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[0], i1080.src)
  i1080.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[1], i1080.dst)
  i1080.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[2], i1080.op)
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1083 = data
  i1082.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[0], i1082.pass)
  i1082.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[1], i1082.fail)
  i1082.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[2], i1082.zFail)
  i1082.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[3], i1082.comp)
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1087 = data
  i1086.name = i1087[0]
  i1086.value = i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1091 = data
  var i1093 = i1091[0]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( i1093[i + 0] );
  }
  i1090.keywords = i1092
  i1090.hasDiscard = !!i1091[1]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1097 = data
  i1096.passId = i1097[0]
  i1096.subShaderIndex = i1097[1]
  var i1099 = i1097[2]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( i1099[i + 0] );
  }
  i1096.keywords = i1098
  i1096.vertexProgram = i1097[3]
  i1096.fragmentProgram = i1097[4]
  i1096.exportedForWebGl2 = !!i1097[5]
  i1096.readDepth = !!i1097[6]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'shader')
  i1102.pass = i1103[2]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1107 = data
  i1106.name = i1107[0]
  i1106.type = i1107[1]
  i1106.value = new pc.Vec4( i1107[2], i1107[3], i1107[4], i1107[5] )
  i1106.textureValue = i1107[6]
  i1106.shaderPropertyFlag = i1107[7]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1109 = data
  i1108.name = i1109[0]
  request.r(i1109[1], i1109[2], 0, i1108, 'texture')
  i1108.aabb = i1109[3]
  i1108.vertices = i1109[4]
  i1108.triangles = i1109[5]
  i1108.textureRect = UnityEngine.Rect.MinMaxRect(i1109[6], i1109[7], i1109[8], i1109[9])
  i1108.packedRect = UnityEngine.Rect.MinMaxRect(i1109[10], i1109[11], i1109[12], i1109[13])
  i1108.border = new pc.Vec4( i1109[14], i1109[15], i1109[16], i1109[17] )
  i1108.transparency = i1109[18]
  i1108.bounds = i1109[19]
  i1108.pixelsPerUnit = i1109[20]
  i1108.textureWidth = i1109[21]
  i1108.textureHeight = i1109[22]
  i1108.nativeSize = new pc.Vec2( i1109[23], i1109[24] )
  i1108.pivot = new pc.Vec2( i1109[25], i1109[26] )
  i1108.textureRectOffset = new pc.Vec2( i1109[27], i1109[28] )
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1111 = data
  i1110.name = i1111[0]
  i1110.wrapMode = i1111[1]
  i1110.isLooping = !!i1111[2]
  i1110.length = i1111[3]
  var i1113 = i1111[4]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1113[i + 0]) );
  }
  i1110.curves = i1112
  var i1115 = i1111[5]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1115[i + 0]) );
  }
  i1110.events = i1114
  i1110.halfPrecision = !!i1111[6]
  i1110._frameRate = i1111[7]
  i1110.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1111[8], i1110.localBounds)
  i1110.hasMuscleCurves = !!i1111[9]
  var i1117 = i1111[10]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( i1117[i + 0] );
  }
  i1110.clipMuscleConstant = i1116
  i1110.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1111[11], i1110.clipBindingConstant)
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1121 = data
  i1120.path = i1121[0]
  i1120.hash = i1121[1]
  i1120.componentType = i1121[2]
  i1120.property = i1121[3]
  i1120.keys = i1121[4]
  var i1123 = i1121[5]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1123[i + 0]) );
  }
  i1120.objectReferenceKeys = i1122
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1127 = data
  i1126.time = i1127[0]
  request.r(i1127[1], i1127[2], 0, i1126, 'value')
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1131 = data
  i1130.functionName = i1131[0]
  i1130.floatParameter = i1131[1]
  i1130.intParameter = i1131[2]
  i1130.stringParameter = i1131[3]
  request.r(i1131[4], i1131[5], 0, i1130, 'objectReferenceParameter')
  i1130.time = i1131[6]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1133 = data
  i1132.center = new pc.Vec3( i1133[0], i1133[1], i1133[2] )
  i1132.extends = new pc.Vec3( i1133[3], i1133[4], i1133[5] )
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1137 = data
  var i1139 = i1137[0]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( i1139[i + 0] );
  }
  i1136.genericBindings = i1138
  var i1141 = i1137[1]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( i1141[i + 0] );
  }
  i1136.pptrCurveMapping = i1140
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.ascent = i1143[1]
  i1142.originalLineHeight = i1143[2]
  i1142.fontSize = i1143[3]
  var i1145 = i1143[4]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1145[i + 0]) );
  }
  i1142.characterInfo = i1144
  request.r(i1143[5], i1143[6], 0, i1142, 'texture')
  i1142.originalFontSize = i1143[7]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1149 = data
  i1148.index = i1149[0]
  i1148.advance = i1149[1]
  i1148.bearing = i1149[2]
  i1148.glyphWidth = i1149[3]
  i1148.glyphHeight = i1149[4]
  i1148.minX = i1149[5]
  i1148.maxX = i1149[6]
  i1148.minY = i1149[7]
  i1148.maxY = i1149[8]
  i1148.uvBottomLeftX = i1149[9]
  i1148.uvBottomLeftY = i1149[10]
  i1148.uvBottomRightX = i1149[11]
  i1148.uvBottomRightY = i1149[12]
  i1148.uvTopLeftX = i1149[13]
  i1148.uvTopLeftY = i1149[14]
  i1148.uvTopRightX = i1149[15]
  i1148.uvTopRightY = i1149[16]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1151 = data
  i1150.name = i1151[0]
  var i1153 = i1151[1]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1153[i + 0]) );
  }
  i1150.layers = i1152
  var i1155 = i1151[2]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1155[i + 0]) );
  }
  i1150.parameters = i1154
  i1150.animationClips = i1151[3]
  i1150.avatarUnsupported = i1151[4]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1159 = data
  i1158.name = i1159[0]
  i1158.defaultWeight = i1159[1]
  i1158.blendingMode = i1159[2]
  i1158.avatarMask = i1159[3]
  i1158.syncedLayerIndex = i1159[4]
  i1158.syncedLayerAffectsTiming = !!i1159[5]
  i1158.syncedLayers = i1159[6]
  i1158.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1159[7], i1158.stateMachine)
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1161 = data
  i1160.id = i1161[0]
  i1160.name = i1161[1]
  i1160.path = i1161[2]
  var i1163 = i1161[3]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1163[i + 0]) );
  }
  i1160.states = i1162
  var i1165 = i1161[4]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1165[i + 0]) );
  }
  i1160.machines = i1164
  var i1167 = i1161[5]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1167[i + 0]) );
  }
  i1160.entryStateTransitions = i1166
  var i1169 = i1161[6]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1169[i + 0]) );
  }
  i1160.exitStateTransitions = i1168
  var i1171 = i1161[7]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1171[i + 0]) );
  }
  i1160.anyStateTransitions = i1170
  i1160.defaultStateId = i1161[8]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1175 = data
  i1174.id = i1175[0]
  i1174.name = i1175[1]
  i1174.cycleOffset = i1175[2]
  i1174.cycleOffsetParameter = i1175[3]
  i1174.cycleOffsetParameterActive = !!i1175[4]
  i1174.mirror = !!i1175[5]
  i1174.mirrorParameter = i1175[6]
  i1174.mirrorParameterActive = !!i1175[7]
  i1174.motionId = i1175[8]
  i1174.nameHash = i1175[9]
  i1174.fullPathHash = i1175[10]
  i1174.speed = i1175[11]
  i1174.speedParameter = i1175[12]
  i1174.speedParameterActive = !!i1175[13]
  i1174.tag = i1175[14]
  i1174.tagHash = i1175[15]
  i1174.writeDefaultValues = !!i1175[16]
  var i1177 = i1175[17]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 2) {
  request.r(i1177[i + 0], i1177[i + 1], 2, i1176, '')
  }
  i1174.behaviours = i1176
  var i1179 = i1175[18]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1179[i + 0]) );
  }
  i1174.transitions = i1178
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1185 = data
  i1184.fullPath = i1185[0]
  i1184.canTransitionToSelf = !!i1185[1]
  i1184.duration = i1185[2]
  i1184.exitTime = i1185[3]
  i1184.hasExitTime = !!i1185[4]
  i1184.hasFixedDuration = !!i1185[5]
  i1184.interruptionSource = i1185[6]
  i1184.offset = i1185[7]
  i1184.orderedInterruption = !!i1185[8]
  i1184.destinationStateId = i1185[9]
  i1184.isExit = !!i1185[10]
  i1184.mute = !!i1185[11]
  i1184.solo = !!i1185[12]
  var i1187 = i1185[13]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1187[i + 0]) );
  }
  i1184.conditions = i1186
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1193 = data
  i1192.destinationStateId = i1193[0]
  i1192.isExit = !!i1193[1]
  i1192.mute = !!i1193[2]
  i1192.solo = !!i1193[3]
  var i1195 = i1193[4]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1195[i + 0]) );
  }
  i1192.conditions = i1194
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1199 = data
  i1198.defaultBool = !!i1199[0]
  i1198.defaultFloat = i1199[1]
  i1198.defaultInt = i1199[2]
  i1198.name = i1199[3]
  i1198.nameHash = i1199[4]
  i1198.type = i1199[5]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1201 = data
  i1200.name = i1201[0]
  i1200.bytes64 = i1201[1]
  i1200.data = i1201[2]
  return i1200
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1202 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1203 = data
  i1202.useSafeMode = !!i1203[0]
  i1202.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1203[1], i1202.safeModeOptions)
  i1202.timeScale = i1203[2]
  i1202.unscaledTimeScale = i1203[3]
  i1202.useSmoothDeltaTime = !!i1203[4]
  i1202.maxSmoothUnscaledTime = i1203[5]
  i1202.rewindCallbackMode = i1203[6]
  i1202.showUnityEditorReport = !!i1203[7]
  i1202.logBehaviour = i1203[8]
  i1202.drawGizmos = !!i1203[9]
  i1202.defaultRecyclable = !!i1203[10]
  i1202.defaultAutoPlay = i1203[11]
  i1202.defaultUpdateType = i1203[12]
  i1202.defaultTimeScaleIndependent = !!i1203[13]
  i1202.defaultEaseType = i1203[14]
  i1202.defaultEaseOvershootOrAmplitude = i1203[15]
  i1202.defaultEasePeriod = i1203[16]
  i1202.defaultAutoKill = !!i1203[17]
  i1202.defaultLoopType = i1203[18]
  i1202.debugMode = !!i1203[19]
  i1202.debugStoreTargetId = !!i1203[20]
  i1202.showPreviewPanel = !!i1203[21]
  i1202.storeSettingsLocation = i1203[22]
  i1202.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1203[23], i1202.modules)
  i1202.createASMDEF = !!i1203[24]
  i1202.showPlayingTweens = !!i1203[25]
  i1202.showPausedTweens = !!i1203[26]
  return i1202
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1204 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1205 = data
  i1204.logBehaviour = i1205[0]
  i1204.nestedTweenFailureBehaviour = i1205[1]
  return i1204
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1206 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1207 = data
  i1206.showPanel = !!i1207[0]
  i1206.audioEnabled = !!i1207[1]
  i1206.physicsEnabled = !!i1207[2]
  i1206.physics2DEnabled = !!i1207[3]
  i1206.spriteEnabled = !!i1207[4]
  i1206.uiEnabled = !!i1207[5]
  i1206.textMeshProEnabled = !!i1207[6]
  i1206.tk2DEnabled = !!i1207[7]
  i1206.deAudioEnabled = !!i1207[8]
  i1206.deUnityExtendedEnabled = !!i1207[9]
  i1206.epoOutlineEnabled = !!i1207[10]
  return i1206
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.TMP_Settings' )
  var i1209 = data
  i1208.m_enableWordWrapping = !!i1209[0]
  i1208.m_enableKerning = !!i1209[1]
  i1208.m_enableExtraPadding = !!i1209[2]
  i1208.m_enableTintAllSprites = !!i1209[3]
  i1208.m_enableParseEscapeCharacters = !!i1209[4]
  i1208.m_EnableRaycastTarget = !!i1209[5]
  i1208.m_GetFontFeaturesAtRuntime = !!i1209[6]
  i1208.m_missingGlyphCharacter = i1209[7]
  i1208.m_warningsDisabled = !!i1209[8]
  request.r(i1209[9], i1209[10], 0, i1208, 'm_defaultFontAsset')
  i1208.m_defaultFontAssetPath = i1209[11]
  i1208.m_defaultFontSize = i1209[12]
  i1208.m_defaultAutoSizeMinRatio = i1209[13]
  i1208.m_defaultAutoSizeMaxRatio = i1209[14]
  i1208.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1209[15], i1209[16] )
  i1208.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1209[17], i1209[18] )
  i1208.m_autoSizeTextContainer = !!i1209[19]
  i1208.m_IsTextObjectScaleStatic = !!i1209[20]
  var i1211 = i1209[21]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 1, i1210, '')
  }
  i1208.m_fallbackFontAssets = i1210
  i1208.m_matchMaterialPreset = !!i1209[22]
  request.r(i1209[23], i1209[24], 0, i1208, 'm_defaultSpriteAsset')
  i1208.m_defaultSpriteAssetPath = i1209[25]
  i1208.m_enableEmojiSupport = !!i1209[26]
  i1208.m_MissingCharacterSpriteUnicode = i1209[27]
  i1208.m_defaultColorGradientPresetsPath = i1209[28]
  request.r(i1209[29], i1209[30], 0, i1208, 'm_defaultStyleSheet')
  i1208.m_StyleSheetsResourcePath = i1209[31]
  request.r(i1209[32], i1209[33], 0, i1208, 'm_leadingCharacters')
  request.r(i1209[34], i1209[35], 0, i1208, 'm_followingCharacters')
  i1208.m_UseModernHangulLineBreakingRules = !!i1209[36]
  return i1208
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1215 = data
  i1214.hashCode = i1215[0]
  request.r(i1215[1], i1215[2], 0, i1214, 'material')
  i1214.materialHashCode = i1215[3]
  request.r(i1215[4], i1215[5], 0, i1214, 'atlas')
  i1214.normalStyle = i1215[6]
  i1214.normalSpacingOffset = i1215[7]
  i1214.boldStyle = i1215[8]
  i1214.boldSpacing = i1215[9]
  i1214.italicStyle = i1215[10]
  i1214.tabSize = i1215[11]
  i1214.m_Version = i1215[12]
  i1214.m_SourceFontFileGUID = i1215[13]
  request.r(i1215[14], i1215[15], 0, i1214, 'm_SourceFontFile_EditorRef')
  request.r(i1215[16], i1215[17], 0, i1214, 'm_SourceFontFile')
  i1214.m_AtlasPopulationMode = i1215[18]
  i1214.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1215[19], i1214.m_FaceInfo)
  var i1217 = i1215[20]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('UnityEngine.TextCore.Glyph', i1217[i + 0]));
  }
  i1214.m_GlyphTable = i1216
  var i1219 = i1215[21]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d('TMPro.TMP_Character', i1219[i + 0]));
  }
  i1214.m_CharacterTable = i1218
  var i1221 = i1215[22]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 2) {
  request.r(i1221[i + 0], i1221[i + 1], 2, i1220, '')
  }
  i1214.m_AtlasTextures = i1220
  i1214.m_AtlasTextureIndex = i1215[23]
  i1214.m_IsMultiAtlasTexturesEnabled = !!i1215[24]
  i1214.m_ClearDynamicDataOnBuild = !!i1215[25]
  var i1223 = i1215[26]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('UnityEngine.TextCore.GlyphRect', i1223[i + 0]));
  }
  i1214.m_UsedGlyphRects = i1222
  var i1225 = i1215[27]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('UnityEngine.TextCore.GlyphRect', i1225[i + 0]));
  }
  i1214.m_FreeGlyphRects = i1224
  i1214.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1215[28], i1214.m_fontInfo)
  i1214.m_AtlasWidth = i1215[29]
  i1214.m_AtlasHeight = i1215[30]
  i1214.m_AtlasPadding = i1215[31]
  i1214.m_AtlasRenderMode = i1215[32]
  var i1227 = i1215[33]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('TMPro.TMP_Glyph', i1227[i + 0]));
  }
  i1214.m_glyphInfoList = i1226
  i1214.m_KerningTable = request.d('TMPro.KerningTable', i1215[34], i1214.m_KerningTable)
  i1214.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1215[35], i1214.m_FontFeatureTable)
  var i1229 = i1215[36]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1229.length; i += 2) {
  request.r(i1229[i + 0], i1229[i + 1], 1, i1228, '')
  }
  i1214.fallbackFontAssets = i1228
  var i1231 = i1215[37]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1231.length; i += 2) {
  request.r(i1231[i + 0], i1231[i + 1], 1, i1230, '')
  }
  i1214.m_FallbackFontAssetTable = i1230
  i1214.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1215[38], i1214.m_CreationSettings)
  var i1233 = i1215[39]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('TMPro.TMP_FontWeightPair', i1233[i + 0]) );
  }
  i1214.m_FontWeightTable = i1232
  var i1235 = i1215[40]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('TMPro.TMP_FontWeightPair', i1235[i + 0]) );
  }
  i1214.fontWeights = i1234
  return i1214
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1237 = data
  i1236.m_FaceIndex = i1237[0]
  i1236.m_FamilyName = i1237[1]
  i1236.m_StyleName = i1237[2]
  i1236.m_PointSize = i1237[3]
  i1236.m_Scale = i1237[4]
  i1236.m_UnitsPerEM = i1237[5]
  i1236.m_LineHeight = i1237[6]
  i1236.m_AscentLine = i1237[7]
  i1236.m_CapLine = i1237[8]
  i1236.m_MeanLine = i1237[9]
  i1236.m_Baseline = i1237[10]
  i1236.m_DescentLine = i1237[11]
  i1236.m_SuperscriptOffset = i1237[12]
  i1236.m_SuperscriptSize = i1237[13]
  i1236.m_SubscriptOffset = i1237[14]
  i1236.m_SubscriptSize = i1237[15]
  i1236.m_UnderlineOffset = i1237[16]
  i1236.m_UnderlineThickness = i1237[17]
  i1236.m_StrikethroughOffset = i1237[18]
  i1236.m_StrikethroughThickness = i1237[19]
  i1236.m_TabWidth = i1237[20]
  return i1236
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1241 = data
  i1240.m_Index = i1241[0]
  i1240.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1241[1], i1240.m_Metrics)
  i1240.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1241[2], i1240.m_GlyphRect)
  i1240.m_Scale = i1241[3]
  i1240.m_AtlasIndex = i1241[4]
  i1240.m_ClassDefinitionType = i1241[5]
  return i1240
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1243 = data
  i1242.m_Width = i1243[0]
  i1242.m_Height = i1243[1]
  i1242.m_HorizontalBearingX = i1243[2]
  i1242.m_HorizontalBearingY = i1243[3]
  i1242.m_HorizontalAdvance = i1243[4]
  return i1242
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1245 = data
  i1244.m_X = i1245[0]
  i1244.m_Y = i1245[1]
  i1244.m_Width = i1245[2]
  i1244.m_Height = i1245[3]
  return i1244
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_Character' )
  var i1249 = data
  i1248.m_ElementType = i1249[0]
  i1248.m_Unicode = i1249[1]
  i1248.m_GlyphIndex = i1249[2]
  i1248.m_Scale = i1249[3]
  return i1248
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1255 = data
  i1254.Name = i1255[0]
  i1254.PointSize = i1255[1]
  i1254.Scale = i1255[2]
  i1254.CharacterCount = i1255[3]
  i1254.LineHeight = i1255[4]
  i1254.Baseline = i1255[5]
  i1254.Ascender = i1255[6]
  i1254.CapHeight = i1255[7]
  i1254.Descender = i1255[8]
  i1254.CenterLine = i1255[9]
  i1254.SuperscriptOffset = i1255[10]
  i1254.SubscriptOffset = i1255[11]
  i1254.SubSize = i1255[12]
  i1254.Underline = i1255[13]
  i1254.UnderlineThickness = i1255[14]
  i1254.strikethrough = i1255[15]
  i1254.strikethroughThickness = i1255[16]
  i1254.TabWidth = i1255[17]
  i1254.Padding = i1255[18]
  i1254.AtlasWidth = i1255[19]
  i1254.AtlasHeight = i1255[20]
  return i1254
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1259 = data
  i1258.id = i1259[0]
  i1258.x = i1259[1]
  i1258.y = i1259[2]
  i1258.width = i1259[3]
  i1258.height = i1259[4]
  i1258.xOffset = i1259[5]
  i1258.yOffset = i1259[6]
  i1258.xAdvance = i1259[7]
  i1258.scale = i1259[8]
  return i1258
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.KerningTable' )
  var i1261 = data
  var i1263 = i1261[0]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('TMPro.KerningPair', i1263[i + 0]));
  }
  i1260.kerningPairs = i1262
  return i1260
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.KerningPair' )
  var i1267 = data
  i1266.xOffset = i1267[0]
  i1266.m_FirstGlyph = i1267[1]
  i1266.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1267[2], i1266.m_FirstGlyphAdjustments)
  i1266.m_SecondGlyph = i1267[3]
  i1266.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1267[4], i1266.m_SecondGlyphAdjustments)
  i1266.m_IgnoreSpacingAdjustments = !!i1267[5]
  return i1266
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1269 = data
  var i1271 = i1269[0]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1271[i + 0]));
  }
  i1268.m_GlyphPairAdjustmentRecords = i1270
  return i1268
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1275 = data
  i1274.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1275[0], i1274.m_FirstAdjustmentRecord)
  i1274.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1275[1], i1274.m_SecondAdjustmentRecord)
  i1274.m_FeatureLookupFlags = i1275[2]
  return i1274
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1277 = data
  i1276.m_GlyphIndex = i1277[0]
  i1276.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1277[1], i1276.m_GlyphValueRecord)
  return i1276
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1279 = data
  i1278.m_XPlacement = i1279[0]
  i1278.m_YPlacement = i1279[1]
  i1278.m_XAdvance = i1279[2]
  i1278.m_YAdvance = i1279[3]
  return i1278
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1281 = data
  i1280.sourceFontFileName = i1281[0]
  i1280.sourceFontFileGUID = i1281[1]
  i1280.pointSizeSamplingMode = i1281[2]
  i1280.pointSize = i1281[3]
  i1280.padding = i1281[4]
  i1280.packingMode = i1281[5]
  i1280.atlasWidth = i1281[6]
  i1280.atlasHeight = i1281[7]
  i1280.characterSetSelectionMode = i1281[8]
  i1280.characterSequence = i1281[9]
  i1280.referencedFontAssetGUID = i1281[10]
  i1280.referencedTextAssetGUID = i1281[11]
  i1280.fontStyle = i1281[12]
  i1280.fontStyleModifier = i1281[13]
  i1280.renderMode = i1281[14]
  i1280.includeFontFeatures = !!i1281[15]
  return i1280
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1285 = data
  request.r(i1285[0], i1285[1], 0, i1284, 'regularTypeface')
  request.r(i1285[2], i1285[3], 0, i1284, 'italicTypeface')
  return i1284
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1287 = data
  i1286.hashCode = i1287[0]
  request.r(i1287[1], i1287[2], 0, i1286, 'material')
  i1286.materialHashCode = i1287[3]
  request.r(i1287[4], i1287[5], 0, i1286, 'spriteSheet')
  var i1289 = i1287[6]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('TMPro.TMP_Sprite', i1289[i + 0]));
  }
  i1286.spriteInfoList = i1288
  var i1291 = i1287[7]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1291.length; i += 2) {
  request.r(i1291[i + 0], i1291[i + 1], 1, i1290, '')
  }
  i1286.fallbackSpriteAssets = i1290
  i1286.m_Version = i1287[8]
  i1286.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1287[9], i1286.m_FaceInfo)
  var i1293 = i1287[10]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('TMPro.TMP_SpriteCharacter', i1293[i + 0]));
  }
  i1286.m_SpriteCharacterTable = i1292
  var i1295 = i1287[11]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d('TMPro.TMP_SpriteGlyph', i1295[i + 0]));
  }
  i1286.m_SpriteGlyphTable = i1294
  return i1286
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1299 = data
  i1298.name = i1299[0]
  i1298.hashCode = i1299[1]
  i1298.unicode = i1299[2]
  i1298.pivot = new pc.Vec2( i1299[3], i1299[4] )
  request.r(i1299[5], i1299[6], 0, i1298, 'sprite')
  i1298.id = i1299[7]
  i1298.x = i1299[8]
  i1298.y = i1299[9]
  i1298.width = i1299[10]
  i1298.height = i1299[11]
  i1298.xOffset = i1299[12]
  i1298.yOffset = i1299[13]
  i1298.xAdvance = i1299[14]
  i1298.scale = i1299[15]
  return i1298
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1305 = data
  i1304.m_Name = i1305[0]
  i1304.m_HashCode = i1305[1]
  i1304.m_ElementType = i1305[2]
  i1304.m_Unicode = i1305[3]
  i1304.m_GlyphIndex = i1305[4]
  i1304.m_Scale = i1305[5]
  return i1304
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'sprite')
  i1308.m_Index = i1309[2]
  i1308.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1309[3], i1308.m_Metrics)
  i1308.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1309[4], i1308.m_GlyphRect)
  i1308.m_Scale = i1309[5]
  i1308.m_AtlasIndex = i1309[6]
  i1308.m_ClassDefinitionType = i1309[7]
  return i1308
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1311 = data
  var i1313 = i1311[0]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('TMPro.TMP_Style', i1313[i + 0]));
  }
  i1310.m_StyleList = i1312
  return i1310
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.TMP_Style' )
  var i1317 = data
  i1316.m_Name = i1317[0]
  i1316.m_HashCode = i1317[1]
  i1316.m_OpeningDefinition = i1317[2]
  i1316.m_ClosingDefinition = i1317[3]
  i1316.m_OpeningTagArray = i1317[4]
  i1316.m_ClosingTagArray = i1317[5]
  i1316.m_OpeningTagUnicodeArray = i1317[6]
  i1316.m_ClosingTagUnicodeArray = i1317[7]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1319 = data
  var i1321 = i1319[0]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1321[i + 0]) );
  }
  i1318.files = i1320
  i1318.componentToPrefabIds = i1319[1]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1325 = data
  i1324.path = i1325[0]
  request.r(i1325[1], i1325[2], 0, i1324, 'unityObject')
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1327 = data
  var i1329 = i1327[0]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1329[i + 0]) );
  }
  i1326.scriptsExecutionOrder = i1328
  var i1331 = i1327[1]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1331[i + 0]) );
  }
  i1326.sortingLayers = i1330
  var i1333 = i1327[2]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1333[i + 0]) );
  }
  i1326.cullingLayers = i1332
  i1326.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1327[3], i1326.timeSettings)
  i1326.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1327[4], i1326.physicsSettings)
  i1326.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1327[5], i1326.physics2DSettings)
  i1326.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1327[6], i1326.qualitySettings)
  i1326.enableRealtimeShadows = !!i1327[7]
  i1326.enableAutoInstancing = !!i1327[8]
  i1326.enableDynamicBatching = !!i1327[9]
  i1326.lightmapEncodingQuality = i1327[10]
  i1326.desiredColorSpace = i1327[11]
  var i1335 = i1327[12]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( i1335[i + 0] );
  }
  i1326.allTags = i1334
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1339 = data
  i1338.name = i1339[0]
  i1338.value = i1339[1]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1343 = data
  i1342.id = i1343[0]
  i1342.name = i1343[1]
  i1342.value = i1343[2]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1347 = data
  i1346.id = i1347[0]
  i1346.name = i1347[1]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1349 = data
  i1348.fixedDeltaTime = i1349[0]
  i1348.maximumDeltaTime = i1349[1]
  i1348.timeScale = i1349[2]
  i1348.maximumParticleTimestep = i1349[3]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1351 = data
  i1350.gravity = new pc.Vec3( i1351[0], i1351[1], i1351[2] )
  i1350.defaultSolverIterations = i1351[3]
  i1350.bounceThreshold = i1351[4]
  i1350.autoSyncTransforms = !!i1351[5]
  i1350.autoSimulation = !!i1351[6]
  var i1353 = i1351[7]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1353[i + 0]) );
  }
  i1350.collisionMatrix = i1352
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1357 = data
  i1356.enabled = !!i1357[0]
  i1356.layerId = i1357[1]
  i1356.otherLayerId = i1357[2]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1359 = data
  request.r(i1359[0], i1359[1], 0, i1358, 'material')
  i1358.gravity = new pc.Vec2( i1359[2], i1359[3] )
  i1358.positionIterations = i1359[4]
  i1358.velocityIterations = i1359[5]
  i1358.velocityThreshold = i1359[6]
  i1358.maxLinearCorrection = i1359[7]
  i1358.maxAngularCorrection = i1359[8]
  i1358.maxTranslationSpeed = i1359[9]
  i1358.maxRotationSpeed = i1359[10]
  i1358.baumgarteScale = i1359[11]
  i1358.baumgarteTOIScale = i1359[12]
  i1358.timeToSleep = i1359[13]
  i1358.linearSleepTolerance = i1359[14]
  i1358.angularSleepTolerance = i1359[15]
  i1358.defaultContactOffset = i1359[16]
  i1358.autoSimulation = !!i1359[17]
  i1358.queriesHitTriggers = !!i1359[18]
  i1358.queriesStartInColliders = !!i1359[19]
  i1358.callbacksOnDisable = !!i1359[20]
  i1358.reuseCollisionCallbacks = !!i1359[21]
  i1358.autoSyncTransforms = !!i1359[22]
  var i1361 = i1359[23]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1361[i + 0]) );
  }
  i1358.collisionMatrix = i1360
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1365 = data
  i1364.enabled = !!i1365[0]
  i1364.layerId = i1365[1]
  i1364.otherLayerId = i1365[2]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1369[i + 0]) );
  }
  i1366.qualityLevels = i1368
  var i1371 = i1367[1]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( i1371[i + 0] );
  }
  i1366.names = i1370
  i1366.shadows = i1367[2]
  i1366.anisotropicFiltering = i1367[3]
  i1366.antiAliasing = i1367[4]
  i1366.lodBias = i1367[5]
  i1366.shadowCascades = i1367[6]
  i1366.shadowDistance = i1367[7]
  i1366.shadowmaskMode = i1367[8]
  i1366.shadowProjection = i1367[9]
  i1366.shadowResolution = i1367[10]
  i1366.softParticles = !!i1367[11]
  i1366.softVegetation = !!i1367[12]
  i1366.activeColorSpace = i1367[13]
  i1366.desiredColorSpace = i1367[14]
  i1366.masterTextureLimit = i1367[15]
  i1366.maxQueuedFrames = i1367[16]
  i1366.particleRaycastBudget = i1367[17]
  i1366.pixelLightCount = i1367[18]
  i1366.realtimeReflectionProbes = !!i1367[19]
  i1366.shadowCascade2Split = i1367[20]
  i1366.shadowCascade4Split = new pc.Vec3( i1367[21], i1367[22], i1367[23] )
  i1366.streamingMipmapsActive = !!i1367[24]
  i1366.vSyncCount = i1367[25]
  i1366.asyncUploadBufferSize = i1367[26]
  i1366.asyncUploadTimeSlice = i1367[27]
  i1366.billboardsFaceCameraPosition = !!i1367[28]
  i1366.shadowNearPlaneOffset = i1367[29]
  i1366.streamingMipmapsMemoryBudget = i1367[30]
  i1366.maximumLODLevel = i1367[31]
  i1366.streamingMipmapsAddAllCameras = !!i1367[32]
  i1366.streamingMipmapsMaxLevelReduction = i1367[33]
  i1366.streamingMipmapsRenderersPerFrame = i1367[34]
  i1366.resolutionScalingFixedDPIFactor = i1367[35]
  i1366.streamingMipmapsMaxFileIORequests = i1367[36]
  i1366.currentQualityLevel = i1367[37]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1377 = data
  i1376.mode = i1377[0]
  i1376.parameter = i1377[1]
  i1376.threshold = i1377[2]
  return i1376
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1378 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1379 = data
  i1378.xPlacement = i1379[0]
  i1378.yPlacement = i1379[1]
  i1378.xAdvance = i1379[2]
  i1378.yAdvance = i1379[3]
  return i1378
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D":{"enabled":0,"useColliderMask":1,"colliderMask":2},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[94],"95":[28],"96":[97],"98":[97],"99":[97],"100":[97],"101":[97],"102":[97],"103":[97],"104":[6],"105":[6],"106":[6],"107":[6],"108":[6],"109":[6],"110":[6],"111":[6],"112":[6],"113":[6],"114":[6],"115":[6],"116":[6],"117":[28],"118":[119],"120":[121],"122":[121],"32":[13],"8":[6],"123":[14,21,13],"58":[13],"124":[28],"31":[28],"125":[126],"127":[128],"129":[13],"130":[13],"34":[32],"16":[14,13],"131":[13],"33":[32],"41":[13],"132":[13],"65":[13],"133":[13],"45":[13],"134":[13],"40":[13],"47":[13],"135":[13],"136":[14,13],"137":[13],"46":[13],"44":[13],"138":[13],"24":[14,13],"51":[13],"139":[37],"140":[37],"38":[37],"141":[37],"142":[28],"143":[28],"144":[128],"145":[13],"146":[119,13],"147":[13,14],"148":[13],"149":[14,13],"150":[119],"151":[14,13],"152":[13],"153":[128]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","PlayerController","GameManager","UnityEngine.GameObject","UnityEngine.BoxCollider2D","UnityEngine.Shader","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.EdgeCollider2D","PlatformScript","UnityEngine.PlatformEffector2D","Shroom","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Winner","UnityEngine.UI.Text","UnityEngine.Texture2D","PauseManager","LevelGenerator","UnityEngine.Camera","UnityEngine.AudioListener","CamraFollow","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 02:29:52";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Subject-Test-Build";

Deserializers.lunaAppID = "22415";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "5b8d55bf-c4be-4dac-af5b-f4f11207eb1b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

