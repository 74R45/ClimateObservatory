(function(){
'use strict';
var $linkingInfo = Object.freeze({
  "esVersion": 6,
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.6.0",
  "fileLevelThis": this
});
var $imul = Math.imul;
var $fround = Math.fround;
var $clz32 = Math.clz32;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)))
  };
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = {};
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, {
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      });
      i = ((i + 1) | 0)
    };
    return descriptors
  })
})());
var $L0;
function $propertyName(arg0) {
  for (var prop in arg0) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException(((arg0 + " is not an instance of ") + arg1)))
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1)
  };
  $throwClassCastException(arg0, arg1)
}
function $throwArrayIndexOutOfBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))))
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0)
}
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.constr(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.componentData;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex)
    }
  };
  return result
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0))
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0))
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else {
        return $d_jl_Float.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((arg0 === null)) {
        return arg0.getClass__jl_Class()
      } else if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte"
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else {
        return "java.lang.Float"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((arg0 === null)) {
        return arg0.getClass__jl_Class()
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name
      } else {
        return null.getName__T()
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0)
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0)
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0)
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance, x0)
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0)
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_length__I(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__length__I(instance)
  } else {
    return instance.length__I()
  }
}
function $dp_split__T__I__AT(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__split__T__I__AT(instance, x0, x1)
  } else {
    return instance.split__T__I__AT(x0, x1)
  }
}
function $dp_substring__I__I__T(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__substring__I__I__T(instance, x0, x1)
  } else {
    return instance.substring__I__I__T(x0, x1)
  }
}
function $dp_toCharArray__AC(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__toCharArray__AC(instance)
  } else {
    return instance.toCharArray__AC()
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $dp_trim__T(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__trim__T(instance)
  } else {
    return instance.trim__T()
  }
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 / arg1) | 0)
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 % arg1) | 0)
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)))
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value)
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + arg2) + "'."))
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj)
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj)
      };
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32))
      };
      return biHash
    }
    case "boolean": {
      return (obj ? 1231 : 1237)
    }
    case "undefined": {
      return 0
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description))
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $bC(arg0) {
  return new $Char(arg0)
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"))
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"))
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"))
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"))
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"))
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"))
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"))
}
function $uF(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"))
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"))
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"))
}
function $ct_O__($thiz) {
  return $thiz
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0)).toString(16)))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null
    }
  } else {
    this.u = arg
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice())
});
function $ah_O() {
  /*<skip>*/
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false
    }
  } else {
    this.u = arg
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice())
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Uint16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice())
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Int8Array(arg)
  } else {
    this.u = arg
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice())
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Int16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice())
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Int32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice())
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0
    }
  } else {
    this.u = arg
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice())
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Float32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice())
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Float64Array(arg)
  } else {
    this.u = arg
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice())
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isJSClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass)
  };
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance) {
  var internalName = $propertyName(internalNameObj);
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (!(!isJSType));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  return this
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice())
  });
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  ArrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)))
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)))
  });
  return this
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that))
});
$TypeData.prototype.checkCast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name)
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth))
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = {
  O: 1
};
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1))
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  this.jl_Class__f_cachedSimpleName = null;
  this.jl_Class__f_data = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
});
$c_jl_Class.prototype.isAssignableFrom__jl_Class__Z = (function(that) {
  return $uZ(this.jl_Class__f_data.isAssignableFrom(that.jl_Class__f_data))
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.jl_Class__f_data.isInterface)
});
$c_jl_Class.prototype.isArray__Z = (function() {
  return $uZ(this.jl_Class__f_data.isArrayClass)
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.jl_Class__f_data.isPrimitive)
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.jl_Class__f_data.name)
});
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_highOffset = 0;
  this.jl_FloatingPointBits$__f_lowOffset = 0;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float32Array = new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
  this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
  this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0)
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]))
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
/** @constructor */
function $c_ju_Arrays$() {
  /*<skip>*/
}
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
  /*<skip>*/
}
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.binarySearch__AI__I__I = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.u.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0)
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.get(mid);
      if ((key < elem)) {
        endIndex = mid
      } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, elem)) {
        return mid
      } else {
        startIndex = ((1 + mid) | 0)
      }
    }
  }
});
$c_ju_Arrays$.prototype.equals__AO__AO__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = a.u.length;
  if ((b.u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var x = a.get(i);
    var y = b.get(i);
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
var $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
/** @constructor */
function $c_ju_regex_Matcher$() {
  /*<skip>*/
}
$c_ju_regex_Matcher$.prototype = new $h_O();
$c_ju_regex_Matcher$.prototype.constructor = $c_ju_regex_Matcher$;
/** @constructor */
function $h_ju_regex_Matcher$() {
  /*<skip>*/
}
$h_ju_regex_Matcher$.prototype = $c_ju_regex_Matcher$.prototype;
$c_ju_regex_Matcher$.prototype.java$util$regex$Matcher$$getGroupCount__sjs_js_RegExp$ExecResult__ju_regex_Pattern__I = (function(lastMatch, pattern) {
  return ((lastMatch !== null) ? (((-1) + $uI(lastMatch.length)) | 0) : pattern.groupCount__I())
});
var $d_ju_regex_Matcher$ = new $TypeData().initClass({
  ju_regex_Matcher$: 0
}, false, "java.util.regex.Matcher$", {
  ju_regex_Matcher$: 1,
  O: 1
});
$c_ju_regex_Matcher$.prototype.$classData = $d_ju_regex_Matcher$;
var $n_ju_regex_Matcher$;
function $m_ju_regex_Matcher$() {
  if ((!$n_ju_regex_Matcher$)) {
    $n_ju_regex_Matcher$ = new $c_ju_regex_Matcher$()
  };
  return $n_ju_regex_Matcher$
}
function $s_Lobservatory_JSMain__main__AT__V(args) {
  $m_Lobservatory_JSMain$().main__AT__V(args)
}
function $p_Lobservatory_JSMain$__makeRadioButton$1__Lobservatory_Layer__Lobservatory_Var__Lobservatory_Layer__Lscalatags_generic_Frag($thiz, layer, radioButtonValue$1, initialValue$1) {
  var this$1 = $m_Lscalatags_JsDom$tags$();
  var $$x7 = this$1.input__Lscalatags_JsDom$TypedTag();
  var $$x6 = $m_Lscalatags_JsDom$attrs$().type__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("radio", $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringAttr);
  var $$x5 = $m_Lscalatags_JsDom$attrs$().name__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("layer", $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringAttr);
  var $$x4 = $m_Lscalatags_JsDom$attrs$().onclick__Lscalatags_generic_Attr();
  var $$x3 = new $c_sjsr_AnonFunction1(((this$2, radioButtonValue$1$1, layer$1) => ((ev$2) => {
    var input = ev$2.target;
    if ($uZ(input.checked)) {
      var expr = new $c_sjsr_AnonFunction0(((this$3, layer$2) => (() => layer$2))(this$2, layer$1));
      $c_Lobservatory_Signal.prototype.update__F0__V.call(radioButtonValue$1$1, expr)
    }
  }))($thiz, radioButtonValue$1, layer));
  var this$4 = $m_Lobservatory_Implicits$();
  var ev = new $c_sjsr_AnonFunction1(((this$2$1) => ((f$2) => {
    var f = $as_F1(f$2);
    return $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(f)
  }))($thiz));
  var $$x2 = $$x4.$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair($$x3, new $c_Lscalatags_LowPriorityImplicits$$anon$2(this$4, ev));
  if (((layer === null) ? (initialValue$1 === null) : layer.equals__O__Z(initialValue$1))) {
    var this$5 = $m_Lobservatory_Implicits$();
    var xs = new $c_s_Some($m_Lscalatags_JsDom$attrs$().checked__Lscalatags_generic_AttrPair());
    var ev$1 = $m_s_Predef$().s_Predef$__f_singleton_$less$colon$less;
    var this$7 = xs.toList__sci_List();
    var $$x1 = new $c_Lscalatags_generic_Util$SeqNode(this$5, this$7, ev$1)
  } else {
    var this$9 = $m_Lobservatory_Implicits$();
    var xs$1 = $m_s_None$();
    var ev$3 = $m_s_Predef$().s_Predef$__f_singleton_$less$colon$less;
    var this$11 = xs$1.toList__sci_List();
    var $$x1 = new $c_Lscalatags_generic_Util$SeqNode(this$9, this$11, ev$3)
  };
  var array = [$$x6, $$x5, $$x2, $$x1];
  return $$x7.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array))
}
function $p_Lobservatory_JSMain$__render$1__O__F1__Lorg_scalajs_dom_raw_Node($thiz, a, aToFrag$1) {
  var this$1 = $m_Lscalatags_JsDom$tags$();
  var $$x1 = this$1.span__Lscalatags_JsDom$TypedTag();
  var array = [$as_Lscalatags_generic_Modifier(aToFrag$1.apply__O__O(a))];
  return $$x1.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)).render__Lorg_scalajs_dom_raw_Element()
}
/** @constructor */
function $c_Lobservatory_JSMain$() {
  /*<skip>*/
}
$c_Lobservatory_JSMain$.prototype = new $h_O();
$c_Lobservatory_JSMain$.prototype.constructor = $c_Lobservatory_JSMain$;
/** @constructor */
function $h_Lobservatory_JSMain$() {
  /*<skip>*/
}
$h_Lobservatory_JSMain$.prototype = $c_Lobservatory_JSMain$.prototype;
$c_Lobservatory_JSMain$.prototype.main__AT__V = (function(args) {
  var availableLayers = $m_Lobservatory_Interaction2$().availableLayers__sc_Seq();
  var x1 = this.makeRadioButtons__sc_Seq__T2(availableLayers);
  if ((x1 === null)) {
    throw new $c_s_MatchError(x1)
  };
  var radioButtonElement = $as_Lscalatags_generic_Frag(x1.T2__f__1);
  var selectedLayer = $as_Lobservatory_Signal(x1.T2__f__2);
  var x1$2 = this.makeSlider__Lobservatory_Signal__T2(selectedLayer);
  if ((x1$2 === null)) {
    throw new $c_s_MatchError(x1$2)
  };
  var sliderElement = $as_Lscalatags_generic_Frag(x1$2.T2__f__1);
  var selectedYear = $as_Lobservatory_Signal(x1$2.T2__f__2);
  var captionElement = this.makeCaptionElement__Lobservatory_Signal__Lscalatags_generic_Frag(selectedLayer);
  this.setupMap__Lobservatory_Signal__Lobservatory_Signal__V(selectedLayer, selectedYear);
  var this$1 = $m_Lscalatags_JsDom$tags$();
  var $$x1 = this$1.div__Lscalatags_JsDom$TypedTag();
  var array = [radioButtonElement, sliderElement, captionElement];
  var app = $$x1.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array));
  $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().body.appendChild(app.render__Lorg_scalajs_dom_raw_Element())
});
$c_Lobservatory_JSMain$.prototype.setupMap__Lobservatory_Signal__Lobservatory_Signal__V = (function(selectedLayer, selectedYear) {
  var this$1 = $m_Lscalatags_JsDom$tags$();
  var $$x1 = this$1.div__Lscalatags_JsDom$TypedTag();
  var array = [$m_Lscalatags_JsDom$styles$().height__Lscalatags_generic_StyleMisc$PixelAutoStyle().$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair("100%", $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle)];
  var mapElement = $$x1.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)).render__Lorg_scalajs_dom_raw_Element();
  var map = L.map(mapElement, {
    "zoomControl": false,
    "maxZoom": 3
  });
  map.setView(L.latLng(48.0, 14.0), 3);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    "crossOrigin": "anonymous"
  }).addTo(map);
  var urlSignal = $m_Lobservatory_Interaction2$().layerUrlPattern__Lobservatory_Signal__Lobservatory_Signal__Lobservatory_Signal(selectedLayer, selectedYear);
  var layer = L.tileLayer($as_T(urlSignal.apply__O()), {
    "errorTileUrl": "target/errorTile.png"
  });
  layer.addTo(map);
  $m_Lobservatory_Signal$();
  var expr = new $c_sjsr_AnonFunction0(((this$17, layer$1, urlSignal$1) => (() => {
    layer$1.setUrl($as_T(urlSignal$1.apply__O()))
  }))(this, layer, urlSignal));
  $ct_Lobservatory_Signal__F0__(new $c_Lobservatory_Signal(), expr);
  map.addControl(L.control.zoom({
    "position": "bottomright"
  }));
  var $$x2 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().body;
  var this$23 = $m_Lobservatory_Implicits$();
  $$x2.appendChild(new $c_Lscalatags_LowPriorityImplicits$bindNode(this$23, mapElement).Lscalatags_LowPriorityImplicits$bindNode__f_e);
  map.invalidateSize()
});
$c_Lobservatory_JSMain$.prototype.makeRadioButtons__sc_Seq__T2 = (function(availableLayers) {
  var initialValue = $as_Lobservatory_Layer(availableLayers.head__O());
  var expr = new $c_sjsr_AnonFunction0(((this$1, initialValue$1) => (() => initialValue$1))(this, initialValue));
  var radioButtonValue = new $c_Lobservatory_Var(expr);
  var this$3 = $m_Lscalatags_JsDom$tags$();
  var $$x12 = this$3.div__Lscalatags_JsDom$TypedTag();
  var $$x11 = $m_Lscalatags_JsDom$styles$().position__Lscalatags_generic_Styles$position$().absolute__Lscalatags_generic_StylePair();
  var $$x10 = $m_Lscalatags_JsDom$styles$().top__Lscalatags_generic_StyleMisc$PixelAutoStyle();
  var this$4 = $m_Lobservatory_Implicits$();
  var $$x9 = $$x10.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(new $c_Lscalatags_DataConverters$CssNumber(this$4, 10, $m_s_math_Numeric$IntIsIntegral$()).px__T(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle);
  var $$x8 = $m_Lscalatags_JsDom$styles$().right__Lscalatags_generic_StyleMisc$PixelAutoStyle().$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(0, $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_intPixelStyle);
  var $$x7 = $m_Lscalatags_JsDom$styles$().left__Lscalatags_generic_StyleMisc$PixelAutoStyle();
  var this$5 = $m_Lobservatory_Implicits$();
  var $$x6 = $$x7.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(new $c_Lscalatags_DataConverters$CssNumber(this$5, 10, $m_s_math_Numeric$IntIsIntegral$()).px__T(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle);
  var $$x5 = $m_Lscalatags_JsDom$styles$().height__Lscalatags_generic_StyleMisc$PixelAutoStyle();
  var this$6 = $m_Lobservatory_Implicits$();
  var array = [$$x11, $$x9, $$x8, $$x6, $$x5.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(new $c_Lscalatags_DataConverters$CssNumber(this$6, 2, $m_s_math_Numeric$IntIsIntegral$()).em__T(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle), $m_Lscalatags_JsDom$styles$().zIndex__Lscalatags_generic_StyleMisc$AutoStyle().$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair(1500, $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_intStyle)];
  var $$x4 = $$x12.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array));
  var this$14 = $m_Lobservatory_Implicits$();
  var $$x1 = new $c_sjsr_AnonFunction1(((this$2$1, radioButtonValue$1, initialValue$2) => ((layer$2) => {
    var layer = $as_Lobservatory_Layer(layer$2);
    var this$9 = $m_Lscalatags_JsDom$tags$();
    var $$x3 = this$9.label__Lscalatags_JsDom$TypedTag();
    var $$x2 = $p_Lobservatory_JSMain$__makeRadioButton$1__Lobservatory_Layer__Lobservatory_Var__Lobservatory_Layer__Lscalatags_generic_Frag(this$2$1, layer, radioButtonValue$1, initialValue$2);
    $m_Lobservatory_Implicits$();
    var v = layer.Lobservatory_Layer__f_layerName.toString__T();
    var array$1 = [$$x2, new $c_Lscalatags_JsDom$StringFrag(v)];
    return $$x3.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1))
  }))(this, radioButtonValue, initialValue));
  var this$13 = $m_sc_Seq$();
  var xs = $as_sc_Seq(availableLayers.map__F1__scg_CanBuildFrom__O($$x1, this$13.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var ev = $m_s_Predef$().s_Predef$__f_singleton_$less$colon$less;
  var array$2 = [new $c_Lscalatags_JsDom$Cap$SeqFrag(this$14, xs, ev)];
  var root = $$x4.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2));
  return new $c_T2(root, radioButtonValue)
});
$c_Lobservatory_JSMain$.prototype.makeSlider__Lobservatory_Signal__T2 = (function(selectedLayer) {
  var yearBounds = $m_Lobservatory_Interaction2$().yearBounds__Lobservatory_Signal__Lobservatory_Signal(selectedLayer);
  var expr = new $c_sjsr_AnonFunction0(((this$1, yearBounds$1) => (() => $as_sci_Range(yearBounds$1.apply__O()).max__s_math_Ordering__I($m_s_math_Ordering$Int$())))(this, yearBounds));
  var sliderValue = new $c_Lobservatory_Var(expr);
  var selectedYear = $m_Lobservatory_Interaction2$().yearSelection__Lobservatory_Signal__Lobservatory_Signal__Lobservatory_Signal(selectedLayer, sliderValue);
  $m_Lobservatory_Signal$();
  var expr$2 = new $c_sjsr_AnonFunction0(((this$2$1, yearBounds$2, selectedYear$1, sliderValue$1) => (() => {
    var this$3 = $m_Lscalatags_JsDom$tags$();
    var $$x9 = this$3.input__Lscalatags_JsDom$TypedTag();
    var $$x8 = $m_Lscalatags_JsDom$attrs$().type__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("range", $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringAttr);
    var $$x7 = $m_Lscalatags_JsDom$attrs$().min__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair($as_sci_Range(yearBounds$2.apply__O()).min__s_math_Ordering__I($m_s_math_Ordering$Int$()), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_intAttr);
    var $$x6 = $m_Lscalatags_JsDom$attrs$().max__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair($as_sci_Range(yearBounds$2.apply__O()).max__s_math_Ordering__I($m_s_math_Ordering$Int$()), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_intAttr);
    var $$x5 = $m_Lscalatags_JsDom$attrs$().value__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair(selectedYear$1.apply__O(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_intAttr);
    var $$x4 = $m_Lscalatags_JsDom$attrs$().onchange__Lscalatags_generic_Attr();
    var $$x3 = new $c_sjsr_AnonFunction1(((this$4, sliderValue$1$1) => ((ev$2) => {
      var input = ev$2.target;
      var expr$1 = new $c_sjsr_AnonFunction0(((this$5, input$1) => (() => {
        var x = $as_T(input$1.value);
        var this$7 = new $c_sci_StringOps(x);
        var this$ = this$7.sci_StringOps__f_repr;
        var this$9 = $m_jl_Integer$();
        return this$9.parseInt__T__I__I(this$, 10)
      }))(this$4, input));
      $c_Lobservatory_Signal.prototype.update__F0__V.call(sliderValue$1$1, expr$1)
    }))(this$2$1, sliderValue$1));
    var this$10 = $m_Lobservatory_Implicits$();
    var ev = new $c_sjsr_AnonFunction1(((this$2$2) => ((f$2) => {
      var f = $as_F1(f$2);
      return $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(f)
    }))(this$2$1));
    var $$x2 = $$x4.$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair($$x3, new $c_Lscalatags_LowPriorityImplicits$$anon$2(this$10, ev));
    var $$x1 = $m_Lscalatags_JsDom$styles$().width__Lscalatags_generic_StyleMisc$PixelAutoStyle();
    var this$11 = $m_Lobservatory_Implicits$();
    var array = [$$x8, $$x7, $$x6, $$x5, $$x2, $$x1.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(new $c_Lscalatags_DataConverters$CssNumber(this$11, 40, $m_s_math_Numeric$IntIsIntegral$()).em__T(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle)];
    return $$x9.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array))
  }))(this, yearBounds, selectedYear, sliderValue));
  var input$2 = $ct_Lobservatory_Signal__F0__(new $c_Lobservatory_Signal(), expr$2);
  var captionSignal = $m_Lobservatory_Interaction2$().caption__Lobservatory_Signal__Lobservatory_Signal__Lobservatory_Signal(selectedLayer, selectedYear);
  $m_Lobservatory_Signal$();
  var expr$3 = new $c_sjsr_AnonFunction0(((this$3$1, captionSignal$1) => (() => {
    var this$15 = $m_Lscalatags_JsDom$tags$();
    var $$x12 = this$15.span__Lscalatags_JsDom$TypedTag();
    var $$x11 = $as_Lscalatags_generic_PixelStyle($m_Lscalatags_JsDom$styles$().marginLeft__Lscalatags_generic_StyleMisc$MarginAuto());
    var this$16 = $m_Lobservatory_Implicits$();
    var array$1 = [$$x11.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(new $c_Lscalatags_DataConverters$CssNumber(this$16, 5, $m_s_math_Numeric$IntIsIntegral$()).px__T(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle)];
    var $$x10 = $$x12.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1));
    $m_Lobservatory_Implicits$();
    var v = $as_T(captionSignal$1.apply__O());
    var array$2 = [new $c_Lscalatags_JsDom$StringFrag(v)];
    return $$x10.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2))
  }))(this, captionSignal));
  var caption = $ct_Lobservatory_Signal__F0__(new $c_Lobservatory_Signal(), expr$3);
  var this$23 = $m_Lscalatags_JsDom$tags$();
  var $$x24 = this$23.div__Lscalatags_JsDom$TypedTag();
  var $$x23 = $m_Lscalatags_JsDom$styles$().position__Lscalatags_generic_Styles$position$().absolute__Lscalatags_generic_StylePair();
  var $$x22 = $m_Lscalatags_JsDom$styles$().bottom__Lscalatags_generic_StyleMisc$PixelAutoStyle().$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(0, $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_intPixelStyle);
  var $$x21 = $m_Lscalatags_JsDom$styles$().right__Lscalatags_generic_StyleMisc$PixelAutoStyle().$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(0, $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_intPixelStyle);
  var $$x20 = $m_Lscalatags_JsDom$styles$().left__Lscalatags_generic_StyleMisc$PixelAutoStyle();
  var this$24 = $m_Lobservatory_Implicits$();
  var $$x19 = $$x20.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(new $c_Lscalatags_DataConverters$CssNumber(this$24, 10, $m_s_math_Numeric$IntIsIntegral$()).px__T(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle);
  var $$x18 = $m_Lscalatags_JsDom$styles$().height__Lscalatags_generic_StyleMisc$PixelAutoStyle();
  var this$25 = $m_Lobservatory_Implicits$();
  var array$3 = [$$x23, $$x22, $$x21, $$x19, $$x18.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(new $c_Lscalatags_DataConverters$CssNumber(this$25, 2, $m_s_math_Numeric$IntIsIntegral$()).em__T(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle), $m_Lscalatags_JsDom$styles$().zIndex__Lscalatags_generic_StyleMisc$AutoStyle().$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair(1500, $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_intStyle)];
  var $$x17 = $$x24.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$3));
  var this$28 = $m_Lscalatags_JsDom$tags$();
  var $$x16 = this$28.label__Lscalatags_JsDom$TypedTag();
  var aToFrag = $m_s_Predef$().s_Predef$__f_singleton_$less$colon$less;
  var a = input$2.apply__O();
  var this$29 = $m_Lscalatags_JsDom$tags$();
  var $$x14 = this$29.span__Lscalatags_JsDom$TypedTag();
  var array$4 = [$as_Lscalatags_generic_Modifier(a)];
  var elem = $$x14.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$4)).render__Lorg_scalajs_dom_raw_Element();
  var last = new $c_sr_ObjectRef(elem);
  $m_Lobservatory_Signal$();
  var expr$4 = new $c_sjsr_AnonFunction0(((this$33, signalA, last$1, aToFrag$1) => (() => {
    var current = $p_Lobservatory_JSMain$__render$1__O__F1__Lorg_scalajs_dom_raw_Node(this$33, signalA.apply__O(), aToFrag$1);
    last$1.sr_ObjectRef__f_elem.replaceChild(current, last$1.sr_ObjectRef__f_elem.firstChild);
    last$1.sr_ObjectRef__f_elem = current
  }))(this, input$2, last, aToFrag));
  $ct_Lobservatory_Signal__F0__(new $c_Lobservatory_Signal(), expr$4);
  var this$35 = $m_Lobservatory_Implicits$();
  var e = last.sr_ObjectRef__f_elem;
  var $$x15 = new $c_Lscalatags_LowPriorityImplicits$bindNode(this$35, e);
  var aToFrag$2 = $m_s_Predef$().s_Predef$__f_singleton_$less$colon$less;
  var a$1 = caption.apply__O();
  var this$36 = $m_Lscalatags_JsDom$tags$();
  var $$x13 = this$36.span__Lscalatags_JsDom$TypedTag();
  var array$5 = [$as_Lscalatags_generic_Modifier(a$1)];
  var elem$1 = $$x13.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$5)).render__Lorg_scalajs_dom_raw_Element();
  var last$2 = new $c_sr_ObjectRef(elem$1);
  $m_Lobservatory_Signal$();
  var expr$5 = new $c_sjsr_AnonFunction0(((this$40, signalA$1, last$3, aToFrag$3) => (() => {
    var current$1 = $p_Lobservatory_JSMain$__render$1__O__F1__Lorg_scalajs_dom_raw_Node(this$40, signalA$1.apply__O(), aToFrag$3);
    last$3.sr_ObjectRef__f_elem.replaceChild(current$1, last$3.sr_ObjectRef__f_elem.firstChild);
    last$3.sr_ObjectRef__f_elem = current$1
  }))(this, caption, last$2, aToFrag$2));
  $ct_Lobservatory_Signal__F0__(new $c_Lobservatory_Signal(), expr$5);
  var this$42 = $m_Lobservatory_Implicits$();
  var e$1 = last$2.sr_ObjectRef__f_elem;
  var array$6 = [$$x15, new $c_Lscalatags_LowPriorityImplicits$bindNode(this$42, e$1)];
  var array$7 = [$$x16.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$6))];
  var root = $$x17.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$7));
  return new $c_T2(root, selectedYear)
});
$c_Lobservatory_JSMain$.prototype.makeCaptionElement__Lobservatory_Signal__Lscalatags_generic_Frag = (function(selectedLayer) {
  $m_Lobservatory_Signal$();
  var expr = new $c_sjsr_AnonFunction0(((this$1, selectedLayer$1) => (() => {
    var this$2 = $m_Lscalatags_JsDom$tags$();
    var $$x17 = this$2.div__Lscalatags_JsDom$TypedTag();
    var $$x16 = $m_Lscalatags_JsDom$styles$().position__Lscalatags_generic_Styles$position$().absolute__Lscalatags_generic_StylePair();
    var $$x15 = $m_Lscalatags_JsDom$styles$().top__Lscalatags_generic_StyleMisc$PixelAutoStyle();
    var this$3 = $m_Lobservatory_Implicits$();
    var $$x14 = $$x15.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(new $c_Lscalatags_DataConverters$CssNumber(this$3, 5, $m_s_math_Numeric$IntIsIntegral$()).px__T(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle);
    var $$x13 = $m_Lscalatags_JsDom$styles$().right__Lscalatags_generic_StyleMisc$PixelAutoStyle();
    var this$4 = $m_Lobservatory_Implicits$();
    var array = [$$x16, $$x14, $$x13.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(new $c_Lscalatags_DataConverters$CssNumber(this$4, 5, $m_s_math_Numeric$IntIsIntegral$()).px__T(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle), $m_Lscalatags_JsDom$styles$().zIndex__Lscalatags_generic_StyleMisc$AutoStyle().$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair(1500, $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_intStyle), $m_Lscalatags_JsDom$styles$().backgroundColor__Lscalatags_generic_Style().$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair("white", $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringStyle)];
    var $$x12 = $$x17.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array));
    var this$24 = $m_Lobservatory_Implicits$();
    var $$x11 = $as_sc_TraversableLike($as_Lobservatory_Layer(selectedLayer$1.apply__O()).Lobservatory_Layer__f_colorScale.reverse__O()).withFilter__F1__scg_FilterMonadic(new $c_sjsr_AnonFunction1(((this$7) => ((check$ifrefutable$1$2) => {
      var check$ifrefutable$1 = $as_T2(check$ifrefutable$1$2);
      if ((check$ifrefutable$1 !== null)) {
        var p2 = $as_Lobservatory_Color(check$ifrefutable$1.T2__f__2);
        if ((p2 !== null)) {
          return true
        }
      };
      return false
    }))(this$1)));
    var $$x1 = new $c_sjsr_AnonFunction1(((this$2$1) => ((x$3$2) => {
      var x$3 = $as_T2(x$3$2);
      if ((x$3 !== null)) {
        var t = $uD(x$3.T2__f__1);
        var p2$1 = $as_Lobservatory_Color(x$3.T2__f__2);
        if ((p2$1 !== null)) {
          var red = p2$1.Lobservatory_Color__f_red;
          var green = p2$1.Lobservatory_Color__f_green;
          var blue = p2$1.Lobservatory_Color__f_blue;
          var this$8 = $m_Lscalatags_JsDom$tags$();
          var $$x10 = this$8.div__Lscalatags_JsDom$TypedTag();
          var $$x9 = $m_Lscalatags_JsDom$styles$().margin__Lscalatags_generic_Styles$margin$();
          var this$9 = $m_Lobservatory_Implicits$();
          var array$1 = [$$x9.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(new $c_Lscalatags_DataConverters$CssNumber(this$9, 5, $m_s_math_Numeric$IntIsIntegral$()).px__T(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle), $m_Lscalatags_JsDom$styles$().textAlign__Lscalatags_generic_Styles$TextAlign().right__Lscalatags_generic_StylePair()];
          var $$x8 = $$x10.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1));
          var this$12 = $m_Lscalatags_JsDom$tags$();
          var $$x7 = this$12.span__Lscalatags_JsDom$TypedTag();
          $m_Lobservatory_Implicits$();
          var v = ((((t > 0.0) ? "+" : "") + t) + " ");
          var array$2 = [new $c_Lscalatags_JsDom$StringFrag(v)];
          var $$x6 = $$x7.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2));
          var this$16 = $m_Lscalatags_JsDom$tags$();
          var $$x5 = this$16.span__Lscalatags_JsDom$TypedTag();
          var $$x4 = $m_Lscalatags_JsDom$styles$().width__Lscalatags_generic_StyleMisc$PixelAutoStyle();
          var this$17 = $m_Lobservatory_Implicits$();
          var $$x3 = $$x4.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(new $c_Lscalatags_DataConverters$CssNumber(this$17, 20, $m_s_math_Numeric$IntIsIntegral$()).px__T(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle);
          var $$x2 = $m_Lscalatags_JsDom$styles$().height__Lscalatags_generic_StyleMisc$PixelAutoStyle();
          var this$18 = $m_Lobservatory_Implicits$();
          var array$3 = [$$x3, $$x2.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(new $c_Lscalatags_DataConverters$CssNumber(this$18, 15, $m_s_math_Numeric$IntIsIntegral$()).px__T(), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringPixelStyle), $m_Lscalatags_JsDom$styles$().backgroundColor__Lscalatags_generic_Style().$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair((((((("rgb(" + red) + ", ") + green) + ", ") + blue) + ")"), $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringStyle), $m_Lscalatags_JsDom$styles$().display__Lscalatags_generic_Styles$display$().inline$minusblock__Lscalatags_generic_StylePair(), $m_Lscalatags_JsDom$styles$().border__Lscalatags_generic_Style().$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair("thin solid black", $m_Lobservatory_Implicits$().Lobservatory_Implicits$__f_stringStyle)];
          var array$4 = [$$x6, $$x5.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$3))];
          return $$x8.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$4))
        }
      };
      throw new $c_s_MatchError(x$3)
    }))(this$1));
    var this$23 = $m_sc_Seq$();
    var xs = $as_sc_Seq($$x11.map__F1__scg_CanBuildFrom__O($$x1, this$23.scg_GenTraversableFactory__f_ReusableCBFInstance));
    var ev = $m_s_Predef$().s_Predef$__f_singleton_$less$colon$less;
    var array$5 = [new $c_Lscalatags_JsDom$Cap$SeqFrag(this$24, xs, ev)];
    return $$x12.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$5))
  }))(this, selectedLayer));
  var signalA = $ct_Lobservatory_Signal__F0__(new $c_Lobservatory_Signal(), expr);
  var aToFrag = $m_s_Predef$().s_Predef$__f_singleton_$less$colon$less;
  var a = signalA.apply__O();
  var this$28 = $m_Lscalatags_JsDom$tags$();
  var $$x18 = this$28.span__Lscalatags_JsDom$TypedTag();
  var array$6 = [$as_Lscalatags_generic_Modifier(a)];
  var elem = $$x18.apply__sc_Seq__Lscalatags_JsDom$TypedTag($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$6)).render__Lorg_scalajs_dom_raw_Element();
  var last = new $c_sr_ObjectRef(elem);
  $m_Lobservatory_Signal$();
  var expr$1 = new $c_sjsr_AnonFunction0(((this$32, signalA$1, last$1, aToFrag$1) => (() => {
    var current = $p_Lobservatory_JSMain$__render$1__O__F1__Lorg_scalajs_dom_raw_Node(this$32, signalA$1.apply__O(), aToFrag$1);
    last$1.sr_ObjectRef__f_elem.replaceChild(current, last$1.sr_ObjectRef__f_elem.firstChild);
    last$1.sr_ObjectRef__f_elem = current
  }))(this, signalA, last, aToFrag));
  $ct_Lobservatory_Signal__F0__(new $c_Lobservatory_Signal(), expr$1);
  var this$34 = $m_Lobservatory_Implicits$();
  var e = last.sr_ObjectRef__f_elem;
  return new $c_Lscalatags_LowPriorityImplicits$bindNode(this$34, e)
});
var $d_Lobservatory_JSMain$ = new $TypeData().initClass({
  Lobservatory_JSMain$: 0
}, false, "observatory.JSMain$", {
  Lobservatory_JSMain$: 1,
  O: 1
});
$c_Lobservatory_JSMain$.prototype.$classData = $d_Lobservatory_JSMain$;
var $n_Lobservatory_JSMain$;
function $m_Lobservatory_JSMain$() {
  if ((!$n_Lobservatory_JSMain$)) {
    $n_Lobservatory_JSMain$ = new $c_Lobservatory_JSMain$()
  };
  return $n_Lobservatory_JSMain$
}
function $ct_Lobservatory_LayerName__T__($thiz, id) {
  $thiz.Lobservatory_LayerName__f_id = id;
  return $thiz
}
/** @constructor */
function $c_Lobservatory_LayerName() {
  this.Lobservatory_LayerName__f_id = null
}
$c_Lobservatory_LayerName.prototype = new $h_O();
$c_Lobservatory_LayerName.prototype.constructor = $c_Lobservatory_LayerName;
/** @constructor */
function $h_Lobservatory_LayerName() {
  /*<skip>*/
}
$h_Lobservatory_LayerName.prototype = $c_Lobservatory_LayerName.prototype;
function $ct_Lobservatory_Signal__F0__($thiz, expr) {
  $thiz.Lobservatory_Signal__f_observers = $as_sci_Set($m_s_Predef$().s_Predef$__f_Set.apply__sc_Seq__sc_GenTraversable($m_sci_Nil$()));
  $thiz.Lobservatory_Signal__f_observed = $m_sci_Nil$();
  $thiz.update__F0__V(expr);
  return $thiz
}
/** @constructor */
function $c_Lobservatory_Signal() {
  this.Lobservatory_Signal__f_myExpr = null;
  this.Lobservatory_Signal__f_myValue = null;
  this.Lobservatory_Signal__f_observers = null;
  this.Lobservatory_Signal__f_observed = null
}
$c_Lobservatory_Signal.prototype = new $h_O();
$c_Lobservatory_Signal.prototype.constructor = $c_Lobservatory_Signal;
/** @constructor */
function $h_Lobservatory_Signal() {
  /*<skip>*/
}
$h_Lobservatory_Signal.prototype = $c_Lobservatory_Signal.prototype;
$c_Lobservatory_Signal.prototype.computeValue__V = (function() {
  var this$1 = this.Lobservatory_Signal__f_observed;
  var these = this$1;
  while ((!these.isEmpty__Z())) {
    var arg1 = these.head__O();
    var sig = $as_Lobservatory_Signal(arg1);
    sig.Lobservatory_Signal__f_observers = $as_sci_Set(sig.Lobservatory_Signal__f_observers.$minus__O__sc_Set(this));
    var this$2 = these;
    these = this$2.tail__sci_List()
  };
  this.Lobservatory_Signal__f_observed = $m_sci_Nil$();
  var this$3 = $m_Lobservatory_Signal$().Lobservatory_Signal$__f_caller;
  var oldval = this$3.s_util_DynamicVariable__f_v;
  this$3.s_util_DynamicVariable__f_v = this;
  try {
    var newValue = this.Lobservatory_Signal__f_myExpr.apply__O()
  } finally {
    this$3.s_util_DynamicVariable__f_v = oldval
  };
  this.Lobservatory_Signal__f_myValue = newValue;
  var obs = this.Lobservatory_Signal__f_observers;
  this.Lobservatory_Signal__f_observers = $as_sci_Set($m_s_Predef$().s_Predef$__f_Set.apply__sc_Seq__sc_GenTraversable($m_sci_Nil$()));
  obs.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$3$1) => ((x$1$2) => {
    var x$1 = $as_Lobservatory_Signal(x$1$2);
    x$1.computeValue__V()
  }))(this)))
});
$c_Lobservatory_Signal.prototype.update__F0__V = (function(expr) {
  this.Lobservatory_Signal__f_myExpr = expr;
  this.computeValue__V()
});
$c_Lobservatory_Signal.prototype.apply__O = (function() {
  this.Lobservatory_Signal__f_observers = $as_sci_Set(this.Lobservatory_Signal__f_observers.$plus__O__sc_Set($m_Lobservatory_Signal$().Lobservatory_Signal$__f_caller.s_util_DynamicVariable__f_v));
  var assertion = (!$as_Lobservatory_Signal($m_Lobservatory_Signal$().Lobservatory_Signal$__f_caller.s_util_DynamicVariable__f_v).Lobservatory_Signal__f_observers.contains__O__Z(this));
  if ((!assertion)) {
    throw new $c_jl_AssertionError("assertion failed: cyclic signal definition")
  };
  var ev$1 = $as_Lobservatory_Signal($m_Lobservatory_Signal$().Lobservatory_Signal$__f_caller.s_util_DynamicVariable__f_v);
  var this$2 = ev$1.Lobservatory_Signal__f_observed;
  ev$1.Lobservatory_Signal__f_observed = new $c_sci_$colon$colon(this, this$2);
  return this.Lobservatory_Signal__f_myValue
});
function $as_Lobservatory_Signal(obj) {
  return (((obj instanceof $c_Lobservatory_Signal) || (obj === null)) ? obj : $throwClassCastException(obj, "observatory.Signal"))
}
function $isArrayOf_Lobservatory_Signal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lobservatory_Signal)))
}
function $asArrayOf_Lobservatory_Signal(obj, depth) {
  return (($isArrayOf_Lobservatory_Signal(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lobservatory.Signal;", depth))
}
var $d_Lobservatory_Signal = new $TypeData().initClass({
  Lobservatory_Signal: 0
}, false, "observatory.Signal", {
  Lobservatory_Signal: 1,
  O: 1
});
$c_Lobservatory_Signal.prototype.$classData = $d_Lobservatory_Signal;
/** @constructor */
function $c_Lobservatory_Signal$() {
  this.Lobservatory_Signal$__f_caller = null;
  $n_Lobservatory_Signal$ = this;
  this.Lobservatory_Signal$__f_caller = new $c_s_util_DynamicVariable($m_Lobservatory_NoSignal$())
}
$c_Lobservatory_Signal$.prototype = new $h_O();
$c_Lobservatory_Signal$.prototype.constructor = $c_Lobservatory_Signal$;
/** @constructor */
function $h_Lobservatory_Signal$() {
  /*<skip>*/
}
$h_Lobservatory_Signal$.prototype = $c_Lobservatory_Signal$.prototype;
var $d_Lobservatory_Signal$ = new $TypeData().initClass({
  Lobservatory_Signal$: 0
}, false, "observatory.Signal$", {
  Lobservatory_Signal$: 1,
  O: 1
});
$c_Lobservatory_Signal$.prototype.$classData = $d_Lobservatory_Signal$;
var $n_Lobservatory_Signal$;
function $m_Lobservatory_Signal$() {
  if ((!$n_Lobservatory_Signal$)) {
    $n_Lobservatory_Signal$ = new $c_Lobservatory_Signal$()
  };
  return $n_Lobservatory_Signal$
}
function $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window($thiz) {
  if (((33554432 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_window = window;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (33554432 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_window
}
function $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument($thiz) {
  if (((67108864 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_document = $thiz.window__Lorg_scalajs_dom_raw_Window().document;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (67108864 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_document
}
/** @constructor */
function $c_Lorg_scalajs_dom_package$() {
  this.Lorg_scalajs_dom_package$__f_ApplicationCache = null;
  this.Lorg_scalajs_dom_package$__f_Blob = null;
  this.Lorg_scalajs_dom_package$__f_BlobPropertyBag = null;
  this.Lorg_scalajs_dom_package$__f_DOMException = null;
  this.Lorg_scalajs_dom_package$__f_Event = null;
  this.Lorg_scalajs_dom_package$__f_EventException = null;
  this.Lorg_scalajs_dom_package$__f_EventSource = null;
  this.Lorg_scalajs_dom_package$__f_FileReader = null;
  this.Lorg_scalajs_dom_package$__f_FormData = null;
  this.Lorg_scalajs_dom_package$__f_KeyboardEvent = null;
  this.Lorg_scalajs_dom_package$__f_MediaError = null;
  this.Lorg_scalajs_dom_package$__f_MutationObserverInit = null;
  this.Lorg_scalajs_dom_package$__f_Node = null;
  this.Lorg_scalajs_dom_package$__f_NodeFilter = null;
  this.Lorg_scalajs_dom_package$__f_PerformanceNavigation = null;
  this.Lorg_scalajs_dom_package$__f_PositionError = null;
  this.Lorg_scalajs_dom_package$__f_Range = null;
  this.Lorg_scalajs_dom_package$__f_TextEvent = null;
  this.Lorg_scalajs_dom_package$__f_TextTrack = null;
  this.Lorg_scalajs_dom_package$__f_URL = null;
  this.Lorg_scalajs_dom_package$__f_VisibilityState = null;
  this.Lorg_scalajs_dom_package$__f_WebSocket = null;
  this.Lorg_scalajs_dom_package$__f_WheelEvent = null;
  this.Lorg_scalajs_dom_package$__f_XMLHttpRequest = null;
  this.Lorg_scalajs_dom_package$__f_XPathResult = null;
  this.Lorg_scalajs_dom_package$__f_window = null;
  this.Lorg_scalajs_dom_package$__f_document = null;
  this.Lorg_scalajs_dom_package$__f_console = null;
  this.Lorg_scalajs_dom_package$__f_bitmap$0 = 0
}
$c_Lorg_scalajs_dom_package$.prototype = new $h_O();
$c_Lorg_scalajs_dom_package$.prototype.constructor = $c_Lorg_scalajs_dom_package$;
/** @constructor */
function $h_Lorg_scalajs_dom_package$() {
  /*<skip>*/
}
$h_Lorg_scalajs_dom_package$.prototype = $c_Lorg_scalajs_dom_package$.prototype;
$c_Lorg_scalajs_dom_package$.prototype.window__Lorg_scalajs_dom_raw_Window = (function() {
  return (((33554432 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window(this) : this.Lorg_scalajs_dom_package$__f_window)
});
$c_Lorg_scalajs_dom_package$.prototype.document__Lorg_scalajs_dom_raw_HTMLDocument = (function() {
  return (((67108864 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument(this) : this.Lorg_scalajs_dom_package$__f_document)
});
var $d_Lorg_scalajs_dom_package$ = new $TypeData().initClass({
  Lorg_scalajs_dom_package$: 0
}, false, "org.scalajs.dom.package$", {
  Lorg_scalajs_dom_package$: 1,
  O: 1
});
$c_Lorg_scalajs_dom_package$.prototype.$classData = $d_Lorg_scalajs_dom_package$;
var $n_Lorg_scalajs_dom_package$;
function $m_Lorg_scalajs_dom_package$() {
  if ((!$n_Lorg_scalajs_dom_package$)) {
    $n_Lorg_scalajs_dom_package$ = new $c_Lorg_scalajs_dom_package$()
  };
  return $n_Lorg_scalajs_dom_package$
}
/** @constructor */
function $c_s_FallbackArrayBuilding() {
  /*<skip>*/
}
$c_s_FallbackArrayBuilding.prototype = new $h_O();
$c_s_FallbackArrayBuilding.prototype.constructor = $c_s_FallbackArrayBuilding;
/** @constructor */
function $h_s_FallbackArrayBuilding() {
  /*<skip>*/
}
$h_s_FallbackArrayBuilding.prototype = $c_s_FallbackArrayBuilding.prototype;
function $is_F1(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F1)))
}
function $as_F1(obj) {
  return (($is_F1(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function1"))
}
function $isArrayOf_F1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F1)))
}
function $asArrayOf_F1(obj, depth) {
  return (($isArrayOf_F1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function1;", depth))
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
  /*<skip>*/
}
$c_s_LowPriorityImplicits.prototype = new $h_O();
$c_s_LowPriorityImplicits.prototype.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
  /*<skip>*/
}
$h_s_LowPriorityImplicits.prototype = $c_s_LowPriorityImplicits.prototype;
/** @constructor */
function $c_s_Predef$any2stringadd$() {
  /*<skip>*/
}
$c_s_Predef$any2stringadd$.prototype = new $h_O();
$c_s_Predef$any2stringadd$.prototype.constructor = $c_s_Predef$any2stringadd$;
/** @constructor */
function $h_s_Predef$any2stringadd$() {
  /*<skip>*/
}
$h_s_Predef$any2stringadd$.prototype = $c_s_Predef$any2stringadd$.prototype;
$c_s_Predef$any2stringadd$.prototype.$plus$extension__O__T__T = (function(this$, other) {
  return (("" + this$) + other)
});
var $d_s_Predef$any2stringadd$ = new $TypeData().initClass({
  s_Predef$any2stringadd$: 0
}, false, "scala.Predef$any2stringadd$", {
  s_Predef$any2stringadd$: 1,
  O: 1
});
$c_s_Predef$any2stringadd$.prototype.$classData = $d_s_Predef$any2stringadd$;
var $n_s_Predef$any2stringadd$;
function $m_s_Predef$any2stringadd$() {
  if ((!$n_s_Predef$any2stringadd$)) {
    $n_s_Predef$any2stringadd$ = new $c_s_Predef$any2stringadd$()
  };
  return $n_s_Predef$any2stringadd$
}
function $f_s_Proxy__equals__O__Z($thiz, that) {
  return ((that !== null) && (((that === $thiz) || (that === $thiz.scm_Builder$$anon$1__f_self)) || $dp_equals__O__Z(that, $thiz.scm_Builder$$anon$1__f_self)))
}
function $f_s_Proxy__toString__T($thiz) {
  return ("" + $thiz.scm_Builder$$anon$1__f_self)
}
/** @constructor */
function $c_sc_$colon$plus$() {
  /*<skip>*/
}
$c_sc_$colon$plus$.prototype = new $h_O();
$c_sc_$colon$plus$.prototype.constructor = $c_sc_$colon$plus$;
/** @constructor */
function $h_sc_$colon$plus$() {
  /*<skip>*/
}
$h_sc_$colon$plus$.prototype = $c_sc_$colon$plus$.prototype;
var $d_sc_$colon$plus$ = new $TypeData().initClass({
  sc_$colon$plus$: 0
}, false, "scala.collection.$colon$plus$", {
  sc_$colon$plus$: 1,
  O: 1
});
$c_sc_$colon$plus$.prototype.$classData = $d_sc_$colon$plus$;
var $n_sc_$colon$plus$;
function $m_sc_$colon$plus$() {
  if ((!$n_sc_$colon$plus$)) {
    $n_sc_$colon$plus$ = new $c_sc_$colon$plus$()
  };
  return $n_sc_$colon$plus$
}
/** @constructor */
function $c_sc_$plus$colon$() {
  /*<skip>*/
}
$c_sc_$plus$colon$.prototype = new $h_O();
$c_sc_$plus$colon$.prototype.constructor = $c_sc_$plus$colon$;
/** @constructor */
function $h_sc_$plus$colon$() {
  /*<skip>*/
}
$h_sc_$plus$colon$.prototype = $c_sc_$plus$colon$.prototype;
var $d_sc_$plus$colon$ = new $TypeData().initClass({
  sc_$plus$colon$: 0
}, false, "scala.collection.$plus$colon$", {
  sc_$plus$colon$: 1,
  O: 1
});
$c_sc_$plus$colon$.prototype.$classData = $d_sc_$plus$colon$;
var $n_sc_$plus$colon$;
function $m_sc_$plus$colon$() {
  if ((!$n_sc_$plus$colon$)) {
    $n_sc_$plus$colon$ = new $c_sc_$plus$colon$()
  };
  return $n_sc_$plus$colon$
}
function $is_sc_GenTraversableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenTraversableOnce)))
}
function $as_sc_GenTraversableOnce(obj) {
  return (($is_sc_GenTraversableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenTraversableOnce"))
}
function $isArrayOf_sc_GenTraversableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenTraversableOnce)))
}
function $asArrayOf_sc_GenTraversableOnce(obj, depth) {
  return (($isArrayOf_sc_GenTraversableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenTraversableOnce;", depth))
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_empty = new $c_sc_Iterator$$anon$2()
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
  /*<skip>*/
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
/** @constructor */
function $c_scg_GenMapFactory() {
  /*<skip>*/
}
$c_scg_GenMapFactory.prototype = new $h_O();
$c_scg_GenMapFactory.prototype.constructor = $c_scg_GenMapFactory;
/** @constructor */
function $h_scg_GenMapFactory() {
  /*<skip>*/
}
$h_scg_GenMapFactory.prototype = $c_scg_GenMapFactory.prototype;
$c_scg_GenMapFactory.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_MapBuilder(this.empty__sc_GenMap())
});
/** @constructor */
function $c_scg_GenericCompanion() {
  /*<skip>*/
}
$c_scg_GenericCompanion.prototype = new $h_O();
$c_scg_GenericCompanion.prototype.constructor = $c_scg_GenericCompanion;
/** @constructor */
function $h_scg_GenericCompanion() {
  /*<skip>*/
}
$h_scg_GenericCompanion.prototype = $c_scg_GenericCompanion.prototype;
$c_scg_GenericCompanion.prototype.empty__sc_GenTraversable = (function() {
  return (((this === $m_sci_Seq$()) || (this === $m_sc_Seq$())) ? $m_sci_Nil$() : $as_sc_GenTraversable(this.newBuilder__scm_Builder().result__O()))
});
$c_scg_GenericCompanion.prototype.apply__sc_Seq__sc_GenTraversable = (function(elems) {
  if (elems.isEmpty__Z()) {
    return this.empty__sc_GenTraversable()
  } else {
    var b = this.newBuilder__scm_Builder();
    b.$plus$plus$eq__sc_TraversableOnce__scg_Growable(elems);
    return $as_sc_GenTraversable(b.result__O())
  }
});
/** @constructor */
function $c_sci_HashMap$Merger() {
  /*<skip>*/
}
$c_sci_HashMap$Merger.prototype = new $h_O();
$c_sci_HashMap$Merger.prototype.constructor = $c_sci_HashMap$Merger;
/** @constructor */
function $h_sci_HashMap$Merger() {
  /*<skip>*/
}
$h_sci_HashMap$Merger.prototype = $c_sci_HashMap$Merger.prototype;
/** @constructor */
function $c_sci_Stream$$hash$colon$colon$() {
  /*<skip>*/
}
$c_sci_Stream$$hash$colon$colon$.prototype = new $h_O();
$c_sci_Stream$$hash$colon$colon$.prototype.constructor = $c_sci_Stream$$hash$colon$colon$;
/** @constructor */
function $h_sci_Stream$$hash$colon$colon$() {
  /*<skip>*/
}
$h_sci_Stream$$hash$colon$colon$.prototype = $c_sci_Stream$$hash$colon$colon$.prototype;
var $d_sci_Stream$$hash$colon$colon$ = new $TypeData().initClass({
  sci_Stream$$hash$colon$colon$: 0
}, false, "scala.collection.immutable.Stream$$hash$colon$colon$", {
  sci_Stream$$hash$colon$colon$: 1,
  O: 1
});
$c_sci_Stream$$hash$colon$colon$.prototype.$classData = $d_sci_Stream$$hash$colon$colon$;
var $n_sci_Stream$$hash$colon$colon$;
function $m_sci_Stream$$hash$colon$colon$() {
  if ((!$n_sci_Stream$$hash$colon$colon$)) {
    $n_sci_Stream$$hash$colon$colon$ = new $c_sci_Stream$$hash$colon$colon$()
  };
  return $n_sci_Stream$$hash$colon$colon$
}
/** @constructor */
function $c_sci_Stream$ConsWrapper(tl) {
  this.sci_Stream$ConsWrapper__f_tl = null;
  this.sci_Stream$ConsWrapper__f_tl = tl
}
$c_sci_Stream$ConsWrapper.prototype = new $h_O();
$c_sci_Stream$ConsWrapper.prototype.constructor = $c_sci_Stream$ConsWrapper;
/** @constructor */
function $h_sci_Stream$ConsWrapper() {
  /*<skip>*/
}
$h_sci_Stream$ConsWrapper.prototype = $c_sci_Stream$ConsWrapper.prototype;
$c_sci_Stream$ConsWrapper.prototype.$hash$colon$colon__O__sci_Stream = (function(hd) {
  var tl = this.sci_Stream$ConsWrapper__f_tl;
  return new $c_sci_Stream$Cons(hd, tl)
});
var $d_sci_Stream$ConsWrapper = new $TypeData().initClass({
  sci_Stream$ConsWrapper: 0
}, false, "scala.collection.immutable.Stream$ConsWrapper", {
  sci_Stream$ConsWrapper: 1,
  O: 1
});
$c_sci_Stream$ConsWrapper.prototype.$classData = $d_sci_Stream$ConsWrapper;
function $p_sci_StreamIterator$LazyCell__v$lzycompute__sci_Stream($thiz) {
  if ((!$thiz.sci_StreamIterator$LazyCell__f_bitmap$0)) {
    $thiz.sci_StreamIterator$LazyCell__f_v = $as_sci_Stream($thiz.sci_StreamIterator$LazyCell__f_st.apply__O());
    $thiz.sci_StreamIterator$LazyCell__f_bitmap$0 = true
  };
  $thiz.sci_StreamIterator$LazyCell__f_st = null;
  return $thiz.sci_StreamIterator$LazyCell__f_v
}
/** @constructor */
function $c_sci_StreamIterator$LazyCell(outer, st) {
  this.sci_StreamIterator$LazyCell__f_v = null;
  this.sci_StreamIterator$LazyCell__f_st = null;
  this.sci_StreamIterator$LazyCell__f_bitmap$0 = false;
  this.sci_StreamIterator$LazyCell__f_$outer = null;
  this.sci_StreamIterator$LazyCell__f_st = st;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sci_StreamIterator$LazyCell__f_$outer = outer
  }
}
$c_sci_StreamIterator$LazyCell.prototype = new $h_O();
$c_sci_StreamIterator$LazyCell.prototype.constructor = $c_sci_StreamIterator$LazyCell;
/** @constructor */
function $h_sci_StreamIterator$LazyCell() {
  /*<skip>*/
}
$h_sci_StreamIterator$LazyCell.prototype = $c_sci_StreamIterator$LazyCell.prototype;
$c_sci_StreamIterator$LazyCell.prototype.v__sci_Stream = (function() {
  return ((!this.sci_StreamIterator$LazyCell__f_bitmap$0) ? $p_sci_StreamIterator$LazyCell__v$lzycompute__sci_Stream(this) : this.sci_StreamIterator$LazyCell__f_v)
});
var $d_sci_StreamIterator$LazyCell = new $TypeData().initClass({
  sci_StreamIterator$LazyCell: 0
}, false, "scala.collection.immutable.StreamIterator$LazyCell", {
  sci_StreamIterator$LazyCell: 1,
  O: 1
});
$c_sci_StreamIterator$LazyCell.prototype.$classData = $d_sci_StreamIterator$LazyCell;
/** @constructor */
function $c_sci_StringOps$() {
  /*<skip>*/
}
$c_sci_StringOps$.prototype = new $h_O();
$c_sci_StringOps$.prototype.constructor = $c_sci_StringOps$;
/** @constructor */
function $h_sci_StringOps$() {
  /*<skip>*/
}
$h_sci_StringOps$.prototype = $c_sci_StringOps$.prototype;
$c_sci_StringOps$.prototype.equals$extension__T__O__Z = (function(this$, x$1) {
  if ((x$1 instanceof $c_sci_StringOps)) {
    var StringOps$1 = ((x$1 === null) ? null : $as_sci_StringOps(x$1).sci_StringOps__f_repr);
    return (this$ === StringOps$1)
  } else {
    return false
  }
});
var $d_sci_StringOps$ = new $TypeData().initClass({
  sci_StringOps$: 0
}, false, "scala.collection.immutable.StringOps$", {
  sci_StringOps$: 1,
  O: 1
});
$c_sci_StringOps$.prototype.$classData = $d_sci_StringOps$;
var $n_sci_StringOps$;
function $m_sci_StringOps$() {
  if ((!$n_sci_StringOps$)) {
    $n_sci_StringOps$ = new $c_sci_StringOps$()
  };
  return $n_sci_StringOps$
}
function $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V($thiz, that, depth) {
  $thiz.depth_$eq__I__V(depth);
  var x1 = (((-1) + depth) | 0);
  switch (x1) {
    case (-1): {
      break
    }
    case 0: {
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 1: {
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 2: {
      $thiz.display2_$eq__AO__V(that.display2__AO());
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 3: {
      $thiz.display3_$eq__AO__V(that.display3__AO());
      $thiz.display2_$eq__AO__V(that.display2__AO());
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 4: {
      $thiz.display4_$eq__AO__V(that.display4__AO());
      $thiz.display3_$eq__AO__V(that.display3__AO());
      $thiz.display2_$eq__AO__V(that.display2__AO());
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 5: {
      $thiz.display5_$eq__AO__V(that.display5__AO());
      $thiz.display4_$eq__AO__V(that.display4__AO());
      $thiz.display3_$eq__AO__V(that.display3__AO());
      $thiz.display2_$eq__AO__V(that.display2__AO());
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
}
function $f_sci_VectorPointer__getElem__I__I__O($thiz, index, xor) {
  if ((xor < 32)) {
    return $thiz.display0__AO().get((31 & index))
  } else if ((xor < 1024)) {
    return $asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else if ((xor < 32768)) {
    return $asArrayOf_O($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1).get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else if ((xor < 1048576)) {
    return $asArrayOf_O($asArrayOf_O($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1).get((31 & ((index >>> 10) | 0))), 1).get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else if ((xor < 33554432)) {
    return $asArrayOf_O($asArrayOf_O($asArrayOf_O($asArrayOf_O($thiz.display4__AO().get((31 & ((index >>> 20) | 0))), 1).get((31 & ((index >>> 15) | 0))), 1).get((31 & ((index >>> 10) | 0))), 1).get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else if ((xor < 1073741824)) {
    return $asArrayOf_O($asArrayOf_O($asArrayOf_O($asArrayOf_O($asArrayOf_O($thiz.display5__AO().get((31 & ((index >>> 25) | 0))), 1).get((31 & ((index >>> 20) | 0))), 1).get((31 & ((index >>> 15) | 0))), 1).get((31 & ((index >>> 10) | 0))), 1).get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $f_sci_VectorPointer__gotoPos__I__I__V($thiz, index, xor) {
  if ((xor >= 32)) {
    if ((xor < 1024)) {
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else if ((xor < 32768)) {
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else if ((xor < 1048576)) {
      $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1));
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else if ((xor < 33554432)) {
      $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get((31 & ((index >>> 20) | 0))), 1));
      $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1));
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else if ((xor < 1073741824)) {
      $thiz.display4_$eq__AO__V($asArrayOf_O($thiz.display5__AO().get((31 & ((index >>> 25) | 0))), 1));
      $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get((31 & ((index >>> 20) | 0))), 1));
      $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1));
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  }
}
function $f_sci_VectorPointer__gotoNextBlockStart__I__I__V($thiz, index, xor) {
  if ((xor < 1024)) {
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
  } else if ((xor < 32768)) {
    $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get(0), 1))
  } else if ((xor < 1048576)) {
    $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1));
    $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get(0), 1));
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get(0), 1))
  } else if ((xor < 33554432)) {
    $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get((31 & ((index >>> 20) | 0))), 1));
    $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get(0), 1));
    $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get(0), 1));
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get(0), 1))
  } else if ((xor < 1073741824)) {
    $thiz.display4_$eq__AO__V($asArrayOf_O($thiz.display5__AO().get((31 & ((index >>> 25) | 0))), 1));
    $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get(0), 1));
    $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get(0), 1));
    $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get(0), 1));
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get(0), 1))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V($thiz, index, xor) {
  if ((xor < 1024)) {
    if (($thiz.depth__I() === 1)) {
      $thiz.display1_$eq__AO__V(new $ac_O(32));
      $thiz.display1__AO().set(0, $thiz.display0__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V(new $ac_O(32));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO())
  } else if ((xor < 32768)) {
    if (($thiz.depth__I() === 2)) {
      $thiz.display2_$eq__AO__V(new $ac_O(32));
      $thiz.display2__AO().set(0, $thiz.display1__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V(new $ac_O(32));
    $thiz.display1_$eq__AO__V(new $ac_O(32));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO())
  } else if ((xor < 1048576)) {
    if (($thiz.depth__I() === 3)) {
      $thiz.display3_$eq__AO__V(new $ac_O(32));
      $thiz.display3__AO().set(0, $thiz.display2__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V(new $ac_O(32));
    $thiz.display1_$eq__AO__V(new $ac_O(32));
    $thiz.display2_$eq__AO__V(new $ac_O(32));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
    $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO())
  } else if ((xor < 33554432)) {
    if (($thiz.depth__I() === 4)) {
      $thiz.display4_$eq__AO__V(new $ac_O(32));
      $thiz.display4__AO().set(0, $thiz.display3__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V(new $ac_O(32));
    $thiz.display1_$eq__AO__V(new $ac_O(32));
    $thiz.display2_$eq__AO__V(new $ac_O(32));
    $thiz.display3_$eq__AO__V(new $ac_O(32));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
    $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
    $thiz.display4__AO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AO())
  } else if ((xor < 1073741824)) {
    if (($thiz.depth__I() === 5)) {
      $thiz.display5_$eq__AO__V(new $ac_O(32));
      $thiz.display5__AO().set(0, $thiz.display4__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V(new $ac_O(32));
    $thiz.display1_$eq__AO__V(new $ac_O(32));
    $thiz.display2_$eq__AO__V(new $ac_O(32));
    $thiz.display3_$eq__AO__V(new $ac_O(32));
    $thiz.display4_$eq__AO__V(new $ac_O(32));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
    $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
    $thiz.display4__AO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AO());
    $thiz.display5__AO().set((31 & ((index >>> 25) | 0)), $thiz.display4__AO())
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $f_sci_VectorPointer__copyOf__AO__AO($thiz, a) {
  var copy = new $ac_O(a.u.length);
  var length = a.u.length;
  a.copyTo(0, copy, 0, length);
  return copy
}
function $f_sci_VectorPointer__stabilize__I__V($thiz, index) {
  var x1 = (((-1) + $thiz.depth__I()) | 0);
  switch (x1) {
    case 5: {
      var a = $thiz.display5__AO();
      $thiz.display5_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a));
      var a$1 = $thiz.display4__AO();
      $thiz.display4_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$1));
      var a$2 = $thiz.display3__AO();
      $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$2));
      var a$3 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$3));
      var a$4 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$4));
      $thiz.display5__AO().set((31 & ((index >>> 25) | 0)), $thiz.display4__AO());
      $thiz.display4__AO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AO());
      $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
      $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 4: {
      var a$5 = $thiz.display4__AO();
      $thiz.display4_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$5));
      var a$6 = $thiz.display3__AO();
      $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$6));
      var a$7 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$7));
      var a$8 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$8));
      $thiz.display4__AO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AO());
      $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
      $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 3: {
      var a$9 = $thiz.display3__AO();
      $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$9));
      var a$10 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$10));
      var a$11 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$11));
      $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
      $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 2: {
      var a$12 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$12));
      var a$13 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$13));
      $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 1: {
      var a$14 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$14));
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 0: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
}
/** @constructor */
function $c_sci_WrappedString$() {
  this.sci_WrappedString$__f_canBuildFrom = null;
  $n_sci_WrappedString$ = this;
  this.sci_WrappedString$__f_canBuildFrom = new $c_sci_WrappedString$$anon$1()
}
$c_sci_WrappedString$.prototype = new $h_O();
$c_sci_WrappedString$.prototype.constructor = $c_sci_WrappedString$;
/** @constructor */
function $h_sci_WrappedString$() {
  /*<skip>*/
}
$h_sci_WrappedString$.prototype = $c_sci_WrappedString$.prototype;
$c_sci_WrappedString$.prototype.newBuilder__scm_Builder = (function() {
  var this$3 = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
  var f = new $c_sjsr_AnonFunction1(((this$2) => ((x$2) => {
    var x = $as_T(x$2);
    return new $c_sci_WrappedString(x)
  }))(this));
  return new $c_scm_Builder$$anon$1(this$3, f)
});
var $d_sci_WrappedString$ = new $TypeData().initClass({
  sci_WrappedString$: 0
}, false, "scala.collection.immutable.WrappedString$", {
  sci_WrappedString$: 1,
  O: 1
});
$c_sci_WrappedString$.prototype.$classData = $d_sci_WrappedString$;
var $n_sci_WrappedString$;
function $m_sci_WrappedString$() {
  if ((!$n_sci_WrappedString$)) {
    $n_sci_WrappedString$ = new $c_sci_WrappedString$()
  };
  return $n_sci_WrappedString$
}
/** @constructor */
function $c_s_math_Ordered$() {
  /*<skip>*/
}
$c_s_math_Ordered$.prototype = new $h_O();
$c_s_math_Ordered$.prototype.constructor = $c_s_math_Ordered$;
/** @constructor */
function $h_s_math_Ordered$() {
  /*<skip>*/
}
$h_s_math_Ordered$.prototype = $c_s_math_Ordered$.prototype;
var $d_s_math_Ordered$ = new $TypeData().initClass({
  s_math_Ordered$: 0
}, false, "scala.math.Ordered$", {
  s_math_Ordered$: 1,
  O: 1
});
$c_s_math_Ordered$.prototype.$classData = $d_s_math_Ordered$;
var $n_s_math_Ordered$;
function $m_s_math_Ordered$() {
  if ((!$n_s_math_Ordered$)) {
    $n_s_math_Ordered$ = new $c_s_math_Ordered$()
  };
  return $n_s_math_Ordered$
}
/** @constructor */
function $c_s_package$() {
  this.s_package$__f_BigDecimal = null;
  this.s_package$__f_BigInt = null;
  this.s_package$__f_AnyRef = null;
  this.s_package$__f_Traversable = null;
  this.s_package$__f_Iterable = null;
  this.s_package$__f_Seq = null;
  this.s_package$__f_IndexedSeq = null;
  this.s_package$__f_Iterator = null;
  this.s_package$__f_List = null;
  this.s_package$__f_Nil = null;
  this.s_package$__f_$colon$colon = null;
  this.s_package$__f_$plus$colon = null;
  this.s_package$__f_$colon$plus = null;
  this.s_package$__f_Stream = null;
  this.s_package$__f_$hash$colon$colon = null;
  this.s_package$__f_Vector = null;
  this.s_package$__f_StringBuilder = null;
  this.s_package$__f_Range = null;
  this.s_package$__f_Equiv = null;
  this.s_package$__f_Fractional = null;
  this.s_package$__f_Integral = null;
  this.s_package$__f_Numeric = null;
  this.s_package$__f_Ordered = null;
  this.s_package$__f_Ordering = null;
  this.s_package$__f_Either = null;
  this.s_package$__f_Left = null;
  this.s_package$__f_Right = null;
  this.s_package$__f_bitmap$0 = 0;
  $n_s_package$ = this;
  this.s_package$__f_AnyRef = new $c_s_package$$anon$1();
  this.s_package$__f_Traversable = $m_sc_Traversable$();
  this.s_package$__f_Iterable = $m_sc_Iterable$();
  this.s_package$__f_Seq = $m_sc_Seq$();
  this.s_package$__f_IndexedSeq = $m_sc_IndexedSeq$();
  this.s_package$__f_Iterator = $m_sc_Iterator$();
  this.s_package$__f_List = $m_sci_List$();
  this.s_package$__f_Nil = $m_sci_Nil$();
  this.s_package$__f_$colon$colon = $m_sci_$colon$colon$();
  this.s_package$__f_$plus$colon = $m_sc_$plus$colon$();
  this.s_package$__f_$colon$plus = $m_sc_$colon$plus$();
  this.s_package$__f_Stream = $m_sci_Stream$();
  this.s_package$__f_$hash$colon$colon = $m_sci_Stream$$hash$colon$colon$();
  this.s_package$__f_Vector = $m_sci_Vector$();
  this.s_package$__f_StringBuilder = $m_scm_StringBuilder$();
  this.s_package$__f_Range = $m_sci_Range$();
  this.s_package$__f_Equiv = $m_s_math_Equiv$();
  this.s_package$__f_Fractional = $m_s_math_Fractional$();
  this.s_package$__f_Integral = $m_s_math_Integral$();
  this.s_package$__f_Numeric = $m_s_math_Numeric$();
  this.s_package$__f_Ordered = $m_s_math_Ordered$();
  this.s_package$__f_Ordering = $m_s_math_Ordering$();
  this.s_package$__f_Either = $m_s_util_Either$();
  this.s_package$__f_Left = $m_s_util_Left$();
  this.s_package$__f_Right = $m_s_util_Right$()
}
$c_s_package$.prototype = new $h_O();
$c_s_package$.prototype.constructor = $c_s_package$;
/** @constructor */
function $h_s_package$() {
  /*<skip>*/
}
$h_s_package$.prototype = $c_s_package$.prototype;
var $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
var $n_s_package$;
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
/** @constructor */
function $c_s_reflect_ClassManifestFactory$() {
  this.s_reflect_ClassManifestFactory$__f_Byte = null;
  this.s_reflect_ClassManifestFactory$__f_Short = null;
  this.s_reflect_ClassManifestFactory$__f_Char = null;
  this.s_reflect_ClassManifestFactory$__f_Int = null;
  this.s_reflect_ClassManifestFactory$__f_Long = null;
  this.s_reflect_ClassManifestFactory$__f_Float = null;
  this.s_reflect_ClassManifestFactory$__f_Double = null;
  this.s_reflect_ClassManifestFactory$__f_Boolean = null;
  this.s_reflect_ClassManifestFactory$__f_Unit = null;
  this.s_reflect_ClassManifestFactory$__f_Any = null;
  this.s_reflect_ClassManifestFactory$__f_Object = null;
  this.s_reflect_ClassManifestFactory$__f_AnyVal = null;
  this.s_reflect_ClassManifestFactory$__f_Nothing = null;
  this.s_reflect_ClassManifestFactory$__f_Null = null;
  $n_s_reflect_ClassManifestFactory$ = this;
  this.s_reflect_ClassManifestFactory$__f_Byte = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.s_reflect_ClassManifestFactory$__f_Short = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.s_reflect_ClassManifestFactory$__f_Char = $m_s_reflect_ManifestFactory$CharManifest$();
  this.s_reflect_ClassManifestFactory$__f_Int = $m_s_reflect_ManifestFactory$IntManifest$();
  this.s_reflect_ClassManifestFactory$__f_Long = $m_s_reflect_ManifestFactory$LongManifest$();
  this.s_reflect_ClassManifestFactory$__f_Float = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.s_reflect_ClassManifestFactory$__f_Double = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.s_reflect_ClassManifestFactory$__f_Boolean = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.s_reflect_ClassManifestFactory$__f_Unit = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.s_reflect_ClassManifestFactory$__f_Any = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.s_reflect_ClassManifestFactory$__f_Object = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.s_reflect_ClassManifestFactory$__f_AnyVal = $m_s_reflect_ManifestFactory$AnyValManifest$();
  this.s_reflect_ClassManifestFactory$__f_Nothing = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.s_reflect_ClassManifestFactory$__f_Null = $m_s_reflect_ManifestFactory$NullManifest$()
}
$c_s_reflect_ClassManifestFactory$.prototype = new $h_O();
$c_s_reflect_ClassManifestFactory$.prototype.constructor = $c_s_reflect_ClassManifestFactory$;
/** @constructor */
function $h_s_reflect_ClassManifestFactory$() {
  /*<skip>*/
}
$h_s_reflect_ClassManifestFactory$.prototype = $c_s_reflect_ClassManifestFactory$.prototype;
var $d_s_reflect_ClassManifestFactory$ = new $TypeData().initClass({
  s_reflect_ClassManifestFactory$: 0
}, false, "scala.reflect.ClassManifestFactory$", {
  s_reflect_ClassManifestFactory$: 1,
  O: 1
});
$c_s_reflect_ClassManifestFactory$.prototype.$classData = $d_s_reflect_ClassManifestFactory$;
var $n_s_reflect_ClassManifestFactory$;
function $m_s_reflect_ClassManifestFactory$() {
  if ((!$n_s_reflect_ClassManifestFactory$)) {
    $n_s_reflect_ClassManifestFactory$ = new $c_s_reflect_ClassManifestFactory$()
  };
  return $n_s_reflect_ClassManifestFactory$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$() {
  /*<skip>*/
}
$c_s_reflect_ManifestFactory$.prototype = new $h_O();
$c_s_reflect_ManifestFactory$.prototype.constructor = $c_s_reflect_ManifestFactory$;
/** @constructor */
function $h_s_reflect_ManifestFactory$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$.prototype = $c_s_reflect_ManifestFactory$.prototype;
var $d_s_reflect_ManifestFactory$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$: 0
}, false, "scala.reflect.ManifestFactory$", {
  s_reflect_ManifestFactory$: 1,
  O: 1
});
$c_s_reflect_ManifestFactory$.prototype.$classData = $d_s_reflect_ManifestFactory$;
var $n_s_reflect_ManifestFactory$;
function $m_s_reflect_ManifestFactory$() {
  if ((!$n_s_reflect_ManifestFactory$)) {
    $n_s_reflect_ManifestFactory$ = new $c_s_reflect_ManifestFactory$()
  };
  return $n_s_reflect_ManifestFactory$
}
/** @constructor */
function $c_s_reflect_package$() {
  this.s_reflect_package$__f_ClassManifest = null;
  this.s_reflect_package$__f_Manifest = null;
  $n_s_reflect_package$ = this;
  this.s_reflect_package$__f_ClassManifest = $m_s_reflect_ClassManifestFactory$();
  this.s_reflect_package$__f_Manifest = $m_s_reflect_ManifestFactory$()
}
$c_s_reflect_package$.prototype = new $h_O();
$c_s_reflect_package$.prototype.constructor = $c_s_reflect_package$;
/** @constructor */
function $h_s_reflect_package$() {
  /*<skip>*/
}
$h_s_reflect_package$.prototype = $c_s_reflect_package$.prototype;
var $d_s_reflect_package$ = new $TypeData().initClass({
  s_reflect_package$: 0
}, false, "scala.reflect.package$", {
  s_reflect_package$: 1,
  O: 1
});
$c_s_reflect_package$.prototype.$classData = $d_s_reflect_package$;
var $n_s_reflect_package$;
function $m_s_reflect_package$() {
  if ((!$n_s_reflect_package$)) {
    $n_s_reflect_package$ = new $c_s_reflect_package$()
  };
  return $n_s_reflect_package$
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
  /*<skip>*/
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
  /*<skip>*/
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y)
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y)
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      return (x2$1 === $uC(x3))
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var value = $uC(x3);
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2)
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return x4.equals__O__Z(x2)
    } else {
      return false
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2))
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
    } else {
      return false
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    return ($uC(xc) === $uC(x2))
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      return (x2$1 === $uC(xc))
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var value = $uC(xc);
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
    }
  } else {
    return ((xc === null) && (y === null))
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
var $d_sr_Null$ = new $TypeData().initClass({
  sr_Null$: 0
}, false, "scala.runtime.Null$", {
  sr_Null$: 1,
  O: 1
});
/** @constructor */
function $c_sr_ScalaRunTime$() {
  /*<skip>*/
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return x2.get(idx)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return x3.get(idx)
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return x4.get(idx)
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return x5.get(idx)
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return x6.get(idx)
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC(x7.get(idx))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return x8.get(idx)
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return x9.get(idx)
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return x10.get(idx)
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    x2.set(idx, value)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    x3.set(idx, $uI(value))
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    x4.set(idx, $uD(value))
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    x5.set(idx, $uJ(value))
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    x6.set(idx, $uF(value))
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    x7.set(idx, $uC(value))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    x8.set(idx, $uB(value))
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    x9.set(idx, $uS(value))
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    x10.set(idx, $uZ(value))
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.array_length__O__I = (function(xs) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return x2.u.length
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return x3.u.length
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return x4.u.length
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return x5.u.length
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return x6.u.length
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return x7.u.length
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return x8.u.length
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return x9.u.length
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return x10.u.length
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = x.productIterator__sc_Iterator();
  var start = (x.productPrefix__T() + "(");
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this$1, start, ",", ")")
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
/** @constructor */
function $c_sr_Statics$() {
  /*<skip>*/
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
  /*<skip>*/
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + $imul(5, h)) | 0)
});
$c_sr_Statics$.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = $imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = $imul(461845907, k);
  return (hash ^ k)
});
$c_sr_Statics$.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.avalanche__I__I((hash ^ length))
});
$c_sr_Statics$.prototype.avalanche__I__I = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = $imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = $imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi))
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3)
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi))
  } else {
    return $dp_hashCode__I(x)
  }
});
var $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
/** @constructor */
function $c_sjsr_package$() {
  /*<skip>*/
}
$c_sjsr_package$.prototype = new $h_O();
$c_sjsr_package$.prototype.constructor = $c_sjsr_package$;
/** @constructor */
function $h_sjsr_package$() {
  /*<skip>*/
}
$h_sjsr_package$.prototype = $c_sjsr_package$.prototype;
$c_sjsr_package$.prototype.wrapJavaScriptException__O__jl_Throwable = (function(e) {
  if ((e instanceof $c_jl_Throwable)) {
    var x2 = $as_jl_Throwable(e);
    return x2
  } else {
    return new $c_sjs_js_JavaScriptException(e)
  }
});
$c_sjsr_package$.prototype.unwrapJavaScriptException__jl_Throwable__O = (function(th) {
  if ((th instanceof $c_sjs_js_JavaScriptException)) {
    var x2 = $as_sjs_js_JavaScriptException(th);
    var e = x2.sjs_js_JavaScriptException__f_exception;
    return e
  } else {
    return th
  }
});
var $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
var $n_sjsr_package$;
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$()
  };
  return $n_sjsr_package$
}
/** @constructor */
function $c_s_sys_package$() {
  /*<skip>*/
}
$c_s_sys_package$.prototype = new $h_O();
$c_s_sys_package$.prototype.constructor = $c_s_sys_package$;
/** @constructor */
function $h_s_sys_package$() {
  /*<skip>*/
}
$h_s_sys_package$.prototype = $c_s_sys_package$.prototype;
$c_s_sys_package$.prototype.error__T__E = (function(message) {
  throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O($ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), message))
});
var $d_s_sys_package$ = new $TypeData().initClass({
  s_sys_package$: 0
}, false, "scala.sys.package$", {
  s_sys_package$: 1,
  O: 1
});
$c_s_sys_package$.prototype.$classData = $d_s_sys_package$;
var $n_s_sys_package$;
function $m_s_sys_package$() {
  if ((!$n_s_sys_package$)) {
    $n_s_sys_package$ = new $c_s_sys_package$()
  };
  return $n_s_sys_package$
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.s_util_DynamicVariable__f_v = null;
  this.s_util_DynamicVariable__f_v = init
}
$c_s_util_DynamicVariable.prototype = new $h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
  /*<skip>*/
}
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")")
});
var $d_s_util_DynamicVariable = new $TypeData().initClass({
  s_util_DynamicVariable: 0
}, false, "scala.util.DynamicVariable", {
  s_util_DynamicVariable: 1,
  O: 1
});
$c_s_util_DynamicVariable.prototype.$classData = $d_s_util_DynamicVariable;
/** @constructor */
function $c_s_util_control_Breaks() {
  this.s_util_control_Breaks__f_scala$util$control$Breaks$$breakException = null;
  this.s_util_control_Breaks__f_scala$util$control$Breaks$$breakException = new $c_s_util_control_BreakControl()
}
$c_s_util_control_Breaks.prototype = new $h_O();
$c_s_util_control_Breaks.prototype.constructor = $c_s_util_control_Breaks;
/** @constructor */
function $h_s_util_control_Breaks() {
  /*<skip>*/
}
$h_s_util_control_Breaks.prototype = $c_s_util_control_Breaks.prototype;
var $d_s_util_control_Breaks = new $TypeData().initClass({
  s_util_control_Breaks: 0
}, false, "scala.util.control.Breaks", {
  s_util_control_Breaks: 1,
  O: 1
});
$c_s_util_control_Breaks.prototype.$classData = $d_s_util_control_Breaks;
function $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable($thiz) {
  var this$1 = $m_s_util_control_NoStackTrace$();
  if (this$1.s_util_control_NoStackTrace$__f__noSuppression) {
    return $c_jl_Throwable.prototype.fillInStackTrace__jl_Throwable.call($thiz)
  } else {
    return $as_jl_Throwable($thiz)
  }
}
function $p_s_util_hashing_MurmurHash3__avalanche__I__I($thiz, hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = $imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = $imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + $imul(5, h)) | 0)
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = $imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = $imul(461845907, k);
  return (hash ^ k)
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, (hash ^ length))
});
$c_s_util_hashing_MurmurHash3.prototype.product2Hash__O__O__I__I = (function(x, y, seed) {
  var h = seed;
  h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x));
  h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(y));
  return this.finalizeHash__I__I__I(h, 2)
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__I = (function(x, seed) {
  var arr = x.productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.productPrefix__T())
  } else {
    var h = seed;
    var i = 0;
    while ((i < arr)) {
      var $$x1 = h;
      var x$1 = x.productElement__I__O(i);
      h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, arr)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_TraversableOnce__I__I = (function(xs, seed) {
  if (xs.isEmpty__Z()) {
    var h = seed;
    h = this.mix__I__I__I(h, 0);
    h = this.mix__I__I__I(h, 0);
    h = this.mixLast__I__I__I(h, 1);
    return this.finalizeHash__I__I__I(h, 0)
  } else {
    var hasher = new $c_s_util_hashing_MurmurHash3$hasher$1(this);
    xs.foreach__F1__V(hasher);
    var h$2 = seed;
    h$2 = this.mix__I__I__I(h$2, hasher.s_util_hashing_MurmurHash3$hasher$1__f_a);
    h$2 = this.mix__I__I__I(h$2, hasher.s_util_hashing_MurmurHash3$hasher$1__f_b);
    h$2 = this.mixLast__I__I__I(h$2, hasher.s_util_hashing_MurmurHash3$hasher$1__f_c);
    return this.finalizeHash__I__I__I(h$2, hasher.s_util_hashing_MurmurHash3$hasher$1__f_n)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_TraversableOnce__I__I = (function(xs, seed) {
  if (xs.isEmpty__Z()) {
    return this.finalizeHash__I__I__I(seed, 0)
  } else {
    var hasher = new $c_s_util_hashing_MurmurHash3$hasher$2(this, seed);
    xs.foreach__F1__V(hasher);
    return this.finalizeHash__I__I__I(hasher.s_util_hashing_MurmurHash3$hasher$2__f_h, hasher.s_util_hashing_MurmurHash3$hasher$2__f_n)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var elems = xs;
  while ((!elems.isEmpty__Z())) {
    var head = elems.head__O();
    var this$1 = elems;
    var tail = this$1.tail__sci_List();
    h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(head));
    n = ((1 + n) | 0);
    elems = tail
  };
  return this.finalizeHash__I__I__I(h, n)
});
/** @constructor */
function $c_Lscalatags_DataConverters$CssNumber(outer, x, evidence$1) {
  this.Lscalatags_DataConverters$CssNumber__f_x = null;
  this.Lscalatags_DataConverters$CssNumber__f_$outer = null;
  this.Lscalatags_DataConverters$CssNumber__f_x = x;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.Lscalatags_DataConverters$CssNumber__f_$outer = outer
  }
}
$c_Lscalatags_DataConverters$CssNumber.prototype = new $h_O();
$c_Lscalatags_DataConverters$CssNumber.prototype.constructor = $c_Lscalatags_DataConverters$CssNumber;
/** @constructor */
function $h_Lscalatags_DataConverters$CssNumber() {
  /*<skip>*/
}
$h_Lscalatags_DataConverters$CssNumber.prototype = $c_Lscalatags_DataConverters$CssNumber.prototype;
$c_Lscalatags_DataConverters$CssNumber.prototype.px__T = (function() {
  var $$x1 = $m_s_Predef$any2stringadd$();
  var self = this.Lscalatags_DataConverters$CssNumber__f_x;
  return $$x1.$plus$extension__O__T__T(self, "px")
});
$c_Lscalatags_DataConverters$CssNumber.prototype.em__T = (function() {
  var $$x1 = $m_s_Predef$any2stringadd$();
  var self = this.Lscalatags_DataConverters$CssNumber__f_x;
  return $$x1.$plus$extension__O__T__T(self, "em")
});
var $d_Lscalatags_DataConverters$CssNumber = new $TypeData().initClass({
  Lscalatags_DataConverters$CssNumber: 0
}, false, "scalatags.DataConverters$CssNumber", {
  Lscalatags_DataConverters$CssNumber: 1,
  O: 1
});
$c_Lscalatags_DataConverters$CssNumber.prototype.$classData = $d_Lscalatags_DataConverters$CssNumber;
/** @constructor */
function $c_Lscalatags_Escaping$() {
  this.Lscalatags_Escaping$__f_tagRegex = null;
  $n_Lscalatags_Escaping$ = this;
  var this$2 = new $c_sci_StringOps("^[a-z][:\\w0-9-]*$");
  var groupNames = $m_sci_Nil$();
  var this$ = this$2.sci_StringOps__f_repr;
  this.Lscalatags_Escaping$__f_tagRegex = $ct_s_util_matching_Regex__T__sc_Seq__(new $c_s_util_matching_Regex(), this$, groupNames)
}
$c_Lscalatags_Escaping$.prototype = new $h_O();
$c_Lscalatags_Escaping$.prototype.constructor = $c_Lscalatags_Escaping$;
/** @constructor */
function $h_Lscalatags_Escaping$() {
  /*<skip>*/
}
$h_Lscalatags_Escaping$.prototype = $c_Lscalatags_Escaping$.prototype;
$c_Lscalatags_Escaping$.prototype.validTag__T__Z = (function(s) {
  var this$1 = this.Lscalatags_Escaping$__f_tagRegex.unapplySeq__jl_CharSequence__s_Option(s);
  return (!this$1.isEmpty__Z())
});
$c_Lscalatags_Escaping$.prototype.validAttrName__T__Z = (function(s) {
  var len = $uI(s.length);
  if ((len === 0)) {
    return false
  };
  var sc = (65535 & $uI(s.charCodeAt(0)));
  var startCharValid = ((((sc >= 97) && (sc <= 122)) || ((sc >= 65) && (sc <= 90))) || (sc === 58));
  if ((!startCharValid)) {
    return false
  };
  var pos = 1;
  while ((pos < len)) {
    var index = pos;
    var c = (65535 & $uI(s.charCodeAt(index)));
    var valid = ((((((((c >= 97) && (c <= 122)) || ((c >= 65) && (c <= 90))) || ((c >= 48) && (c <= 57))) || (c === 45)) || (c === 58)) || (c === 46)) || (c === 95));
    if ((!valid)) {
      return false
    };
    pos = ((1 + pos) | 0)
  };
  return true
});
var $d_Lscalatags_Escaping$ = new $TypeData().initClass({
  Lscalatags_Escaping$: 0
}, false, "scalatags.Escaping$", {
  Lscalatags_Escaping$: 1,
  O: 1
});
$c_Lscalatags_Escaping$.prototype.$classData = $d_Lscalatags_Escaping$;
var $n_Lscalatags_Escaping$;
function $m_Lscalatags_Escaping$() {
  if ((!$n_Lscalatags_Escaping$)) {
    $n_Lscalatags_Escaping$ = new $c_Lscalatags_Escaping$()
  };
  return $n_Lscalatags_Escaping$
}
function $is_Lscalatags_generic_Modifier(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lscalatags_generic_Modifier)))
}
function $as_Lscalatags_generic_Modifier(obj) {
  return (($is_Lscalatags_generic_Modifier(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Modifier"))
}
function $isArrayOf_Lscalatags_generic_Modifier(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Modifier)))
}
function $asArrayOf_Lscalatags_generic_Modifier(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Modifier(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Modifier;", depth))
}
function $is_Lscalatags_generic_Namespace(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lscalatags_generic_Namespace)))
}
function $as_Lscalatags_generic_Namespace(obj) {
  return (($is_Lscalatags_generic_Namespace(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Namespace"))
}
function $isArrayOf_Lscalatags_generic_Namespace(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Namespace)))
}
function $asArrayOf_Lscalatags_generic_Namespace(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Namespace(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Namespace;", depth))
}
/** @constructor */
function $c_Lscalatags_generic_Namespace$() {
  this.Lscalatags_generic_Namespace$__f_htmlNamespaceConfig = null;
  this.Lscalatags_generic_Namespace$__f_svgNamespaceConfig = null;
  this.Lscalatags_generic_Namespace$__f_svgXlinkNamespaceConfig = null;
  $n_Lscalatags_generic_Namespace$ = this;
  this.Lscalatags_generic_Namespace$__f_htmlNamespaceConfig = new $c_Lscalatags_generic_Namespace$$anon$1();
  this.Lscalatags_generic_Namespace$__f_svgNamespaceConfig = new $c_Lscalatags_generic_Namespace$$anon$2();
  this.Lscalatags_generic_Namespace$__f_svgXlinkNamespaceConfig = new $c_Lscalatags_generic_Namespace$$anon$3()
}
$c_Lscalatags_generic_Namespace$.prototype = new $h_O();
$c_Lscalatags_generic_Namespace$.prototype.constructor = $c_Lscalatags_generic_Namespace$;
/** @constructor */
function $h_Lscalatags_generic_Namespace$() {
  /*<skip>*/
}
$h_Lscalatags_generic_Namespace$.prototype = $c_Lscalatags_generic_Namespace$.prototype;
var $d_Lscalatags_generic_Namespace$ = new $TypeData().initClass({
  Lscalatags_generic_Namespace$: 0
}, false, "scalatags.generic.Namespace$", {
  Lscalatags_generic_Namespace$: 1,
  O: 1
});
$c_Lscalatags_generic_Namespace$.prototype.$classData = $d_Lscalatags_generic_Namespace$;
var $n_Lscalatags_generic_Namespace$;
function $m_Lscalatags_generic_Namespace$() {
  if ((!$n_Lscalatags_generic_Namespace$)) {
    $n_Lscalatags_generic_Namespace$ = new $c_Lscalatags_generic_Namespace$()
  };
  return $n_Lscalatags_generic_Namespace$
}
function $f_Lscalatags_generic_Styles$TextAlign__right__Lscalatags_generic_StylePair($thiz) {
  return $as_Lscalatags_generic_Style($thiz).$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair("right", new $c_Lscalatags_JsDom$GenericStyle())
}
function $p_jl_Character$__getTypeGE256__I__I($thiz, codePoint) {
  return $p_jl_Character$__charTypes__AI($thiz).get($p_jl_Character$__findIndexOfRange__AI__I__Z__I($thiz, $p_jl_Character$__charTypeIndices__AI($thiz), codePoint, false))
}
function $p_jl_Character$__java$lang$Character$$charTypesFirst256$lzycompute__AI($thiz) {
  if (((((1 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_java$lang$Character$$charTypesFirst256 = new $ac_I(new Int32Array([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 12, 24, 24, 24, 26, 24, 24, 24, 21, 22, 24, 25, 24, 20, 24, 24, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 24, 24, 25, 25, 25, 24, 24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21, 24, 22, 27, 23, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 21, 25, 22, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 12, 24, 26, 26, 26, 26, 28, 24, 27, 28, 5, 29, 25, 16, 28, 27, 28, 25, 11, 11, 27, 2, 24, 24, 27, 11, 5, 30, 11, 11, 11, 24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 25, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 25, 2, 2, 2, 2, 2, 2, 2, 2]));
    $thiz.jl_Character$__f_bitmap$0 = (((1 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_java$lang$Character$$charTypesFirst256
}
function $p_jl_Character$__charTypeIndices$lzycompute__AI($thiz) {
  if (((((2 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    var deltas = new $ac_I(new Int32Array([257, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 2, 1, 1, 1, 2, 1, 3, 2, 4, 1, 2, 1, 3, 3, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 3, 1, 1, 1, 2, 2, 1, 1, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 2, 1, 2, 2, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 69, 1, 27, 18, 4, 12, 14, 5, 7, 1, 1, 1, 17, 112, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 1, 5, 2, 1, 1, 3, 1, 1, 1, 2, 1, 17, 1, 9, 35, 1, 2, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 2, 2, 51, 48, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 38, 2, 1, 6, 1, 39, 1, 1, 1, 4, 1, 1, 45, 1, 1, 1, 2, 1, 2, 1, 1, 8, 27, 5, 3, 2, 11, 5, 1, 3, 2, 1, 2, 2, 11, 1, 2, 2, 32, 1, 10, 21, 10, 4, 2, 1, 99, 1, 1, 7, 1, 1, 6, 2, 2, 1, 4, 2, 10, 3, 2, 1, 14, 1, 1, 1, 1, 30, 27, 2, 89, 11, 1, 14, 10, 33, 9, 2, 1, 3, 1, 5, 22, 4, 1, 9, 1, 3, 1, 5, 2, 15, 1, 25, 3, 2, 1, 65, 1, 1, 11, 55, 27, 1, 3, 1, 54, 1, 1, 1, 1, 3, 8, 4, 1, 2, 1, 7, 10, 2, 2, 10, 1, 1, 6, 1, 7, 1, 1, 2, 1, 8, 2, 2, 2, 22, 1, 7, 1, 1, 3, 4, 2, 1, 1, 3, 4, 2, 2, 2, 2, 1, 1, 8, 1, 4, 2, 1, 3, 2, 2, 10, 2, 2, 6, 1, 1, 5, 2, 1, 1, 6, 4, 2, 2, 22, 1, 7, 1, 2, 1, 2, 1, 2, 2, 1, 1, 3, 2, 4, 2, 2, 3, 3, 1, 7, 4, 1, 1, 7, 10, 2, 3, 1, 11, 2, 1, 1, 9, 1, 3, 1, 22, 1, 7, 1, 2, 1, 5, 2, 1, 1, 3, 5, 1, 2, 1, 1, 2, 1, 2, 1, 15, 2, 2, 2, 10, 1, 1, 15, 1, 2, 1, 8, 2, 2, 2, 22, 1, 7, 1, 2, 1, 5, 2, 1, 1, 1, 1, 1, 4, 2, 2, 2, 2, 1, 8, 1, 1, 4, 2, 1, 3, 2, 2, 10, 1, 1, 6, 10, 1, 1, 1, 6, 3, 3, 1, 4, 3, 2, 1, 1, 1, 2, 3, 2, 3, 3, 3, 12, 4, 2, 1, 2, 3, 3, 1, 3, 1, 2, 1, 6, 1, 14, 10, 3, 6, 1, 1, 6, 3, 1, 8, 1, 3, 1, 23, 1, 10, 1, 5, 3, 1, 3, 4, 1, 3, 1, 4, 7, 2, 1, 2, 6, 2, 2, 2, 10, 8, 7, 1, 2, 2, 1, 8, 1, 3, 1, 23, 1, 10, 1, 5, 2, 1, 1, 1, 1, 5, 1, 1, 2, 1, 2, 2, 7, 2, 7, 1, 1, 2, 2, 2, 10, 1, 2, 15, 2, 1, 8, 1, 3, 1, 41, 2, 1, 3, 4, 1, 3, 1, 3, 1, 1, 8, 1, 8, 2, 2, 2, 10, 6, 3, 1, 6, 2, 2, 1, 18, 3, 24, 1, 9, 1, 1, 2, 7, 3, 1, 4, 3, 3, 1, 1, 1, 8, 18, 2, 1, 12, 48, 1, 2, 7, 4, 1, 6, 1, 8, 1, 10, 2, 37, 2, 1, 1, 2, 2, 1, 1, 2, 1, 6, 4, 1, 7, 1, 3, 1, 1, 1, 1, 2, 2, 1, 4, 1, 2, 6, 1, 2, 1, 2, 5, 1, 1, 1, 6, 2, 10, 2, 4, 32, 1, 3, 15, 1, 1, 3, 2, 6, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 8, 1, 36, 4, 14, 1, 5, 1, 2, 5, 11, 1, 36, 1, 8, 1, 6, 1, 2, 5, 4, 2, 37, 43, 2, 4, 1, 6, 1, 2, 2, 2, 1, 10, 6, 6, 2, 2, 4, 3, 1, 3, 2, 7, 3, 4, 13, 1, 2, 2, 6, 1, 1, 1, 10, 3, 1, 2, 38, 1, 1, 5, 1, 2, 43, 1, 1, 332, 1, 4, 2, 7, 1, 1, 1, 4, 2, 41, 1, 4, 2, 33, 1, 4, 2, 7, 1, 1, 1, 4, 2, 15, 1, 57, 1, 4, 2, 67, 2, 3, 9, 20, 3, 16, 10, 6, 85, 11, 1, 620, 2, 17, 1, 26, 1, 1, 3, 75, 3, 3, 15, 13, 1, 4, 3, 11, 18, 3, 2, 9, 18, 2, 12, 13, 1, 3, 1, 2, 12, 52, 2, 1, 7, 8, 1, 2, 11, 3, 1, 3, 1, 1, 1, 2, 10, 6, 10, 6, 6, 1, 4, 3, 1, 1, 10, 6, 35, 1, 52, 8, 41, 1, 1, 5, 70, 10, 29, 3, 3, 4, 2, 3, 4, 2, 1, 6, 3, 4, 1, 3, 2, 10, 30, 2, 5, 11, 44, 4, 17, 7, 2, 6, 10, 1, 3, 34, 23, 2, 3, 2, 2, 53, 1, 1, 1, 7, 1, 1, 1, 1, 2, 8, 6, 10, 2, 1, 10, 6, 10, 6, 7, 1, 6, 82, 4, 1, 47, 1, 1, 5, 1, 1, 5, 1, 2, 7, 4, 10, 7, 10, 9, 9, 3, 2, 1, 30, 1, 4, 2, 2, 1, 1, 2, 2, 10, 44, 1, 1, 2, 3, 1, 1, 3, 2, 8, 4, 36, 8, 8, 2, 2, 3, 5, 10, 3, 3, 10, 30, 6, 2, 64, 8, 8, 3, 1, 13, 1, 7, 4, 1, 4, 2, 1, 2, 9, 44, 63, 13, 1, 34, 37, 39, 21, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 8, 6, 2, 6, 2, 8, 8, 8, 8, 6, 2, 6, 2, 8, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 14, 2, 8, 8, 8, 8, 8, 8, 5, 1, 2, 4, 1, 1, 1, 3, 3, 1, 2, 4, 1, 3, 4, 2, 2, 4, 1, 3, 8, 5, 3, 2, 3, 1, 2, 4, 1, 2, 1, 11, 5, 6, 2, 1, 1, 1, 2, 1, 1, 1, 8, 1, 1, 5, 1, 9, 1, 1, 4, 2, 3, 1, 1, 1, 11, 1, 1, 1, 10, 1, 5, 5, 6, 1, 1, 2, 6, 3, 1, 1, 1, 10, 3, 1, 1, 1, 13, 3, 32, 16, 13, 4, 1, 3, 12, 15, 2, 1, 4, 1, 2, 1, 3, 2, 3, 1, 1, 1, 2, 1, 5, 6, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 4, 1, 2, 2, 2, 5, 1, 4, 1, 1, 2, 1, 1, 16, 35, 1, 1, 4, 1, 6, 5, 5, 2, 4, 1, 2, 1, 2, 1, 7, 1, 31, 2, 2, 1, 1, 1, 31, 268, 8, 4, 20, 2, 7, 1, 1, 81, 1, 30, 25, 40, 6, 18, 12, 39, 25, 11, 21, 60, 78, 22, 183, 1, 9, 1, 54, 8, 111, 1, 144, 1, 103, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 30, 44, 5, 1, 1, 31, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 256, 131, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 63, 1, 1, 1, 1, 32, 1, 1, 258, 48, 21, 2, 6, 3, 10, 166, 47, 1, 47, 1, 1, 1, 3, 2, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 1, 6, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 6, 1, 1, 1, 1, 3, 1, 1, 5, 4, 1, 2, 38, 1, 1, 5, 1, 2, 56, 7, 1, 1, 14, 1, 23, 9, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 32, 2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 9, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 10, 2, 68, 26, 1, 89, 12, 214, 26, 12, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 9, 4, 2, 1, 5, 2, 3, 1, 1, 1, 2, 1, 86, 2, 2, 2, 2, 1, 1, 90, 1, 3, 1, 5, 41, 3, 94, 1, 2, 4, 10, 27, 5, 36, 12, 16, 31, 1, 10, 30, 8, 1, 15, 32, 10, 39, 15, 320, 6582, 10, 64, 20941, 51, 21, 1, 1143, 3, 55, 9, 40, 6, 2, 268, 1, 3, 16, 10, 2, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 70, 10, 2, 6, 8, 23, 9, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 77, 2, 1, 7, 1, 3, 1, 4, 1, 23, 2, 2, 1, 4, 4, 6, 2, 1, 1, 6, 52, 4, 8, 2, 50, 16, 1, 9, 2, 10, 6, 18, 6, 3, 1, 4, 10, 28, 8, 2, 23, 11, 2, 11, 1, 29, 3, 3, 1, 47, 1, 2, 4, 2, 1, 4, 13, 1, 1, 10, 4, 2, 32, 41, 6, 2, 2, 2, 2, 9, 3, 1, 8, 1, 1, 2, 10, 2, 4, 16, 1, 6, 3, 1, 1, 4, 48, 1, 1, 3, 2, 2, 5, 2, 1, 1, 1, 24, 2, 1, 2, 11, 1, 2, 2, 2, 1, 2, 1, 1, 10, 6, 2, 6, 2, 6, 9, 7, 1, 7, 145, 35, 2, 1, 2, 1, 2, 1, 1, 1, 2, 10, 6, 11172, 12, 23, 4, 49, 4, 2048, 6400, 366, 2, 106, 38, 7, 12, 5, 5, 1, 1, 10, 1, 13, 1, 5, 1, 1, 1, 2, 1, 2, 1, 108, 16, 17, 363, 1, 1, 16, 64, 2, 54, 40, 12, 1, 1, 2, 16, 7, 1, 1, 1, 6, 7, 9, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4, 3, 3, 1, 4, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 2, 4, 5, 1, 135, 2, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 2, 10, 2, 3, 2, 26, 1, 1, 1, 1, 1, 1, 26, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 10, 1, 45, 2, 31, 3, 6, 2, 6, 2, 6, 2, 3, 3, 2, 1, 1, 1, 2, 1, 1, 4, 2, 10, 3, 2, 2, 12, 1, 26, 1, 19, 1, 2, 1, 15, 2, 14, 34, 123, 5, 3, 4, 45, 3, 9, 53, 4, 17, 1, 5, 12, 52, 45, 1, 130, 29, 3, 49, 47, 31, 1, 4, 12, 17, 1, 8, 1, 53, 30, 1, 1, 36, 4, 8, 1, 5, 42, 40, 40, 78, 2, 10, 854, 6, 2, 1, 1, 44, 1, 2, 3, 1, 2, 23, 1, 1, 8, 160, 22, 6, 3, 1, 26, 5, 1, 64, 56, 6, 2, 64, 1, 3, 1, 2, 5, 4, 4, 1, 3, 1, 27, 4, 3, 4, 1, 8, 8, 9, 7, 29, 2, 1, 128, 54, 3, 7, 22, 2, 8, 19, 5, 8, 128, 73, 535, 31, 385, 1, 1, 1, 53, 15, 7, 4, 20, 10, 16, 2, 1, 45, 3, 4, 2, 2, 2, 1, 4, 14, 25, 7, 10, 6, 3, 36, 5, 1, 8, 1, 10, 4, 60, 2, 1, 48, 3, 9, 2, 4, 4, 7, 10, 1190, 43, 1, 1, 1, 2, 6, 1, 1, 8, 10, 2358, 879, 145, 99, 13, 4, 2956, 1071, 13265, 569, 1223, 69, 11, 1, 46, 16, 4, 13, 16480, 2, 8190, 246, 10, 39, 2, 60, 2, 3, 3, 6, 8, 8, 2, 7, 30, 4, 48, 34, 66, 3, 1, 186, 87, 9, 18, 142, 26, 26, 26, 7, 1, 18, 26, 26, 1, 1, 2, 2, 1, 2, 2, 2, 4, 1, 8, 4, 1, 1, 1, 7, 1, 11, 26, 26, 2, 1, 4, 2, 8, 1, 7, 1, 26, 2, 1, 4, 1, 5, 1, 1, 3, 7, 1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 28, 2, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 1, 1, 2, 50, 5632, 4, 1, 27, 1, 2, 1, 1, 2, 1, 1, 10, 1, 4, 1, 1, 1, 1, 6, 1, 4, 1, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 4, 1, 7, 1, 4, 1, 4, 1, 1, 1, 10, 1, 17, 5, 3, 1, 5, 1, 17, 52, 2, 270, 44, 4, 100, 12, 15, 2, 14, 2, 15, 1, 15, 32, 11, 5, 31, 1, 60, 4, 43, 75, 29, 13, 43, 5, 9, 7, 2, 174, 33, 15, 6, 1, 70, 3, 20, 12, 37, 1, 5, 21, 17, 15, 63, 1, 1, 1, 182, 1, 4, 3, 62, 2, 4, 12, 24, 147, 70, 4, 11, 48, 70, 58, 116, 2188, 42711, 41, 4149, 11, 222, 16354, 542, 722403, 1, 30, 96, 128, 240, 65040, 65534, 2, 65534]));
    $thiz.jl_Character$__f_charTypeIndices = $p_jl_Character$__uncompressDeltas__AI__AI($thiz, deltas);
    $thiz.jl_Character$__f_bitmap$0 = (((2 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_charTypeIndices
}
function $p_jl_Character$__charTypeIndices__AI($thiz) {
  return (((((2 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__charTypeIndices$lzycompute__AI($thiz) : $thiz.jl_Character$__f_charTypeIndices)
}
function $p_jl_Character$__charTypes$lzycompute__AI($thiz) {
  if (((((4 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_charTypes = new $ac_I(new Int32Array([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 1, 2, 5, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 4, 27, 4, 27, 4, 27, 4, 27, 4, 27, 6, 1, 2, 1, 2, 4, 27, 1, 2, 0, 4, 2, 24, 0, 27, 1, 24, 1, 0, 1, 0, 1, 2, 1, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 25, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 28, 6, 7, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 0, 4, 24, 0, 2, 0, 24, 20, 0, 26, 0, 6, 20, 6, 24, 6, 24, 6, 24, 6, 0, 5, 0, 5, 24, 0, 16, 0, 25, 24, 26, 24, 28, 6, 24, 0, 24, 5, 4, 5, 6, 9, 24, 5, 6, 5, 24, 5, 6, 16, 28, 6, 4, 6, 28, 6, 5, 9, 5, 28, 5, 24, 0, 16, 5, 6, 5, 6, 0, 5, 6, 5, 0, 9, 5, 6, 4, 28, 24, 4, 0, 5, 6, 4, 6, 4, 6, 4, 6, 0, 24, 0, 5, 6, 0, 24, 0, 5, 0, 5, 0, 6, 0, 6, 8, 5, 6, 8, 6, 5, 8, 6, 8, 6, 8, 5, 6, 5, 6, 24, 9, 24, 4, 5, 0, 5, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 0, 8, 0, 8, 6, 5, 0, 8, 0, 5, 0, 5, 6, 0, 9, 5, 26, 11, 28, 26, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 0, 8, 6, 0, 6, 0, 6, 0, 6, 0, 5, 0, 5, 0, 9, 6, 5, 6, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 0, 6, 8, 0, 8, 6, 0, 5, 0, 5, 6, 0, 9, 24, 26, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 8, 6, 0, 8, 0, 8, 6, 0, 6, 8, 0, 5, 0, 5, 6, 0, 9, 28, 5, 11, 0, 6, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 8, 6, 8, 0, 8, 0, 8, 6, 0, 5, 0, 8, 0, 9, 11, 28, 26, 28, 0, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 6, 8, 0, 6, 0, 6, 0, 6, 0, 5, 0, 5, 6, 0, 9, 0, 11, 28, 0, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 8, 0, 6, 8, 0, 8, 6, 0, 8, 0, 5, 0, 5, 6, 0, 9, 0, 5, 0, 8, 0, 5, 0, 5, 0, 5, 0, 5, 8, 6, 0, 8, 0, 8, 6, 5, 0, 8, 0, 5, 6, 0, 9, 11, 0, 28, 5, 0, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 0, 8, 6, 0, 6, 0, 8, 0, 8, 24, 0, 5, 6, 5, 6, 0, 26, 5, 4, 6, 24, 9, 24, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 6, 5, 6, 0, 6, 5, 0, 5, 0, 4, 0, 6, 0, 9, 0, 5, 0, 5, 28, 24, 28, 24, 28, 6, 28, 9, 11, 28, 6, 28, 6, 28, 6, 21, 22, 21, 22, 8, 5, 0, 5, 0, 6, 8, 6, 24, 6, 5, 6, 0, 6, 0, 28, 6, 28, 0, 28, 24, 28, 24, 0, 5, 8, 6, 8, 6, 8, 6, 8, 6, 5, 9, 24, 5, 8, 6, 5, 6, 5, 8, 5, 8, 5, 6, 5, 6, 8, 6, 8, 6, 5, 8, 9, 8, 6, 28, 1, 0, 1, 0, 1, 0, 5, 24, 4, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 24, 11, 0, 5, 28, 0, 5, 0, 20, 5, 24, 5, 12, 5, 21, 22, 0, 5, 24, 10, 0, 5, 0, 5, 6, 0, 5, 6, 24, 0, 5, 6, 0, 5, 0, 5, 0, 6, 0, 5, 6, 8, 6, 8, 6, 8, 6, 24, 4, 24, 26, 5, 6, 0, 9, 0, 11, 0, 24, 20, 24, 6, 12, 0, 9, 0, 5, 4, 5, 0, 5, 6, 5, 0, 5, 0, 5, 0, 6, 8, 6, 8, 0, 8, 6, 8, 6, 0, 28, 0, 24, 9, 5, 0, 5, 0, 5, 0, 8, 5, 8, 0, 9, 11, 0, 28, 5, 6, 8, 0, 24, 5, 8, 6, 8, 6, 0, 6, 8, 6, 8, 6, 8, 6, 0, 6, 9, 0, 9, 0, 24, 4, 24, 0, 6, 8, 5, 6, 8, 6, 8, 6, 8, 6, 8, 5, 0, 9, 24, 28, 6, 28, 0, 6, 8, 5, 8, 6, 8, 6, 8, 6, 8, 5, 9, 5, 6, 8, 6, 8, 6, 8, 6, 8, 0, 24, 5, 8, 6, 8, 6, 0, 24, 9, 0, 5, 9, 5, 4, 24, 0, 24, 0, 6, 24, 6, 8, 6, 5, 6, 5, 8, 6, 5, 0, 2, 4, 2, 4, 2, 4, 6, 0, 6, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 0, 2, 1, 2, 1, 2, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 2, 0, 2, 3, 2, 3, 2, 3, 2, 0, 2, 1, 3, 27, 2, 27, 2, 0, 2, 1, 3, 27, 2, 0, 2, 1, 0, 27, 2, 1, 27, 0, 2, 0, 2, 1, 3, 27, 0, 12, 16, 20, 24, 29, 30, 21, 29, 30, 21, 29, 24, 13, 14, 16, 12, 24, 29, 30, 24, 23, 24, 25, 21, 22, 24, 25, 24, 23, 24, 12, 16, 0, 16, 11, 4, 0, 11, 25, 21, 22, 4, 11, 25, 21, 22, 0, 4, 0, 26, 0, 6, 7, 6, 7, 6, 0, 28, 1, 28, 1, 28, 2, 1, 2, 1, 2, 28, 1, 28, 25, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 2, 1, 2, 5, 2, 28, 2, 1, 25, 1, 2, 28, 25, 28, 2, 28, 11, 10, 1, 2, 10, 11, 0, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 21, 22, 28, 25, 28, 25, 28, 25, 28, 0, 28, 0, 28, 0, 11, 28, 11, 28, 25, 28, 25, 28, 25, 28, 25, 28, 0, 28, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 11, 28, 25, 21, 22, 25, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 25, 28, 25, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 25, 21, 22, 21, 22, 25, 21, 22, 25, 28, 25, 28, 25, 0, 28, 0, 1, 0, 2, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 28, 1, 2, 1, 2, 6, 1, 2, 0, 24, 11, 24, 2, 0, 2, 0, 2, 0, 5, 0, 4, 24, 0, 6, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 24, 29, 30, 29, 30, 24, 29, 30, 24, 29, 30, 24, 20, 24, 20, 24, 29, 30, 24, 29, 30, 21, 22, 21, 22, 21, 22, 21, 22, 24, 4, 24, 20, 0, 28, 0, 28, 0, 28, 0, 28, 0, 12, 24, 28, 4, 5, 10, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 28, 21, 22, 21, 22, 21, 22, 21, 22, 20, 21, 22, 28, 10, 6, 8, 20, 4, 28, 10, 4, 5, 24, 28, 0, 5, 0, 6, 27, 4, 5, 20, 5, 24, 4, 5, 0, 5, 0, 5, 0, 28, 11, 28, 5, 0, 28, 0, 5, 28, 0, 11, 28, 11, 28, 11, 28, 11, 28, 11, 28, 5, 0, 28, 5, 0, 5, 4, 5, 0, 28, 0, 5, 4, 24, 5, 4, 24, 5, 9, 5, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 6, 7, 24, 6, 24, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 6, 5, 10, 6, 24, 0, 27, 4, 27, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 27, 1, 2, 1, 2, 0, 1, 2, 1, 2, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 4, 2, 5, 6, 5, 6, 5, 6, 5, 8, 6, 8, 28, 0, 11, 28, 26, 28, 0, 5, 24, 0, 8, 5, 8, 6, 0, 24, 9, 0, 6, 5, 24, 5, 0, 9, 5, 6, 24, 5, 6, 8, 0, 24, 5, 0, 6, 8, 5, 6, 8, 6, 8, 6, 8, 24, 0, 4, 9, 0, 24, 0, 5, 6, 8, 6, 8, 6, 0, 5, 6, 5, 6, 8, 0, 9, 0, 24, 5, 4, 5, 28, 5, 8, 0, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 0, 5, 4, 24, 5, 8, 6, 8, 24, 5, 4, 8, 6, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 8, 6, 8, 6, 8, 24, 8, 6, 0, 9, 0, 5, 0, 5, 0, 5, 0, 19, 18, 5, 0, 5, 0, 2, 0, 2, 0, 5, 6, 5, 25, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 27, 0, 5, 21, 22, 0, 5, 0, 5, 0, 5, 26, 28, 0, 6, 24, 21, 22, 24, 0, 6, 0, 24, 20, 23, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 24, 21, 22, 24, 23, 24, 0, 24, 20, 21, 22, 21, 22, 21, 22, 24, 25, 20, 25, 0, 24, 26, 24, 0, 5, 0, 5, 0, 16, 0, 24, 26, 24, 21, 22, 24, 25, 24, 20, 24, 9, 24, 25, 24, 1, 21, 24, 22, 27, 23, 27, 2, 21, 25, 22, 25, 21, 22, 24, 21, 22, 24, 5, 4, 5, 4, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 26, 25, 27, 28, 26, 0, 28, 25, 28, 0, 16, 28, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 24, 0, 11, 0, 28, 10, 11, 28, 11, 0, 28, 0, 28, 6, 0, 5, 0, 5, 0, 5, 0, 11, 0, 5, 10, 5, 10, 0, 5, 0, 24, 5, 0, 5, 24, 10, 0, 1, 2, 5, 0, 9, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 24, 11, 0, 5, 11, 0, 24, 5, 0, 24, 0, 5, 0, 5, 0, 5, 6, 0, 6, 0, 6, 5, 0, 5, 0, 5, 0, 6, 0, 6, 11, 0, 24, 0, 5, 11, 24, 0, 5, 0, 24, 5, 0, 11, 5, 0, 11, 0, 5, 0, 11, 0, 8, 6, 8, 5, 6, 24, 0, 11, 9, 0, 6, 8, 5, 8, 6, 8, 6, 24, 16, 24, 0, 5, 0, 9, 0, 6, 5, 6, 8, 6, 0, 9, 24, 0, 6, 8, 5, 8, 6, 8, 5, 24, 0, 9, 0, 5, 6, 8, 6, 8, 6, 8, 6, 0, 9, 0, 5, 0, 10, 0, 24, 0, 5, 0, 5, 0, 5, 0, 5, 8, 0, 6, 4, 0, 5, 0, 28, 0, 28, 0, 28, 8, 6, 28, 8, 16, 6, 28, 6, 28, 6, 28, 0, 28, 6, 28, 0, 28, 0, 11, 0, 1, 2, 1, 2, 0, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 2, 0, 2, 0, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 2, 0, 9, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 25, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 11, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 5, 0, 5, 0, 5, 0, 5, 0, 16, 0, 16, 0, 6, 0, 18, 0, 18, 0]));
    $thiz.jl_Character$__f_bitmap$0 = (((4 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_charTypes
}
function $p_jl_Character$__charTypes__AI($thiz) {
  return (((((4 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__charTypes$lzycompute__AI($thiz) : $thiz.jl_Character$__f_charTypes)
}
function $p_jl_Character$__uncompressDeltas__AI__AI($thiz, deltas) {
  var acc = deltas.get(0);
  var i = 1;
  var len = deltas.u.length;
  while ((i !== len)) {
    acc = ((acc + deltas.get(i)) | 0);
    deltas.set(i, acc);
    i = ((1 + i) | 0)
  };
  return deltas
}
function $p_jl_Character$__findIndexOfRange__AI__I__Z__I($thiz, startOfRangesArray, value, hasEmptyRanges) {
  var i = $m_ju_Arrays$().binarySearch__AI__I__I(startOfRangesArray, value);
  if ((i >= 0)) {
    if (hasEmptyRanges) {
      var j = ((1 + i) | 0);
      while (((j < startOfRangesArray.u.length) && (startOfRangesArray.get(j) === value))) {
        j = ((1 + j) | 0)
      };
      return j
    } else {
      return ((1 + i) | 0)
    }
  } else {
    return (((-1) - i) | 0)
  }
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]));
    $thiz.jl_Character$__f_bitmap$0 = (((32 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
}
/** @constructor */
function $c_jl_Character$() {
  this.jl_Character$__f_java$lang$Character$$charTypesFirst256 = null;
  this.jl_Character$__f_charTypeIndices = null;
  this.jl_Character$__f_charTypes = null;
  this.jl_Character$__f_isMirroredIndices = null;
  this.jl_Character$__f_combiningClassNoneOrAboveOrOtherIndices = null;
  this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
  this.jl_Character$__f_bitmap$0 = 0
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
  /*<skip>*/
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.toString__I__T = (function(codePoint) {
  if (((codePoint >= 0) && (codePoint < 65536))) {
    return $as_T(String.fromCharCode(codePoint))
  } else if (((codePoint >= 0) && (codePoint <= 1114111))) {
    return $as_T(String.fromCharCode((65535 & (55296 | (((-64) + (codePoint >> 10)) | 0))), (65535 & (56320 | (1023 & codePoint)))))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
$c_jl_Character$.prototype.getType__I__I = (function(codePoint) {
  return ((codePoint < 0) ? 0 : ((codePoint < 256) ? this.java$lang$Character$$charTypesFirst256__AI().get(codePoint) : $p_jl_Character$__getTypeGE256__I__I(this, codePoint)))
});
$c_jl_Character$.prototype.digitWithValidRadix__I__I__I = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0)
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0)
  } else {
    var a = $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this);
    var p = $m_ju_Arrays$().binarySearch__AI__I__I(a, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1)
    } else {
      var v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).get(zeroCodePointIndex)) | 0);
      var value = ((v > 9) ? (-1) : v)
    }
  };
  return ((value < radix) ? value : (-1))
});
$c_jl_Character$.prototype.isUpperCase__I__Z = (function(c) {
  return ((((c >= 8544) && (c <= 8559)) || ((c >= 9398) && (c <= 9423))) || (this.getType__I__I(c) === 1))
});
$c_jl_Character$.prototype.toUpperCase__C__C = (function(ch) {
  return (65535 & this.toUpperCase__I__I(ch))
});
$c_jl_Character$.prototype.toUpperCase__I__I = (function(codePoint) {
  switch (codePoint) {
    case 8115:
    case 8131:
    case 8179: {
      return ((9 + codePoint) | 0);
      break
    }
    default: {
      if (((codePoint >= 8064) && (codePoint <= 8111))) {
        return (8 | codePoint)
      } else {
        var this$1 = this.toString__I__T(codePoint);
        var upperChars = $as_T(this$1.toUpperCase());
        var x1$2 = $uI(upperChars.length);
        switch (x1$2) {
          case 1: {
            return (65535 & $uI(upperChars.charCodeAt(0)));
            break
          }
          case 2: {
            var high = (65535 & $uI(upperChars.charCodeAt(0)));
            var low = (65535 & $uI(upperChars.charCodeAt(1)));
            return ((((-67044352) & ((high << 16) | low)) === (-671032320)) ? ((((64 + (1023 & high)) | 0) << 10) | (1023 & low)) : codePoint);
            break
          }
          default: {
            return codePoint
          }
        }
      }
    }
  }
});
$c_jl_Character$.prototype.java$lang$Character$$charTypesFirst256__AI = (function() {
  return (((((1 & this.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__java$lang$Character$$charTypesFirst256$lzycompute__AI(this) : this.jl_Character$__f_java$lang$Character$$charTypesFirst256)
});
var $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
function $p_jl_Integer$__fail$1__T__E($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
}
/** @constructor */
function $c_jl_Integer$() {
  /*<skip>*/
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
  /*<skip>*/
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.parseInt__T__I__I = (function(s, radix) {
  var len = ((s === null) ? 0 : $uI(s.length));
  if ((((len === 0) || (radix < 2)) || (radix > 36))) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var firstChar = (65535 & $uI(s.charCodeAt(0)));
  var negative = (firstChar === 45);
  var maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= $uI(s.length))) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var result = 0.0;
  while ((i !== len)) {
    var $$x1 = $m_jl_Character$();
    var index = i;
    var digit = $$x1.digitWithValidRadix__I__I__I((65535 & $uI(s.charCodeAt(index))), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    i = ((1 + i) | 0)
  };
  if (negative) {
    var n = (-result);
    return $uI((n | 0))
  } else {
    var n$1 = result;
    return $uI((n$1 | 0))
  }
});
$c_jl_Integer$.prototype.bitCount__I__I = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return ($imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24)
});
var $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return ((obj instanceof $c_jl_Number) || ((typeof obj) === "number"))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
/** @constructor */
function $c_jl_String$() {
  this.jl_String$__f_CASE_INSENSITIVE_ORDER = null;
  this.jl_String$__f_bitmap$0 = false
}
$c_jl_String$.prototype = new $h_O();
$c_jl_String$.prototype.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
  /*<skip>*/
}
$h_jl_String$.prototype = $c_jl_String$.prototype;
$c_jl_String$.prototype.new__AC__I__I__T = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > value.u.length))) {
    throw new $c_jl_StringIndexOutOfBoundsException()
  };
  var result = "";
  var i = offset;
  while ((i !== end)) {
    var $$x1 = result;
    var this$1 = value.get(i);
    result = (("" + $$x1) + $as_T(String.fromCharCode(this$1)));
    i = ((1 + i) | 0)
  };
  return result
});
var $d_jl_String$ = new $TypeData().initClass({
  jl_String$: 0
}, false, "java.lang.String$", {
  jl_String$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_String$.prototype.$classData = $d_jl_String$;
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$()
  };
  return $n_jl_String$
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_e = e;
  $thiz.jl_Throwable__f_enableSuppression = enableSuppression;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_e = null;
    this.jl_Throwable__f_enableSuppression = false;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_stackTraceStateInternal = null;
    this.jl_Throwable__f_stackTrace = null;
    this.jl_Throwable__f_suppressed = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    var identifyingString = Object.prototype.toString.call(this);
    if ((identifyingString === "[object Error]")) {
      this.jl_Throwable__f_stackTraceStateInternal = this
    } else if ((Error.captureStackTrace === (void 0))) {
      var e = new Error();
      this.jl_Throwable__f_stackTraceStateInternal = e
    } else {
      Error.captureStackTrace(this);
      this.jl_Throwable__f_stackTraceStateInternal = this
    };
    return this
  };
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectClassName(this)
  };
  $js$exported$prop$message__O() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
function $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher($thiz) {
  $thiz.ju_regex_Matcher__f_regexp.lastIndex = 0;
  $thiz.ju_regex_Matcher__f_lastMatch = null;
  $thiz.ju_regex_Matcher__f_lastMatchIsValid = false;
  $thiz.ju_regex_Matcher__f_canStillFind = true;
  $thiz.ju_regex_Matcher__f_appendPos = 0;
  $thiz.ju_regex_Matcher__f_startOfGroupCache = null;
  return $thiz
}
function $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult($thiz) {
  if (($thiz.ju_regex_Matcher__f_lastMatch === null)) {
    throw new $c_jl_IllegalStateException("No match available")
  };
  return $thiz.ju_regex_Matcher__f_lastMatch
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0, regionStart0, regionEnd0) {
  this.ju_regex_Matcher__f_pattern0 = null;
  this.ju_regex_Matcher__f_input0 = null;
  this.ju_regex_Matcher__f_regionStart0 = 0;
  this.ju_regex_Matcher__f_regionEnd0 = 0;
  this.ju_regex_Matcher__f_regexp = null;
  this.ju_regex_Matcher__f_inputstr = null;
  this.ju_regex_Matcher__f_lastMatch = null;
  this.ju_regex_Matcher__f_lastMatchIsValid = false;
  this.ju_regex_Matcher__f_canStillFind = false;
  this.ju_regex_Matcher__f_appendPos = 0;
  this.ju_regex_Matcher__f_startOfGroupCache = null;
  this.ju_regex_Matcher__f_pattern0 = pattern0;
  this.ju_regex_Matcher__f_input0 = input0;
  this.ju_regex_Matcher__f_regionStart0 = regionStart0;
  this.ju_regex_Matcher__f_regionEnd0 = regionEnd0;
  this.ju_regex_Matcher__f_regexp = this.ju_regex_Matcher__f_pattern0.newJSRegExp__sjs_js_RegExp();
  var this$1 = this.ju_regex_Matcher__f_input0;
  var start = this.ju_regex_Matcher__f_regionStart0;
  var end = this.ju_regex_Matcher__f_regionEnd0;
  var this$2 = $dp_substring__I__I__T(this$1, start, end);
  this.ju_regex_Matcher__f_inputstr = this$2;
  this.ju_regex_Matcher__f_lastMatch = null;
  this.ju_regex_Matcher__f_lastMatchIsValid = false;
  this.ju_regex_Matcher__f_canStillFind = true;
  this.ju_regex_Matcher__f_appendPos = 0
}
$c_ju_regex_Matcher.prototype = new $h_O();
$c_ju_regex_Matcher.prototype.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
  /*<skip>*/
}
$h_ju_regex_Matcher.prototype = $c_ju_regex_Matcher.prototype;
$c_ju_regex_Matcher.prototype.matches__Z = (function() {
  $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher(this);
  this.find__Z();
  if ((this.ju_regex_Matcher__f_lastMatch !== null)) {
    if (($uI($p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this).index) !== 0)) {
      var $$x1 = true
    } else {
      var this$1 = this.group__T();
      var $$x2 = $uI(this$1.length);
      var this$2 = this.ju_regex_Matcher__f_inputstr;
      var $$x1 = ($$x2 !== $uI(this$2.length))
    }
  } else {
    var $$x1 = false
  };
  if ($$x1) {
    $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher(this)
  };
  return (this.ju_regex_Matcher__f_lastMatch !== null)
});
$c_ju_regex_Matcher.prototype.find__Z = (function() {
  if (this.ju_regex_Matcher__f_canStillFind) {
    this.ju_regex_Matcher__f_lastMatchIsValid = true;
    this.ju_regex_Matcher__f_lastMatch = this.ju_regex_Matcher__f_regexp.exec(this.ju_regex_Matcher__f_inputstr);
    if ((this.ju_regex_Matcher__f_lastMatch !== null)) {
      var value = this.ju_regex_Matcher__f_lastMatch[0];
      if ((value === (void 0))) {
        throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
      };
      var this$5 = $as_T(value);
      if ((this$5 === "")) {
        var ev$1 = this.ju_regex_Matcher__f_regexp;
        ev$1.lastIndex = ((1 + $uI(ev$1.lastIndex)) | 0)
      }
    } else {
      this.ju_regex_Matcher__f_canStillFind = false
    };
    this.ju_regex_Matcher__f_startOfGroupCache = null;
    return (this.ju_regex_Matcher__f_lastMatch !== null)
  } else {
    return false
  }
});
$c_ju_regex_Matcher.prototype.start__I = (function() {
  return (($uI($p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this).index) + this.ju_regex_Matcher__f_regionStart0) | 0)
});
$c_ju_regex_Matcher.prototype.end__I = (function() {
  var $$x1 = this.start__I();
  var this$1 = this.group__T();
  return (($$x1 + $uI(this$1.length)) | 0)
});
$c_ju_regex_Matcher.prototype.group__T = (function() {
  var value = $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this)[0];
  if ((value === (void 0))) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
  };
  return $as_T(value)
});
$c_ju_regex_Matcher.prototype.group__I__T = (function(group) {
  var value = $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this)[group];
  return $as_T(((value === (void 0)) ? null : value))
});
var $d_ju_regex_Matcher = new $TypeData().initClass({
  ju_regex_Matcher: 0
}, false, "java.util.regex.Matcher", {
  ju_regex_Matcher: 1,
  O: 1,
  ju_regex_MatchResult: 1
});
$c_ju_regex_Matcher.prototype.$classData = $d_ju_regex_Matcher;
/** @constructor */
function $c_Lobservatory_Interaction2$() {
  this.Lobservatory_Interaction2$__f_TEMP_COLORS = null;
  this.Lobservatory_Interaction2$__f_DEVI_COLORS = null;
  $n_Lobservatory_Interaction2$ = this;
  var $$x1 = $m_sc_Seq$();
  var array = [new $c_T2(60.0, new $c_Lobservatory_Color(255, 255, 255)), new $c_T2(32.0, new $c_Lobservatory_Color(255, 0, 0)), new $c_T2(12.0, new $c_Lobservatory_Color(255, 255, 0)), new $c_T2(0.0, new $c_Lobservatory_Color(0, 255, 255)), new $c_T2((-15.0), new $c_Lobservatory_Color(0, 0, 255)), new $c_T2((-27.0), new $c_Lobservatory_Color(255, 0, 255)), new $c_T2((-50.0), new $c_Lobservatory_Color(33, 0, 107)), new $c_T2((-60.0), new $c_Lobservatory_Color(0, 0, 0))];
  this.Lobservatory_Interaction2$__f_TEMP_COLORS = $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)));
  var $$x2 = $m_sc_Seq$();
  var array$1 = [new $c_T2(7.0, new $c_Lobservatory_Color(0, 0, 0)), new $c_T2(4.0, new $c_Lobservatory_Color(255, 0, 0)), new $c_T2(2.0, new $c_Lobservatory_Color(255, 255, 0)), new $c_T2(0.0, new $c_Lobservatory_Color(255, 255, 255)), new $c_T2((-2.0), new $c_Lobservatory_Color(0, 255, 255)), new $c_T2((-7.0), new $c_Lobservatory_Color(0, 0, 255))];
  this.Lobservatory_Interaction2$__f_DEVI_COLORS = $as_sc_Seq($$x2.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1)))
}
$c_Lobservatory_Interaction2$.prototype = new $h_O();
$c_Lobservatory_Interaction2$.prototype.constructor = $c_Lobservatory_Interaction2$;
/** @constructor */
function $h_Lobservatory_Interaction2$() {
  /*<skip>*/
}
$h_Lobservatory_Interaction2$.prototype = $c_Lobservatory_Interaction2$.prototype;
$c_Lobservatory_Interaction2$.prototype.availableLayers__sc_Seq = (function() {
  var $$x1 = $m_sc_Seq$();
  var array = [new $c_Lobservatory_Layer($m_Lobservatory_LayerName$Temperatures$(), this.Lobservatory_Interaction2$__f_TEMP_COLORS, new $c_sci_Range$Inclusive(1975, 2015, 1)), new $c_Lobservatory_Layer($m_Lobservatory_LayerName$Deviations$(), this.Lobservatory_Interaction2$__f_DEVI_COLORS, new $c_sci_Range$Inclusive(1991, 2015, 1))];
  return $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)))
});
$c_Lobservatory_Interaction2$.prototype.yearBounds__Lobservatory_Signal__Lobservatory_Signal = (function(selectedLayer) {
  $m_Lobservatory_Signal$();
  var expr = new $c_sjsr_AnonFunction0(((this$1, selectedLayer$1) => (() => $as_Lobservatory_Layer(selectedLayer$1.apply__O()).Lobservatory_Layer__f_bounds))(this, selectedLayer));
  return $ct_Lobservatory_Signal__F0__(new $c_Lobservatory_Signal(), expr)
});
$c_Lobservatory_Interaction2$.prototype.yearSelection__Lobservatory_Signal__Lobservatory_Signal__Lobservatory_Signal = (function(selectedLayer, sliderValue) {
  var bounds = this.yearBounds__Lobservatory_Signal__Lobservatory_Signal(selectedLayer);
  $m_Lobservatory_Signal$();
  var expr = new $c_sjsr_AnonFunction0(((this$1, sliderValue$1, bounds$1) => (() => $m_Lobservatory_Interaction2$().fitInRange__I__sci_Range__I($uI(sliderValue$1.apply__O()), $as_sci_Range(bounds$1.apply__O()))))(this, sliderValue, bounds));
  return $ct_Lobservatory_Signal__F0__(new $c_Lobservatory_Signal(), expr)
});
$c_Lobservatory_Interaction2$.prototype.fitInRange__I__sci_Range__I = (function(year, range) {
  return ((year <= range.sci_Range__f_start) ? range.sci_Range__f_start : ((year <= range.sci_Range__f_end) ? year : range.sci_Range__f_end))
});
$c_Lobservatory_Interaction2$.prototype.layerUrlPattern__Lobservatory_Signal__Lobservatory_Signal__Lobservatory_Signal = (function(selectedLayer, selectedYear) {
  $m_Lobservatory_Signal$();
  var expr = new $c_sjsr_AnonFunction0(((this$1, selectedLayer$1, selectedYear$1) => (() => (((("target/" + $as_Lobservatory_Layer(selectedLayer$1.apply__O()).Lobservatory_Layer__f_layerName.Lobservatory_LayerName__f_id) + "/") + selectedYear$1.apply__O()) + "/{z}/{x}-{y}.png")))(this, selectedLayer, selectedYear));
  return $ct_Lobservatory_Signal__F0__(new $c_Lobservatory_Signal(), expr)
});
$c_Lobservatory_Interaction2$.prototype.caption__Lobservatory_Signal__Lobservatory_Signal__Lobservatory_Signal = (function(selectedLayer, selectedYear) {
  $m_Lobservatory_Signal$();
  var expr = new $c_sjsr_AnonFunction0(((this$1, selectedLayer$1, selectedYear$1) => (() => {
    var x = $as_Lobservatory_Layer(selectedLayer$1.apply__O()).Lobservatory_Layer__f_layerName.Lobservatory_LayerName__f_id;
    var this$3 = new $c_sci_StringOps(x);
    return ((($f_sci_StringLike__capitalize__T(this$3) + " (") + selectedYear$1.apply__O()) + ")")
  }))(this, selectedLayer, selectedYear));
  return $ct_Lobservatory_Signal__F0__(new $c_Lobservatory_Signal(), expr)
});
var $d_Lobservatory_Interaction2$ = new $TypeData().initClass({
  Lobservatory_Interaction2$: 0
}, false, "observatory.Interaction2$", {
  Lobservatory_Interaction2$: 1,
  O: 1,
  Lobservatory_Interaction2Interface: 1
});
$c_Lobservatory_Interaction2$.prototype.$classData = $d_Lobservatory_Interaction2$;
var $n_Lobservatory_Interaction2$;
function $m_Lobservatory_Interaction2$() {
  if ((!$n_Lobservatory_Interaction2$)) {
    $n_Lobservatory_Interaction2$ = new $c_Lobservatory_Interaction2$()
  };
  return $n_Lobservatory_Interaction2$
}
/** @constructor */
function $c_Lobservatory_NoSignal$() {
  this.Lobservatory_Signal__f_myExpr = null;
  this.Lobservatory_Signal__f_myValue = null;
  this.Lobservatory_Signal__f_observers = null;
  this.Lobservatory_Signal__f_observed = null;
  $ct_Lobservatory_Signal__F0__(this, new $c_sjsr_AnonFunction0((() => {
    $m_s_Predef$().$qmark$qmark$qmark__E()
  })))
}
$c_Lobservatory_NoSignal$.prototype = new $h_Lobservatory_Signal();
$c_Lobservatory_NoSignal$.prototype.constructor = $c_Lobservatory_NoSignal$;
/** @constructor */
function $h_Lobservatory_NoSignal$() {
  /*<skip>*/
}
$h_Lobservatory_NoSignal$.prototype = $c_Lobservatory_NoSignal$.prototype;
$c_Lobservatory_NoSignal$.prototype.computeValue__V = (function() {
  /*<skip>*/
});
var $d_Lobservatory_NoSignal$ = new $TypeData().initClass({
  Lobservatory_NoSignal$: 0
}, false, "observatory.NoSignal$", {
  Lobservatory_NoSignal$: 1,
  Lobservatory_Signal: 1,
  O: 1
});
$c_Lobservatory_NoSignal$.prototype.$classData = $d_Lobservatory_NoSignal$;
var $n_Lobservatory_NoSignal$;
function $m_Lobservatory_NoSignal$() {
  if ((!$n_Lobservatory_NoSignal$)) {
    $n_Lobservatory_NoSignal$ = new $c_Lobservatory_NoSignal$()
  };
  return $n_Lobservatory_NoSignal$
}
/** @constructor */
function $c_Lobservatory_Var(expr) {
  this.Lobservatory_Signal__f_myExpr = null;
  this.Lobservatory_Signal__f_myValue = null;
  this.Lobservatory_Signal__f_observers = null;
  this.Lobservatory_Signal__f_observed = null;
  $ct_Lobservatory_Signal__F0__(this, expr)
}
$c_Lobservatory_Var.prototype = new $h_Lobservatory_Signal();
$c_Lobservatory_Var.prototype.constructor = $c_Lobservatory_Var;
/** @constructor */
function $h_Lobservatory_Var() {
  /*<skip>*/
}
$h_Lobservatory_Var.prototype = $c_Lobservatory_Var.prototype;
$c_Lobservatory_Var.prototype.update__F0__V = (function(expr) {
  $c_Lobservatory_Signal.prototype.update__F0__V.call(this, expr)
});
var $d_Lobservatory_Var = new $TypeData().initClass({
  Lobservatory_Var: 0
}, false, "observatory.Var", {
  Lobservatory_Var: 1,
  Lobservatory_Signal: 1,
  O: 1
});
$c_Lobservatory_Var.prototype.$classData = $d_Lobservatory_Var;
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $clz32(bhi) : ((32 + $clz32(blo)) | 0)) - ((ahi !== 0) ? $clz32(ahi) : ((32 + $clz32(alo)) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0)));
    var this$3 = remLo;
    var remStr = ("" + this$3);
    var start = $uI(remStr.length);
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
  /*<skip>*/
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var $$x1 = $uD((x >>> 0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0))))
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0)))
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1
  } else {
    var abs__lo = lo;
    var abs__hi = hi
  };
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo))
  };
  var x = abs__hi;
  var absRes = ((4.294967296E9 * $uD((x >>> 0))) + $uD((compressedAbsLo >>> 0)));
  return $fround(((hi < 0) ? (-absRes) : absRes))
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31))
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1)
  } else {
    var rawLo = $uI((value | 0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1)
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    }
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    } else {
      return absRLo
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
/** @constructor */
function $c_s_Predef$$anon$1() {
  /*<skip>*/
}
$c_s_Predef$$anon$1.prototype = new $h_O();
$c_s_Predef$$anon$1.prototype.constructor = $c_s_Predef$$anon$1;
/** @constructor */
function $h_s_Predef$$anon$1() {
  /*<skip>*/
}
$h_s_Predef$$anon$1.prototype = $c_s_Predef$$anon$1.prototype;
$c_s_Predef$$anon$1.prototype.apply__O__scm_Builder = (function(from) {
  $as_T(from);
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder())
});
var $d_s_Predef$$anon$1 = new $TypeData().initClass({
  s_Predef$$anon$1: 0
}, false, "scala.Predef$$anon$1", {
  s_Predef$$anon$1: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_s_Predef$$anon$1.prototype.$classData = $d_s_Predef$$anon$1;
function $p_sc_GenMap$__liftedTree1$1__sc_GenMap__sc_GenMapLike__Z($thiz, thatMap$1, thisMap$1) {
  try {
    var checker = new $c_sc_GenMap$$anon$1(thatMap$1);
    return thisMap$1.forall__F1__Z(checker)
  } catch (e) {
    if ((e instanceof $c_jl_ClassCastException)) {
      $as_jl_ClassCastException(e);
      return false
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sc_GenMap$() {
  this.sc_GenMap$__f_ReusableCBF = null;
  $n_sc_GenMap$ = this;
  this.sc_GenMap$__f_ReusableCBF = new $c_scg_GenMapFactory$MapCanBuildFrom(this)
}
$c_sc_GenMap$.prototype = new $h_scg_GenMapFactory();
$c_sc_GenMap$.prototype.constructor = $c_sc_GenMap$;
/** @constructor */
function $h_sc_GenMap$() {
  /*<skip>*/
}
$h_sc_GenMap$.prototype = $c_sc_GenMap$.prototype;
$c_sc_GenMap$.prototype.mapEquals__sc_GenMapLike__sc_GenMap__Z = (function(thisMap, thatMap) {
  return ((thisMap === thatMap) || ((thisMap.size__I() === thatMap.size__I()) && $p_sc_GenMap$__liftedTree1$1__sc_GenMap__sc_GenMapLike__Z(this, thatMap, thisMap)))
});
$c_sc_GenMap$.prototype.empty__sc_GenMap = (function() {
  $m_sci_Map$();
  return $m_sci_Map$EmptyMap$()
});
var $d_sc_GenMap$ = new $TypeData().initClass({
  sc_GenMap$: 0
}, false, "scala.collection.GenMap$", {
  sc_GenMap$: 1,
  scg_GenMapFactory: 1,
  O: 1
});
$c_sc_GenMap$.prototype.$classData = $d_sc_GenMap$;
var $n_sc_GenMap$;
function $m_sc_GenMap$() {
  if ((!$n_sc_GenMap$)) {
    $n_sc_GenMap$ = new $c_sc_GenMap$()
  };
  return $n_sc_GenMap$
}
/** @constructor */
function $c_sc_TraversableLike$WithFilter(outer, p) {
  this.sc_TraversableLike$WithFilter__f_p = null;
  this.sc_TraversableLike$WithFilter__f_$outer = null;
  this.sc_TraversableLike$WithFilter__f_p = p;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sc_TraversableLike$WithFilter__f_$outer = outer
  }
}
$c_sc_TraversableLike$WithFilter.prototype = new $h_O();
$c_sc_TraversableLike$WithFilter.prototype.constructor = $c_sc_TraversableLike$WithFilter;
/** @constructor */
function $h_sc_TraversableLike$WithFilter() {
  /*<skip>*/
}
$h_sc_TraversableLike$WithFilter.prototype = $c_sc_TraversableLike$WithFilter.prototype;
$c_sc_TraversableLike$WithFilter.prototype.map__F1__scg_CanBuildFrom__O = (function(f, bf) {
  var b = bf.apply__O__scm_Builder(this.sc_TraversableLike$WithFilter__f_$outer.repr__O());
  this.sc_TraversableLike$WithFilter__f_$outer.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$1, b$1, f$1) => ((x$2) => ($uZ(this$1.sc_TraversableLike$WithFilter__f_p.apply__O__O(x$2)) ? b$1.$plus$eq__O__scm_Builder(f$1.apply__O__O(x$2)) : (void 0))))(this, b, f)));
  return b.result__O()
});
var $d_sc_TraversableLike$WithFilter = new $TypeData().initClass({
  sc_TraversableLike$WithFilter: 0
}, false, "scala.collection.TraversableLike$WithFilter", {
  sc_TraversableLike$WithFilter: 1,
  O: 1,
  scg_FilterMonadic: 1
});
$c_sc_TraversableLike$WithFilter.prototype.$classData = $d_sc_TraversableLike$WithFilter;
function $f_sc_TraversableOnce__foldLeft__O__F2__O($thiz, z, op) {
  var folder = new $c_sc_TraversableOnce$folder$1($thiz, z, op);
  $thiz.foreach__F1__V(folder);
  return folder.sc_TraversableOnce$folder$1__f_result
}
function $f_sc_TraversableOnce__reduceLeft__F2__O($thiz, op) {
  if ($thiz.isEmpty__Z()) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft")
  };
  var reducer = new $c_sc_TraversableOnce$reducer$1($thiz, op);
  $thiz.foreach__F1__V(reducer);
  return reducer.sc_TraversableOnce$reducer$1__f_acc
}
function $f_sc_TraversableOnce__min__s_math_Ordering__O($thiz, cmp) {
  if ($thiz.isEmpty__Z()) {
    throw new $c_jl_UnsupportedOperationException("empty.min")
  };
  return $thiz.reduceLeft__F2__O(new $c_sjsr_AnonFunction2(((this$1, cmp$1) => ((x$2, y$2) => (cmp$1.lteq__O__O__Z(x$2, y$2) ? x$2 : y$2)))($thiz, cmp)))
}
function $f_sc_TraversableOnce__max__s_math_Ordering__O($thiz, cmp) {
  if ($thiz.isEmpty__Z()) {
    throw new $c_jl_UnsupportedOperationException("empty.max")
  };
  return $thiz.reduceLeft__F2__O(new $c_sjsr_AnonFunction2(((this$1, cmp$1) => ((x$2, y$2) => (cmp$1.gteq__O__O__Z(x$2, y$2) ? x$2 : y$2)))($thiz, cmp)))
}
function $f_sc_TraversableOnce__mkString__T__T__T__T($thiz, start, sep, end) {
  var this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
  return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
}
function $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  b.append__T__scm_StringBuilder(start);
  var appender = new $c_sc_TraversableOnce$appender$1($thiz, b, sep);
  $thiz.foreach__F1__V(appender);
  b.append__T__scm_StringBuilder(end);
  return b
}
function $is_sc_TraversableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_TraversableOnce)))
}
function $as_sc_TraversableOnce(obj) {
  return (($is_sc_TraversableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.TraversableOnce"))
}
function $isArrayOf_sc_TraversableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_TraversableOnce)))
}
function $asArrayOf_sc_TraversableOnce(obj, depth) {
  return (($isArrayOf_sc_TraversableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.TraversableOnce;", depth))
}
/** @constructor */
function $c_scg_GenMapFactory$MapCanBuildFrom(outer) {
  this.scg_GenMapFactory$MapCanBuildFrom__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.scg_GenMapFactory$MapCanBuildFrom__f_$outer = outer
  }
}
$c_scg_GenMapFactory$MapCanBuildFrom.prototype = new $h_O();
$c_scg_GenMapFactory$MapCanBuildFrom.prototype.constructor = $c_scg_GenMapFactory$MapCanBuildFrom;
/** @constructor */
function $h_scg_GenMapFactory$MapCanBuildFrom() {
  /*<skip>*/
}
$h_scg_GenMapFactory$MapCanBuildFrom.prototype = $c_scg_GenMapFactory$MapCanBuildFrom.prototype;
$c_scg_GenMapFactory$MapCanBuildFrom.prototype.apply__O__scm_Builder = (function(from) {
  $as_sc_GenMap(from);
  return this.scg_GenMapFactory$MapCanBuildFrom__f_$outer.newBuilder__scm_Builder()
});
var $d_scg_GenMapFactory$MapCanBuildFrom = new $TypeData().initClass({
  scg_GenMapFactory$MapCanBuildFrom: 0
}, false, "scala.collection.generic.GenMapFactory$MapCanBuildFrom", {
  scg_GenMapFactory$MapCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_scg_GenMapFactory$MapCanBuildFrom.prototype.$classData = $d_scg_GenMapFactory$MapCanBuildFrom;
/** @constructor */
function $c_scg_GenSetFactory() {
  /*<skip>*/
}
$c_scg_GenSetFactory.prototype = new $h_scg_GenericCompanion();
$c_scg_GenSetFactory.prototype.constructor = $c_scg_GenSetFactory;
/** @constructor */
function $h_scg_GenSetFactory() {
  /*<skip>*/
}
$h_scg_GenSetFactory.prototype = $c_scg_GenSetFactory.prototype;
/** @constructor */
function $c_scg_GenSetFactory$$anon$1(outer) {
  this.scg_GenSetFactory$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.scg_GenSetFactory$$anon$1__f_$outer = outer
  }
}
$c_scg_GenSetFactory$$anon$1.prototype = new $h_O();
$c_scg_GenSetFactory$$anon$1.prototype.constructor = $c_scg_GenSetFactory$$anon$1;
/** @constructor */
function $h_scg_GenSetFactory$$anon$1() {
  /*<skip>*/
}
$h_scg_GenSetFactory$$anon$1.prototype = $c_scg_GenSetFactory$$anon$1.prototype;
$c_scg_GenSetFactory$$anon$1.prototype.apply__sc_GenSet__scm_Builder = (function(from) {
  return ($is_sc_Set(from) ? from.companion__scg_GenericCompanion().newBuilder__scm_Builder() : this.scg_GenSetFactory$$anon$1__f_$outer.newBuilder__scm_Builder())
});
$c_scg_GenSetFactory$$anon$1.prototype.apply__O__scm_Builder = (function(from) {
  return this.apply__sc_GenSet__scm_Builder($as_sc_GenSet(from))
});
var $d_scg_GenSetFactory$$anon$1 = new $TypeData().initClass({
  scg_GenSetFactory$$anon$1: 0
}, false, "scala.collection.generic.GenSetFactory$$anon$1", {
  scg_GenSetFactory$$anon$1: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_scg_GenSetFactory$$anon$1.prototype.$classData = $d_scg_GenSetFactory$$anon$1;
function $ct_scg_GenTraversableFactory__($thiz) {
  $thiz.scg_GenTraversableFactory__f_ReusableCBFInstance = new $c_scg_GenTraversableFactory$$anon$1($thiz);
  return $thiz
}
/** @constructor */
function $c_scg_GenTraversableFactory() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
}
$c_scg_GenTraversableFactory.prototype = new $h_scg_GenericCompanion();
$c_scg_GenTraversableFactory.prototype.constructor = $c_scg_GenTraversableFactory;
/** @constructor */
function $h_scg_GenTraversableFactory() {
  /*<skip>*/
}
$h_scg_GenTraversableFactory.prototype = $c_scg_GenTraversableFactory.prototype;
function $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = outer
  };
  return $thiz
}
/** @constructor */
function $c_scg_GenTraversableFactory$GenericCanBuildFrom() {
  this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = null
}
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype = new $h_O();
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype.constructor = $c_scg_GenTraversableFactory$GenericCanBuildFrom;
/** @constructor */
function $h_scg_GenTraversableFactory$GenericCanBuildFrom() {
  /*<skip>*/
}
$h_scg_GenTraversableFactory$GenericCanBuildFrom.prototype = $c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype;
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype.apply__O__scm_Builder = (function(from) {
  var from$1 = $as_sc_GenTraversable(from);
  return from$1.companion__scg_GenericCompanion().newBuilder__scm_Builder()
});
function $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable($thiz, xs) {
  if ($is_sc_LinearSeq(xs)) {
    var x2 = $as_sc_LinearSeq(xs);
    $p_scg_Growable__loop$1__sc_LinearSeq__V($thiz, x2)
  } else {
    xs.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$1) => ((elem$2) => this$1.$plus$eq__O__scg_Growable(elem$2)))($thiz)))
  };
  return $thiz
}
function $p_scg_Growable__loop$1__sc_LinearSeq__V($thiz, xs) {
  while (true) {
    var this$1 = xs;
    if ((!this$1.isEmpty__Z())) {
      $thiz.$plus$eq__O__scg_Growable(xs.head__O());
      xs = $as_sc_LinearSeq(xs.tail__O())
    } else {
      break
    }
  }
}
/** @constructor */
function $c_scg_MapFactory() {
  /*<skip>*/
}
$c_scg_MapFactory.prototype = new $h_scg_GenMapFactory();
$c_scg_MapFactory.prototype.constructor = $c_scg_MapFactory;
/** @constructor */
function $h_scg_MapFactory() {
  /*<skip>*/
}
$h_scg_MapFactory.prototype = $c_scg_MapFactory.prototype;
/** @constructor */
function $c_sci_HashMap$$anon$1() {
  this.sci_HashMap$$anon$1__f_invert = null;
  this.sci_HashMap$$anon$1__f_invert = new $c_sci_HashMap$$anon$1$$anon$2(this)
}
$c_sci_HashMap$$anon$1.prototype = new $h_sci_HashMap$Merger();
$c_sci_HashMap$$anon$1.prototype.constructor = $c_sci_HashMap$$anon$1;
/** @constructor */
function $h_sci_HashMap$$anon$1() {
  /*<skip>*/
}
$h_sci_HashMap$$anon$1.prototype = $c_sci_HashMap$$anon$1.prototype;
$c_sci_HashMap$$anon$1.prototype.apply__T2__T2__T2 = (function(a, b) {
  return a
});
$c_sci_HashMap$$anon$1.prototype.retainIdentical__Z = (function() {
  return true
});
$c_sci_HashMap$$anon$1.prototype.invert__sci_HashMap$Merger = (function() {
  return this.sci_HashMap$$anon$1__f_invert
});
var $d_sci_HashMap$$anon$1 = new $TypeData().initClass({
  sci_HashMap$$anon$1: 0
}, false, "scala.collection.immutable.HashMap$$anon$1", {
  sci_HashMap$$anon$1: 1,
  sci_HashMap$Merger: 1,
  O: 1
});
$c_sci_HashMap$$anon$1.prototype.$classData = $d_sci_HashMap$$anon$1;
/** @constructor */
function $c_sci_HashMap$$anon$1$$anon$2(outer) {
  /*<skip>*/
}
$c_sci_HashMap$$anon$1$$anon$2.prototype = new $h_sci_HashMap$Merger();
$c_sci_HashMap$$anon$1$$anon$2.prototype.constructor = $c_sci_HashMap$$anon$1$$anon$2;
/** @constructor */
function $h_sci_HashMap$$anon$1$$anon$2() {
  /*<skip>*/
}
$h_sci_HashMap$$anon$1$$anon$2.prototype = $c_sci_HashMap$$anon$1$$anon$2.prototype;
$c_sci_HashMap$$anon$1$$anon$2.prototype.apply__T2__T2__T2 = (function(a, b) {
  return b
});
$c_sci_HashMap$$anon$1$$anon$2.prototype.retainIdentical__Z = (function() {
  return true
});
$c_sci_HashMap$$anon$1$$anon$2.prototype.invert__sci_HashMap$Merger = (function() {
  return $m_sci_HashMap$().sci_HashMap$__f__defaultMerger
});
var $d_sci_HashMap$$anon$1$$anon$2 = new $TypeData().initClass({
  sci_HashMap$$anon$1$$anon$2: 0
}, false, "scala.collection.immutable.HashMap$$anon$1$$anon$2", {
  sci_HashMap$$anon$1$$anon$2: 1,
  sci_HashMap$Merger: 1,
  O: 1
});
$c_sci_HashMap$$anon$1$$anon$2.prototype.$classData = $d_sci_HashMap$$anon$1$$anon$2;
/** @constructor */
function $c_sci_HashMap$$anon$3() {
  this.sci_HashMap$$anon$3__f_invert = null;
  this.sci_HashMap$$anon$3__f_invert = new $c_sci_HashMap$$anon$3$$anon$4(this)
}
$c_sci_HashMap$$anon$3.prototype = new $h_sci_HashMap$Merger();
$c_sci_HashMap$$anon$3.prototype.constructor = $c_sci_HashMap$$anon$3;
/** @constructor */
function $h_sci_HashMap$$anon$3() {
  /*<skip>*/
}
$h_sci_HashMap$$anon$3.prototype = $c_sci_HashMap$$anon$3.prototype;
$c_sci_HashMap$$anon$3.prototype.apply__T2__T2__T2 = (function(a, b) {
  return (Object.is(a.T2__f__1, b.T2__f__1) ? b : new $c_T2(a.T2__f__1, b.T2__f__2))
});
$c_sci_HashMap$$anon$3.prototype.retainIdentical__Z = (function() {
  return true
});
$c_sci_HashMap$$anon$3.prototype.invert__sci_HashMap$Merger = (function() {
  return this.sci_HashMap$$anon$3__f_invert
});
var $d_sci_HashMap$$anon$3 = new $TypeData().initClass({
  sci_HashMap$$anon$3: 0
}, false, "scala.collection.immutable.HashMap$$anon$3", {
  sci_HashMap$$anon$3: 1,
  sci_HashMap$Merger: 1,
  O: 1
});
$c_sci_HashMap$$anon$3.prototype.$classData = $d_sci_HashMap$$anon$3;
/** @constructor */
function $c_sci_HashMap$$anon$3$$anon$4(outer) {
  /*<skip>*/
}
$c_sci_HashMap$$anon$3$$anon$4.prototype = new $h_sci_HashMap$Merger();
$c_sci_HashMap$$anon$3$$anon$4.prototype.constructor = $c_sci_HashMap$$anon$3$$anon$4;
/** @constructor */
function $h_sci_HashMap$$anon$3$$anon$4() {
  /*<skip>*/
}
$h_sci_HashMap$$anon$3$$anon$4.prototype = $c_sci_HashMap$$anon$3$$anon$4.prototype;
$c_sci_HashMap$$anon$3$$anon$4.prototype.apply__T2__T2__T2 = (function(a, b) {
  return (Object.is(b.T2__f__1, a.T2__f__1) ? a : new $c_T2(b.T2__f__1, a.T2__f__2))
});
$c_sci_HashMap$$anon$3$$anon$4.prototype.retainIdentical__Z = (function() {
  return true
});
$c_sci_HashMap$$anon$3$$anon$4.prototype.invert__sci_HashMap$Merger = (function() {
  return $m_sci_HashMap$().sci_HashMap$__f__concatMerger
});
var $d_sci_HashMap$$anon$3$$anon$4 = new $TypeData().initClass({
  sci_HashMap$$anon$3$$anon$4: 0
}, false, "scala.collection.immutable.HashMap$$anon$3$$anon$4", {
  sci_HashMap$$anon$3$$anon$4: 1,
  sci_HashMap$Merger: 1,
  O: 1
});
$c_sci_HashMap$$anon$3$$anon$4.prototype.$classData = $d_sci_HashMap$$anon$3$$anon$4;
/** @constructor */
function $c_sci_List$$anon$1() {
  /*<skip>*/
}
$c_sci_List$$anon$1.prototype = new $h_O();
$c_sci_List$$anon$1.prototype.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
  /*<skip>*/
}
$h_sci_List$$anon$1.prototype = $c_sci_List$$anon$1.prototype;
$c_sci_List$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sci_List$$anon$1.prototype.apply__O__O = (function(x) {
  return this
});
var $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
function $p_sci_Stream$StreamWithFilter__filtered$lzycompute__sci_Stream($thiz) {
  if ((!$thiz.sci_Stream$StreamWithFilter__f_bitmap$0)) {
    var this$1 = $thiz.sci_Stream$StreamWithFilter__f_s;
    var p = $thiz.sci_Stream$StreamWithFilter__f_p;
    var f = this$1.filterImpl__F1__Z__sci_Stream(p, false);
    $thiz.sci_Stream$StreamWithFilter__f_s = null;
    $thiz.sci_Stream$StreamWithFilter__f_filtered = f;
    $thiz.sci_Stream$StreamWithFilter__f_bitmap$0 = true
  };
  return $thiz.sci_Stream$StreamWithFilter__f_filtered
}
function $p_sci_Stream$StreamWithFilter__filtered__sci_Stream($thiz) {
  return ((!$thiz.sci_Stream$StreamWithFilter__f_bitmap$0) ? $p_sci_Stream$StreamWithFilter__filtered$lzycompute__sci_Stream($thiz) : $thiz.sci_Stream$StreamWithFilter__f_filtered)
}
/** @constructor */
function $c_sci_Stream$StreamWithFilter(sl, p) {
  this.sci_Stream$StreamWithFilter__f_filtered = null;
  this.sci_Stream$StreamWithFilter__f_p = null;
  this.sci_Stream$StreamWithFilter__f_s = null;
  this.sci_Stream$StreamWithFilter__f_bitmap$0 = false;
  this.sci_Stream$StreamWithFilter__f_p = p;
  this.sci_Stream$StreamWithFilter__f_s = $as_sci_Stream(sl.apply__O())
}
$c_sci_Stream$StreamWithFilter.prototype = new $h_O();
$c_sci_Stream$StreamWithFilter.prototype.constructor = $c_sci_Stream$StreamWithFilter;
/** @constructor */
function $h_sci_Stream$StreamWithFilter() {
  /*<skip>*/
}
$h_sci_Stream$StreamWithFilter.prototype = $c_sci_Stream$StreamWithFilter.prototype;
$c_sci_Stream$StreamWithFilter.prototype.map__F1__scg_CanBuildFrom__O = (function(f, bf) {
  return $p_sci_Stream$StreamWithFilter__filtered__sci_Stream(this).map__F1__scg_CanBuildFrom__O(f, bf)
});
var $d_sci_Stream$StreamWithFilter = new $TypeData().initClass({
  sci_Stream$StreamWithFilter: 0
}, false, "scala.collection.immutable.Stream$StreamWithFilter", {
  sci_Stream$StreamWithFilter: 1,
  O: 1,
  scg_FilterMonadic: 1
});
$c_sci_Stream$StreamWithFilter.prototype.$classData = $d_sci_Stream$StreamWithFilter;
/** @constructor */
function $c_sci_WrappedString$$anon$1() {
  /*<skip>*/
}
$c_sci_WrappedString$$anon$1.prototype = new $h_O();
$c_sci_WrappedString$$anon$1.prototype.constructor = $c_sci_WrappedString$$anon$1;
/** @constructor */
function $h_sci_WrappedString$$anon$1() {
  /*<skip>*/
}
$h_sci_WrappedString$$anon$1.prototype = $c_sci_WrappedString$$anon$1.prototype;
$c_sci_WrappedString$$anon$1.prototype.apply__O__scm_Builder = (function(from) {
  $as_sci_WrappedString(from);
  return $m_sci_WrappedString$().newBuilder__scm_Builder()
});
var $d_sci_WrappedString$$anon$1 = new $TypeData().initClass({
  sci_WrappedString$$anon$1: 0
}, false, "scala.collection.immutable.WrappedString$$anon$1", {
  sci_WrappedString$$anon$1: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_sci_WrappedString$$anon$1.prototype.$classData = $d_sci_WrappedString$$anon$1;
/** @constructor */
function $c_s_package$$anon$1() {
  /*<skip>*/
}
$c_s_package$$anon$1.prototype = new $h_O();
$c_s_package$$anon$1.prototype.constructor = $c_s_package$$anon$1;
/** @constructor */
function $h_s_package$$anon$1() {
  /*<skip>*/
}
$h_s_package$$anon$1.prototype = $c_s_package$$anon$1.prototype;
$c_s_package$$anon$1.prototype.toString__T = (function() {
  return "object AnyRef"
});
var $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
/** @constructor */
function $c_sr_AbstractFunction0() {
  /*<skip>*/
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
  /*<skip>*/
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>"
});
/** @constructor */
function $c_sr_AbstractFunction1() {
  /*<skip>*/
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
  /*<skip>*/
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sr_AbstractFunction2() {
  /*<skip>*/
}
$c_sr_AbstractFunction2.prototype = new $h_O();
$c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
  /*<skip>*/
}
$h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
$c_sr_AbstractFunction2.prototype.toString__T = (function() {
  return "<function2>"
});
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.sr_ObjectRef__f_elem = null;
  this.sr_ObjectRef__f_elem = elem
}
$c_sr_ObjectRef.prototype = new $h_O();
$c_sr_ObjectRef.prototype.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
  /*<skip>*/
}
$h_sr_ObjectRef.prototype = $c_sr_ObjectRef.prototype;
$c_sr_ObjectRef.prototype.toString__T = (function() {
  var obj = this.sr_ObjectRef__f_elem;
  return ("" + obj)
});
var $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_TraversableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed)
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ((xs instanceof $c_sci_List)) {
    var x2 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else {
    return this.orderedHash__sc_TraversableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
/** @constructor */
function $c_Lscalatags_JsDom$GenericAttr() {
  /*<skip>*/
}
$c_Lscalatags_JsDom$GenericAttr.prototype = new $h_O();
$c_Lscalatags_JsDom$GenericAttr.prototype.constructor = $c_Lscalatags_JsDom$GenericAttr;
/** @constructor */
function $h_Lscalatags_JsDom$GenericAttr() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$GenericAttr.prototype = $c_Lscalatags_JsDom$GenericAttr.prototype;
$c_Lscalatags_JsDom$GenericAttr.prototype.apply__Lorg_scalajs_dom_raw_Element__Lscalatags_generic_Attr__O__V = (function(t, a, v) {
  var x1 = a.Lscalatags_generic_Attr__f_namespace;
  var x = $m_s_None$();
  if ((x === x1)) {
    if ((!a.Lscalatags_generic_Attr__f_raw)) {
      if ((a.Lscalatags_generic_Attr__f_name === "class")) {
        var this$1 = $dp_toString__T(v);
        var xs = $f_T__split__T__I__AT(this$1, " ", 0);
        var i = 0;
        var len = xs.u.length;
        while ((i < len)) {
          var index = i;
          var arg1 = xs.get(index);
          var cls = $as_T(arg1);
          t.classList.add($f_T__trim__T(cls));
          i = ((1 + i) | 0)
        }
      } else {
        t.setAttribute(a.Lscalatags_generic_Attr__f_name, $dp_toString__T(v))
      }
    } else {
      var tmpElm = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createElement("p");
      tmpElm.innerHTML = (((("<p " + a.Lscalatags_generic_Attr__f_name) + "=\"") + $dp_toString__T(v)) + "\"><p>");
      var newAttr = tmpElm.children[0].attributes[0].cloneNode(true);
      t.setAttributeNode(newAttr)
    }
  } else if ((x1 instanceof $c_s_Some)) {
    var x2 = $as_s_Some(x1);
    var namespace = $as_Lscalatags_generic_Namespace(x2.s_Some__f_value);
    t.setAttributeNS(namespace.uri__T(), a.Lscalatags_generic_Attr__f_name, $dp_toString__T(v))
  } else {
    throw new $c_s_MatchError(x1)
  }
});
var $d_Lscalatags_JsDom$GenericAttr = new $TypeData().initClass({
  Lscalatags_JsDom$GenericAttr: 0
}, false, "scalatags.JsDom$GenericAttr", {
  Lscalatags_JsDom$GenericAttr: 1,
  O: 1,
  Lscalatags_generic_AttrValue: 1
});
$c_Lscalatags_JsDom$GenericAttr.prototype.$classData = $d_Lscalatags_JsDom$GenericAttr;
/** @constructor */
function $c_Lscalatags_JsDom$GenericPixelStyle(ev) {
  this.Lscalatags_JsDom$GenericPixelStyle__f_ev = null;
  this.Lscalatags_JsDom$GenericPixelStyle__f_ev = ev
}
$c_Lscalatags_JsDom$GenericPixelStyle.prototype = new $h_O();
$c_Lscalatags_JsDom$GenericPixelStyle.prototype.constructor = $c_Lscalatags_JsDom$GenericPixelStyle;
/** @constructor */
function $h_Lscalatags_JsDom$GenericPixelStyle() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$GenericPixelStyle.prototype = $c_Lscalatags_JsDom$GenericPixelStyle.prototype;
$c_Lscalatags_JsDom$GenericPixelStyle.prototype.apply__Lscalatags_generic_Style__O__Lscalatags_generic_StylePair = (function(s, v) {
  return new $c_Lscalatags_generic_StylePair(s, v, this.Lscalatags_JsDom$GenericPixelStyle__f_ev)
});
var $d_Lscalatags_JsDom$GenericPixelStyle = new $TypeData().initClass({
  Lscalatags_JsDom$GenericPixelStyle: 0
}, false, "scalatags.JsDom$GenericPixelStyle", {
  Lscalatags_JsDom$GenericPixelStyle: 1,
  O: 1,
  Lscalatags_generic_PixelStyleValue: 1
});
$c_Lscalatags_JsDom$GenericPixelStyle.prototype.$classData = $d_Lscalatags_JsDom$GenericPixelStyle;
/** @constructor */
function $c_Lscalatags_JsDom$GenericPixelStylePx(ev) {
  this.Lscalatags_JsDom$GenericPixelStylePx__f_ev = null;
  this.Lscalatags_JsDom$GenericPixelStylePx__f_ev = ev
}
$c_Lscalatags_JsDom$GenericPixelStylePx.prototype = new $h_O();
$c_Lscalatags_JsDom$GenericPixelStylePx.prototype.constructor = $c_Lscalatags_JsDom$GenericPixelStylePx;
/** @constructor */
function $h_Lscalatags_JsDom$GenericPixelStylePx() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$GenericPixelStylePx.prototype = $c_Lscalatags_JsDom$GenericPixelStylePx.prototype;
$c_Lscalatags_JsDom$GenericPixelStylePx.prototype.apply__Lscalatags_generic_Style__O__Lscalatags_generic_StylePair = (function(s, v) {
  return new $c_Lscalatags_generic_StylePair(s, $m_s_Predef$any2stringadd$().$plus$extension__O__T__T(v, "px"), this.Lscalatags_JsDom$GenericPixelStylePx__f_ev)
});
var $d_Lscalatags_JsDom$GenericPixelStylePx = new $TypeData().initClass({
  Lscalatags_JsDom$GenericPixelStylePx: 0
}, false, "scalatags.JsDom$GenericPixelStylePx", {
  Lscalatags_JsDom$GenericPixelStylePx: 1,
  O: 1,
  Lscalatags_generic_PixelStyleValue: 1
});
$c_Lscalatags_JsDom$GenericPixelStylePx.prototype.$classData = $d_Lscalatags_JsDom$GenericPixelStylePx;
/** @constructor */
function $c_Lscalatags_JsDom$GenericStyle() {
  /*<skip>*/
}
$c_Lscalatags_JsDom$GenericStyle.prototype = new $h_O();
$c_Lscalatags_JsDom$GenericStyle.prototype.constructor = $c_Lscalatags_JsDom$GenericStyle;
/** @constructor */
function $h_Lscalatags_JsDom$GenericStyle() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$GenericStyle.prototype = $c_Lscalatags_JsDom$GenericStyle.prototype;
$c_Lscalatags_JsDom$GenericStyle.prototype.apply__Lorg_scalajs_dom_raw_Element__Lscalatags_generic_Style__O__V = (function(t, s, v) {
  var qual$1 = t.style;
  var x$1 = s.Lscalatags_generic_Style__f_cssName;
  var x$2 = $dp_toString__T(v);
  qual$1.setProperty(x$1, x$2)
});
var $d_Lscalatags_JsDom$GenericStyle = new $TypeData().initClass({
  Lscalatags_JsDom$GenericStyle: 0
}, false, "scalatags.JsDom$GenericStyle", {
  Lscalatags_JsDom$GenericStyle: 1,
  O: 1,
  Lscalatags_generic_StyleValue: 1
});
$c_Lscalatags_JsDom$GenericStyle.prototype.$classData = $d_Lscalatags_JsDom$GenericStyle;
/** @constructor */
function $c_Lscalatags_LowPriorityImplicits$$anon$2(outer, ev$1) {
  this.Lscalatags_LowPriorityImplicits$$anon$2__f_ev$1 = null;
  this.Lscalatags_LowPriorityImplicits$$anon$2__f_ev$1 = ev$1
}
$c_Lscalatags_LowPriorityImplicits$$anon$2.prototype = new $h_O();
$c_Lscalatags_LowPriorityImplicits$$anon$2.prototype.constructor = $c_Lscalatags_LowPriorityImplicits$$anon$2;
/** @constructor */
function $h_Lscalatags_LowPriorityImplicits$$anon$2() {
  /*<skip>*/
}
$h_Lscalatags_LowPriorityImplicits$$anon$2.prototype = $c_Lscalatags_LowPriorityImplicits$$anon$2.prototype;
$c_Lscalatags_LowPriorityImplicits$$anon$2.prototype.apply__Lorg_scalajs_dom_raw_Element__Lscalatags_generic_Attr__O__V = (function(t, a, v) {
  t[a.Lscalatags_generic_Attr__f_name] = this.Lscalatags_LowPriorityImplicits$$anon$2__f_ev$1.apply__O__O(v)
});
var $d_Lscalatags_LowPriorityImplicits$$anon$2 = new $TypeData().initClass({
  Lscalatags_LowPriorityImplicits$$anon$2: 0
}, false, "scalatags.LowPriorityImplicits$$anon$2", {
  Lscalatags_LowPriorityImplicits$$anon$2: 1,
  O: 1,
  Lscalatags_generic_AttrValue: 1
});
$c_Lscalatags_LowPriorityImplicits$$anon$2.prototype.$classData = $d_Lscalatags_LowPriorityImplicits$$anon$2;
function $f_Lscalatags_generic_Aggregate__$init$__V($thiz) {
  $thiz.Lobservatory_Implicits$__f_stringAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lobservatory_Implicits$__f_booleanAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lobservatory_Implicits$__f_byteAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lobservatory_Implicits$__f_shortAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lobservatory_Implicits$__f_intAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lobservatory_Implicits$__f_longAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lobservatory_Implicits$__f_floatAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lobservatory_Implicits$__f_doubleAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lobservatory_Implicits$__f_stringStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lobservatory_Implicits$__f_booleanStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lobservatory_Implicits$__f_byteStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lobservatory_Implicits$__f_shortStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lobservatory_Implicits$__f_intStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lobservatory_Implicits$__f_longStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lobservatory_Implicits$__f_floatStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lobservatory_Implicits$__f_doubleStyle = new $c_Lscalatags_JsDom$GenericStyle();
  var ev = $thiz.Lobservatory_Implicits$__f_stringStyle;
  $thiz.Lobservatory_Implicits$__f_stringPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStyle(ev);
  var ev$1 = $thiz.Lobservatory_Implicits$__f_booleanStyle;
  $thiz.Lobservatory_Implicits$__f_booleanPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStyle(ev$1);
  var ev$2 = $thiz.Lobservatory_Implicits$__f_stringStyle;
  $thiz.Lobservatory_Implicits$__f_bytePixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$2);
  var ev$3 = $thiz.Lobservatory_Implicits$__f_stringStyle;
  $thiz.Lobservatory_Implicits$__f_shortPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$3);
  var ev$4 = $thiz.Lobservatory_Implicits$__f_stringStyle;
  $thiz.Lobservatory_Implicits$__f_intPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$4);
  var ev$5 = $thiz.Lobservatory_Implicits$__f_stringStyle;
  $thiz.Lobservatory_Implicits$__f_longPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$5);
  var ev$6 = $thiz.Lobservatory_Implicits$__f_stringStyle;
  $thiz.Lobservatory_Implicits$__f_floatPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$6);
  var ev$7 = $thiz.Lobservatory_Implicits$__f_stringStyle;
  $thiz.Lobservatory_Implicits$__f_doublePixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$7)
}
function $is_Lscalatags_generic_Frag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lscalatags_generic_Frag)))
}
function $as_Lscalatags_generic_Frag(obj) {
  return (($is_Lscalatags_generic_Frag(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Frag"))
}
function $isArrayOf_Lscalatags_generic_Frag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Frag)))
}
function $asArrayOf_Lscalatags_generic_Frag(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Frag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Frag;", depth))
}
/** @constructor */
function $c_Lscalatags_generic_Namespace$$anon$1() {
  /*<skip>*/
}
$c_Lscalatags_generic_Namespace$$anon$1.prototype = new $h_O();
$c_Lscalatags_generic_Namespace$$anon$1.prototype.constructor = $c_Lscalatags_generic_Namespace$$anon$1;
/** @constructor */
function $h_Lscalatags_generic_Namespace$$anon$1() {
  /*<skip>*/
}
$h_Lscalatags_generic_Namespace$$anon$1.prototype = $c_Lscalatags_generic_Namespace$$anon$1.prototype;
$c_Lscalatags_generic_Namespace$$anon$1.prototype.uri__T = (function() {
  return "http://www.w3.org/1999/xhtml"
});
var $d_Lscalatags_generic_Namespace$$anon$1 = new $TypeData().initClass({
  Lscalatags_generic_Namespace$$anon$1: 0
}, false, "scalatags.generic.Namespace$$anon$1", {
  Lscalatags_generic_Namespace$$anon$1: 1,
  O: 1,
  Lscalatags_generic_Namespace: 1
});
$c_Lscalatags_generic_Namespace$$anon$1.prototype.$classData = $d_Lscalatags_generic_Namespace$$anon$1;
/** @constructor */
function $c_Lscalatags_generic_Namespace$$anon$2() {
  /*<skip>*/
}
$c_Lscalatags_generic_Namespace$$anon$2.prototype = new $h_O();
$c_Lscalatags_generic_Namespace$$anon$2.prototype.constructor = $c_Lscalatags_generic_Namespace$$anon$2;
/** @constructor */
function $h_Lscalatags_generic_Namespace$$anon$2() {
  /*<skip>*/
}
$h_Lscalatags_generic_Namespace$$anon$2.prototype = $c_Lscalatags_generic_Namespace$$anon$2.prototype;
$c_Lscalatags_generic_Namespace$$anon$2.prototype.uri__T = (function() {
  return "http://www.w3.org/2000/svg"
});
var $d_Lscalatags_generic_Namespace$$anon$2 = new $TypeData().initClass({
  Lscalatags_generic_Namespace$$anon$2: 0
}, false, "scalatags.generic.Namespace$$anon$2", {
  Lscalatags_generic_Namespace$$anon$2: 1,
  O: 1,
  Lscalatags_generic_Namespace: 1
});
$c_Lscalatags_generic_Namespace$$anon$2.prototype.$classData = $d_Lscalatags_generic_Namespace$$anon$2;
/** @constructor */
function $c_Lscalatags_generic_Namespace$$anon$3() {
  /*<skip>*/
}
$c_Lscalatags_generic_Namespace$$anon$3.prototype = new $h_O();
$c_Lscalatags_generic_Namespace$$anon$3.prototype.constructor = $c_Lscalatags_generic_Namespace$$anon$3;
/** @constructor */
function $h_Lscalatags_generic_Namespace$$anon$3() {
  /*<skip>*/
}
$h_Lscalatags_generic_Namespace$$anon$3.prototype = $c_Lscalatags_generic_Namespace$$anon$3.prototype;
$c_Lscalatags_generic_Namespace$$anon$3.prototype.uri__T = (function() {
  return "http://www.w3.org/1999/xlink"
});
var $d_Lscalatags_generic_Namespace$$anon$3 = new $TypeData().initClass({
  Lscalatags_generic_Namespace$$anon$3: 0
}, false, "scalatags.generic.Namespace$$anon$3", {
  Lscalatags_generic_Namespace$$anon$3: 1,
  O: 1,
  Lscalatags_generic_Namespace: 1
});
$c_Lscalatags_generic_Namespace$$anon$3.prototype.$classData = $d_Lscalatags_generic_Namespace$$anon$3;
function $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, s, ns, raw) {
  return new $c_Lscalatags_generic_Attr(s, $m_s_Option$().apply__O__s_Option(ns), raw)
}
/** @constructor */
function $c_Lscalatags_generic_Util$SeqNode(outer, xs, ev) {
  this.Lscalatags_generic_Util$SeqNode__f_xs = null;
  this.Lscalatags_generic_Util$SeqNode__f_ev = null;
  this.Lscalatags_generic_Util$SeqNode__f_$outer = null;
  this.Lscalatags_generic_Util$SeqNode__f_xs = xs;
  this.Lscalatags_generic_Util$SeqNode__f_ev = ev;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.Lscalatags_generic_Util$SeqNode__f_$outer = outer
  };
  if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  }
}
$c_Lscalatags_generic_Util$SeqNode.prototype = new $h_O();
$c_Lscalatags_generic_Util$SeqNode.prototype.constructor = $c_Lscalatags_generic_Util$SeqNode;
/** @constructor */
function $h_Lscalatags_generic_Util$SeqNode() {
  /*<skip>*/
}
$h_Lscalatags_generic_Util$SeqNode.prototype = $c_Lscalatags_generic_Util$SeqNode.prototype;
$c_Lscalatags_generic_Util$SeqNode.prototype.applyTo__O__V = (function(t) {
  this.Lscalatags_generic_Util$SeqNode__f_xs.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$1, t$1) => ((x$1$2) => {
    $as_Lscalatags_generic_Modifier(this$1.Lscalatags_generic_Util$SeqNode__f_ev.apply__O__O(x$1$2)).applyTo__O__V(t$1)
  }))(this, t)))
});
var $d_Lscalatags_generic_Util$SeqNode = new $TypeData().initClass({
  Lscalatags_generic_Util$SeqNode: 0
}, false, "scalatags.generic.Util$SeqNode", {
  Lscalatags_generic_Util$SeqNode: 1,
  O: 1,
  Lscalatags_generic_Modifier: 1
});
$c_Lscalatags_generic_Util$SeqNode.prototype.$classData = $d_Lscalatags_generic_Util$SeqNode;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($uZ($thiz) ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  var b = $uZ($thiz);
  return ("" + b)
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  var value = $uC($thiz);
  return value
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var $$x1 = $uC($thiz);
    var this$1 = $as_jl_Character(that);
    return ($$x1 === $uC(this$1))
  } else {
    return false
  }
}
function $f_jl_Character__toString__T($thiz) {
  var c = $uC($thiz);
  return $as_T(String.fromCharCode(c))
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
function $p_ju_regex_Pattern__jsPattern__T($thiz) {
  return $as_T($thiz.ju_regex_Pattern__f_jsRegExp.source)
}
function $p_ju_regex_Pattern__jsFlags__T($thiz) {
  return ((($uZ($thiz.ju_regex_Pattern__f_jsRegExp.global) ? "g" : "") + ($uZ($thiz.ju_regex_Pattern__f_jsRegExp.ignoreCase) ? "i" : "")) + ($uZ($thiz.ju_regex_Pattern__f_jsRegExp.multiline) ? "m" : ""))
}
function $p_ju_regex_Pattern__groupCount$lzycompute__I($thiz) {
  if (((((1 & $thiz.ju_regex_Pattern__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.ju_regex_Pattern__f_groupCount = (((-1) + $uI(new RegExp(("|" + $p_ju_regex_Pattern__jsPattern__T($thiz))).exec("").length)) | 0);
    $thiz.ju_regex_Pattern__f_bitmap$0 = (((1 | $thiz.ju_regex_Pattern__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.ju_regex_Pattern__f_groupCount
}
/** @constructor */
function $c_ju_regex_Pattern(jsRegExp, _pattern, _flags) {
  this.ju_regex_Pattern__f_groupCount = 0;
  this.ju_regex_Pattern__f_groupStartMapper = null;
  this.ju_regex_Pattern__f_jsRegExp = null;
  this.ju_regex_Pattern__f__pattern = null;
  this.ju_regex_Pattern__f__flags = 0;
  this.ju_regex_Pattern__f_bitmap$0 = 0;
  this.ju_regex_Pattern__f_jsRegExp = jsRegExp;
  this.ju_regex_Pattern__f__pattern = _pattern;
  this.ju_regex_Pattern__f__flags = _flags
}
$c_ju_regex_Pattern.prototype = new $h_O();
$c_ju_regex_Pattern.prototype.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
  /*<skip>*/
}
$h_ju_regex_Pattern.prototype = $c_ju_regex_Pattern.prototype;
$c_ju_regex_Pattern.prototype.groupCount__I = (function() {
  return (((((1 & this.ju_regex_Pattern__f_bitmap$0) << 24) >> 24) === 0) ? $p_ju_regex_Pattern__groupCount$lzycompute__I(this) : this.ju_regex_Pattern__f_groupCount)
});
$c_ju_regex_Pattern.prototype.toString__T = (function() {
  return this.ju_regex_Pattern__f__pattern
});
$c_ju_regex_Pattern.prototype.newJSRegExp__sjs_js_RegExp = (function() {
  var r = new RegExp(this.ju_regex_Pattern__f_jsRegExp);
  return ((!Object.is(r, this.ju_regex_Pattern__f_jsRegExp)) ? r : new RegExp($p_ju_regex_Pattern__jsPattern__T(this), $p_ju_regex_Pattern__jsFlags__T(this)))
});
$c_ju_regex_Pattern.prototype.split__jl_CharSequence__I__AT = (function(input, limit) {
  var inputStr = $dp_toString__T(input);
  if ((inputStr === "")) {
    return new ($d_T.getArrayOf().constr)([""])
  } else {
    var lim = ((limit > 0) ? limit : 2147483647);
    var matcher = new $c_ju_regex_Matcher(this, inputStr, 0, $uI(inputStr.length));
    var elems = null;
    elems = [];
    var prevEnd = 0;
    var size = 0;
    while (((size < (((-1) + lim) | 0)) && matcher.find__Z())) {
      if ((matcher.end__I() !== 0)) {
        var beginIndex = prevEnd;
        var endIndex = matcher.start__I();
        var elem = $as_T(inputStr.substring(beginIndex, endIndex));
        var unboxedElem = ((elem === null) ? null : elem);
        elems.push(unboxedElem);
        size = ((1 + size) | 0)
      };
      prevEnd = matcher.end__I()
    };
    var beginIndex$1 = prevEnd;
    var elem$1 = $as_T(inputStr.substring(beginIndex$1));
    var unboxedElem$1 = ((elem$1 === null) ? null : elem$1);
    elems.push(unboxedElem$1);
    var result = new ($d_T.getArrayOf().constr)(elems);
    if ((limit !== 0)) {
      return result
    } else {
      var actualLength = result.u.length;
      while (((actualLength !== 0) && (result.get((((-1) + actualLength) | 0)) === ""))) {
        actualLength = (((-1) + actualLength) | 0)
      };
      if ((actualLength === result.u.length)) {
        return result
      } else {
        var actualResult = new ($d_T.getArrayOf().constr)(actualLength);
        var length = actualLength;
        result.copyTo(0, actualResult, 0, length);
        return actualResult
      }
    }
  }
});
var $d_ju_regex_Pattern = new $TypeData().initClass({
  ju_regex_Pattern: 0
}, false, "java.util.regex.Pattern", {
  ju_regex_Pattern: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_regex_Pattern.prototype.$classData = $d_ju_regex_Pattern;
/** @constructor */
function $c_ju_regex_Pattern$() {
  this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat = null;
  this.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat = null;
  $n_ju_regex_Pattern$ = this;
  this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat = new RegExp("^\\\\Q(.|\\n|\\r)\\\\E$");
  this.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)")
}
$c_ju_regex_Pattern$.prototype = new $h_O();
$c_ju_regex_Pattern$.prototype.constructor = $c_ju_regex_Pattern$;
/** @constructor */
function $h_ju_regex_Pattern$() {
  /*<skip>*/
}
$h_ju_regex_Pattern$.prototype = $c_ju_regex_Pattern$.prototype;
$c_ju_regex_Pattern$.prototype.compile__T__I__ju_regex_Pattern = (function(regex, flags) {
  if (((16 & flags) !== 0)) {
    var x1 = new $c_T2(this.quote__T__T(regex), flags)
  } else {
    var m = this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat.exec(regex);
    if ((m !== null)) {
      var value = m[1];
      if ((value === (void 0))) {
        throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
      };
      var this$5 = new $c_s_Some(new $c_T2(this.quote__T__T($as_T(value)), flags))
    } else {
      var this$5 = $m_s_None$()
    };
    if (this$5.isEmpty__Z()) {
      var this$6 = $m_ju_regex_Pattern$();
      var m$1 = this$6.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat.exec(regex);
      if ((m$1 !== null)) {
        var value$1 = m$1[0];
        if ((value$1 === (void 0))) {
          throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
        };
        var this$11 = $as_T(value$1);
        var beginIndex = $uI(this$11.length);
        var newPat = $as_T(regex.substring(beginIndex));
        var elem = 0;
        elem = flags;
        var value$2 = m$1[1];
        if ((value$2 !== (void 0))) {
          var chars = $as_T(value$2);
          var end = $uI(chars.length);
          var i = 0;
          while ((i < end)) {
            var arg1 = i;
            elem = (elem | $m_ju_regex_Pattern$().java$util$regex$Pattern$$charToFlag__C__I((65535 & $uI(chars.charCodeAt(arg1)))));
            i = ((1 + i) | 0)
          }
        };
        var value$3 = m$1[2];
        if ((value$3 !== (void 0))) {
          var chars$3 = $as_T(value$3);
          var end$1 = $uI(chars$3.length);
          var i$1 = 0;
          while ((i$1 < end$1)) {
            var arg1$1 = i$1;
            elem = (elem & (~$m_ju_regex_Pattern$().java$util$regex$Pattern$$charToFlag__C__I((65535 & $uI(chars$3.charCodeAt(arg1$1))))));
            i$1 = ((1 + i$1) | 0)
          }
        };
        var this$28 = new $c_s_Some(new $c_T2(newPat, elem))
      } else {
        var this$28 = $m_s_None$()
      }
    } else {
      var this$28 = this$5
    };
    var x1 = $as_T2((this$28.isEmpty__Z() ? new $c_T2(regex, flags) : this$28.get__O()))
  };
  if ((x1 === null)) {
    throw new $c_s_MatchError(x1)
  };
  var jsPattern = $as_T(x1.T2__f__1);
  var flags1 = $uI(x1.T2__f__2);
  var jsFlags = (("g" + (((2 & flags1) !== 0) ? "i" : "")) + (((8 & flags1) !== 0) ? "m" : ""));
  var jsRegExp = new RegExp(jsPattern, jsFlags);
  return new $c_ju_regex_Pattern(jsRegExp, regex, flags1)
});
$c_ju_regex_Pattern$.prototype.quote__T__T = (function(s) {
  var result = "";
  var i = 0;
  while ((i < $uI(s.length))) {
    var index = i;
    var c = (65535 & $uI(s.charCodeAt(index)));
    var $$x2 = result;
    switch (c) {
      case 92:
      case 46:
      case 40:
      case 41:
      case 91:
      case 93:
      case 123:
      case 125:
      case 124:
      case 63:
      case 42:
      case 43:
      case 94:
      case 36: {
        var $$x1 = ("\\" + $bC(c));
        break
      }
      default: {
        var $$x1 = $bC(c)
      }
    };
    result = (("" + $$x2) + $$x1);
    i = ((1 + i) | 0)
  };
  return result
});
$c_ju_regex_Pattern$.prototype.java$util$regex$Pattern$$charToFlag__C__I = (function(c) {
  switch (c) {
    case 105: {
      return 2;
      break
    }
    case 100: {
      return 1;
      break
    }
    case 109: {
      return 8;
      break
    }
    case 115: {
      return 32;
      break
    }
    case 117: {
      return 64;
      break
    }
    case 120: {
      return 4;
      break
    }
    case 85: {
      return 256;
      break
    }
    default: {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag")
    }
  }
});
var $d_ju_regex_Pattern$ = new $TypeData().initClass({
  ju_regex_Pattern$: 0
}, false, "java.util.regex.Pattern$", {
  ju_regex_Pattern$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_regex_Pattern$.prototype.$classData = $d_ju_regex_Pattern$;
var $n_ju_regex_Pattern$;
function $m_ju_regex_Pattern$() {
  if ((!$n_ju_regex_Pattern$)) {
    $n_ju_regex_Pattern$ = new $c_ju_regex_Pattern$()
  };
  return $n_ju_regex_Pattern$
}
/** @constructor */
function $c_s_Option$() {
  /*<skip>*/
}
$c_s_Option$.prototype = new $h_O();
$c_s_Option$.prototype.constructor = $c_s_Option$;
/** @constructor */
function $h_s_Option$() {
  /*<skip>*/
}
$h_s_Option$.prototype = $c_s_Option$.prototype;
$c_s_Option$.prototype.apply__O__s_Option = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x))
});
var $d_s_Option$ = new $TypeData().initClass({
  s_Option$: 0
}, false, "scala.Option$", {
  s_Option$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Option$.prototype.$classData = $d_s_Option$;
var $n_s_Option$;
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$()
  };
  return $n_s_Option$
}
/** @constructor */
function $c_s_Predef$() {
  this.s_Predef$__f_Map = null;
  this.s_Predef$__f_Set = null;
  this.s_Predef$__f_ClassManifest = null;
  this.s_Predef$__f_Manifest = null;
  this.s_Predef$__f_NoManifest = null;
  this.s_Predef$__f_StringCanBuildFrom = null;
  this.s_Predef$__f_singleton_$less$colon$less = null;
  this.s_Predef$__f_scala$Predef$$singleton_$eq$colon$eq = null;
  $n_s_Predef$ = this;
  $m_s_package$();
  $m_sci_List$();
  this.s_Predef$__f_Map = $m_sci_Map$();
  this.s_Predef$__f_Set = $m_sci_Set$();
  this.s_Predef$__f_ClassManifest = $m_s_reflect_package$().s_reflect_package$__f_ClassManifest;
  this.s_Predef$__f_Manifest = $m_s_reflect_package$().s_reflect_package$__f_Manifest;
  this.s_Predef$__f_NoManifest = $m_s_reflect_NoManifest$();
  this.s_Predef$__f_StringCanBuildFrom = new $c_s_Predef$$anon$1();
  this.s_Predef$__f_singleton_$less$colon$less = new $c_s_Predef$$anon$2();
  this.s_Predef$__f_scala$Predef$$singleton_$eq$colon$eq = new $c_s_Predef$$anon$3()
}
$c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$c_s_Predef$.prototype.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
  /*<skip>*/
}
$h_s_Predef$.prototype = $c_s_Predef$.prototype;
$c_s_Predef$.prototype.assert__Z__V = (function(assertion) {
  if ((!assertion)) {
    throw new $c_jl_AssertionError("assertion failed")
  }
});
$c_s_Predef$.prototype.$qmark$qmark$qmark__E = (function() {
  throw new $c_s_NotImplementedError()
});
var $d_s_Predef$ = new $TypeData().initClass({
  s_Predef$: 0
}, false, "scala.Predef$", {
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  O: 1,
  s_DeprecatedPredef: 1
});
$c_s_Predef$.prototype.$classData = $d_s_Predef$;
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$()
  };
  return $n_s_Predef$
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T2__f__1;
      break
    }
    case 1: {
      return $thiz.T2__f__2;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
}
function $p_sc_GenSet$__liftedTree1$1__sc_GenSetLike__sc_GenSet__Z($thiz, thisSet$1, thatSet$1) {
  try {
    return thisSet$1.subsetOf__sc_GenSet__Z(thatSet$1)
  } catch (e) {
    if ((e instanceof $c_jl_ClassCastException)) {
      $as_jl_ClassCastException(e);
      return false
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sc_GenSet$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sc_GenSet$.prototype = new $h_scg_GenTraversableFactory();
$c_sc_GenSet$.prototype.constructor = $c_sc_GenSet$;
/** @constructor */
function $h_sc_GenSet$() {
  /*<skip>*/
}
$h_sc_GenSet$.prototype = $c_sc_GenSet$.prototype;
$c_sc_GenSet$.prototype.newBuilder__scm_Builder = (function() {
  $m_sc_Set$();
  $m_sci_Set$();
  return new $c_sci_Set$SetBuilderImpl()
});
$c_sc_GenSet$.prototype.setEquals__sc_GenSetLike__sc_GenSet__Z = (function(thisSet, thatSet) {
  return ((thisSet === thatSet) || ((thisSet.size__I() === thatSet.size__I()) && $p_sc_GenSet$__liftedTree1$1__sc_GenSetLike__sc_GenSet__Z(this, thisSet, thatSet)))
});
var $d_sc_GenSet$ = new $TypeData().initClass({
  sc_GenSet$: 0
}, false, "scala.collection.GenSet$", {
  sc_GenSet$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1
});
$c_sc_GenSet$.prototype.$classData = $d_sc_GenSet$;
var $n_sc_GenSet$;
function $m_sc_GenSet$() {
  if ((!$n_sc_GenSet$)) {
    $n_sc_GenSet$ = new $c_sc_GenSet$()
  };
  return $n_sc_GenSet$
}
function $f_sc_Iterator__foreach__F1__V($thiz, f) {
  while ($thiz.hasNext__Z()) {
    f.apply__O__O($thiz.next__O())
  }
}
function $f_sc_Iterator__forall__F1__Z($thiz, p) {
  var res = true;
  while ((res && $thiz.hasNext__Z())) {
    res = $uZ(p.apply__O__O($thiz.next__O()))
  };
  return res
}
function $f_sc_Iterator__toStream__sci_Stream($thiz) {
  if ($thiz.hasNext__Z()) {
    var hd = $thiz.next__O();
    var tl = new $c_sjsr_AnonFunction0(((this$1) => (() => this$1.toStream__sci_Stream()))($thiz));
    return new $c_sci_Stream$Cons(hd, tl)
  } else {
    $m_sci_Stream$();
    return $m_sci_Stream$Empty$()
  }
}
/** @constructor */
function $c_sc_TraversableOnce$appender$1(outer, b$1, sep$1) {
  this.sc_TraversableOnce$appender$1__f_first = false;
  this.sc_TraversableOnce$appender$1__f_b$1 = null;
  this.sc_TraversableOnce$appender$1__f_sep$1 = null;
  this.sc_TraversableOnce$appender$1__f_b$1 = b$1;
  this.sc_TraversableOnce$appender$1__f_sep$1 = sep$1;
  this.sc_TraversableOnce$appender$1__f_first = true
}
$c_sc_TraversableOnce$appender$1.prototype = new $h_sr_AbstractFunction1();
$c_sc_TraversableOnce$appender$1.prototype.constructor = $c_sc_TraversableOnce$appender$1;
/** @constructor */
function $h_sc_TraversableOnce$appender$1() {
  /*<skip>*/
}
$h_sc_TraversableOnce$appender$1.prototype = $c_sc_TraversableOnce$appender$1.prototype;
$c_sc_TraversableOnce$appender$1.prototype.apply__O__V = (function(x) {
  if (this.sc_TraversableOnce$appender$1__f_first) {
    this.sc_TraversableOnce$appender$1__f_b$1.append__O__scm_StringBuilder(x);
    this.sc_TraversableOnce$appender$1__f_first = false
  } else {
    this.sc_TraversableOnce$appender$1__f_b$1.append__T__scm_StringBuilder(this.sc_TraversableOnce$appender$1__f_sep$1);
    this.sc_TraversableOnce$appender$1__f_b$1.append__O__scm_StringBuilder(x)
  }
});
$c_sc_TraversableOnce$appender$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1)
});
var $d_sc_TraversableOnce$appender$1 = new $TypeData().initClass({
  sc_TraversableOnce$appender$1: 0
}, false, "scala.collection.TraversableOnce$appender$1", {
  sc_TraversableOnce$appender$1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sc_TraversableOnce$appender$1.prototype.$classData = $d_sc_TraversableOnce$appender$1;
/** @constructor */
function $c_sc_TraversableOnce$folder$1(outer, z$1, op$1) {
  this.sc_TraversableOnce$folder$1__f_result = null;
  this.sc_TraversableOnce$folder$1__f_op$1 = null;
  this.sc_TraversableOnce$folder$1__f_op$1 = op$1;
  this.sc_TraversableOnce$folder$1__f_result = z$1
}
$c_sc_TraversableOnce$folder$1.prototype = new $h_sr_AbstractFunction1();
$c_sc_TraversableOnce$folder$1.prototype.constructor = $c_sc_TraversableOnce$folder$1;
/** @constructor */
function $h_sc_TraversableOnce$folder$1() {
  /*<skip>*/
}
$h_sc_TraversableOnce$folder$1.prototype = $c_sc_TraversableOnce$folder$1.prototype;
$c_sc_TraversableOnce$folder$1.prototype.apply__O__V = (function(v1) {
  this.sc_TraversableOnce$folder$1__f_result = this.sc_TraversableOnce$folder$1__f_op$1.apply__O__O__O(this.sc_TraversableOnce$folder$1__f_result, v1)
});
$c_sc_TraversableOnce$folder$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1)
});
var $d_sc_TraversableOnce$folder$1 = new $TypeData().initClass({
  sc_TraversableOnce$folder$1: 0
}, false, "scala.collection.TraversableOnce$folder$1", {
  sc_TraversableOnce$folder$1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sc_TraversableOnce$folder$1.prototype.$classData = $d_sc_TraversableOnce$folder$1;
/** @constructor */
function $c_sc_TraversableOnce$reducer$1(outer, op$3) {
  this.sc_TraversableOnce$reducer$1__f_first = false;
  this.sc_TraversableOnce$reducer$1__f_acc = null;
  this.sc_TraversableOnce$reducer$1__f_op$3 = null;
  this.sc_TraversableOnce$reducer$1__f_op$3 = op$3;
  this.sc_TraversableOnce$reducer$1__f_first = true;
  this.sc_TraversableOnce$reducer$1__f_acc = 0
}
$c_sc_TraversableOnce$reducer$1.prototype = new $h_sr_AbstractFunction1();
$c_sc_TraversableOnce$reducer$1.prototype.constructor = $c_sc_TraversableOnce$reducer$1;
/** @constructor */
function $h_sc_TraversableOnce$reducer$1() {
  /*<skip>*/
}
$h_sc_TraversableOnce$reducer$1.prototype = $c_sc_TraversableOnce$reducer$1.prototype;
$c_sc_TraversableOnce$reducer$1.prototype.apply__O__V = (function(x) {
  if (this.sc_TraversableOnce$reducer$1__f_first) {
    this.sc_TraversableOnce$reducer$1__f_acc = x;
    this.sc_TraversableOnce$reducer$1__f_first = false
  } else {
    this.sc_TraversableOnce$reducer$1__f_acc = this.sc_TraversableOnce$reducer$1__f_op$3.apply__O__O__O(this.sc_TraversableOnce$reducer$1__f_acc, x)
  }
});
$c_sc_TraversableOnce$reducer$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1)
});
var $d_sc_TraversableOnce$reducer$1 = new $TypeData().initClass({
  sc_TraversableOnce$reducer$1: 0
}, false, "scala.collection.TraversableOnce$reducer$1", {
  sc_TraversableOnce$reducer$1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sc_TraversableOnce$reducer$1.prototype.$classData = $d_sc_TraversableOnce$reducer$1;
/** @constructor */
function $c_scg_GenSeqFactory() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
}
$c_scg_GenSeqFactory.prototype = new $h_scg_GenTraversableFactory();
$c_scg_GenSeqFactory.prototype.constructor = $c_scg_GenSeqFactory;
/** @constructor */
function $h_scg_GenSeqFactory() {
  /*<skip>*/
}
$h_scg_GenSeqFactory.prototype = $c_scg_GenSeqFactory.prototype;
/** @constructor */
function $c_scg_GenTraversableFactory$$anon$1(outer) {
  this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = null;
  this.scg_GenTraversableFactory$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.scg_GenTraversableFactory$$anon$1__f_$outer = outer
  };
  $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__(this, outer)
}
$c_scg_GenTraversableFactory$$anon$1.prototype = new $h_scg_GenTraversableFactory$GenericCanBuildFrom();
$c_scg_GenTraversableFactory$$anon$1.prototype.constructor = $c_scg_GenTraversableFactory$$anon$1;
/** @constructor */
function $h_scg_GenTraversableFactory$$anon$1() {
  /*<skip>*/
}
$h_scg_GenTraversableFactory$$anon$1.prototype = $c_scg_GenTraversableFactory$$anon$1.prototype;
var $d_scg_GenTraversableFactory$$anon$1 = new $TypeData().initClass({
  scg_GenTraversableFactory$$anon$1: 0
}, false, "scala.collection.generic.GenTraversableFactory$$anon$1", {
  scg_GenTraversableFactory$$anon$1: 1,
  scg_GenTraversableFactory$GenericCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_scg_GenTraversableFactory$$anon$1.prototype.$classData = $d_scg_GenTraversableFactory$$anon$1;
/** @constructor */
function $c_scg_ImmutableMapFactory() {
  /*<skip>*/
}
$c_scg_ImmutableMapFactory.prototype = new $h_scg_MapFactory();
$c_scg_ImmutableMapFactory.prototype.constructor = $c_scg_ImmutableMapFactory;
/** @constructor */
function $h_scg_ImmutableMapFactory() {
  /*<skip>*/
}
$h_scg_ImmutableMapFactory.prototype = $c_scg_ImmutableMapFactory.prototype;
/** @constructor */
function $c_sci_$colon$colon$() {
  /*<skip>*/
}
$c_sci_$colon$colon$.prototype = new $h_O();
$c_sci_$colon$colon$.prototype.constructor = $c_sci_$colon$colon$;
/** @constructor */
function $h_sci_$colon$colon$() {
  /*<skip>*/
}
$h_sci_$colon$colon$.prototype = $c_sci_$colon$colon$.prototype;
$c_sci_$colon$colon$.prototype.toString__T = (function() {
  return "::"
});
var $d_sci_$colon$colon$ = new $TypeData().initClass({
  sci_$colon$colon$: 0
}, false, "scala.collection.immutable.$colon$colon$", {
  sci_$colon$colon$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_$colon$colon$.prototype.$classData = $d_sci_$colon$colon$;
var $n_sci_$colon$colon$;
function $m_sci_$colon$colon$() {
  if ((!$n_sci_$colon$colon$)) {
    $n_sci_$colon$colon$ = new $c_sci_$colon$colon$()
  };
  return $n_sci_$colon$colon$
}
/** @constructor */
function $c_sci_Map$HashCodeAccumulator() {
  this.sci_Map$HashCodeAccumulator__f_a = 0;
  this.sci_Map$HashCodeAccumulator__f_b = 0;
  this.sci_Map$HashCodeAccumulator__f_n = 0;
  this.sci_Map$HashCodeAccumulator__f_c = 0;
  this.sci_Map$HashCodeAccumulator__f_a = 0;
  this.sci_Map$HashCodeAccumulator__f_b = 0;
  this.sci_Map$HashCodeAccumulator__f_n = 0;
  this.sci_Map$HashCodeAccumulator__f_c = 1
}
$c_sci_Map$HashCodeAccumulator.prototype = new $h_sr_AbstractFunction2();
$c_sci_Map$HashCodeAccumulator.prototype.constructor = $c_sci_Map$HashCodeAccumulator;
/** @constructor */
function $h_sci_Map$HashCodeAccumulator() {
  /*<skip>*/
}
$h_sci_Map$HashCodeAccumulator.prototype = $c_sci_Map$HashCodeAccumulator.prototype;
$c_sci_Map$HashCodeAccumulator.prototype.apply__O__O__V = (function(key, value) {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var h = this$1.product2Hash__O__O__I__I(key, value, (-889275714));
  this.sci_Map$HashCodeAccumulator__f_a = ((this.sci_Map$HashCodeAccumulator__f_a + h) | 0);
  this.sci_Map$HashCodeAccumulator__f_b = (this.sci_Map$HashCodeAccumulator__f_b ^ h);
  if ((h !== 0)) {
    this.sci_Map$HashCodeAccumulator__f_c = $imul(this.sci_Map$HashCodeAccumulator__f_c, h)
  };
  this.sci_Map$HashCodeAccumulator__f_n = ((1 + this.sci_Map$HashCodeAccumulator__f_n) | 0)
});
$c_sci_Map$HashCodeAccumulator.prototype.finalizeHash__I = (function() {
  var h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, this.sci_Map$HashCodeAccumulator__f_a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, this.sci_Map$HashCodeAccumulator__f_b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, this.sci_Map$HashCodeAccumulator__f_c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, this.sci_Map$HashCodeAccumulator__f_n)
});
$c_sci_Map$HashCodeAccumulator.prototype.apply__O__O__O = (function(v1, v2) {
  this.apply__O__O__V(v1, v2)
});
var $d_sci_Map$HashCodeAccumulator = new $TypeData().initClass({
  sci_Map$HashCodeAccumulator: 0
}, false, "scala.collection.immutable.Map$HashCodeAccumulator", {
  sci_Map$HashCodeAccumulator: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sci_Map$HashCodeAccumulator.prototype.$classData = $d_sci_Map$HashCodeAccumulator;
function $p_sci_Range$__description__I__I__I__Z__T($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step)
}
/** @constructor */
function $c_sci_Range$() {
  this.sci_Range$__f_MAX_PRINT = 0;
  this.sci_Range$__f_MAX_PRINT = 512
}
$c_sci_Range$.prototype = new $h_O();
$c_sci_Range$.prototype.constructor = $c_sci_Range$;
/** @constructor */
function $h_sci_Range$() {
  /*<skip>*/
}
$h_sci_Range$.prototype = $c_sci_Range$.prototype;
$c_sci_Range$.prototype.scala$collection$immutable$Range$$fail__I__I__I__Z__E = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."))
});
var $d_sci_Range$ = new $TypeData().initClass({
  sci_Range$: 0
}, false, "scala.collection.immutable.Range$", {
  sci_Range$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$.prototype.$classData = $d_sci_Range$;
var $n_sci_Range$;
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$()
  };
  return $n_sci_Range$
}
/** @constructor */
function $c_sci_Stream$StreamCanBuildFrom() {
  this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = null;
  $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__(this, $m_sci_Stream$())
}
$c_sci_Stream$StreamCanBuildFrom.prototype = new $h_scg_GenTraversableFactory$GenericCanBuildFrom();
$c_sci_Stream$StreamCanBuildFrom.prototype.constructor = $c_sci_Stream$StreamCanBuildFrom;
/** @constructor */
function $h_sci_Stream$StreamCanBuildFrom() {
  /*<skip>*/
}
$h_sci_Stream$StreamCanBuildFrom.prototype = $c_sci_Stream$StreamCanBuildFrom.prototype;
var $d_sci_Stream$StreamCanBuildFrom = new $TypeData().initClass({
  sci_Stream$StreamCanBuildFrom: 0
}, false, "scala.collection.immutable.Stream$StreamCanBuildFrom", {
  sci_Stream$StreamCanBuildFrom: 1,
  scg_GenTraversableFactory$GenericCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_sci_Stream$StreamCanBuildFrom.prototype.$classData = $d_sci_Stream$StreamCanBuildFrom;
function $f_scm_Builder__sizeHint__sc_TraversableLike__V($thiz, coll) {
  var x1 = coll.sizeHintIfCheap__I();
  if ((x1 !== (-1))) {
    $thiz.sizeHint__I__V(x1)
  }
}
function $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V($thiz, size, boundingColl) {
  var x1 = boundingColl.sizeHintIfCheap__I();
  if ((x1 !== (-1))) {
    $thiz.sizeHint__I__V(((size < x1) ? size : x1))
  }
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
}
/** @constructor */
function $c_scm_StringBuilder$() {
  /*<skip>*/
}
$c_scm_StringBuilder$.prototype = new $h_O();
$c_scm_StringBuilder$.prototype.constructor = $c_scm_StringBuilder$;
/** @constructor */
function $h_scm_StringBuilder$() {
  /*<skip>*/
}
$h_scm_StringBuilder$.prototype = $c_scm_StringBuilder$.prototype;
var $d_scm_StringBuilder$ = new $TypeData().initClass({
  scm_StringBuilder$: 0
}, false, "scala.collection.mutable.StringBuilder$", {
  scm_StringBuilder$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder$.prototype.$classData = $d_scm_StringBuilder$;
var $n_scm_StringBuilder$;
function $m_scm_StringBuilder$() {
  if ((!$n_scm_StringBuilder$)) {
    $n_scm_StringBuilder$ = new $c_scm_StringBuilder$()
  };
  return $n_scm_StringBuilder$
}
/** @constructor */
function $c_s_math_Fractional$() {
  /*<skip>*/
}
$c_s_math_Fractional$.prototype = new $h_O();
$c_s_math_Fractional$.prototype.constructor = $c_s_math_Fractional$;
/** @constructor */
function $h_s_math_Fractional$() {
  /*<skip>*/
}
$h_s_math_Fractional$.prototype = $c_s_math_Fractional$.prototype;
var $d_s_math_Fractional$ = new $TypeData().initClass({
  s_math_Fractional$: 0
}, false, "scala.math.Fractional$", {
  s_math_Fractional$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Fractional$.prototype.$classData = $d_s_math_Fractional$;
var $n_s_math_Fractional$;
function $m_s_math_Fractional$() {
  if ((!$n_s_math_Fractional$)) {
    $n_s_math_Fractional$ = new $c_s_math_Fractional$()
  };
  return $n_s_math_Fractional$
}
/** @constructor */
function $c_s_math_Integral$() {
  /*<skip>*/
}
$c_s_math_Integral$.prototype = new $h_O();
$c_s_math_Integral$.prototype.constructor = $c_s_math_Integral$;
/** @constructor */
function $h_s_math_Integral$() {
  /*<skip>*/
}
$h_s_math_Integral$.prototype = $c_s_math_Integral$.prototype;
var $d_s_math_Integral$ = new $TypeData().initClass({
  s_math_Integral$: 0
}, false, "scala.math.Integral$", {
  s_math_Integral$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Integral$.prototype.$classData = $d_s_math_Integral$;
var $n_s_math_Integral$;
function $m_s_math_Integral$() {
  if ((!$n_s_math_Integral$)) {
    $n_s_math_Integral$ = new $c_s_math_Integral$()
  };
  return $n_s_math_Integral$
}
/** @constructor */
function $c_s_math_Numeric$() {
  /*<skip>*/
}
$c_s_math_Numeric$.prototype = new $h_O();
$c_s_math_Numeric$.prototype.constructor = $c_s_math_Numeric$;
/** @constructor */
function $h_s_math_Numeric$() {
  /*<skip>*/
}
$h_s_math_Numeric$.prototype = $c_s_math_Numeric$.prototype;
var $d_s_math_Numeric$ = new $TypeData().initClass({
  s_math_Numeric$: 0
}, false, "scala.math.Numeric$", {
  s_math_Numeric$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Numeric$.prototype.$classData = $d_s_math_Numeric$;
var $n_s_math_Numeric$;
function $m_s_math_Numeric$() {
  if ((!$n_s_math_Numeric$)) {
    $n_s_math_Numeric$ = new $c_s_math_Numeric$()
  };
  return $n_s_math_Numeric$
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
var $d_sr_Nothing$ = new $TypeData().initClass({
  sr_Nothing$: 0
}, false, "scala.runtime.Nothing$", {
  sr_Nothing$: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
/** @constructor */
function $c_sjs_js_Any$() {
  /*<skip>*/
}
$c_sjs_js_Any$.prototype = new $h_O();
$c_sjs_js_Any$.prototype.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
  /*<skip>*/
}
$h_sjs_js_Any$.prototype = $c_sjs_js_Any$.prototype;
$c_sjs_js_Any$.prototype.fromFunction1__F1__sjs_js_Function1 = (function(f) {
  return ((f$2) => ((arg1$2) => f$2.apply__O__O(arg1$2)))(f)
});
var $d_sjs_js_Any$ = new $TypeData().initClass({
  sjs_js_Any$: 0
}, false, "scala.scalajs.js.Any$", {
  sjs_js_Any$: 1,
  O: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
});
$c_sjs_js_Any$.prototype.$classData = $d_sjs_js_Any$;
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$()
  };
  return $n_sjs_js_Any$
}
/** @constructor */
function $c_sjsr_AnonFunction0(f) {
  this.sjsr_AnonFunction0__f_f = null;
  this.sjsr_AnonFunction0__f_f = f
}
$c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
  /*<skip>*/
}
$h_sjsr_AnonFunction0.prototype = $c_sjsr_AnonFunction0.prototype;
$c_sjsr_AnonFunction0.prototype.apply__O = (function() {
  return (0, this.sjsr_AnonFunction0__f_f)()
});
var $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.sjsr_AnonFunction1__f_f = null;
  this.sjsr_AnonFunction1__f_f = f
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
  /*<skip>*/
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
$c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
  return (0, this.sjsr_AnonFunction1__f_f)(arg1)
});
var $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
/** @constructor */
function $c_sjsr_AnonFunction2(f) {
  this.sjsr_AnonFunction2__f_f = null;
  this.sjsr_AnonFunction2__f_f = f
}
$c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$c_sjsr_AnonFunction2.prototype.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
  /*<skip>*/
}
$h_sjsr_AnonFunction2.prototype = $c_sjsr_AnonFunction2.prototype;
$c_sjsr_AnonFunction2.prototype.apply__O__O__O = (function(arg1, arg2) {
  return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2)
});
var $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
/** @constructor */
function $c_s_util_Either$() {
  /*<skip>*/
}
$c_s_util_Either$.prototype = new $h_O();
$c_s_util_Either$.prototype.constructor = $c_s_util_Either$;
/** @constructor */
function $h_s_util_Either$() {
  /*<skip>*/
}
$h_s_util_Either$.prototype = $c_s_util_Either$.prototype;
var $d_s_util_Either$ = new $TypeData().initClass({
  s_util_Either$: 0
}, false, "scala.util.Either$", {
  s_util_Either$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Either$.prototype.$classData = $d_s_util_Either$;
var $n_s_util_Either$;
function $m_s_util_Either$() {
  if ((!$n_s_util_Either$)) {
    $n_s_util_Either$ = new $c_s_util_Either$()
  };
  return $n_s_util_Either$
}
/** @constructor */
function $c_s_util_Left$() {
  /*<skip>*/
}
$c_s_util_Left$.prototype = new $h_O();
$c_s_util_Left$.prototype.constructor = $c_s_util_Left$;
/** @constructor */
function $h_s_util_Left$() {
  /*<skip>*/
}
$h_s_util_Left$.prototype = $c_s_util_Left$.prototype;
$c_s_util_Left$.prototype.toString__T = (function() {
  return "Left"
});
var $d_s_util_Left$ = new $TypeData().initClass({
  s_util_Left$: 0
}, false, "scala.util.Left$", {
  s_util_Left$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left$.prototype.$classData = $d_s_util_Left$;
var $n_s_util_Left$;
function $m_s_util_Left$() {
  if ((!$n_s_util_Left$)) {
    $n_s_util_Left$ = new $c_s_util_Left$()
  };
  return $n_s_util_Left$
}
/** @constructor */
function $c_s_util_Right$() {
  /*<skip>*/
}
$c_s_util_Right$.prototype = new $h_O();
$c_s_util_Right$.prototype.constructor = $c_s_util_Right$;
/** @constructor */
function $h_s_util_Right$() {
  /*<skip>*/
}
$h_s_util_Right$.prototype = $c_s_util_Right$.prototype;
$c_s_util_Right$.prototype.toString__T = (function() {
  return "Right"
});
var $d_s_util_Right$ = new $TypeData().initClass({
  s_util_Right$: 0
}, false, "scala.util.Right$", {
  s_util_Right$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right$.prototype.$classData = $d_s_util_Right$;
var $n_s_util_Right$;
function $m_s_util_Right$() {
  if ((!$n_s_util_Right$)) {
    $n_s_util_Right$ = new $c_s_util_Right$()
  };
  return $n_s_util_Right$
}
/** @constructor */
function $c_s_util_control_NoStackTrace$() {
  this.s_util_control_NoStackTrace$__f__noSuppression = false;
  this.s_util_control_NoStackTrace$__f__noSuppression = false
}
$c_s_util_control_NoStackTrace$.prototype = new $h_O();
$c_s_util_control_NoStackTrace$.prototype.constructor = $c_s_util_control_NoStackTrace$;
/** @constructor */
function $h_s_util_control_NoStackTrace$() {
  /*<skip>*/
}
$h_s_util_control_NoStackTrace$.prototype = $c_s_util_control_NoStackTrace$.prototype;
var $d_s_util_control_NoStackTrace$ = new $TypeData().initClass({
  s_util_control_NoStackTrace$: 0
}, false, "scala.util.control.NoStackTrace$", {
  s_util_control_NoStackTrace$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_control_NoStackTrace$.prototype.$classData = $d_s_util_control_NoStackTrace$;
var $n_s_util_control_NoStackTrace$;
function $m_s_util_control_NoStackTrace$() {
  if ((!$n_s_util_control_NoStackTrace$)) {
    $n_s_util_control_NoStackTrace$ = new $c_s_util_control_NoStackTrace$()
  };
  return $n_s_util_control_NoStackTrace$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$hasher$1(outer) {
  this.s_util_hashing_MurmurHash3$hasher$1__f_a = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_b = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_n = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_c = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_a = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_b = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_n = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_c = 1
}
$c_s_util_hashing_MurmurHash3$hasher$1.prototype = new $h_sr_AbstractFunction1();
$c_s_util_hashing_MurmurHash3$hasher$1.prototype.constructor = $c_s_util_hashing_MurmurHash3$hasher$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$hasher$1() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$hasher$1.prototype = $c_s_util_hashing_MurmurHash3$hasher$1.prototype;
$c_s_util_hashing_MurmurHash3$hasher$1.prototype.apply__O__V = (function(x) {
  var h = $m_sr_Statics$().anyHash__O__I(x);
  this.s_util_hashing_MurmurHash3$hasher$1__f_a = ((this.s_util_hashing_MurmurHash3$hasher$1__f_a + h) | 0);
  this.s_util_hashing_MurmurHash3$hasher$1__f_b = (this.s_util_hashing_MurmurHash3$hasher$1__f_b ^ h);
  if ((h !== 0)) {
    this.s_util_hashing_MurmurHash3$hasher$1__f_c = $imul(this.s_util_hashing_MurmurHash3$hasher$1__f_c, h)
  };
  this.s_util_hashing_MurmurHash3$hasher$1__f_n = ((1 + this.s_util_hashing_MurmurHash3$hasher$1__f_n) | 0)
});
$c_s_util_hashing_MurmurHash3$hasher$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1)
});
var $d_s_util_hashing_MurmurHash3$hasher$1 = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$hasher$1: 0
}, false, "scala.util.hashing.MurmurHash3$hasher$1", {
  s_util_hashing_MurmurHash3$hasher$1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_s_util_hashing_MurmurHash3$hasher$1.prototype.$classData = $d_s_util_hashing_MurmurHash3$hasher$1;
/** @constructor */
function $c_s_util_hashing_MurmurHash3$hasher$2(outer, seed$1) {
  this.s_util_hashing_MurmurHash3$hasher$2__f_n = 0;
  this.s_util_hashing_MurmurHash3$hasher$2__f_h = 0;
  this.s_util_hashing_MurmurHash3$hasher$2__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.s_util_hashing_MurmurHash3$hasher$2__f_$outer = outer
  };
  this.s_util_hashing_MurmurHash3$hasher$2__f_n = 0;
  this.s_util_hashing_MurmurHash3$hasher$2__f_h = seed$1
}
$c_s_util_hashing_MurmurHash3$hasher$2.prototype = new $h_sr_AbstractFunction1();
$c_s_util_hashing_MurmurHash3$hasher$2.prototype.constructor = $c_s_util_hashing_MurmurHash3$hasher$2;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$hasher$2() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$hasher$2.prototype = $c_s_util_hashing_MurmurHash3$hasher$2.prototype;
$c_s_util_hashing_MurmurHash3$hasher$2.prototype.apply__O__V = (function(x) {
  this.s_util_hashing_MurmurHash3$hasher$2__f_h = this.s_util_hashing_MurmurHash3$hasher$2__f_$outer.mix__I__I__I(this.s_util_hashing_MurmurHash3$hasher$2__f_h, $m_sr_Statics$().anyHash__O__I(x));
  this.s_util_hashing_MurmurHash3$hasher$2__f_n = ((1 + this.s_util_hashing_MurmurHash3$hasher$2__f_n) | 0)
});
$c_s_util_hashing_MurmurHash3$hasher$2.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1)
});
var $d_s_util_hashing_MurmurHash3$hasher$2 = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$hasher$2: 0
}, false, "scala.util.hashing.MurmurHash3$hasher$2", {
  s_util_hashing_MurmurHash3$hasher$2: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_s_util_hashing_MurmurHash3$hasher$2.prototype.$classData = $d_s_util_hashing_MurmurHash3$hasher$2;
function $ct_s_util_matching_Regex__ju_regex_Pattern__sc_Seq__($thiz, pattern, groupNames) {
  $thiz.s_util_matching_Regex__f_pattern = pattern;
  $thiz.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = groupNames;
  return $thiz
}
function $ct_s_util_matching_Regex__T__sc_Seq__($thiz, regex, groupNames) {
  var this$1 = $m_ju_regex_Pattern$();
  $ct_s_util_matching_Regex__ju_regex_Pattern__sc_Seq__($thiz, this$1.compile__T__I__ju_regex_Pattern(regex, 0), groupNames);
  return $thiz
}
/** @constructor */
function $c_s_util_matching_Regex() {
  this.s_util_matching_Regex__f_pattern = null;
  this.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = null
}
$c_s_util_matching_Regex.prototype = new $h_O();
$c_s_util_matching_Regex.prototype.constructor = $c_s_util_matching_Regex;
/** @constructor */
function $h_s_util_matching_Regex() {
  /*<skip>*/
}
$h_s_util_matching_Regex.prototype = $c_s_util_matching_Regex.prototype;
$c_s_util_matching_Regex.prototype.unapplySeq__jl_CharSequence__s_Option = (function(s) {
  if ((s === null)) {
    return $m_s_None$()
  } else {
    var this$1 = this.s_util_matching_Regex__f_pattern;
    var m = new $c_ju_regex_Matcher(this$1, s, 0, $dp_length__I(s));
    return (m.matches__Z() ? $m_s_util_matching_Regex$().scala$util$matching$Regex$$extractGroupsFromMatcher__ju_regex_Matcher__s_Option(m) : $m_s_None$())
  }
});
$c_s_util_matching_Regex.prototype.toString__T = (function() {
  return this.s_util_matching_Regex__f_pattern.ju_regex_Pattern__f__pattern
});
var $d_s_util_matching_Regex = new $TypeData().initClass({
  s_util_matching_Regex: 0
}, false, "scala.util.matching.Regex", {
  s_util_matching_Regex: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_matching_Regex.prototype.$classData = $d_s_util_matching_Regex;
/** @constructor */
function $c_s_util_matching_Regex$() {
  /*<skip>*/
}
$c_s_util_matching_Regex$.prototype = new $h_O();
$c_s_util_matching_Regex$.prototype.constructor = $c_s_util_matching_Regex$;
/** @constructor */
function $h_s_util_matching_Regex$() {
  /*<skip>*/
}
$h_s_util_matching_Regex$.prototype = $c_s_util_matching_Regex$.prototype;
$c_s_util_matching_Regex$.prototype.scala$util$matching$Regex$$extractGroupsFromMatcher__ju_regex_Matcher__s_Option = (function(m) {
  $m_sci_List$();
  var res = $m_sci_Nil$();
  var index = $m_ju_regex_Matcher$().java$util$regex$Matcher$$getGroupCount__sjs_js_RegExp$ExecResult__ju_regex_Pattern__I(m.ju_regex_Matcher__f_lastMatch, m.ju_regex_Matcher__f_pattern0);
  while ((index > 0)) {
    var this$2 = res;
    var x = m.group__I__T(index);
    res = new $c_sci_$colon$colon(x, this$2);
    index = (((-1) + index) | 0)
  };
  return new $c_s_Some(res)
});
var $d_s_util_matching_Regex$ = new $TypeData().initClass({
  s_util_matching_Regex$: 0
}, false, "scala.util.matching.Regex$", {
  s_util_matching_Regex$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_matching_Regex$.prototype.$classData = $d_s_util_matching_Regex$;
var $n_s_util_matching_Regex$;
function $m_s_util_matching_Regex$() {
  if ((!$n_s_util_matching_Regex$)) {
    $n_s_util_matching_Regex$ = new $c_s_util_matching_Regex$()
  };
  return $n_s_util_matching_Regex$
}
function $f_Lscalatags_JsDom$Aggregate__$init$__V($thiz) {
  $thiz.Lobservatory_Implicits$__f_RawFrag = $m_Lscalatags_JsDom$RawFrag$();
  $thiz.Lobservatory_Implicits$__f_StringFrag = $m_Lscalatags_JsDom$StringFrag$();
  $thiz.Lobservatory_Implicits$__f_HtmlTag = $m_Lscalatags_JsDom$TypedTag$();
  $thiz.Lobservatory_Implicits$__f_SvgTag = $m_Lscalatags_JsDom$TypedTag$();
  $thiz.Lobservatory_Implicits$__f_Tag = $m_Lscalatags_JsDom$TypedTag$()
}
/** @constructor */
function $c_Lscalatags_JsDom$Cap$SeqFrag(outer, xs, ev) {
  this.Lscalatags_JsDom$Cap$SeqFrag__f_xs = null;
  this.Lscalatags_JsDom$Cap$SeqFrag__f_ev = null;
  this.Lscalatags_JsDom$Cap$SeqFrag__f_$outer = null;
  this.Lscalatags_JsDom$Cap$SeqFrag__f_xs = xs;
  this.Lscalatags_JsDom$Cap$SeqFrag__f_ev = ev;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.Lscalatags_JsDom$Cap$SeqFrag__f_$outer = outer
  };
  if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  }
}
$c_Lscalatags_JsDom$Cap$SeqFrag.prototype = new $h_O();
$c_Lscalatags_JsDom$Cap$SeqFrag.prototype.constructor = $c_Lscalatags_JsDom$Cap$SeqFrag;
/** @constructor */
function $h_Lscalatags_JsDom$Cap$SeqFrag() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$Cap$SeqFrag.prototype = $c_Lscalatags_JsDom$Cap$SeqFrag.prototype;
$c_Lscalatags_JsDom$Cap$SeqFrag.prototype.applyTo__Lorg_scalajs_dom_raw_Element__V = (function(t) {
  this.Lscalatags_JsDom$Cap$SeqFrag__f_xs.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$1, t$1) => ((x$4$2) => {
    $as_Lscalatags_generic_Modifier(this$1.Lscalatags_JsDom$Cap$SeqFrag__f_ev.apply__O__O(x$4$2)).applyTo__O__V(t$1)
  }))(this, t)))
});
$c_Lscalatags_JsDom$Cap$SeqFrag.prototype.applyTo__O__V = (function(t) {
  this.applyTo__Lorg_scalajs_dom_raw_Element__V(t)
});
var $d_Lscalatags_JsDom$Cap$SeqFrag = new $TypeData().initClass({
  Lscalatags_JsDom$Cap$SeqFrag: 0
}, false, "scalatags.JsDom$Cap$SeqFrag", {
  Lscalatags_JsDom$Cap$SeqFrag: 1,
  O: 1,
  Lscalatags_generic_Frag: 1,
  Lscalatags_generic_Modifier: 1
});
$c_Lscalatags_JsDom$Cap$SeqFrag.prototype.$classData = $d_Lscalatags_JsDom$Cap$SeqFrag;
/** @constructor */
function $c_Lscalatags_JsDom$TypedTag$() {
  /*<skip>*/
}
$c_Lscalatags_JsDom$TypedTag$.prototype = new $h_O();
$c_Lscalatags_JsDom$TypedTag$.prototype.constructor = $c_Lscalatags_JsDom$TypedTag$;
/** @constructor */
function $h_Lscalatags_JsDom$TypedTag$() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$TypedTag$.prototype = $c_Lscalatags_JsDom$TypedTag$.prototype;
$c_Lscalatags_JsDom$TypedTag$.prototype.toString__T = (function() {
  return "TypedTag"
});
var $d_Lscalatags_JsDom$TypedTag$ = new $TypeData().initClass({
  Lscalatags_JsDom$TypedTag$: 0
}, false, "scalatags.JsDom$TypedTag$", {
  Lscalatags_JsDom$TypedTag$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$TypedTag$.prototype.$classData = $d_Lscalatags_JsDom$TypedTag$;
var $n_Lscalatags_JsDom$TypedTag$;
function $m_Lscalatags_JsDom$TypedTag$() {
  if ((!$n_Lscalatags_JsDom$TypedTag$)) {
    $n_Lscalatags_JsDom$TypedTag$ = new $c_Lscalatags_JsDom$TypedTag$()
  };
  return $n_Lscalatags_JsDom$TypedTag$
}
/** @constructor */
function $c_Lscalatags_LowPriorityImplicits$bindNode(outer, e) {
  this.Lscalatags_LowPriorityImplicits$bindNode__f_e = null;
  this.Lscalatags_LowPriorityImplicits$bindNode__f_$outer = null;
  this.Lscalatags_LowPriorityImplicits$bindNode__f_e = e;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.Lscalatags_LowPriorityImplicits$bindNode__f_$outer = outer
  }
}
$c_Lscalatags_LowPriorityImplicits$bindNode.prototype = new $h_O();
$c_Lscalatags_LowPriorityImplicits$bindNode.prototype.constructor = $c_Lscalatags_LowPriorityImplicits$bindNode;
/** @constructor */
function $h_Lscalatags_LowPriorityImplicits$bindNode() {
  /*<skip>*/
}
$h_Lscalatags_LowPriorityImplicits$bindNode.prototype = $c_Lscalatags_LowPriorityImplicits$bindNode.prototype;
$c_Lscalatags_LowPriorityImplicits$bindNode.prototype.applyTo__Lorg_scalajs_dom_raw_Element__V = (function(t) {
  t.appendChild(this.Lscalatags_LowPriorityImplicits$bindNode__f_e)
});
$c_Lscalatags_LowPriorityImplicits$bindNode.prototype.applyTo__O__V = (function(t) {
  this.applyTo__Lorg_scalajs_dom_raw_Element__V(t)
});
var $d_Lscalatags_LowPriorityImplicits$bindNode = new $TypeData().initClass({
  Lscalatags_LowPriorityImplicits$bindNode: 0
}, false, "scalatags.LowPriorityImplicits$bindNode", {
  Lscalatags_LowPriorityImplicits$bindNode: 1,
  O: 1,
  Lscalatags_generic_Frag: 1,
  Lscalatags_generic_Modifier: 1
});
$c_Lscalatags_LowPriorityImplicits$bindNode.prototype.$classData = $d_Lscalatags_LowPriorityImplicits$bindNode;
function $f_Lscalatags_generic_MouseEventAttrs__$init$__V($thiz) {
  $thiz.Lscalatags_JsDom$attrs$__f_ondrag = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "ondrag", null, false)
}
function $f_Lscalatags_generic_TypedTag__build__O__V($thiz, b) {
  var current = $thiz.Lscalatags_JsDom$TypedTag__f_modifiers;
  var this$1 = $thiz.Lscalatags_JsDom$TypedTag__f_modifiers;
  var arr = new ($d_sc_Seq.getArrayOf().constr)($f_sc_LinearSeqOptimized__length__I(this$1));
  var i = 0;
  while (true) {
    var x = current;
    var x$2 = $m_sci_Nil$();
    if ((!((x !== null) && x.equals__O__Z(x$2)))) {
      arr.set(i, $as_sc_Seq(current.head__O()));
      var this$2 = current;
      current = this$2.tail__sci_List();
      i = ((1 + i) | 0)
    } else {
      break
    }
  };
  var j = arr.u.length;
  while ((j > 0)) {
    j = (((-1) + j) | 0);
    var frag = arr.get(j);
    var i$2 = 0;
    while ((i$2 < frag.length__I())) {
      $as_Lscalatags_generic_Modifier(frag.apply__I__O(i$2)).applyTo__O__V(b);
      i$2 = ((1 + i$2) | 0)
    }
  }
}
function $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_raw_Element__V($thiz, b) {
  b.appendChild($thiz.render__Lorg_scalajs_dom_raw_Node())
}
function $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, s, void$1, ns) {
  if ((!$m_Lscalatags_Escaping$().validTag__T__Z(s))) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("Illegal tag name: " + s) + " is not a valid XML tag name"))
  };
  return new $c_Lscalatags_JsDom$TypedTag(s, $m_sci_Nil$(), void$1, ns)
}
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    var message = ("" + detailMessage);
    if ((detailMessage instanceof $c_jl_Throwable)) {
      var x2 = $as_jl_Throwable(detailMessage);
      var cause = x2
    } else {
      var cause = null
    };
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_jl_AssertionError = new $TypeData().initClass({
  jl_AssertionError: 0
}, false, "java.lang.AssertionError", {
  jl_AssertionError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_AssertionError.prototype.$classData = $d_jl_AssertionError;
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $uB($thiz)
}
function $f_jl_Byte__toString__T($thiz) {
  var b = $uB($thiz);
  return ("" + b)
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Double__hashCode__I($thiz) {
  var value = $uD($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
}
function $f_jl_Double__toString__T($thiz) {
  var d = $uD($thiz);
  return ("" + d)
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $uF($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
}
function $f_jl_Float__toString__T($thiz) {
  var f = $uF($thiz);
  return ("" + f)
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $uI($thiz)
}
function $f_jl_Integer__toString__T($thiz) {
  var i = $uI($thiz);
  return ("" + i)
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $uJ($thiz);
    var b = $uJ(x2);
    return ((this$1.RTLong__f_lo === b.RTLong__f_lo) && (this$1.RTLong__f_hi === b.RTLong__f_hi))
  } else {
    return false
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var t = $uJ($thiz);
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  return (lo ^ hi)
}
function $f_jl_Long__toString__T($thiz) {
  var this$1 = $uJ($thiz);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this$1.RTLong__f_lo, this$1.RTLong__f_hi)
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().initClass({
  jl_RuntimeException: 0
}, false, "java.lang.RuntimeException", {
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_RuntimeException.prototype.$classData = $d_jl_RuntimeException;
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Short__hashCode__I($thiz) {
  return $uS($thiz)
}
function $f_jl_Short__toString__T($thiz) {
  var s = $uS($thiz);
  return ("" + s)
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $uI($thiz.length)) | 0);
  while ((i >= 0)) {
    var $$x1 = res;
    var index = i;
    res = (($$x1 + $imul((65535 & $uI($thiz.charCodeAt(index))), mul)) | 0);
    mul = $imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_T__length__I($thiz) {
  return $uI($thiz.length)
}
function $f_T__split__T__I__AT($thiz, regex, limit) {
  var this$1 = $m_ju_regex_Pattern$();
  return this$1.compile__T__I__ju_regex_Pattern(regex, 0).split__jl_CharSequence__I__AT($thiz, limit)
}
function $f_T__substring__I__I__T($thiz, beginIndex, endIndex) {
  return $as_T($thiz.substring(beginIndex, endIndex))
}
function $f_T__toCharArray__AC($thiz) {
  var len = $uI($thiz.length);
  var result = new $ac_C(len);
  var i = 0;
  while ((i < len)) {
    var $$x1 = i;
    var index = i;
    result.set($$x1, (65535 & $uI($thiz.charCodeAt(index))));
    i = ((1 + i) | 0)
  };
  return result
}
function $f_T__trim__T($thiz) {
  var len = $uI($thiz.length);
  var start = 0;
  while (true) {
    if ((start !== len)) {
      var index = start;
      var $$x1 = ((65535 & $uI($thiz.charCodeAt(index))) <= 32)
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      start = ((1 + start) | 0)
    } else {
      break
    }
  };
  if ((start === len)) {
    return ""
  } else {
    var end = len;
    while (true) {
      var index$1 = (((-1) + end) | 0);
      if (((65535 & $uI($thiz.charCodeAt(index$1))) <= 32)) {
        end = (((-1) + end) | 0)
      } else {
        break
      }
    };
    if (((start === 0) && (end === len))) {
      return $thiz
    } else {
      var beginIndex = start;
      var endIndex = end;
      return $as_T($thiz.substring(beginIndex, endIndex))
    }
  }
}
function $f_T__toString__T($thiz) {
  return $thiz
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
}
function $ct_jl_StringBuilder__I__($thiz, initialCapacity) {
  $ct_jl_StringBuilder__($thiz);
  if ((initialCapacity < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  return $thiz
}
function $ct_jl_StringBuilder__jl_CharSequence__($thiz, seq) {
  $ct_jl_StringBuilder__T__($thiz, $dp_toString__T(seq));
  return $thiz
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
  /*<skip>*/
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.reverse__jl_StringBuilder = (function() {
  var original = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  var result = "";
  var i = (((-1) + $uI(original.length)) | 0);
  while ((i > 0)) {
    var index = i;
    var c = (65535 & $uI(original.charCodeAt(index)));
    if (((64512 & c) === 56320)) {
      var index$1 = (((-1) + i) | 0);
      var c2 = (65535 & $uI(original.charCodeAt(index$1)));
      if (((64512 & c2) === 55296)) {
        result = ((("" + result) + $as_T(String.fromCharCode(c2))) + $as_T(String.fromCharCode(c)));
        i = (((-2) + i) | 0)
      } else {
        result = (("" + result) + $as_T(String.fromCharCode(c)));
        i = (((-1) + i) | 0)
      }
    } else {
      result = (("" + result) + $as_T(String.fromCharCode(c)));
      i = (((-1) + i) | 0)
    }
  };
  if ((i === 0)) {
    var $$x1 = result;
    var this$7 = (65535 & $uI(original.charCodeAt(0)));
    result = (("" + $$x1) + $as_T(String.fromCharCode(this$7)))
  };
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = result;
  return this
});
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  return $uI(this$1.length)
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  return (65535 & $uI(this$1.charCodeAt(index)))
});
$c_jl_StringBuilder.prototype.substring__I__I__T = (function(start, end) {
  var this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  return $as_T(this$1.substring(start, end))
});
var $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi
}
$c_RTLong.prototype = new $h_jl_Number();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
  /*<skip>*/
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
  } else {
    return false
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi)
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24)
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16)
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this)
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)))
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0))
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)))
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo + b.RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo - b.RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = b.RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = $imul(a0, b0);
  var a1b0 = $imul(a1, b0);
  var a0b1 = $imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = (((((((($imul(alo, b.RTLong__f_hi) + $imul(this.RTLong__f_hi, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi)
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong.prototype.compareTo__O__I = (function(x$1) {
  var that = $as_jl_Long(x$1);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
var $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
}
/** @constructor */
function $c_s_Array$() {
  /*<skip>*/
}
$c_s_Array$.prototype = new $h_s_FallbackArrayBuilding();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
  /*<skip>*/
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.isArray__Z() && $objectGetClass(dest).isAssignableFrom__jl_Class__Z(srcClass))) {
    src.copyTo(srcPos, dest, destPos, length)
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
  }
});
var $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  s_FallbackArrayBuilding: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
class $c_s_NotImplementedError extends $c_jl_Error {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "an implementation is missing", null, true, true)
  };
}
var $d_s_NotImplementedError = new $TypeData().initClass({
  s_NotImplementedError: 0
}, false, "scala.NotImplementedError", {
  s_NotImplementedError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_NotImplementedError.prototype.$classData = $d_s_NotImplementedError;
/** @constructor */
function $c_s_Predef$$eq$colon$eq() {
  /*<skip>*/
}
$c_s_Predef$$eq$colon$eq.prototype = new $h_O();
$c_s_Predef$$eq$colon$eq.prototype.constructor = $c_s_Predef$$eq$colon$eq;
/** @constructor */
function $h_s_Predef$$eq$colon$eq() {
  /*<skip>*/
}
$h_s_Predef$$eq$colon$eq.prototype = $c_s_Predef$$eq$colon$eq.prototype;
$c_s_Predef$$eq$colon$eq.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_s_Predef$$less$colon$less() {
  /*<skip>*/
}
$c_s_Predef$$less$colon$less.prototype = new $h_O();
$c_s_Predef$$less$colon$less.prototype.constructor = $c_s_Predef$$less$colon$less;
/** @constructor */
function $h_s_Predef$$less$colon$less() {
  /*<skip>*/
}
$h_s_Predef$$less$colon$less.prototype = $c_s_Predef$$less$colon$less.prototype;
$c_s_Predef$$less$colon$less.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sc_AbstractIterator() {
  /*<skip>*/
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
  /*<skip>*/
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.isEmpty__Z = (function() {
  return (!this.hasNext__Z())
});
$c_sc_AbstractIterator.prototype.foreach__F1__V = (function(f) {
  $f_sc_Iterator__foreach__F1__V(this, f)
});
$c_sc_AbstractIterator.prototype.toStream__sci_Stream = (function() {
  return $f_sc_Iterator__toStream__sci_Stream(this)
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sc_AbstractIterator.prototype.$div$colon__O__F2__O = (function(z, op) {
  return $f_sc_TraversableOnce__foldLeft__O__F2__O(this, z, op)
});
$c_sc_AbstractIterator.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_TraversableOnce__reduceLeft__F2__O(this, op)
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterator.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
/** @constructor */
function $c_sc_GenMap$$anon$1(thatMap$1) {
  this.sc_GenMap$$anon$1__f_thatMap$1 = null;
  this.sc_GenMap$$anon$1__f_thatMap$1 = thatMap$1
}
$c_sc_GenMap$$anon$1.prototype = new $h_sr_AbstractFunction1();
$c_sc_GenMap$$anon$1.prototype.constructor = $c_sc_GenMap$$anon$1;
/** @constructor */
function $h_sc_GenMap$$anon$1() {
  /*<skip>*/
}
$h_sc_GenMap$$anon$1.prototype = $c_sc_GenMap$$anon$1.prototype;
$c_sc_GenMap$$anon$1.prototype.toString__T = (function() {
  return "<function0>"
});
$c_sc_GenMap$$anon$1.prototype.apply__T2__Z = (function(kv) {
  var v2 = this.sc_GenMap$$anon$1__f_thatMap$1.getOrElse__O__F0__O(kv.T2__f__1, this);
  return ((v2 !== this) && $m_sr_BoxesRunTime$().equals__O__O__Z(v2, kv.T2__f__2))
});
$c_sc_GenMap$$anon$1.prototype.apply__O = (function() {
  return this
});
$c_sc_GenMap$$anon$1.prototype.apply__O__O = (function(v1) {
  return this.apply__T2__Z($as_T2(v1))
});
var $d_sc_GenMap$$anon$1 = new $TypeData().initClass({
  sc_GenMap$$anon$1: 0
}, false, "scala.collection.GenMap$$anon$1", {
  sc_GenMap$$anon$1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1,
  F0: 1
});
$c_sc_GenMap$$anon$1.prototype.$classData = $d_sc_GenMap$$anon$1;
/** @constructor */
function $c_scg_SetFactory() {
  /*<skip>*/
}
$c_scg_SetFactory.prototype = new $h_scg_GenSetFactory();
$c_scg_SetFactory.prototype.constructor = $c_scg_SetFactory;
/** @constructor */
function $h_scg_SetFactory() {
  /*<skip>*/
}
$h_scg_SetFactory.prototype = $c_scg_SetFactory.prototype;
/** @constructor */
function $c_sci_Map$() {
  this.sci_Map$__f_ReusableCBF = null;
  this.sci_Map$__f_scala$collection$immutable$Map$$Sentinel = null;
  $n_sci_Map$ = this;
  this.sci_Map$__f_ReusableCBF = new $c_scg_GenMapFactory$MapCanBuildFrom(this);
  this.sci_Map$__f_scala$collection$immutable$Map$$Sentinel = $ct_O__(new $c_O())
}
$c_sci_Map$.prototype = new $h_scg_ImmutableMapFactory();
$c_sci_Map$.prototype.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
  /*<skip>*/
}
$h_sci_Map$.prototype = $c_sci_Map$.prototype;
$c_sci_Map$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_Map$MapBuilderImpl()
});
$c_sci_Map$.prototype.empty__sc_GenMap = (function() {
  return $m_sci_Map$EmptyMap$()
});
var $d_sci_Map$ = new $TypeData().initClass({
  sci_Map$: 0
}, false, "scala.collection.immutable.Map$", {
  sci_Map$: 1,
  scg_ImmutableMapFactory: 1,
  scg_MapFactory: 1,
  scg_GenMapFactory: 1,
  O: 1
});
$c_sci_Map$.prototype.$classData = $d_sci_Map$;
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$()
  };
  return $n_sci_Map$
}
/** @constructor */
function $c_scm_GrowingBuilder(empty) {
  this.scm_GrowingBuilder__f_empty = null;
  this.scm_GrowingBuilder__f_elems = null;
  this.scm_GrowingBuilder__f_empty = empty;
  this.scm_GrowingBuilder__f_elems = empty
}
$c_scm_GrowingBuilder.prototype = new $h_O();
$c_scm_GrowingBuilder.prototype.constructor = $c_scm_GrowingBuilder;
/** @constructor */
function $h_scm_GrowingBuilder() {
  /*<skip>*/
}
$h_scm_GrowingBuilder.prototype = $c_scm_GrowingBuilder.prototype;
$c_scm_GrowingBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_GrowingBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_GrowingBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_GrowingBuilder.prototype.$plus$eq__O__scm_GrowingBuilder = (function(x) {
  this.scm_GrowingBuilder__f_elems.$plus$eq__O__scg_Growable(x);
  return this
});
$c_scm_GrowingBuilder.prototype.result__O = (function() {
  return this.scm_GrowingBuilder__f_elems
});
$c_scm_GrowingBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_GrowingBuilder(elem)
});
$c_scm_GrowingBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_GrowingBuilder(elem)
});
var $d_scm_GrowingBuilder = new $TypeData().initClass({
  scm_GrowingBuilder: 0
}, false, "scala.collection.mutable.GrowingBuilder", {
  scm_GrowingBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_GrowingBuilder.prototype.$classData = $d_scm_GrowingBuilder;
function $is_scm_ReusableBuilder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_ReusableBuilder)))
}
function $as_scm_ReusableBuilder(obj) {
  return (($is_scm_ReusableBuilder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ReusableBuilder"))
}
function $isArrayOf_scm_ReusableBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ReusableBuilder)))
}
function $asArrayOf_scm_ReusableBuilder(obj, depth) {
  return (($isArrayOf_scm_ReusableBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ReusableBuilder;", depth))
}
/** @constructor */
function $c_s_math_Equiv$() {
  /*<skip>*/
}
$c_s_math_Equiv$.prototype = new $h_O();
$c_s_math_Equiv$.prototype.constructor = $c_s_math_Equiv$;
/** @constructor */
function $h_s_math_Equiv$() {
  /*<skip>*/
}
$h_s_math_Equiv$.prototype = $c_s_math_Equiv$.prototype;
var $d_s_math_Equiv$ = new $TypeData().initClass({
  s_math_Equiv$: 0
}, false, "scala.math.Equiv$", {
  s_math_Equiv$: 1,
  O: 1,
  s_math_LowPriorityEquiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Equiv$.prototype.$classData = $d_s_math_Equiv$;
var $n_s_math_Equiv$;
function $m_s_math_Equiv$() {
  if ((!$n_s_math_Equiv$)) {
    $n_s_math_Equiv$ = new $c_s_math_Equiv$()
  };
  return $n_s_math_Equiv$
}
/** @constructor */
function $c_s_math_Ordering$() {
  this.s_math_Ordering$__f_scala$math$Ordering$$IntReverse = null;
  $n_s_math_Ordering$ = this;
  this.s_math_Ordering$__f_scala$math$Ordering$$IntReverse = new $c_s_math_Ordering$Reverse($m_s_math_Ordering$Int$())
}
$c_s_math_Ordering$.prototype = new $h_O();
$c_s_math_Ordering$.prototype.constructor = $c_s_math_Ordering$;
/** @constructor */
function $h_s_math_Ordering$() {
  /*<skip>*/
}
$h_s_math_Ordering$.prototype = $c_s_math_Ordering$.prototype;
var $d_s_math_Ordering$ = new $TypeData().initClass({
  s_math_Ordering$: 0
}, false, "scala.math.Ordering$", {
  s_math_Ordering$: 1,
  O: 1,
  s_math_LowPriorityOrderingImplicits: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$.prototype.$classData = $d_s_math_Ordering$;
var $n_s_math_Ordering$;
function $m_s_math_Ordering$() {
  if ((!$n_s_math_Ordering$)) {
    $n_s_math_Ordering$ = new $c_s_math_Ordering$()
  };
  return $n_s_math_Ordering$
}
/** @constructor */
function $c_s_reflect_NoManifest$() {
  /*<skip>*/
}
$c_s_reflect_NoManifest$.prototype = new $h_O();
$c_s_reflect_NoManifest$.prototype.constructor = $c_s_reflect_NoManifest$;
/** @constructor */
function $h_s_reflect_NoManifest$() {
  /*<skip>*/
}
$h_s_reflect_NoManifest$.prototype = $c_s_reflect_NoManifest$.prototype;
$c_s_reflect_NoManifest$.prototype.toString__T = (function() {
  return "<?>"
});
var $d_s_reflect_NoManifest$ = new $TypeData().initClass({
  s_reflect_NoManifest$: 0
}, false, "scala.reflect.NoManifest$", {
  s_reflect_NoManifest$: 1,
  O: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_NoManifest$.prototype.$classData = $d_s_reflect_NoManifest$;
var $n_s_reflect_NoManifest$;
function $m_s_reflect_NoManifest$() {
  if ((!$n_s_reflect_NoManifest$)) {
    $n_s_reflect_NoManifest$ = new $c_s_reflect_NoManifest$()
  };
  return $n_s_reflect_NoManifest$
}
function $f_Lscalatags_generic_InputAttrs__checked__Lscalatags_generic_AttrPair($thiz) {
  var this$1 = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "checked", null, false);
  var ev = new $c_Lscalatags_JsDom$GenericAttr();
  return this$1.$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair(this$1.Lscalatags_generic_Attr__f_name, ev)
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
function $as_jl_ClassCastException(obj) {
  return (((obj instanceof $c_jl_ClassCastException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ClassCastException"))
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ClassCastException)))
}
function $asArrayOf_jl_ClassCastException(obj, depth) {
  return (($isArrayOf_jl_ClassCastException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ClassCastException;", depth))
}
var $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_IllegalStateException = new $TypeData().initClass({
  jl_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", {
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalStateException.prototype.$classData = $d_jl_IllegalStateException;
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
function $ct_ju_NoSuchElementException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_ju_NoSuchElementException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
var $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
/** @constructor */
function $c_Lobservatory_Color(red, green, blue) {
  this.Lobservatory_Color__f_red = 0;
  this.Lobservatory_Color__f_green = 0;
  this.Lobservatory_Color__f_blue = 0;
  this.Lobservatory_Color__f_red = red;
  this.Lobservatory_Color__f_green = green;
  this.Lobservatory_Color__f_blue = blue
}
$c_Lobservatory_Color.prototype = new $h_O();
$c_Lobservatory_Color.prototype.constructor = $c_Lobservatory_Color;
/** @constructor */
function $h_Lobservatory_Color() {
  /*<skip>*/
}
$h_Lobservatory_Color.prototype = $c_Lobservatory_Color.prototype;
$c_Lobservatory_Color.prototype.productPrefix__T = (function() {
  return "Color"
});
$c_Lobservatory_Color.prototype.productArity__I = (function() {
  return 3
});
$c_Lobservatory_Color.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lobservatory_Color__f_red;
      break
    }
    case 1: {
      return this.Lobservatory_Color__f_green;
      break
    }
    case 2: {
      return this.Lobservatory_Color__f_blue;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_Lobservatory_Color.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lobservatory_Color.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = this.Lobservatory_Color__f_red;
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var data$1 = this.Lobservatory_Color__f_green;
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var data$2 = this.Lobservatory_Color__f_blue;
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$3, 3)
});
$c_Lobservatory_Color.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lobservatory_Color.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lobservatory_Color)) {
    var Color$1 = $as_Lobservatory_Color(x$1);
    return (((this.Lobservatory_Color__f_red === Color$1.Lobservatory_Color__f_red) && (this.Lobservatory_Color__f_green === Color$1.Lobservatory_Color__f_green)) && (this.Lobservatory_Color__f_blue === Color$1.Lobservatory_Color__f_blue))
  } else {
    return false
  }
});
function $as_Lobservatory_Color(obj) {
  return (((obj instanceof $c_Lobservatory_Color) || (obj === null)) ? obj : $throwClassCastException(obj, "observatory.Color"))
}
function $isArrayOf_Lobservatory_Color(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lobservatory_Color)))
}
function $asArrayOf_Lobservatory_Color(obj, depth) {
  return (($isArrayOf_Lobservatory_Color(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lobservatory.Color;", depth))
}
var $d_Lobservatory_Color = new $TypeData().initClass({
  Lobservatory_Color: 0
}, false, "observatory.Color", {
  Lobservatory_Color: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lobservatory_Color.prototype.$classData = $d_Lobservatory_Color;
/** @constructor */
function $c_Lobservatory_Layer(layerName, colorScale, bounds) {
  this.Lobservatory_Layer__f_layerName = null;
  this.Lobservatory_Layer__f_colorScale = null;
  this.Lobservatory_Layer__f_bounds = null;
  this.Lobservatory_Layer__f_layerName = layerName;
  this.Lobservatory_Layer__f_colorScale = colorScale;
  this.Lobservatory_Layer__f_bounds = bounds
}
$c_Lobservatory_Layer.prototype = new $h_O();
$c_Lobservatory_Layer.prototype.constructor = $c_Lobservatory_Layer;
/** @constructor */
function $h_Lobservatory_Layer() {
  /*<skip>*/
}
$h_Lobservatory_Layer.prototype = $c_Lobservatory_Layer.prototype;
$c_Lobservatory_Layer.prototype.productPrefix__T = (function() {
  return "Layer"
});
$c_Lobservatory_Layer.prototype.productArity__I = (function() {
  return 3
});
$c_Lobservatory_Layer.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lobservatory_Layer__f_layerName;
      break
    }
    case 1: {
      return this.Lobservatory_Layer__f_colorScale;
      break
    }
    case 2: {
      return this.Lobservatory_Layer__f_bounds;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_Lobservatory_Layer.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lobservatory_Layer.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_Lobservatory_Layer.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lobservatory_Layer.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lobservatory_Layer)) {
    var Layer$1 = $as_Lobservatory_Layer(x$1);
    var x = this.Lobservatory_Layer__f_layerName;
    var x$2 = Layer$1.Lobservatory_Layer__f_layerName;
    if ((x === x$2)) {
      var x$3 = this.Lobservatory_Layer__f_colorScale;
      var x$4 = Layer$1.Lobservatory_Layer__f_colorScale;
      var $$x1 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$5 = this.Lobservatory_Layer__f_bounds;
      var x$6 = Layer$1.Lobservatory_Layer__f_bounds;
      return ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
    } else {
      return false
    }
  } else {
    return false
  }
});
function $as_Lobservatory_Layer(obj) {
  return (((obj instanceof $c_Lobservatory_Layer) || (obj === null)) ? obj : $throwClassCastException(obj, "observatory.Layer"))
}
function $isArrayOf_Lobservatory_Layer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lobservatory_Layer)))
}
function $asArrayOf_Lobservatory_Layer(obj, depth) {
  return (($isArrayOf_Lobservatory_Layer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lobservatory.Layer;", depth))
}
var $d_Lobservatory_Layer = new $TypeData().initClass({
  Lobservatory_Layer: 0
}, false, "observatory.Layer", {
  Lobservatory_Layer: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lobservatory_Layer.prototype.$classData = $d_Lobservatory_Layer;
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : cause.toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.s_MatchError__f_obj;
  return ("of class " + $objectClassName(this$1))
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($dp_toString__T($thiz.s_MatchError__f_obj) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    var e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
    if ((e$2 !== null)) {
      return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
    } else {
      throw e
    }
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
var $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
/** @constructor */
function $c_s_Option() {
  /*<skip>*/
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
  /*<skip>*/
}
$h_s_Option.prototype = $c_s_Option.prototype;
$c_s_Option.prototype.toList__sci_List = (function() {
  return (this.isEmpty__Z() ? $m_sci_Nil$() : new $c_sci_$colon$colon(this.get__O(), $m_sci_Nil$()))
});
/** @constructor */
function $c_s_Predef$$anon$2() {
  /*<skip>*/
}
$c_s_Predef$$anon$2.prototype = new $h_s_Predef$$less$colon$less();
$c_s_Predef$$anon$2.prototype.constructor = $c_s_Predef$$anon$2;
/** @constructor */
function $h_s_Predef$$anon$2() {
  /*<skip>*/
}
$h_s_Predef$$anon$2.prototype = $c_s_Predef$$anon$2.prototype;
$c_s_Predef$$anon$2.prototype.apply__O__O = (function(x) {
  return x
});
var $d_s_Predef$$anon$2 = new $TypeData().initClass({
  s_Predef$$anon$2: 0
}, false, "scala.Predef$$anon$2", {
  s_Predef$$anon$2: 1,
  s_Predef$$less$colon$less: 1,
  O: 1,
  F1: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Predef$$anon$2.prototype.$classData = $d_s_Predef$$anon$2;
/** @constructor */
function $c_s_Predef$$anon$3() {
  /*<skip>*/
}
$c_s_Predef$$anon$3.prototype = new $h_s_Predef$$eq$colon$eq();
$c_s_Predef$$anon$3.prototype.constructor = $c_s_Predef$$anon$3;
/** @constructor */
function $h_s_Predef$$anon$3() {
  /*<skip>*/
}
$h_s_Predef$$anon$3.prototype = $c_s_Predef$$anon$3.prototype;
$c_s_Predef$$anon$3.prototype.apply__O__O = (function(x) {
  return x
});
var $d_s_Predef$$anon$3 = new $TypeData().initClass({
  s_Predef$$anon$3: 0
}, false, "scala.Predef$$anon$3", {
  s_Predef$$anon$3: 1,
  s_Predef$$eq$colon$eq: 1,
  O: 1,
  F1: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Predef$$anon$3.prototype.$classData = $d_s_Predef$$anon$3;
/** @constructor */
function $c_sc_Iterable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sc_Iterable$.prototype = new $h_scg_GenTraversableFactory();
$c_sc_Iterable$.prototype.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
  /*<skip>*/
}
$h_sc_Iterable$.prototype = $c_sc_Iterable$.prototype;
$c_sc_Iterable$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Iterable$();
  return new $c_scm_ListBuffer()
});
var $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
var $n_sc_Iterable$;
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
/** @constructor */
function $c_sc_Iterator$$anon$10(outer, f$3) {
  this.sc_Iterator$$anon$10__f_$outer = null;
  this.sc_Iterator$$anon$10__f_f$3 = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sc_Iterator$$anon$10__f_$outer = outer
  };
  this.sc_Iterator$$anon$10__f_f$3 = f$3
}
$c_sc_Iterator$$anon$10.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$10.prototype.constructor = $c_sc_Iterator$$anon$10;
/** @constructor */
function $h_sc_Iterator$$anon$10() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$10.prototype = $c_sc_Iterator$$anon$10.prototype;
$c_sc_Iterator$$anon$10.prototype.hasNext__Z = (function() {
  return this.sc_Iterator$$anon$10__f_$outer.hasNext__Z()
});
$c_sc_Iterator$$anon$10.prototype.next__O = (function() {
  return this.sc_Iterator$$anon$10__f_f$3.apply__O__O(this.sc_Iterator$$anon$10__f_$outer.next__O())
});
var $d_sc_Iterator$$anon$10 = new $TypeData().initClass({
  sc_Iterator$$anon$10: 0
}, false, "scala.collection.Iterator$$anon$10", {
  sc_Iterator$$anon$10: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$10.prototype.$classData = $d_sc_Iterator$$anon$10;
/** @constructor */
function $c_sc_Iterator$$anon$2() {
  /*<skip>*/
}
$c_sc_Iterator$$anon$2.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$2.prototype.constructor = $c_sc_Iterator$$anon$2;
/** @constructor */
function $h_sc_Iterator$$anon$2() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$2.prototype = $c_sc_Iterator$$anon$2.prototype;
$c_sc_Iterator$$anon$2.prototype.hasNext__Z = (function() {
  return false
});
$c_sc_Iterator$$anon$2.prototype.next__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator")
});
$c_sc_Iterator$$anon$2.prototype.next__O = (function() {
  this.next__E()
});
var $d_sc_Iterator$$anon$2 = new $TypeData().initClass({
  sc_Iterator$$anon$2: 0
}, false, "scala.collection.Iterator$$anon$2", {
  sc_Iterator$$anon$2: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$2.prototype.$classData = $d_sc_Iterator$$anon$2;
/** @constructor */
function $c_sc_Iterator$$anon$3(elem$1) {
  this.sc_Iterator$$anon$3__f_hasnext = false;
  this.sc_Iterator$$anon$3__f_elem$1 = null;
  this.sc_Iterator$$anon$3__f_elem$1 = elem$1;
  this.sc_Iterator$$anon$3__f_hasnext = true
}
$c_sc_Iterator$$anon$3.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$3.prototype.constructor = $c_sc_Iterator$$anon$3;
/** @constructor */
function $h_sc_Iterator$$anon$3() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$3.prototype = $c_sc_Iterator$$anon$3.prototype;
$c_sc_Iterator$$anon$3.prototype.hasNext__Z = (function() {
  return this.sc_Iterator$$anon$3__f_hasnext
});
$c_sc_Iterator$$anon$3.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$3__f_hasnext) {
    this.sc_Iterator$$anon$3__f_hasnext = false;
    return this.sc_Iterator$$anon$3__f_elem$1
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  }
});
var $d_sc_Iterator$$anon$3 = new $TypeData().initClass({
  sc_Iterator$$anon$3: 0
}, false, "scala.collection.Iterator$$anon$3", {
  sc_Iterator$$anon$3: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$3.prototype.$classData = $d_sc_Iterator$$anon$3;
/** @constructor */
function $c_sc_LinearSeqLike$$anon$1(outer) {
  this.sc_LinearSeqLike$$anon$1__f_these = null;
  this.sc_LinearSeqLike$$anon$1__f_these = outer
}
$c_sc_LinearSeqLike$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_LinearSeqLike$$anon$1.prototype.constructor = $c_sc_LinearSeqLike$$anon$1;
/** @constructor */
function $h_sc_LinearSeqLike$$anon$1() {
  /*<skip>*/
}
$h_sc_LinearSeqLike$$anon$1.prototype = $c_sc_LinearSeqLike$$anon$1.prototype;
$c_sc_LinearSeqLike$$anon$1.prototype.hasNext__Z = (function() {
  return (!this.sc_LinearSeqLike$$anon$1__f_these.isEmpty__Z())
});
$c_sc_LinearSeqLike$$anon$1.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var result = this.sc_LinearSeqLike$$anon$1__f_these.head__O();
    this.sc_LinearSeqLike$$anon$1__f_these = $as_sc_LinearSeqLike(this.sc_LinearSeqLike$$anon$1__f_these.tail__O());
    return result
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  }
});
var $d_sc_LinearSeqLike$$anon$1 = new $TypeData().initClass({
  sc_LinearSeqLike$$anon$1: 0
}, false, "scala.collection.LinearSeqLike$$anon$1", {
  sc_LinearSeqLike$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_LinearSeqLike$$anon$1.prototype.$classData = $d_sc_LinearSeqLike$$anon$1;
/** @constructor */
function $c_sc_Set$() {
  this.sc_Set$__f_ReusableCBF = null;
  $n_sc_Set$ = this;
  this.sc_Set$__f_ReusableCBF = new $c_scg_GenSetFactory$$anon$1(this)
}
$c_sc_Set$.prototype = new $h_scg_SetFactory();
$c_sc_Set$.prototype.constructor = $c_sc_Set$;
/** @constructor */
function $h_sc_Set$() {
  /*<skip>*/
}
$h_sc_Set$.prototype = $c_sc_Set$.prototype;
$c_sc_Set$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Set$();
  return new $c_sci_Set$SetBuilderImpl()
});
$c_sc_Set$.prototype.empty__sc_GenTraversable = (function() {
  $m_sci_Set$();
  return $m_sci_Set$EmptySet$()
});
var $d_sc_Set$ = new $TypeData().initClass({
  sc_Set$: 0
}, false, "scala.collection.Set$", {
  sc_Set$: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Set$.prototype.$classData = $d_sc_Set$;
var $n_sc_Set$;
function $m_sc_Set$() {
  if ((!$n_sc_Set$)) {
    $n_sc_Set$ = new $c_sc_Set$()
  };
  return $n_sc_Set$
}
/** @constructor */
function $c_sc_Traversable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  this.sc_Traversable$__f_breaks = null;
  $ct_scg_GenTraversableFactory__(this);
  $n_sc_Traversable$ = this;
  this.sc_Traversable$__f_breaks = new $c_s_util_control_Breaks()
}
$c_sc_Traversable$.prototype = new $h_scg_GenTraversableFactory();
$c_sc_Traversable$.prototype.constructor = $c_sc_Traversable$;
/** @constructor */
function $h_sc_Traversable$() {
  /*<skip>*/
}
$h_sc_Traversable$.prototype = $c_sc_Traversable$.prototype;
$c_sc_Traversable$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Traversable$();
  return new $c_scm_ListBuffer()
});
var $d_sc_Traversable$ = new $TypeData().initClass({
  sc_Traversable$: 0
}, false, "scala.collection.Traversable$", {
  sc_Traversable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Traversable$.prototype.$classData = $d_sc_Traversable$;
var $n_sc_Traversable$;
function $m_sc_Traversable$() {
  if ((!$n_sc_Traversable$)) {
    $n_sc_Traversable$ = new $c_sc_Traversable$()
  };
  return $n_sc_Traversable$
}
/** @constructor */
function $c_scg_ImmutableSetFactory() {
  /*<skip>*/
}
$c_scg_ImmutableSetFactory.prototype = new $h_scg_SetFactory();
$c_scg_ImmutableSetFactory.prototype.constructor = $c_scg_ImmutableSetFactory;
/** @constructor */
function $h_scg_ImmutableSetFactory() {
  /*<skip>*/
}
$h_scg_ImmutableSetFactory.prototype = $c_scg_ImmutableSetFactory.prototype;
$c_scg_ImmutableSetFactory.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_SetBuilder(this.emptyInstance__sci_Set())
});
$c_scg_ImmutableSetFactory.prototype.empty__sc_GenTraversable = (function() {
  return this.emptyInstance__sci_Set()
});
function $p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, hs) {
  return ((hs instanceof $c_sci_HashMap$HashTrieMap) && (hs.size__I() === (-1)))
}
function $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, hs) {
  if ($p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, hs)) {
    return hs
  } else {
    var elems = new ($d_sci_HashMap.getArrayOf().constr)(32);
    var bit = 0;
    var iBit = 0;
    while ((bit < 32)) {
      if (((hs.sci_HashMap$HashTrieMap__f_bitmap0 & (1 << bit)) !== 0)) {
        elems.set(bit, hs.sci_HashMap$HashTrieMap__f_elems0.get(iBit));
        iBit = ((1 + iBit) | 0)
      };
      bit = ((1 + bit) | 0)
    };
    return new $c_sci_HashMap$HashTrieMap((-1), elems, (-1))
  }
}
function $p_sci_HashMap$HashMapBuilder__isLeaf__sci_HashMap__Z($thiz, hm) {
  return ((hm instanceof $c_sci_HashMap$HashMap1) || (hm instanceof $c_sci_HashMap$HashMapCollision1))
}
function $p_sci_HashMap$HashMapBuilder__makeImmutable__sci_HashMap__sci_HashMap($thiz, hs) {
  if ((hs instanceof $c_sci_HashMap$HashTrieMap)) {
    var x2 = $as_sci_HashMap$HashTrieMap(hs);
    if ($p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, x2)) {
      var bit = 0;
      var bitmap = 0;
      var size = 0;
      while ((bit < 32)) {
        if ((x2.sci_HashMap$HashTrieMap__f_elems0.get(bit) !== null)) {
          x2.sci_HashMap$HashTrieMap__f_elems0.set(bit, $p_sci_HashMap$HashMapBuilder__makeImmutable__sci_HashMap__sci_HashMap($thiz, x2.sci_HashMap$HashTrieMap__f_elems0.get(bit)))
        };
        if ((x2.sci_HashMap$HashTrieMap__f_elems0.get(bit) !== null)) {
          bitmap = (bitmap | (1 << bit));
          size = ((size + x2.sci_HashMap$HashTrieMap__f_elems0.get(bit).size__I()) | 0)
        };
        bit = ((1 + bit) | 0)
      };
      var i = bitmap;
      var x1$2 = $m_jl_Integer$().bitCount__I__I(i);
      switch (x1$2) {
        case 0: {
          return null;
          break
        }
        case 1: {
          var $$x1 = x2.sci_HashMap$HashTrieMap__f_elems0;
          var i$1 = bitmap;
          if ($p_sci_HashMap$HashMapBuilder__isLeaf__sci_HashMap__Z($thiz, $$x1.get(((i$1 === 0) ? 32 : ((31 - $clz32((i$1 & ((-i$1) | 0)))) | 0))))) {
            var $$x2 = x2.sci_HashMap$HashTrieMap__f_elems0;
            var i$2 = bitmap;
            return $$x2.get(((i$2 === 0) ? 32 : ((31 - $clz32((i$2 & ((-i$2) | 0)))) | 0)))
          };
          break
        }
      };
      if ((x1$2 === 32)) {
        var elems$2 = x2.sci_HashMap$HashTrieMap__f_elems0
      } else {
        var elems = new ($d_sci_HashMap.getArrayOf().constr)(x1$2);
        var oBit = 0;
        bit = 0;
        while ((bit < 32)) {
          if ((x2.sci_HashMap$HashTrieMap__f_elems0.get(bit) !== null)) {
            elems.set(oBit, x2.sci_HashMap$HashTrieMap__f_elems0.get(bit));
            oBit = ((1 + oBit) | 0)
          };
          bit = ((1 + bit) | 0)
        };
        $m_s_Predef$().assert__Z__V((oBit === x1$2));
        var elems$2 = elems
      };
      x2.sci_HashMap$HashTrieMap__f_size0 = size;
      x2.sci_HashMap$HashTrieMap__f_elems0 = elems$2;
      x2.sci_HashMap$HashTrieMap__f_bitmap0 = bitmap;
      return x2
    }
  };
  return hs
}
function $p_sci_HashMap$HashMapBuilder__compressedIndex__sci_HashMap$HashTrieMap__I__I($thiz, trie, rawIndex) {
  if ((trie.sci_HashMap$HashTrieMap__f_bitmap0 === (-1))) {
    return rawIndex
  } else if (((trie.sci_HashMap$HashTrieMap__f_bitmap0 & (1 << rawIndex)) === 0)) {
    return (-1)
  } else {
    var i = ((((-1) + (1 << rawIndex)) | 0) & trie.sci_HashMap$HashTrieMap__f_bitmap0);
    return $m_jl_Integer$().bitCount__I__I(i)
  }
}
function $p_sci_HashMap$HashMapBuilder__trieIndex__sci_HashMap$HashTrieMap__I__I($thiz, trie, rawIndex) {
  return (($p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, trie) || (trie.sci_HashMap$HashTrieMap__f_bitmap0 === (-1))) ? rawIndex : $p_sci_HashMap$HashMapBuilder__compressedIndex__sci_HashMap$HashTrieMap__I__I($thiz, trie, rawIndex))
}
function $p_sci_HashMap$HashMapBuilder__addOne__sci_HashMap__T2__I__I__sci_HashMap($thiz, toNode, kv, improvedHash, level) {
  while (true) {
    var rc7 = false;
    var x4 = null;
    var x1 = toNode;
    if ((x1 instanceof $c_sci_HashMap$HashMap1)) {
      var x2 = $as_sci_HashMap$HashMap1(x1);
      return ((x2.sci_HashMap$HashMap1__f_hash === improvedHash) ? x2.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(kv.T2__f__1, improvedHash, level, kv.T2__f__2, kv, null) : $thiz.makeMutableTrie__sci_HashMap__sci_HashMap__I__sci_HashMap$HashTrieMap(x2, new $c_sci_HashMap$HashMap1(kv.T2__f__1, improvedHash, kv.T2__f__2, kv), level))
    };
    if ((x1 instanceof $c_sci_HashMap$HashMapCollision1)) {
      var x3 = $as_sci_HashMap$HashMapCollision1(x1);
      return ((x3.sci_HashMap$HashMapCollision1__f_hash === improvedHash) ? x3.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(kv.T2__f__1, improvedHash, level, kv.T2__f__2, kv, null) : $thiz.makeMutableTrie__sci_HashMap__sci_HashMap__I__sci_HashMap$HashTrieMap(x3, new $c_sci_HashMap$HashMap1(kv.T2__f__1, improvedHash, kv.T2__f__2, kv), level))
    };
    if ((x1 instanceof $c_sci_HashMap$HashTrieMap)) {
      rc7 = true;
      x4 = $as_sci_HashMap$HashTrieMap(x1);
      if ($p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, x4)) {
        var arrayIndex = (31 & ((improvedHash >>> level) | 0));
        var this$1 = x4;
        var old = this$1.sci_HashMap$HashTrieMap__f_elems0.get(arrayIndex);
        var this$2 = x4;
        this$2.sci_HashMap$HashTrieMap__f_elems0.set(arrayIndex, ((old === null) ? new $c_sci_HashMap$HashMap1(kv.T2__f__1, improvedHash, kv.T2__f__2, kv) : $p_sci_HashMap$HashMapBuilder__addOne__sci_HashMap__T2__I__I__sci_HashMap($thiz, old, kv, improvedHash, ((5 + level) | 0))));
        return x4
      }
    };
    if (rc7) {
      var rawIndex = (31 & ((improvedHash >>> level) | 0));
      var arrayIndex$2 = $p_sci_HashMap$HashMapBuilder__compressedIndex__sci_HashMap$HashTrieMap__I__I($thiz, x4, rawIndex);
      if ((arrayIndex$2 === (-1))) {
        toNode = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, x4);
        continue
      } else {
        var this$3 = x4;
        var old$2 = this$3.sci_HashMap$HashTrieMap__f_elems0.get(arrayIndex$2);
        var merged = ((old$2 === null) ? new $c_sci_HashMap$HashMap1(kv.T2__f__1, improvedHash, kv.T2__f__2, kv) : $p_sci_HashMap$HashMapBuilder__addOne__sci_HashMap__T2__I__I__sci_HashMap($thiz, old$2, kv, improvedHash, ((5 + level) | 0)));
        if ((merged === old$2)) {
          return x4
        } else {
          var newMutableTrie = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, x4);
          newMutableTrie.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, merged);
          return newMutableTrie
        }
      }
    };
    if ((x1 === $m_sci_HashMap$EmptyHashMap$())) {
      return toNode.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(kv.T2__f__1, improvedHash, level, kv.T2__f__2, kv, null)
    };
    throw new $c_s_MatchError(x1)
  }
}
function $p_sci_HashMap$HashMapBuilder__addHashMap__sci_HashMap__sci_HashMap__I__sci_HashMap($thiz, toNode, toBeAdded, level) {
  if ((toNode instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(toNode);
    return $p_sci_HashMap$HashMapBuilder__addToLeafHashMap__sci_HashMap__I__sci_HashMap__I__sci_HashMap($thiz, x2, x2.sci_HashMap$HashMap1__f_hash, toBeAdded, level)
  } else if ((toNode instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x3 = $as_sci_HashMap$HashMapCollision1(toNode);
    return $p_sci_HashMap$HashMapBuilder__addToLeafHashMap__sci_HashMap__I__sci_HashMap__I__sci_HashMap($thiz, x3, x3.sci_HashMap$HashMapCollision1__f_hash, toBeAdded, level)
  } else if ((toNode instanceof $c_sci_HashMap$HashTrieMap)) {
    var x4 = $as_sci_HashMap$HashTrieMap(toNode);
    return $p_sci_HashMap$HashMapBuilder__addToTrieHashMap__sci_HashMap$HashTrieMap__sci_HashMap__I__sci_HashMap($thiz, x4, toBeAdded, level)
  } else if ((toNode === $m_sci_HashMap$EmptyHashMap$())) {
    return toNode
  } else {
    throw new $c_s_MatchError(toNode)
  }
}
function $p_sci_HashMap$HashMapBuilder__addToLeafHashMap__sci_HashMap__I__sci_HashMap__I__sci_HashMap($thiz, toNode, toNodeHash, toBeAdded, level) {
  $m_s_Predef$().assert__Z__V($p_sci_HashMap$HashMapBuilder__isLeaf__sci_HashMap__Z($thiz, toNode));
  if ((toNode === toBeAdded)) {
    return toNode
  } else if ((toBeAdded instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(toBeAdded);
    return ((toNodeHash === x2.sci_HashMap$HashMap1__f_hash) ? toNode.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(x2, level, $m_sci_HashMap$().sci_HashMap$__f__concatMerger) : $thiz.makeMutableTrie__sci_HashMap__sci_HashMap__I__sci_HashMap$HashTrieMap(toNode, x2, level))
  } else if ((toBeAdded instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x3 = $as_sci_HashMap$HashMapCollision1(toBeAdded);
    return ((toNodeHash === x3.sci_HashMap$HashMapCollision1__f_hash) ? toNode.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(x3, level, $m_sci_HashMap$().sci_HashMap$__f__concatMerger) : $thiz.makeMutableTrie__sci_HashMap__sci_HashMap__I__sci_HashMap$HashTrieMap(toNode, x3, level))
  } else if ((toBeAdded instanceof $c_sci_HashMap$HashTrieMap)) {
    var x4 = $as_sci_HashMap$HashTrieMap(toBeAdded);
    var rawIndex = (31 & ((toNodeHash >>> level) | 0));
    var arrayIndex = $p_sci_HashMap$HashMapBuilder__compressedIndex__sci_HashMap$HashTrieMap__I__I($thiz, x4, rawIndex);
    if ((arrayIndex === (-1))) {
      var result = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, x4);
      result.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, toNode);
      return result
    } else {
      var newEle = $p_sci_HashMap$HashMapBuilder__addToLeafHashMap__sci_HashMap__I__sci_HashMap__I__sci_HashMap($thiz, toNode, toNodeHash, x4.sci_HashMap$HashTrieMap__f_elems0.get(arrayIndex), ((5 + level) | 0));
      if ((newEle === toBeAdded)) {
        return toBeAdded
      } else {
        var result$2 = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, x4);
        result$2.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, newEle);
        return result$2
      }
    }
  } else if ($f_sc_MapLike__isEmpty__Z(toBeAdded)) {
    return toNode
  } else {
    throw new $c_s_MatchError(toBeAdded)
  }
}
function $p_sci_HashMap$HashMapBuilder__addToTrieHashMap__sci_HashMap$HashTrieMap__sci_HashMap__I__sci_HashMap($thiz, toNode, toBeAdded, level) {
  if ((toNode === toBeAdded)) {
    return toNode
  } else if ((toBeAdded instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(toBeAdded);
    return $p_sci_HashMap$HashMapBuilder__addFromLeaf$1__I__sci_HashMap__I__sci_HashMap$HashTrieMap__sci_HashMap($thiz, x2.sci_HashMap$HashMap1__f_hash, toBeAdded, level, toNode)
  } else if ((toBeAdded instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x3 = $as_sci_HashMap$HashMapCollision1(toBeAdded);
    return $p_sci_HashMap$HashMapBuilder__addFromLeaf$1__I__sci_HashMap__I__sci_HashMap$HashTrieMap__sci_HashMap($thiz, x3.sci_HashMap$HashMapCollision1__f_hash, toBeAdded, level, toNode)
  } else if ((toBeAdded instanceof $c_sci_HashMap$HashTrieMap)) {
    var x4 = $as_sci_HashMap$HashTrieMap(toBeAdded);
    var result = toNode;
    var bBitSet = x4.sci_HashMap$HashTrieMap__f_bitmap0;
    var bArrayIndex = 0;
    while ((bBitSet !== 0)) {
      var i = bBitSet;
      var rawIndex = ((i === 0) ? 32 : ((31 - $clz32((i & ((-i) | 0)))) | 0));
      var arrayIndex = $p_sci_HashMap$HashMapBuilder__trieIndex__sci_HashMap$HashTrieMap__I__I($thiz, result, rawIndex);
      var bValue = x4.sci_HashMap$HashTrieMap__f_elems0.get(bArrayIndex);
      if ((arrayIndex === (-1))) {
        result = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, result);
        var this$2 = result;
        this$2.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, bValue)
      } else {
        var this$3 = result;
        var aValue = this$3.sci_HashMap$HashTrieMap__f_elems0.get(arrayIndex);
        if ((aValue !== bValue)) {
          if ((aValue === null)) {
            $m_s_Predef$().assert__Z__V($p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, result));
            var this$4 = result;
            this$4.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, bValue)
          } else {
            var resultAtIndex = $p_sci_HashMap$HashMapBuilder__addHashMap__sci_HashMap__sci_HashMap__I__sci_HashMap($thiz, aValue, bValue, ((5 + level) | 0));
            if ((resultAtIndex !== aValue)) {
              result = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, result);
              var this$5 = result;
              this$5.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, resultAtIndex)
            }
          }
        }
      };
      bBitSet = (bBitSet ^ (1 << rawIndex));
      bArrayIndex = ((1 + bArrayIndex) | 0)
    };
    return result
  } else if ($f_sc_MapLike__isEmpty__Z(toBeAdded)) {
    return toNode
  } else {
    throw new $c_s_MatchError(toBeAdded)
  }
}
function $p_sci_HashMap$HashMapBuilder__addFromLeaf$1__I__sci_HashMap__I__sci_HashMap$HashTrieMap__sci_HashMap($thiz, hash, toBeAdded$1, level$3, toNode$1) {
  $m_s_Predef$().assert__Z__V($p_sci_HashMap$HashMapBuilder__isLeaf__sci_HashMap__Z($thiz, toBeAdded$1));
  var rawIndex = (31 & ((hash >>> level$3) | 0));
  var arrayIndex = $p_sci_HashMap$HashMapBuilder__trieIndex__sci_HashMap$HashTrieMap__I__I($thiz, toNode$1, rawIndex);
  if ((arrayIndex === (-1))) {
    var newToNode = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, toNode$1);
    newToNode.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, toBeAdded$1);
    return newToNode
  } else {
    var old = toNode$1.sci_HashMap$HashTrieMap__f_elems0.get(arrayIndex);
    if ((old === toBeAdded$1)) {
      return toNode$1
    } else if ((old === null)) {
      $m_s_Predef$().assert__Z__V($p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, toNode$1));
      toNode$1.sci_HashMap$HashTrieMap__f_elems0.set(arrayIndex, toBeAdded$1);
      return toNode$1
    } else {
      var result = $p_sci_HashMap$HashMapBuilder__addHashMap__sci_HashMap__sci_HashMap__I__sci_HashMap($thiz, old, toBeAdded$1, ((5 + level$3) | 0));
      if ((result === old)) {
        return toNode$1
      } else {
        var newToNode$2 = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, toNode$1);
        newToNode$2.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, result);
        return newToNode$2
      }
    }
  }
}
/** @constructor */
function $c_sci_HashMap$HashMapBuilder() {
  this.sci_HashMap$HashMapBuilder__f_rootNode = null;
  this.sci_HashMap$HashMapBuilder__f_rootNode = ($m_sci_HashMap$(), $m_sci_HashMap$EmptyHashMap$())
}
$c_sci_HashMap$HashMapBuilder.prototype = new $h_O();
$c_sci_HashMap$HashMapBuilder.prototype.constructor = $c_sci_HashMap$HashMapBuilder;
/** @constructor */
function $h_sci_HashMap$HashMapBuilder() {
  /*<skip>*/
}
$h_sci_HashMap$HashMapBuilder.prototype = $c_sci_HashMap$HashMapBuilder.prototype;
$c_sci_HashMap$HashMapBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_HashMap$HashMapBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sci_HashMap$HashMapBuilder.prototype.result__sci_HashMap = (function() {
  $m_sci_HashMap$();
  var m = $p_sci_HashMap$HashMapBuilder__makeImmutable__sci_HashMap__sci_HashMap(this, this.sci_HashMap$HashMapBuilder__f_rootNode);
  this.sci_HashMap$HashMapBuilder__f_rootNode = ((m === null) ? $m_sci_HashMap$EmptyHashMap$() : m);
  return this.sci_HashMap$HashMapBuilder__f_rootNode
});
$c_sci_HashMap$HashMapBuilder.prototype.$plus$eq__T2__sci_HashMap$HashMapBuilder = (function(elem) {
  var key = elem.T2__f__1;
  var hash = $m_sci_HashMap$().scala$collection$immutable$HashMap$$computeHashImpl__O__I(key);
  this.sci_HashMap$HashMapBuilder__f_rootNode = $p_sci_HashMap$HashMapBuilder__addOne__sci_HashMap__T2__I__I__sci_HashMap(this, this.sci_HashMap$HashMapBuilder__f_rootNode, elem, hash, 0);
  return this
});
$c_sci_HashMap$HashMapBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__sci_HashMap$HashMapBuilder = (function(xs) {
  if ((xs instanceof $c_sci_HashMap)) {
    var x2 = $as_sci_HashMap(xs);
    if ((this.sci_HashMap$HashMapBuilder__f_rootNode === $m_sci_HashMap$EmptyHashMap$())) {
      if ((!$f_sc_MapLike__isEmpty__Z(x2))) {
        this.sci_HashMap$HashMapBuilder__f_rootNode = x2
      }
    } else {
      this.sci_HashMap$HashMapBuilder__f_rootNode = $p_sci_HashMap$HashMapBuilder__addHashMap__sci_HashMap__sci_HashMap__I__sci_HashMap(this, this.sci_HashMap$HashMapBuilder__f_rootNode, x2, 0)
    };
    return this
  } else {
    return (false ? $as_sci_HashMap$HashMapBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)) : $as_sci_HashMap$HashMapBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)))
  }
});
$c_sci_HashMap$HashMapBuilder.prototype.leafHash__sci_HashMap__I = (function(leaf) {
  if ((leaf instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(leaf);
    return x2.sci_HashMap$HashMap1__f_hash
  } else if ((leaf instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x3 = $as_sci_HashMap$HashMapCollision1(leaf);
    return x3.sci_HashMap$HashMapCollision1__f_hash
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), $objectGetClass(leaf).toString__T())
  }
});
$c_sci_HashMap$HashMapBuilder.prototype.makeMutableTrie__sci_HashMap__sci_HashMap__I__sci_HashMap$HashTrieMap = (function(aLeaf, bLeaf, level) {
  var elems = new ($d_sci_HashMap.getArrayOf().constr)(32);
  var aRawIndex = (31 & ((this.leafHash__sci_HashMap__I(aLeaf) >>> level) | 0));
  var bRawIndex = (31 & ((this.leafHash__sci_HashMap__I(bLeaf) >>> level) | 0));
  if ((aRawIndex === bRawIndex)) {
    elems.set(aRawIndex, this.makeMutableTrie__sci_HashMap__sci_HashMap__I__sci_HashMap$HashTrieMap(aLeaf, bLeaf, ((5 + level) | 0)))
  } else {
    elems.set(aRawIndex, aLeaf);
    elems.set(bRawIndex, bLeaf)
  };
  return new $c_sci_HashMap$HashTrieMap((-1), elems, (-1))
});
$c_sci_HashMap$HashMapBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__sci_HashMap$HashMapBuilder(xs)
});
$c_sci_HashMap$HashMapBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__T2__sci_HashMap$HashMapBuilder($as_T2(elem))
});
$c_sci_HashMap$HashMapBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__T2__sci_HashMap$HashMapBuilder($as_T2(elem))
});
$c_sci_HashMap$HashMapBuilder.prototype.result__O = (function() {
  return this.result__sci_HashMap()
});
function $as_sci_HashMap$HashMapBuilder(obj) {
  return (((obj instanceof $c_sci_HashMap$HashMapBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashMapBuilder"))
}
function $isArrayOf_sci_HashMap$HashMapBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashMapBuilder)))
}
function $asArrayOf_sci_HashMap$HashMapBuilder(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashMapBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashMapBuilder;", depth))
}
var $d_sci_HashMap$HashMapBuilder = new $TypeData().initClass({
  sci_HashMap$HashMapBuilder: 0
}, false, "scala.collection.immutable.HashMap$HashMapBuilder", {
  sci_HashMap$HashMapBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_HashMap$HashMapBuilder.prototype.$classData = $d_sci_HashMap$HashMapBuilder;
function $p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, hs) {
  return ((hs instanceof $c_sci_HashSet$HashTrieSet) && (hs.size__I() === (-1)))
}
function $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, hs) {
  if ($p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, hs)) {
    return hs
  } else {
    var elems = new ($d_sci_HashSet.getArrayOf().constr)(32);
    var bit = 0;
    var iBit = 0;
    while ((bit < 32)) {
      if (((hs.sci_HashSet$HashTrieSet__f_bitmap & (1 << bit)) !== 0)) {
        elems.set(bit, hs.sci_HashSet$HashTrieSet__f_elems.get(iBit));
        iBit = ((1 + iBit) | 0)
      };
      bit = ((1 + bit) | 0)
    };
    return new $c_sci_HashSet$HashTrieSet((-1), elems, (-1))
  }
}
function $p_sci_HashSet$HashSetBuilder__makeImmutable__sci_HashSet__sci_HashSet($thiz, hs) {
  if ((hs instanceof $c_sci_HashSet$HashTrieSet)) {
    var x2 = $as_sci_HashSet$HashTrieSet(hs);
    if ($p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, x2)) {
      var bit = 0;
      var bitmap = 0;
      var size = 0;
      while ((bit < 32)) {
        if ((x2.sci_HashSet$HashTrieSet__f_elems.get(bit) !== null)) {
          x2.sci_HashSet$HashTrieSet__f_elems.set(bit, $p_sci_HashSet$HashSetBuilder__makeImmutable__sci_HashSet__sci_HashSet($thiz, x2.sci_HashSet$HashTrieSet__f_elems.get(bit)))
        };
        if ((x2.sci_HashSet$HashTrieSet__f_elems.get(bit) !== null)) {
          bitmap = (bitmap | (1 << bit));
          size = ((size + x2.sci_HashSet$HashTrieSet__f_elems.get(bit).size__I()) | 0)
        };
        bit = ((1 + bit) | 0)
      };
      var i = bitmap;
      var x1$2 = $m_jl_Integer$().bitCount__I__I(i);
      switch (x1$2) {
        case 0: {
          return null;
          break
        }
        case 1: {
          var $$x1 = x2.sci_HashSet$HashTrieSet__f_elems;
          var i$1 = bitmap;
          if (($$x1.get(((i$1 === 0) ? 32 : ((31 - $clz32((i$1 & ((-i$1) | 0)))) | 0))) instanceof $c_sci_HashSet$LeafHashSet)) {
            var $$x2 = x2.sci_HashSet$HashTrieSet__f_elems;
            var i$2 = bitmap;
            return $$x2.get(((i$2 === 0) ? 32 : ((31 - $clz32((i$2 & ((-i$2) | 0)))) | 0)))
          };
          break
        }
      };
      if ((x1$2 === 32)) {
        var elems$2 = x2.sci_HashSet$HashTrieSet__f_elems
      } else {
        var elems = new ($d_sci_HashSet.getArrayOf().constr)(x1$2);
        var oBit = 0;
        bit = 0;
        while ((bit < 32)) {
          if ((x2.sci_HashSet$HashTrieSet__f_elems.get(bit) !== null)) {
            elems.set(oBit, x2.sci_HashSet$HashTrieSet__f_elems.get(bit));
            oBit = ((1 + oBit) | 0)
          };
          bit = ((1 + bit) | 0)
        };
        $m_s_Predef$().assert__Z__V((oBit === x1$2));
        var elems$2 = elems
      };
      x2.sci_HashSet$HashTrieSet__f_size0 = size;
      x2.sci_HashSet$HashTrieSet__f_elems = elems$2;
      x2.sci_HashSet$HashTrieSet__f_bitmap = bitmap;
      return x2
    }
  };
  return hs
}
function $p_sci_HashSet$HashSetBuilder__addOne__sci_HashSet__O__I__I__sci_HashSet($thiz, toNode, elem, improvedHash, level) {
  while (true) {
    var rc6 = false;
    var x3 = null;
    var x1 = toNode;
    if ((x1 instanceof $c_sci_HashSet$LeafHashSet)) {
      var x2 = $as_sci_HashSet$LeafHashSet(x1);
      return ((x2.sci_HashSet$LeafHashSet__f_hash === improvedHash) ? x2.updated0__O__I__I__sci_HashSet(elem, improvedHash, level) : $thiz.makeMutableTrie__sci_HashSet$LeafHashSet__O__I__I__sci_HashSet$HashTrieSet(x2, elem, improvedHash, level))
    };
    if ((x1 instanceof $c_sci_HashSet$HashTrieSet)) {
      rc6 = true;
      x3 = $as_sci_HashSet$HashTrieSet(x1);
      if ($p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, x3)) {
        var arrayIndex = (31 & ((improvedHash >>> level) | 0));
        var old = x3.sci_HashSet$HashTrieSet__f_elems.get(arrayIndex);
        x3.sci_HashSet$HashTrieSet__f_elems.set(arrayIndex, ((old === null) ? new $c_sci_HashSet$HashSet1(elem, improvedHash) : $p_sci_HashSet$HashSetBuilder__addOne__sci_HashSet__O__I__I__sci_HashSet($thiz, old, elem, improvedHash, ((5 + level) | 0))));
        return x3
      }
    };
    if (rc6) {
      var rawIndex = (31 & ((improvedHash >>> level) | 0));
      var arrayIndex$2 = $p_sci_HashSet$HashSetBuilder__compressedIndex__sci_HashSet$HashTrieSet__I__I($thiz, x3, rawIndex);
      if ((arrayIndex$2 === (-1))) {
        toNode = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, x3);
        continue
      } else {
        var old$2 = x3.sci_HashSet$HashTrieSet__f_elems.get(arrayIndex$2);
        var merged = ((old$2 === null) ? new $c_sci_HashSet$HashSet1(elem, improvedHash) : $p_sci_HashSet$HashSetBuilder__addOne__sci_HashSet__O__I__I__sci_HashSet($thiz, old$2, elem, improvedHash, ((5 + level) | 0)));
        if ((merged === old$2)) {
          return x3
        } else {
          var newMutableTrie = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, x3);
          newMutableTrie.sci_HashSet$HashTrieSet__f_elems.set(rawIndex, merged);
          return newMutableTrie
        }
      }
    };
    if ($f_sc_SetLike__isEmpty__Z(x1)) {
      return toNode.updated0__O__I__I__sci_HashSet(elem, improvedHash, level)
    };
    throw new $c_s_MatchError(x1)
  }
}
function $p_sci_HashSet$HashSetBuilder__compressedIndex__sci_HashSet$HashTrieSet__I__I($thiz, trie, rawIndex) {
  if ((trie.sci_HashSet$HashTrieSet__f_bitmap === (-1))) {
    return rawIndex
  } else if (((trie.sci_HashSet$HashTrieSet__f_bitmap & (1 << rawIndex)) === 0)) {
    return (-1)
  } else {
    var i = ((((-1) + (1 << rawIndex)) | 0) & trie.sci_HashSet$HashTrieSet__f_bitmap);
    return $m_jl_Integer$().bitCount__I__I(i)
  }
}
function $p_sci_HashSet$HashSetBuilder__trieIndex__sci_HashSet$HashTrieSet__I__I($thiz, trie, rawIndex) {
  return (($p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, trie) || (trie.sci_HashSet$HashTrieSet__f_bitmap === (-1))) ? rawIndex : $p_sci_HashSet$HashSetBuilder__compressedIndex__sci_HashSet$HashTrieSet__I__I($thiz, trie, rawIndex))
}
function $p_sci_HashSet$HashSetBuilder__addHashSet__sci_HashSet__sci_HashSet__I__sci_HashSet($thiz, toNode, toBeAdded, level) {
  if ((toNode instanceof $c_sci_HashSet$LeafHashSet)) {
    var x2 = $as_sci_HashSet$LeafHashSet(toNode);
    return $p_sci_HashSet$HashSetBuilder__addToLeafHashSet__sci_HashSet$LeafHashSet__sci_HashSet__I__sci_HashSet($thiz, x2, toBeAdded, level)
  } else if ((toNode instanceof $c_sci_HashSet$HashTrieSet)) {
    var x3 = $as_sci_HashSet$HashTrieSet(toNode);
    return $p_sci_HashSet$HashSetBuilder__addToTrieHashSet__sci_HashSet$HashTrieSet__sci_HashSet__I__sci_HashSet($thiz, x3, toBeAdded, level)
  } else if ($f_sc_SetLike__isEmpty__Z(toNode)) {
    return toNode
  } else {
    throw new $c_s_MatchError(toNode)
  }
}
function $p_sci_HashSet$HashSetBuilder__addToTrieHashSet__sci_HashSet$HashTrieSet__sci_HashSet__I__sci_HashSet($thiz, toNode, toBeAdded, level) {
  if ((toNode === toBeAdded)) {
    return toNode
  } else if ((toBeAdded instanceof $c_sci_HashSet$LeafHashSet)) {
    var x2 = $as_sci_HashSet$LeafHashSet(toBeAdded);
    var rawIndex = (31 & ((x2.sci_HashSet$LeafHashSet__f_hash >>> level) | 0));
    var arrayIndex = $p_sci_HashSet$HashSetBuilder__trieIndex__sci_HashSet$HashTrieSet__I__I($thiz, toNode, rawIndex);
    if ((arrayIndex === (-1))) {
      var newToNode = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, toNode);
      newToNode.sci_HashSet$HashTrieSet__f_elems.set(rawIndex, toBeAdded);
      return newToNode
    } else {
      var old = toNode.sci_HashSet$HashTrieSet__f_elems.get(arrayIndex);
      if ((old === toBeAdded)) {
        return toNode
      } else if ((old === null)) {
        $m_s_Predef$().assert__Z__V($p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, toNode));
        toNode.sci_HashSet$HashTrieSet__f_elems.set(arrayIndex, toBeAdded);
        return toNode
      } else {
        var result = $p_sci_HashSet$HashSetBuilder__addHashSet__sci_HashSet__sci_HashSet__I__sci_HashSet($thiz, old, toBeAdded, ((5 + level) | 0));
        if ((result === old)) {
          return toNode
        } else {
          var newToNode$2 = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, toNode);
          newToNode$2.sci_HashSet$HashTrieSet__f_elems.set(rawIndex, result);
          return newToNode$2
        }
      }
    }
  } else if ((toBeAdded instanceof $c_sci_HashSet$HashTrieSet)) {
    var x3 = $as_sci_HashSet$HashTrieSet(toBeAdded);
    var result$2 = toNode;
    var bBitSet = x3.sci_HashSet$HashTrieSet__f_bitmap;
    var bArrayIndex = 0;
    while ((bBitSet !== 0)) {
      var bValue = x3.sci_HashSet$HashTrieSet__f_elems.get(bArrayIndex);
      var i = bBitSet;
      var rawIndex$2 = ((i === 0) ? 32 : ((31 - $clz32((i & ((-i) | 0)))) | 0));
      var aArrayIndex = $p_sci_HashSet$HashSetBuilder__trieIndex__sci_HashSet$HashTrieSet__I__I($thiz, result$2, rawIndex$2);
      if ((aArrayIndex === (-1))) {
        result$2 = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, result$2);
        result$2.sci_HashSet$HashTrieSet__f_elems.set(rawIndex$2, bValue)
      } else {
        var aValue = result$2.sci_HashSet$HashTrieSet__f_elems.get(aArrayIndex);
        if ((aValue !== bValue)) {
          if ((aValue === null)) {
            $m_s_Predef$().assert__Z__V($p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, result$2));
            result$2.sci_HashSet$HashTrieSet__f_elems.set(rawIndex$2, bValue)
          } else {
            var resultAtIndex = $p_sci_HashSet$HashSetBuilder__addHashSet__sci_HashSet__sci_HashSet__I__sci_HashSet($thiz, aValue, bValue, ((5 + level) | 0));
            if ((resultAtIndex !== aValue)) {
              result$2 = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, result$2);
              result$2.sci_HashSet$HashTrieSet__f_elems.set(rawIndex$2, resultAtIndex)
            }
          }
        }
      };
      bBitSet = (bBitSet ^ (1 << rawIndex$2));
      bArrayIndex = ((1 + bArrayIndex) | 0)
    };
    return result$2
  } else if ($f_sc_SetLike__isEmpty__Z(toBeAdded)) {
    return toNode
  } else {
    throw new $c_s_MatchError(toBeAdded)
  }
}
function $p_sci_HashSet$HashSetBuilder__addToLeafHashSet__sci_HashSet$LeafHashSet__sci_HashSet__I__sci_HashSet($thiz, toNode, toBeAdded, level) {
  if ((toNode === toBeAdded)) {
    return toNode
  } else if ((toBeAdded instanceof $c_sci_HashSet$LeafHashSet)) {
    var x2 = $as_sci_HashSet$LeafHashSet(toBeAdded);
    return ((toNode.sci_HashSet$LeafHashSet__f_hash === x2.sci_HashSet$LeafHashSet__f_hash) ? toNode.union0__sci_HashSet__I__sci_HashSet(x2, level) : $thiz.makeMutableTrie__sci_HashSet$LeafHashSet__sci_HashSet$LeafHashSet__I__sci_HashSet$HashTrieSet(toNode, x2, level))
  } else if ((toBeAdded instanceof $c_sci_HashSet$HashTrieSet)) {
    var x3 = $as_sci_HashSet$HashTrieSet(toBeAdded);
    var rawIndex = (31 & ((toNode.sci_HashSet$LeafHashSet__f_hash >>> level) | 0));
    var arrayIndex = $p_sci_HashSet$HashSetBuilder__compressedIndex__sci_HashSet$HashTrieSet__I__I($thiz, x3, rawIndex);
    if ((arrayIndex === (-1))) {
      var result = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, x3);
      result.sci_HashSet$HashTrieSet__f_elems.set(rawIndex, toNode);
      return result
    } else {
      var newEle = $p_sci_HashSet$HashSetBuilder__addToLeafHashSet__sci_HashSet$LeafHashSet__sci_HashSet__I__sci_HashSet($thiz, toNode, x3.sci_HashSet$HashTrieSet__f_elems.get(arrayIndex), ((5 + level) | 0));
      if ((newEle === toBeAdded)) {
        return toBeAdded
      } else {
        var result$2 = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, x3);
        result$2.sci_HashSet$HashTrieSet__f_elems.set(rawIndex, newEle);
        return result$2
      }
    }
  } else if ($f_sc_SetLike__isEmpty__Z(toBeAdded)) {
    return toNode
  } else {
    throw new $c_s_MatchError(toBeAdded)
  }
}
/** @constructor */
function $c_sci_HashSet$HashSetBuilder() {
  this.sci_HashSet$HashSetBuilder__f_rootNode = null;
  this.sci_HashSet$HashSetBuilder__f_rootNode = ($m_sci_HashSet$(), $m_sci_HashSet$EmptyHashSet$())
}
$c_sci_HashSet$HashSetBuilder.prototype = new $h_O();
$c_sci_HashSet$HashSetBuilder.prototype.constructor = $c_sci_HashSet$HashSetBuilder;
/** @constructor */
function $h_sci_HashSet$HashSetBuilder() {
  /*<skip>*/
}
$h_sci_HashSet$HashSetBuilder.prototype = $c_sci_HashSet$HashSetBuilder.prototype;
$c_sci_HashSet$HashSetBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_HashSet$HashSetBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sci_HashSet$HashSetBuilder.prototype.result__sci_HashSet = (function() {
  $m_sci_HashSet$();
  var s = $p_sci_HashSet$HashSetBuilder__makeImmutable__sci_HashSet__sci_HashSet(this, this.sci_HashSet$HashSetBuilder__f_rootNode);
  this.sci_HashSet$HashSetBuilder__f_rootNode = ((s === null) ? $m_sci_HashSet$EmptyHashSet$() : s);
  return this.sci_HashSet$HashSetBuilder__f_rootNode
});
$c_sci_HashSet$HashSetBuilder.prototype.$plus$eq__O__sci_HashSet$HashSetBuilder = (function(elem) {
  var hash = $m_sci_HashSet$().computeHash__O__I(elem);
  this.sci_HashSet$HashSetBuilder__f_rootNode = $p_sci_HashSet$HashSetBuilder__addOne__sci_HashSet__O__I__I__sci_HashSet(this, this.sci_HashSet$HashSetBuilder__f_rootNode, elem, hash, 0);
  return this
});
$c_sci_HashSet$HashSetBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__sci_HashSet$HashSetBuilder = (function(xs) {
  if ((xs instanceof $c_sci_HashSet)) {
    var x2 = $as_sci_HashSet(xs);
    var this$1 = this.sci_HashSet$HashSetBuilder__f_rootNode;
    if ($f_sc_SetLike__isEmpty__Z(this$1)) {
      if ((!$f_sc_SetLike__isEmpty__Z(x2))) {
        this.sci_HashSet$HashSetBuilder__f_rootNode = x2
      }
    } else {
      this.sci_HashSet$HashSetBuilder__f_rootNode = $p_sci_HashSet$HashSetBuilder__addHashSet__sci_HashSet__sci_HashSet__I__sci_HashSet(this, this.sci_HashSet$HashSetBuilder__f_rootNode, x2, 0)
    };
    return this
  } else {
    return (false ? $as_sci_HashSet$HashSetBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)) : $as_sci_HashSet$HashSetBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)))
  }
});
$c_sci_HashSet$HashSetBuilder.prototype.makeMutableTrie__sci_HashSet$LeafHashSet__sci_HashSet$LeafHashSet__I__sci_HashSet$HashTrieSet = (function(aLeaf, bLeaf, level) {
  var elems = new ($d_sci_HashSet.getArrayOf().constr)(32);
  var aRawIndex = (31 & ((aLeaf.sci_HashSet$LeafHashSet__f_hash >>> level) | 0));
  var bRawIndex = (31 & ((bLeaf.sci_HashSet$LeafHashSet__f_hash >>> level) | 0));
  if ((aRawIndex === bRawIndex)) {
    elems.set(aRawIndex, this.makeMutableTrie__sci_HashSet$LeafHashSet__sci_HashSet$LeafHashSet__I__sci_HashSet$HashTrieSet(aLeaf, bLeaf, ((5 + level) | 0)))
  } else {
    elems.set(aRawIndex, aLeaf);
    elems.set(bRawIndex, bLeaf)
  };
  return new $c_sci_HashSet$HashTrieSet((-1), elems, (-1))
});
$c_sci_HashSet$HashSetBuilder.prototype.makeMutableTrie__sci_HashSet$LeafHashSet__O__I__I__sci_HashSet$HashTrieSet = (function(leaf, elem, elemImprovedHash, level) {
  return this.makeMutableTrie__sci_HashSet$LeafHashSet__sci_HashSet$LeafHashSet__I__sci_HashSet$HashTrieSet(leaf, new $c_sci_HashSet$HashSet1(elem, elemImprovedHash), level)
});
$c_sci_HashSet$HashSetBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__sci_HashSet$HashSetBuilder(xs)
});
$c_sci_HashSet$HashSetBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__sci_HashSet$HashSetBuilder(elem)
});
$c_sci_HashSet$HashSetBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__sci_HashSet$HashSetBuilder(elem)
});
$c_sci_HashSet$HashSetBuilder.prototype.result__O = (function() {
  return this.result__sci_HashSet()
});
function $as_sci_HashSet$HashSetBuilder(obj) {
  return (((obj instanceof $c_sci_HashSet$HashSetBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashSetBuilder"))
}
function $isArrayOf_sci_HashSet$HashSetBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashSetBuilder)))
}
function $asArrayOf_sci_HashSet$HashSetBuilder(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashSetBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashSetBuilder;", depth))
}
var $d_sci_HashSet$HashSetBuilder = new $TypeData().initClass({
  sci_HashSet$HashSetBuilder: 0
}, false, "scala.collection.immutable.HashSet$HashSetBuilder", {
  sci_HashSet$HashSetBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_HashSet$HashSetBuilder.prototype.$classData = $d_sci_HashSet$HashSetBuilder;
/** @constructor */
function $c_sci_Iterable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_Iterable$.prototype = new $h_scg_GenTraversableFactory();
$c_sci_Iterable$.prototype.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
  /*<skip>*/
}
$h_sci_Iterable$.prototype = $c_sci_Iterable$.prototype;
$c_sci_Iterable$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
function $p_sci_Map$MapBuilderImpl__convertToHashMapBuilder__V($thiz) {
  $thiz.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder = true;
  if (($thiz.sci_Map$MapBuilderImpl__f_hashMapBuilder === null)) {
    $thiz.sci_Map$MapBuilderImpl__f_hashMapBuilder = new $c_sci_HashMap$HashMapBuilder()
  };
  $thiz.sci_Map$MapBuilderImpl__f_hashMapBuilder.$plus$plus$eq__sc_TraversableOnce__sci_HashMap$HashMapBuilder($thiz.sci_Map$MapBuilderImpl__f_elems)
}
/** @constructor */
function $c_sci_Map$MapBuilderImpl() {
  this.sci_Map$MapBuilderImpl__f_elems = null;
  this.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder = false;
  this.sci_Map$MapBuilderImpl__f_hashMapBuilder = null;
  this.sci_Map$MapBuilderImpl__f_elems = ($m_sci_Map$(), $m_sci_Map$EmptyMap$());
  this.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder = false
}
$c_sci_Map$MapBuilderImpl.prototype = new $h_O();
$c_sci_Map$MapBuilderImpl.prototype.constructor = $c_sci_Map$MapBuilderImpl;
/** @constructor */
function $h_sci_Map$MapBuilderImpl() {
  /*<skip>*/
}
$h_sci_Map$MapBuilderImpl.prototype = $c_sci_Map$MapBuilderImpl.prototype;
$c_sci_Map$MapBuilderImpl.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_Map$MapBuilderImpl.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sci_Map$MapBuilderImpl.prototype.result__sci_Map = (function() {
  return (this.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder ? this.sci_Map$MapBuilderImpl__f_hashMapBuilder.result__sci_HashMap() : this.sci_Map$MapBuilderImpl__f_elems)
});
$c_sci_Map$MapBuilderImpl.prototype.$plus$eq__T2__sci_Map$MapBuilderImpl = (function(elem) {
  if (this.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    this.sci_Map$MapBuilderImpl__f_hashMapBuilder.$plus$eq__T2__sci_HashMap$HashMapBuilder(elem)
  } else if ((this.sci_Map$MapBuilderImpl__f_elems.size__I() < 4)) {
    this.sci_Map$MapBuilderImpl__f_elems = this.sci_Map$MapBuilderImpl__f_elems.$plus__T2__sci_Map(elem)
  } else {
    var key = elem.T2__f__1;
    var newValue = elem.T2__f__2;
    var x1 = this.sci_Map$MapBuilderImpl__f_elems.getOrElse__O__F0__O(key, new $c_sjsr_AnonFunction0(((this$1) => (() => $m_sci_Map$().sci_Map$__f_scala$collection$immutable$Map$$Sentinel))(this)));
    if ($m_sr_BoxesRunTime$().equals__O__O__Z($m_sci_Map$().sci_Map$__f_scala$collection$immutable$Map$$Sentinel, x1)) {
      $p_sci_Map$MapBuilderImpl__convertToHashMapBuilder__V(this);
      this.sci_Map$MapBuilderImpl__f_hashMapBuilder.$plus$eq__T2__sci_HashMap$HashMapBuilder(elem)
    } else if ((!Object.is(x1, newValue))) {
      this.sci_Map$MapBuilderImpl__f_elems = this.sci_Map$MapBuilderImpl__f_elems.$plus__T2__sci_Map(elem)
    }
  };
  return this
});
$c_sci_Map$MapBuilderImpl.prototype.$plus$plus$eq__sc_TraversableOnce__sci_Map$MapBuilderImpl = (function(xs) {
  matchEnd4: {
    if (this.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
      this.sci_Map$MapBuilderImpl__f_hashMapBuilder.$plus$plus$eq__sc_TraversableOnce__sci_HashMap$HashMapBuilder(xs);
      break matchEnd4
    };
    if ($is_sc_Map(xs)) {
      var x2 = $as_sc_Map(xs);
      if ((x2.size__I() > 4)) {
        $p_sci_Map$MapBuilderImpl__convertToHashMapBuilder__V(this);
        this.sci_Map$MapBuilderImpl__f_hashMapBuilder.$plus$plus$eq__sc_TraversableOnce__sci_HashMap$HashMapBuilder(x2);
        break matchEnd4
      }
    };
    $as_scm_ReusableBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
  };
  return this
});
$c_sci_Map$MapBuilderImpl.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__sci_Map$MapBuilderImpl(xs)
});
$c_sci_Map$MapBuilderImpl.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__T2__sci_Map$MapBuilderImpl($as_T2(elem))
});
$c_sci_Map$MapBuilderImpl.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__T2__sci_Map$MapBuilderImpl($as_T2(elem))
});
$c_sci_Map$MapBuilderImpl.prototype.result__O = (function() {
  return this.result__sci_Map()
});
var $d_sci_Map$MapBuilderImpl = new $TypeData().initClass({
  sci_Map$MapBuilderImpl: 0
}, false, "scala.collection.immutable.Map$MapBuilderImpl", {
  sci_Map$MapBuilderImpl: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_Map$MapBuilderImpl.prototype.$classData = $d_sci_Map$MapBuilderImpl;
function $p_sci_Set$SetBuilderImpl__convertToHashSetBuilder__V($thiz) {
  $thiz.sci_Set$SetBuilderImpl__f_switchedToHashSetBuilder = true;
  if (($thiz.sci_Set$SetBuilderImpl__f_hashSetBuilder === null)) {
    $thiz.sci_Set$SetBuilderImpl__f_hashSetBuilder = new $c_sci_HashSet$HashSetBuilder()
  };
  $thiz.sci_Set$SetBuilderImpl__f_hashSetBuilder.$plus$plus$eq__sc_TraversableOnce__sci_HashSet$HashSetBuilder($thiz.sci_Set$SetBuilderImpl__f_elems)
}
/** @constructor */
function $c_sci_Set$SetBuilderImpl() {
  this.sci_Set$SetBuilderImpl__f_elems = null;
  this.sci_Set$SetBuilderImpl__f_switchedToHashSetBuilder = false;
  this.sci_Set$SetBuilderImpl__f_hashSetBuilder = null;
  this.sci_Set$SetBuilderImpl__f_elems = ($m_sci_Set$(), $m_sci_Set$EmptySet$());
  this.sci_Set$SetBuilderImpl__f_switchedToHashSetBuilder = false
}
$c_sci_Set$SetBuilderImpl.prototype = new $h_O();
$c_sci_Set$SetBuilderImpl.prototype.constructor = $c_sci_Set$SetBuilderImpl;
/** @constructor */
function $h_sci_Set$SetBuilderImpl() {
  /*<skip>*/
}
$h_sci_Set$SetBuilderImpl.prototype = $c_sci_Set$SetBuilderImpl.prototype;
$c_sci_Set$SetBuilderImpl.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_Set$SetBuilderImpl.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sci_Set$SetBuilderImpl.prototype.result__sci_Set = (function() {
  return (this.sci_Set$SetBuilderImpl__f_switchedToHashSetBuilder ? this.sci_Set$SetBuilderImpl__f_hashSetBuilder.result__sci_HashSet() : this.sci_Set$SetBuilderImpl__f_elems)
});
$c_sci_Set$SetBuilderImpl.prototype.$plus$eq__O__sci_Set$SetBuilderImpl = (function(elem) {
  if (this.sci_Set$SetBuilderImpl__f_switchedToHashSetBuilder) {
    this.sci_Set$SetBuilderImpl__f_hashSetBuilder.$plus$eq__O__sci_HashSet$HashSetBuilder(elem)
  } else if ((this.sci_Set$SetBuilderImpl__f_elems.size__I() < 4)) {
    this.sci_Set$SetBuilderImpl__f_elems = $as_sci_Set(this.sci_Set$SetBuilderImpl__f_elems.$plus__O__sc_Set(elem))
  } else if ((!this.sci_Set$SetBuilderImpl__f_elems.contains__O__Z(elem))) {
    $p_sci_Set$SetBuilderImpl__convertToHashSetBuilder__V(this);
    this.sci_Set$SetBuilderImpl__f_hashSetBuilder.$plus$eq__O__sci_HashSet$HashSetBuilder(elem)
  };
  return this
});
$c_sci_Set$SetBuilderImpl.prototype.$plus$plus$eq__sc_TraversableOnce__sci_Set$SetBuilderImpl = (function(xs) {
  matchEnd4: {
    if (this.sci_Set$SetBuilderImpl__f_switchedToHashSetBuilder) {
      this.sci_Set$SetBuilderImpl__f_hashSetBuilder.$plus$plus$eq__sc_TraversableOnce__sci_HashSet$HashSetBuilder(xs);
      break matchEnd4
    };
    if ($is_sc_Set(xs)) {
      var x2 = $as_sc_Set(xs);
      if ((x2.size__I() > 4)) {
        $p_sci_Set$SetBuilderImpl__convertToHashSetBuilder__V(this);
        this.sci_Set$SetBuilderImpl__f_hashSetBuilder.$plus$plus$eq__sc_TraversableOnce__sci_HashSet$HashSetBuilder(x2);
        break matchEnd4
      }
    };
    $as_scm_ReusableBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
  };
  return this
});
$c_sci_Set$SetBuilderImpl.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__sci_Set$SetBuilderImpl(xs)
});
$c_sci_Set$SetBuilderImpl.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__sci_Set$SetBuilderImpl(elem)
});
$c_sci_Set$SetBuilderImpl.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__sci_Set$SetBuilderImpl(elem)
});
$c_sci_Set$SetBuilderImpl.prototype.result__O = (function() {
  return this.result__sci_Set()
});
var $d_sci_Set$SetBuilderImpl = new $TypeData().initClass({
  sci_Set$SetBuilderImpl: 0
}, false, "scala.collection.immutable.Set$SetBuilderImpl", {
  sci_Set$SetBuilderImpl: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_Set$SetBuilderImpl.prototype.$classData = $d_sci_Set$SetBuilderImpl;
/** @constructor */
function $c_sci_StreamIterator(self) {
  this.sci_StreamIterator__f_these = null;
  this.sci_StreamIterator__f_these = new $c_sci_StreamIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1, self$1) => (() => self$1))(this, self)))
}
$c_sci_StreamIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_StreamIterator.prototype.constructor = $c_sci_StreamIterator;
/** @constructor */
function $h_sci_StreamIterator() {
  /*<skip>*/
}
$h_sci_StreamIterator.prototype = $c_sci_StreamIterator.prototype;
$c_sci_StreamIterator.prototype.hasNext__Z = (function() {
  var this$1 = this.sci_StreamIterator__f_these.v__sci_Stream();
  return (!this$1.isEmpty__Z())
});
$c_sci_StreamIterator.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  } else {
    var cur = this.sci_StreamIterator__f_these.v__sci_Stream();
    var result = cur.head__O();
    this.sci_StreamIterator__f_these = new $c_sci_StreamIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1, cur$1) => (() => $as_sci_Stream(cur$1.tail__O())))(this, cur)));
    return result
  }
});
$c_sci_StreamIterator.prototype.toStream__sci_Stream = (function() {
  var result = this.sci_StreamIterator__f_these.v__sci_Stream();
  this.sci_StreamIterator__f_these = new $c_sci_StreamIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1) => (() => {
    $m_sci_Stream$();
    return $m_sci_Stream$Empty$()
  }))(this)));
  return result
});
var $d_sci_StreamIterator = new $TypeData().initClass({
  sci_StreamIterator: 0
}, false, "scala.collection.immutable.StreamIterator", {
  sci_StreamIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_StreamIterator.prototype.$classData = $d_sci_StreamIterator;
/** @constructor */
function $c_sci_Traversable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_Traversable$.prototype = new $h_scg_GenTraversableFactory();
$c_sci_Traversable$.prototype.constructor = $c_sci_Traversable$;
/** @constructor */
function $h_sci_Traversable$() {
  /*<skip>*/
}
$h_sci_Traversable$.prototype = $c_sci_Traversable$.prototype;
$c_sci_Traversable$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_Traversable$ = new $TypeData().initClass({
  sci_Traversable$: 0
}, false, "scala.collection.immutable.Traversable$", {
  sci_Traversable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Traversable$.prototype.$classData = $d_sci_Traversable$;
var $n_sci_Traversable$;
function $m_sci_Traversable$() {
  if ((!$n_sci_Traversable$)) {
    $n_sci_Traversable$ = new $c_sci_Traversable$()
  };
  return $n_sci_Traversable$
}
function $p_sci_TrieIterator__getElems__sci_Iterable__Asci_Iterable($thiz, x) {
  if ((x instanceof $c_sci_HashMap$HashTrieMap)) {
    var x2 = $as_sci_HashMap$HashTrieMap(x);
    var $$x1 = x2.sci_HashMap$HashTrieMap__f_elems0
  } else {
    if ((!(x instanceof $c_sci_HashSet$HashTrieSet))) {
      throw new $c_s_MatchError(x)
    };
    var x3 = $as_sci_HashSet$HashTrieSet(x);
    var $$x1 = x3.sci_HashSet$HashTrieSet__f_elems
  };
  return $asArrayOf_sci_Iterable($$x1, 1)
}
function $p_sci_TrieIterator__isTrie__O__Z($thiz, x) {
  return ((x instanceof $c_sci_HashMap$HashTrieMap) || (x instanceof $c_sci_HashSet$HashTrieSet))
}
function $p_sci_TrieIterator__isContainer__O__Z($thiz, x) {
  return ((x instanceof $c_sci_HashMap$HashMap1) || (x instanceof $c_sci_HashSet$HashSet1))
}
function $p_sci_TrieIterator__next0__Asci_Iterable__I__O($thiz, elems, i) {
  while (true) {
    if ((i === (((-1) + elems.u.length) | 0))) {
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = (((-1) + $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth) | 0);
      if (($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth >= 0)) {
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack.get($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth);
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack.get($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth);
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack.set($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth, null)
      } else {
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0
      }
    } else {
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = ((1 + $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD) | 0)
    };
    var m = elems.get(i);
    if ($p_sci_TrieIterator__isContainer__O__Z($thiz, m)) {
      return $thiz.getElem__O__O(m)
    } else if ($p_sci_TrieIterator__isTrie__O__Z($thiz, m)) {
      if (($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth >= 0)) {
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack.set($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth, $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD);
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack.set($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth, $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD)
      };
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = ((1 + $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth) | 0);
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = $p_sci_TrieIterator__getElems__sci_Iterable__Asci_Iterable($thiz, m);
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
      var temp$elems = $p_sci_TrieIterator__getElems__sci_Iterable__Asci_Iterable($thiz, m);
      elems = temp$elems;
      i = 0
    } else {
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = m.iterator__sc_Iterator();
      return $thiz.next__O()
    }
  }
}
function $ct_sci_TrieIterator__Asci_Iterable__($thiz, elems) {
  $thiz.sci_TrieIterator__f_elems = elems;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = $thiz.initArrayStack__AAsci_Iterable();
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = $thiz.initPosStack__AI();
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = $thiz.sci_TrieIterator__f_elems;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null;
  return $thiz
}
/** @constructor */
function $c_sci_TrieIterator() {
  this.sci_TrieIterator__f_elems = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null
}
$c_sci_TrieIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_TrieIterator.prototype.constructor = $c_sci_TrieIterator;
/** @constructor */
function $h_sci_TrieIterator() {
  /*<skip>*/
}
$h_sci_TrieIterator.prototype = $c_sci_TrieIterator.prototype;
$c_sci_TrieIterator.prototype.initArrayStack__AAsci_Iterable = (function() {
  return new ($d_sci_Iterable.getArrayOf().getArrayOf().constr)(6)
});
$c_sci_TrieIterator.prototype.initPosStack__AI = (function() {
  return new $ac_I(6)
});
$c_sci_TrieIterator.prototype.hasNext__Z = (function() {
  return ((this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter !== null) || (this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth >= 0))
});
$c_sci_TrieIterator.prototype.next__O = (function() {
  if ((this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter !== null)) {
    var el = this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter.next__O();
    if ((!this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter.hasNext__Z())) {
      this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null
    };
    return el
  } else {
    return $p_sci_TrieIterator__next0__Asci_Iterable__I__O(this, this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD, this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD)
  }
});
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.scm_Builder$$anon$1__f_self = null;
  this.scm_Builder$$anon$1__f_f$1 = null;
  this.scm_Builder$$anon$1__f_f$1 = f$1;
  this.scm_Builder$$anon$1__f_self = outer
}
$c_scm_Builder$$anon$1.prototype = new $h_O();
$c_scm_Builder$$anon$1.prototype.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
  /*<skip>*/
}
$h_scm_Builder$$anon$1.prototype = $c_scm_Builder$$anon$1.prototype;
$c_scm_Builder$$anon$1.prototype.hashCode__I = (function() {
  return this.scm_Builder$$anon$1__f_self.hashCode__I()
});
$c_scm_Builder$$anon$1.prototype.equals__O__Z = (function(that) {
  return $f_s_Proxy__equals__O__Z(this, that)
});
$c_scm_Builder$$anon$1.prototype.toString__T = (function() {
  return $f_s_Proxy__toString__T(this)
});
$c_scm_Builder$$anon$1.prototype.$plus$eq__O__scm_Builder$$anon$1 = (function(x) {
  this.scm_Builder$$anon$1__f_self.$plus$eq__O__scm_Builder(x);
  return this
});
$c_scm_Builder$$anon$1.prototype.$plus$plus$eq__sc_TraversableOnce__scm_Builder$$anon$1 = (function(xs) {
  this.scm_Builder$$anon$1__f_self.$plus$plus$eq__sc_TraversableOnce__scg_Growable(xs);
  return this
});
$c_scm_Builder$$anon$1.prototype.sizeHint__I__V = (function(size) {
  this.scm_Builder$$anon$1__f_self.sizeHint__I__V(size)
});
$c_scm_Builder$$anon$1.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundColl) {
  this.scm_Builder$$anon$1__f_self.sizeHintBounded__I__sc_TraversableLike__V(size, boundColl)
});
$c_scm_Builder$$anon$1.prototype.result__O = (function() {
  return this.scm_Builder$$anon$1__f_f$1.apply__O__O(this.scm_Builder$$anon$1__f_self.result__O())
});
$c_scm_Builder$$anon$1.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__scm_Builder$$anon$1(xs)
});
$c_scm_Builder$$anon$1.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_Builder$$anon$1(elem)
});
$c_scm_Builder$$anon$1.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_Builder$$anon$1(elem)
});
var $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Proxy: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
function $ct_scm_LazyBuilder__($thiz) {
  $thiz.scm_LazyBuilder__f_parts = new $c_scm_ListBuffer();
  return $thiz
}
/** @constructor */
function $c_scm_LazyBuilder() {
  this.scm_LazyBuilder__f_parts = null
}
$c_scm_LazyBuilder.prototype = new $h_O();
$c_scm_LazyBuilder.prototype.constructor = $c_scm_LazyBuilder;
/** @constructor */
function $h_scm_LazyBuilder() {
  /*<skip>*/
}
$h_scm_LazyBuilder.prototype = $c_scm_LazyBuilder.prototype;
$c_scm_LazyBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_LazyBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_LazyBuilder.prototype.$plus$eq__O__scm_LazyBuilder = (function(x) {
  var $$x1 = this.scm_LazyBuilder__f_parts;
  $m_sci_List$();
  var array = [x];
  var i = (((-1) + $uI(array.length)) | 0);
  var result = $m_sci_Nil$();
  while ((i >= 0)) {
    var this$4 = result;
    var index = i;
    var x$1 = array[index];
    result = new $c_sci_$colon$colon(x$1, this$4);
    i = (((-1) + i) | 0)
  };
  $$x1.$plus$eq__O__scm_ListBuffer(result);
  return this
});
$c_scm_LazyBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scm_LazyBuilder = (function(xs) {
  this.scm_LazyBuilder__f_parts.$plus$eq__O__scm_ListBuffer(xs);
  return this
});
$c_scm_LazyBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__scm_LazyBuilder(xs)
});
$c_scm_LazyBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_LazyBuilder(elem)
});
$c_scm_LazyBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_LazyBuilder(elem)
});
/** @constructor */
function $c_scm_ListBuffer$$anon$1(outer) {
  this.scm_ListBuffer$$anon$1__f_cursor = null;
  this.scm_ListBuffer$$anon$1__f_cursor = (outer.isEmpty__Z() ? $m_sci_Nil$() : outer.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start)
}
$c_scm_ListBuffer$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_scm_ListBuffer$$anon$1.prototype.constructor = $c_scm_ListBuffer$$anon$1;
/** @constructor */
function $h_scm_ListBuffer$$anon$1() {
  /*<skip>*/
}
$h_scm_ListBuffer$$anon$1.prototype = $c_scm_ListBuffer$$anon$1.prototype;
$c_scm_ListBuffer$$anon$1.prototype.hasNext__Z = (function() {
  return (this.scm_ListBuffer$$anon$1__f_cursor !== $m_sci_Nil$())
});
$c_scm_ListBuffer$$anon$1.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty Iterator")
  } else {
    var ans = this.scm_ListBuffer$$anon$1__f_cursor.head__O();
    var this$1 = this.scm_ListBuffer$$anon$1__f_cursor;
    this.scm_ListBuffer$$anon$1__f_cursor = this$1.tail__sci_List();
    return ans
  }
});
var $d_scm_ListBuffer$$anon$1 = new $TypeData().initClass({
  scm_ListBuffer$$anon$1: 0
}, false, "scala.collection.mutable.ListBuffer$$anon$1", {
  scm_ListBuffer$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_scm_ListBuffer$$anon$1.prototype.$classData = $d_scm_ListBuffer$$anon$1;
/** @constructor */
function $c_scm_MapBuilder(empty) {
  this.scm_MapBuilder__f_empty = null;
  this.scm_MapBuilder__f_elems = null;
  this.scm_MapBuilder__f_empty = empty;
  this.scm_MapBuilder__f_elems = empty
}
$c_scm_MapBuilder.prototype = new $h_O();
$c_scm_MapBuilder.prototype.constructor = $c_scm_MapBuilder;
/** @constructor */
function $h_scm_MapBuilder() {
  /*<skip>*/
}
$h_scm_MapBuilder.prototype = $c_scm_MapBuilder.prototype;
$c_scm_MapBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_MapBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_MapBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_MapBuilder.prototype.$plus$eq__T2__scm_MapBuilder = (function(x) {
  this.scm_MapBuilder__f_elems = this.scm_MapBuilder__f_elems.$plus__T2__sc_GenMap(x);
  return this
});
$c_scm_MapBuilder.prototype.result__O = (function() {
  return this.scm_MapBuilder__f_elems
});
$c_scm_MapBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__T2__scm_MapBuilder($as_T2(elem))
});
$c_scm_MapBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__T2__scm_MapBuilder($as_T2(elem))
});
var $d_scm_MapBuilder = new $TypeData().initClass({
  scm_MapBuilder: 0
}, false, "scala.collection.mutable.MapBuilder", {
  scm_MapBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_MapBuilder.prototype.$classData = $d_scm_MapBuilder;
/** @constructor */
function $c_scm_SetBuilder(empty) {
  this.scm_SetBuilder__f_empty = null;
  this.scm_SetBuilder__f_elems = null;
  this.scm_SetBuilder__f_empty = empty;
  this.scm_SetBuilder__f_elems = empty
}
$c_scm_SetBuilder.prototype = new $h_O();
$c_scm_SetBuilder.prototype.constructor = $c_scm_SetBuilder;
/** @constructor */
function $h_scm_SetBuilder() {
  /*<skip>*/
}
$h_scm_SetBuilder.prototype = $c_scm_SetBuilder.prototype;
$c_scm_SetBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_SetBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_SetBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_SetBuilder.prototype.$plus$eq__O__scm_SetBuilder = (function(x) {
  this.scm_SetBuilder__f_elems = this.scm_SetBuilder__f_elems.$plus__O__sc_Set(x);
  return this
});
$c_scm_SetBuilder.prototype.result__O = (function() {
  return this.scm_SetBuilder__f_elems
});
$c_scm_SetBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_SetBuilder(elem)
});
$c_scm_SetBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_SetBuilder(elem)
});
var $d_scm_SetBuilder = new $TypeData().initClass({
  scm_SetBuilder: 0
}, false, "scala.collection.mutable.SetBuilder", {
  scm_SetBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_SetBuilder.prototype.$classData = $d_scm_SetBuilder;
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_s_util_control_BreakControl extends $c_jl_Throwable {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  fillInStackTrace__jl_Throwable() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this)
  };
}
var $d_s_util_control_BreakControl = new $TypeData().initClass({
  s_util_control_BreakControl: 0
}, false, "scala.util.control.BreakControl", {
  s_util_control_BreakControl: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_ControlThrowable: 1,
  s_util_control_NoStackTrace: 1
});
$c_s_util_control_BreakControl.prototype.$classData = $d_s_util_control_BreakControl;
/** @constructor */
function $c_Lscalatags_JsDom$RawFrag$() {
  /*<skip>*/
}
$c_Lscalatags_JsDom$RawFrag$.prototype = new $h_O();
$c_Lscalatags_JsDom$RawFrag$.prototype.constructor = $c_Lscalatags_JsDom$RawFrag$;
/** @constructor */
function $h_Lscalatags_JsDom$RawFrag$() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$RawFrag$.prototype = $c_Lscalatags_JsDom$RawFrag$.prototype;
$c_Lscalatags_JsDom$RawFrag$.prototype.toString__T = (function() {
  return "<function1>"
});
$c_Lscalatags_JsDom$RawFrag$.prototype.apply__O__O = (function(v1) {
  var v = $as_T(v1);
  return new $c_Lscalatags_JsDom$RawFrag(v)
});
var $d_Lscalatags_JsDom$RawFrag$ = new $TypeData().initClass({
  Lscalatags_JsDom$RawFrag$: 0
}, false, "scalatags.JsDom$RawFrag$", {
  Lscalatags_JsDom$RawFrag$: 1,
  O: 1,
  Lscalatags_package$Companion: 1,
  F1: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$RawFrag$.prototype.$classData = $d_Lscalatags_JsDom$RawFrag$;
var $n_Lscalatags_JsDom$RawFrag$;
function $m_Lscalatags_JsDom$RawFrag$() {
  if ((!$n_Lscalatags_JsDom$RawFrag$)) {
    $n_Lscalatags_JsDom$RawFrag$ = new $c_Lscalatags_JsDom$RawFrag$()
  };
  return $n_Lscalatags_JsDom$RawFrag$
}
/** @constructor */
function $c_Lscalatags_JsDom$StringFrag$() {
  /*<skip>*/
}
$c_Lscalatags_JsDom$StringFrag$.prototype = new $h_O();
$c_Lscalatags_JsDom$StringFrag$.prototype.constructor = $c_Lscalatags_JsDom$StringFrag$;
/** @constructor */
function $h_Lscalatags_JsDom$StringFrag$() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$StringFrag$.prototype = $c_Lscalatags_JsDom$StringFrag$.prototype;
$c_Lscalatags_JsDom$StringFrag$.prototype.toString__T = (function() {
  return "<function1>"
});
$c_Lscalatags_JsDom$StringFrag$.prototype.apply__O__O = (function(v1) {
  var v = $as_T(v1);
  return new $c_Lscalatags_JsDom$StringFrag(v)
});
var $d_Lscalatags_JsDom$StringFrag$ = new $TypeData().initClass({
  Lscalatags_JsDom$StringFrag$: 0
}, false, "scalatags.JsDom$StringFrag$", {
  Lscalatags_JsDom$StringFrag$: 1,
  O: 1,
  Lscalatags_package$Companion: 1,
  F1: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$StringFrag$.prototype.$classData = $d_Lscalatags_JsDom$StringFrag$;
var $n_Lscalatags_JsDom$StringFrag$;
function $m_Lscalatags_JsDom$StringFrag$() {
  if ((!$n_Lscalatags_JsDom$StringFrag$)) {
    $n_Lscalatags_JsDom$StringFrag$ = new $c_Lscalatags_JsDom$StringFrag$()
  };
  return $n_Lscalatags_JsDom$StringFrag$
}
/** @constructor */
function $c_Lscalatags_generic_Attr(name, namespace, raw) {
  this.Lscalatags_generic_Attr__f_name = null;
  this.Lscalatags_generic_Attr__f_namespace = null;
  this.Lscalatags_generic_Attr__f_raw = false;
  this.Lscalatags_generic_Attr__f_name = name;
  this.Lscalatags_generic_Attr__f_namespace = namespace;
  this.Lscalatags_generic_Attr__f_raw = raw;
  if (((!raw) && (!$m_Lscalatags_Escaping$().validAttrName__T__Z(name)))) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("Illegal attribute name: " + name) + " is not a valid XML attribute name"))
  }
}
$c_Lscalatags_generic_Attr.prototype = new $h_O();
$c_Lscalatags_generic_Attr.prototype.constructor = $c_Lscalatags_generic_Attr;
/** @constructor */
function $h_Lscalatags_generic_Attr() {
  /*<skip>*/
}
$h_Lscalatags_generic_Attr.prototype = $c_Lscalatags_generic_Attr.prototype;
$c_Lscalatags_generic_Attr.prototype.$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair = (function(v, ev) {
  if ((v === null)) {
    throw new $c_jl_NullPointerException()
  };
  return new $c_Lscalatags_generic_AttrPair(this, v, ev)
});
$c_Lscalatags_generic_Attr.prototype.productPrefix__T = (function() {
  return "Attr"
});
$c_Lscalatags_generic_Attr.prototype.productArity__I = (function() {
  return 3
});
$c_Lscalatags_generic_Attr.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lscalatags_generic_Attr__f_name;
      break
    }
    case 1: {
      return this.Lscalatags_generic_Attr__f_namespace;
      break
    }
    case 2: {
      return this.Lscalatags_generic_Attr__f_raw;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_Lscalatags_generic_Attr.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lscalatags_generic_Attr.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var x = this.Lscalatags_generic_Attr__f_name;
  var data = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x$1 = this.Lscalatags_generic_Attr__f_namespace;
  var data$1 = $m_sr_Statics$().anyHash__O__I(x$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var data$2 = (this.Lscalatags_generic_Attr__f_raw ? 1231 : 1237);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$3, 3)
});
$c_Lscalatags_generic_Attr.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lscalatags_generic_Attr.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lscalatags_generic_Attr)) {
    var Attr$1 = $as_Lscalatags_generic_Attr(x$1);
    if ((this.Lscalatags_generic_Attr__f_name === Attr$1.Lscalatags_generic_Attr__f_name)) {
      var x = this.Lscalatags_generic_Attr__f_namespace;
      var x$2 = Attr$1.Lscalatags_generic_Attr__f_namespace;
      var $$x1 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      return (this.Lscalatags_generic_Attr__f_raw === Attr$1.Lscalatags_generic_Attr__f_raw)
    } else {
      return false
    }
  } else {
    return false
  }
});
function $as_Lscalatags_generic_Attr(obj) {
  return (((obj instanceof $c_Lscalatags_generic_Attr) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Attr"))
}
function $isArrayOf_Lscalatags_generic_Attr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Attr)))
}
function $asArrayOf_Lscalatags_generic_Attr(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Attr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Attr;", depth))
}
var $d_Lscalatags_generic_Attr = new $TypeData().initClass({
  Lscalatags_generic_Attr: 0
}, false, "scalatags.generic.Attr", {
  Lscalatags_generic_Attr: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_Attr.prototype.$classData = $d_Lscalatags_generic_Attr;
function $ct_Lscalatags_generic_PixelStyle__T__T__($thiz, jsName, cssName) {
  $thiz.Lscalatags_generic_PixelStyle__f_jsName = jsName;
  $thiz.Lscalatags_generic_PixelStyle__f_cssName = cssName;
  $thiz.Lscalatags_generic_PixelStyle__f_realStyle = $ct_Lscalatags_generic_Style__T__T__(new $c_Lscalatags_generic_Style(), jsName, cssName);
  return $thiz
}
/** @constructor */
function $c_Lscalatags_generic_PixelStyle() {
  this.Lscalatags_generic_PixelStyle__f_jsName = null;
  this.Lscalatags_generic_PixelStyle__f_cssName = null;
  this.Lscalatags_generic_PixelStyle__f_realStyle = null
}
$c_Lscalatags_generic_PixelStyle.prototype = new $h_O();
$c_Lscalatags_generic_PixelStyle.prototype.constructor = $c_Lscalatags_generic_PixelStyle;
/** @constructor */
function $h_Lscalatags_generic_PixelStyle() {
  /*<skip>*/
}
$h_Lscalatags_generic_PixelStyle.prototype = $c_Lscalatags_generic_PixelStyle.prototype;
$c_Lscalatags_generic_PixelStyle.prototype.$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair = (function(v, ev) {
  if ((v === null)) {
    throw new $c_jl_NullPointerException()
  };
  return ev.apply__Lscalatags_generic_Style__O__Lscalatags_generic_StylePair(this.Lscalatags_generic_PixelStyle__f_realStyle, v)
});
$c_Lscalatags_generic_PixelStyle.prototype.productPrefix__T = (function() {
  return "PixelStyle"
});
$c_Lscalatags_generic_PixelStyle.prototype.productArity__I = (function() {
  return 2
});
$c_Lscalatags_generic_PixelStyle.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lscalatags_generic_PixelStyle__f_jsName;
      break
    }
    case 1: {
      return this.Lscalatags_generic_PixelStyle__f_cssName;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_Lscalatags_generic_PixelStyle.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lscalatags_generic_PixelStyle.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_Lscalatags_generic_PixelStyle.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lscalatags_generic_PixelStyle.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lscalatags_generic_PixelStyle)) {
    var PixelStyle$1 = $as_Lscalatags_generic_PixelStyle(x$1);
    return ((this.Lscalatags_generic_PixelStyle__f_jsName === PixelStyle$1.Lscalatags_generic_PixelStyle__f_jsName) && (this.Lscalatags_generic_PixelStyle__f_cssName === PixelStyle$1.Lscalatags_generic_PixelStyle__f_cssName))
  } else {
    return false
  }
});
function $as_Lscalatags_generic_PixelStyle(obj) {
  return (((obj instanceof $c_Lscalatags_generic_PixelStyle) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.PixelStyle"))
}
function $isArrayOf_Lscalatags_generic_PixelStyle(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_PixelStyle)))
}
function $asArrayOf_Lscalatags_generic_PixelStyle(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_PixelStyle(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.PixelStyle;", depth))
}
function $ct_Lscalatags_generic_Style__T__T__($thiz, jsName, cssName) {
  $thiz.Lscalatags_generic_Style__f_jsName = jsName;
  $thiz.Lscalatags_generic_Style__f_cssName = cssName;
  return $thiz
}
/** @constructor */
function $c_Lscalatags_generic_Style() {
  this.Lscalatags_generic_Style__f_jsName = null;
  this.Lscalatags_generic_Style__f_cssName = null
}
$c_Lscalatags_generic_Style.prototype = new $h_O();
$c_Lscalatags_generic_Style.prototype.constructor = $c_Lscalatags_generic_Style;
/** @constructor */
function $h_Lscalatags_generic_Style() {
  /*<skip>*/
}
$h_Lscalatags_generic_Style.prototype = $c_Lscalatags_generic_Style.prototype;
$c_Lscalatags_generic_Style.prototype.$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair = (function(v, ev) {
  if ((v === null)) {
    throw new $c_jl_NullPointerException()
  };
  return new $c_Lscalatags_generic_StylePair(this, v, ev)
});
$c_Lscalatags_generic_Style.prototype.productPrefix__T = (function() {
  return "Style"
});
$c_Lscalatags_generic_Style.prototype.productArity__I = (function() {
  return 2
});
$c_Lscalatags_generic_Style.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lscalatags_generic_Style__f_jsName;
      break
    }
    case 1: {
      return this.Lscalatags_generic_Style__f_cssName;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_Lscalatags_generic_Style.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lscalatags_generic_Style.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_Lscalatags_generic_Style.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lscalatags_generic_Style.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lscalatags_generic_Style)) {
    var Style$1 = $as_Lscalatags_generic_Style(x$1);
    return ((this.Lscalatags_generic_Style__f_jsName === Style$1.Lscalatags_generic_Style__f_jsName) && (this.Lscalatags_generic_Style__f_cssName === Style$1.Lscalatags_generic_Style__f_cssName))
  } else {
    return false
  }
});
function $as_Lscalatags_generic_Style(obj) {
  return (((obj instanceof $c_Lscalatags_generic_Style) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Style"))
}
function $isArrayOf_Lscalatags_generic_Style(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Style)))
}
function $asArrayOf_Lscalatags_generic_Style(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Style(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Style;", depth))
}
var $d_Lscalatags_generic_Style = new $TypeData().initClass({
  Lscalatags_generic_Style: 0
}, false, "scalatags.generic.Style", {
  Lscalatags_generic_Style: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_Style.prototype.$classData = $d_Lscalatags_generic_Style;
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
/** @constructor */
function $c_Lobservatory_LayerName$Deviations$() {
  this.Lobservatory_LayerName__f_id = null;
  $ct_Lobservatory_LayerName__T__(this, "deviations")
}
$c_Lobservatory_LayerName$Deviations$.prototype = new $h_Lobservatory_LayerName();
$c_Lobservatory_LayerName$Deviations$.prototype.constructor = $c_Lobservatory_LayerName$Deviations$;
/** @constructor */
function $h_Lobservatory_LayerName$Deviations$() {
  /*<skip>*/
}
$h_Lobservatory_LayerName$Deviations$.prototype = $c_Lobservatory_LayerName$Deviations$.prototype;
$c_Lobservatory_LayerName$Deviations$.prototype.productPrefix__T = (function() {
  return "Deviations"
});
$c_Lobservatory_LayerName$Deviations$.prototype.productArity__I = (function() {
  return 0
});
$c_Lobservatory_LayerName$Deviations$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_Lobservatory_LayerName$Deviations$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lobservatory_LayerName$Deviations$.prototype.hashCode__I = (function() {
  return (-1563101134)
});
$c_Lobservatory_LayerName$Deviations$.prototype.toString__T = (function() {
  return "Deviations"
});
var $d_Lobservatory_LayerName$Deviations$ = new $TypeData().initClass({
  Lobservatory_LayerName$Deviations$: 0
}, false, "observatory.LayerName$Deviations$", {
  Lobservatory_LayerName$Deviations$: 1,
  Lobservatory_LayerName: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lobservatory_LayerName$Deviations$.prototype.$classData = $d_Lobservatory_LayerName$Deviations$;
var $n_Lobservatory_LayerName$Deviations$;
function $m_Lobservatory_LayerName$Deviations$() {
  if ((!$n_Lobservatory_LayerName$Deviations$)) {
    $n_Lobservatory_LayerName$Deviations$ = new $c_Lobservatory_LayerName$Deviations$()
  };
  return $n_Lobservatory_LayerName$Deviations$
}
/** @constructor */
function $c_Lobservatory_LayerName$Temperatures$() {
  this.Lobservatory_LayerName__f_id = null;
  $ct_Lobservatory_LayerName__T__(this, "temperatures")
}
$c_Lobservatory_LayerName$Temperatures$.prototype = new $h_Lobservatory_LayerName();
$c_Lobservatory_LayerName$Temperatures$.prototype.constructor = $c_Lobservatory_LayerName$Temperatures$;
/** @constructor */
function $h_Lobservatory_LayerName$Temperatures$() {
  /*<skip>*/
}
$h_Lobservatory_LayerName$Temperatures$.prototype = $c_Lobservatory_LayerName$Temperatures$.prototype;
$c_Lobservatory_LayerName$Temperatures$.prototype.productPrefix__T = (function() {
  return "Temperatures"
});
$c_Lobservatory_LayerName$Temperatures$.prototype.productArity__I = (function() {
  return 0
});
$c_Lobservatory_LayerName$Temperatures$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_Lobservatory_LayerName$Temperatures$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lobservatory_LayerName$Temperatures$.prototype.hashCode__I = (function() {
  return 1547124127
});
$c_Lobservatory_LayerName$Temperatures$.prototype.toString__T = (function() {
  return "Temperatures"
});
var $d_Lobservatory_LayerName$Temperatures$ = new $TypeData().initClass({
  Lobservatory_LayerName$Temperatures$: 0
}, false, "observatory.LayerName$Temperatures$", {
  Lobservatory_LayerName$Temperatures$: 1,
  Lobservatory_LayerName: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lobservatory_LayerName$Temperatures$.prototype.$classData = $d_Lobservatory_LayerName$Temperatures$;
var $n_Lobservatory_LayerName$Temperatures$;
function $m_Lobservatory_LayerName$Temperatures$() {
  if ((!$n_Lobservatory_LayerName$Temperatures$)) {
    $n_Lobservatory_LayerName$Temperatures$ = new $c_Lobservatory_LayerName$Temperatures$()
  };
  return $n_Lobservatory_LayerName$Temperatures$
}
/** @constructor */
function $c_s_None$() {
  /*<skip>*/
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
  /*<skip>*/
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.isEmpty__Z = (function() {
  return true
});
$c_s_None$.prototype.get__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get")
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None"
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880
});
$c_s_None$.prototype.toString__T = (function() {
  return "None"
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E()
});
var $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
  /*<skip>*/
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.isEmpty__Z = (function() {
  return false
});
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some"
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  if ((x$1 === 0)) {
    return this.s_Some__f_value
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
  }
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, Some$1.s_Some__f_value)
  } else {
    return false
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
var $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
/** @constructor */
function $c_T2(_1, _2) {
  this.T2__f__1 = null;
  this.T2__f__2 = null;
  this.T2__f__1 = _1;
  this.T2__f__2 = _2
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
  /*<skip>*/
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n)
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")")
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2"
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_T2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T2)) {
    var Tuple2$1 = $as_T2(x$1);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, Tuple2$1.T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, Tuple2$1.T2__f__2))
  } else {
    return false
  }
});
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
var $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
function $f_sc_GenMapLike__equals__O__Z($thiz, that) {
  if ($is_sc_GenMap(that)) {
    var x2 = $as_sc_GenMap(that);
    return $m_sc_GenMap$().mapEquals__sc_GenMapLike__sc_GenMap__Z($thiz, x2)
  } else {
    return false
  }
}
function $f_sc_GenSeqLike__equals__O__Z($thiz, that) {
  if ($is_sc_GenSeq(that)) {
    var x2 = $as_sc_GenSeq(that);
    return ((x2 === $thiz) || $thiz.sameElements__sc_GenIterable__Z(x2))
  } else {
    return false
  }
}
function $is_sc_GenTraversable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenTraversable)))
}
function $as_sc_GenTraversable(obj) {
  return (($is_sc_GenTraversable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenTraversable"))
}
function $isArrayOf_sc_GenTraversable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenTraversable)))
}
function $asArrayOf_sc_GenTraversable(obj, depth) {
  return (($isArrayOf_sc_GenTraversable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenTraversable;", depth))
}
/** @constructor */
function $c_scg_SeqFactory() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
}
$c_scg_SeqFactory.prototype = new $h_scg_GenSeqFactory();
$c_scg_SeqFactory.prototype.constructor = $c_scg_SeqFactory;
/** @constructor */
function $h_scg_SeqFactory() {
  /*<skip>*/
}
$h_scg_SeqFactory.prototype = $c_scg_SeqFactory.prototype;
/** @constructor */
function $c_sci_HashMap$HashTrieMap$$anon$7(outer) {
  this.sci_TrieIterator__f_elems = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null;
  $ct_sci_TrieIterator__Asci_Iterable__(this, outer.sci_HashMap$HashTrieMap__f_elems0)
}
$c_sci_HashMap$HashTrieMap$$anon$7.prototype = new $h_sci_TrieIterator();
$c_sci_HashMap$HashTrieMap$$anon$7.prototype.constructor = $c_sci_HashMap$HashTrieMap$$anon$7;
/** @constructor */
function $h_sci_HashMap$HashTrieMap$$anon$7() {
  /*<skip>*/
}
$h_sci_HashMap$HashTrieMap$$anon$7.prototype = $c_sci_HashMap$HashTrieMap$$anon$7.prototype;
$c_sci_HashMap$HashTrieMap$$anon$7.prototype.getElem__O__O = (function(x) {
  return $as_sci_HashMap$HashMap1(x).ensurePair__T2()
});
var $d_sci_HashMap$HashTrieMap$$anon$7 = new $TypeData().initClass({
  sci_HashMap$HashTrieMap$$anon$7: 0
}, false, "scala.collection.immutable.HashMap$HashTrieMap$$anon$7", {
  sci_HashMap$HashTrieMap$$anon$7: 1,
  sci_TrieIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_HashMap$HashTrieMap$$anon$7.prototype.$classData = $d_sci_HashMap$HashTrieMap$$anon$7;
/** @constructor */
function $c_sci_HashSet$HashTrieSet$$anon$1(outer) {
  this.sci_TrieIterator__f_elems = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null;
  $ct_sci_TrieIterator__Asci_Iterable__(this, outer.sci_HashSet$HashTrieSet__f_elems)
}
$c_sci_HashSet$HashTrieSet$$anon$1.prototype = new $h_sci_TrieIterator();
$c_sci_HashSet$HashTrieSet$$anon$1.prototype.constructor = $c_sci_HashSet$HashTrieSet$$anon$1;
/** @constructor */
function $h_sci_HashSet$HashTrieSet$$anon$1() {
  /*<skip>*/
}
$h_sci_HashSet$HashTrieSet$$anon$1.prototype = $c_sci_HashSet$HashTrieSet$$anon$1.prototype;
$c_sci_HashSet$HashTrieSet$$anon$1.prototype.getElem__O__O = (function(cc) {
  return $as_sci_HashSet$HashSet1(cc).sci_HashSet$HashSet1__f_key
});
var $d_sci_HashSet$HashTrieSet$$anon$1 = new $TypeData().initClass({
  sci_HashSet$HashTrieSet$$anon$1: 0
}, false, "scala.collection.immutable.HashSet$HashTrieSet$$anon$1", {
  sci_HashSet$HashTrieSet$$anon$1: 1,
  sci_TrieIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_HashSet$HashTrieSet$$anon$1.prototype.$classData = $d_sci_HashSet$HashTrieSet$$anon$1;
/** @constructor */
function $c_sci_ListMap$() {
  this.sci_ListMap$__f_ReusableCBF = null;
  $n_sci_ListMap$ = this;
  this.sci_ListMap$__f_ReusableCBF = new $c_scg_GenMapFactory$MapCanBuildFrom(this)
}
$c_sci_ListMap$.prototype = new $h_scg_ImmutableMapFactory();
$c_sci_ListMap$.prototype.constructor = $c_sci_ListMap$;
/** @constructor */
function $h_sci_ListMap$() {
  /*<skip>*/
}
$h_sci_ListMap$.prototype = $c_sci_ListMap$.prototype;
$c_sci_ListMap$.prototype.empty__sc_GenMap = (function() {
  return $m_sci_ListMap$EmptyListMap$()
});
var $d_sci_ListMap$ = new $TypeData().initClass({
  sci_ListMap$: 0
}, false, "scala.collection.immutable.ListMap$", {
  sci_ListMap$: 1,
  scg_ImmutableMapFactory: 1,
  scg_MapFactory: 1,
  scg_GenMapFactory: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListMap$.prototype.$classData = $d_sci_ListMap$;
var $n_sci_ListMap$;
function $m_sci_ListMap$() {
  if ((!$n_sci_ListMap$)) {
    $n_sci_ListMap$ = new $c_sci_ListMap$()
  };
  return $n_sci_ListMap$
}
/** @constructor */
function $c_sci_Set$() {
  this.sci_Set$__f_ReusableCBF = null;
  $n_sci_Set$ = this;
  this.sci_Set$__f_ReusableCBF = new $c_scg_GenSetFactory$$anon$1(this)
}
$c_sci_Set$.prototype = new $h_scg_ImmutableSetFactory();
$c_sci_Set$.prototype.constructor = $c_sci_Set$;
/** @constructor */
function $h_sci_Set$() {
  /*<skip>*/
}
$h_sci_Set$.prototype = $c_sci_Set$.prototype;
$c_sci_Set$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_Set$SetBuilderImpl()
});
$c_sci_Set$.prototype.emptyInstance__sci_Set = (function() {
  return $m_sci_Set$EmptySet$()
});
var $d_sci_Set$ = new $TypeData().initClass({
  sci_Set$: 0
}, false, "scala.collection.immutable.Set$", {
  sci_Set$: 1,
  scg_ImmutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Set$.prototype.$classData = $d_sci_Set$;
var $n_sci_Set$;
function $m_sci_Set$() {
  if ((!$n_sci_Set$)) {
    $n_sci_Set$ = new $c_sci_Set$()
  };
  return $n_sci_Set$
}
/** @constructor */
function $c_sci_Stream$StreamBuilder() {
  this.scm_LazyBuilder__f_parts = null;
  $ct_scm_LazyBuilder__(this)
}
$c_sci_Stream$StreamBuilder.prototype = new $h_scm_LazyBuilder();
$c_sci_Stream$StreamBuilder.prototype.constructor = $c_sci_Stream$StreamBuilder;
/** @constructor */
function $h_sci_Stream$StreamBuilder() {
  /*<skip>*/
}
$h_sci_Stream$StreamBuilder.prototype = $c_sci_Stream$StreamBuilder.prototype;
$c_sci_Stream$StreamBuilder.prototype.result__sci_Stream = (function() {
  var this$1 = this.scm_LazyBuilder__f_parts;
  return $as_sci_Stream(this$1.toList__sci_List().toStream__sci_Stream().flatMap__F1__scg_CanBuildFrom__O(new $c_sjsr_AnonFunction1(((this$2) => ((x$5$2) => {
    var x$5 = $as_sc_TraversableOnce(x$5$2);
    return x$5.toStream__sci_Stream()
  }))(this)), $m_sci_Stream$().sci_Stream$__f_ReusableCBF))
});
$c_sci_Stream$StreamBuilder.prototype.result__O = (function() {
  return this.result__sci_Stream()
});
function $as_sci_Stream$StreamBuilder(obj) {
  return (((obj instanceof $c_sci_Stream$StreamBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream$StreamBuilder"))
}
function $isArrayOf_sci_Stream$StreamBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream$StreamBuilder)))
}
function $asArrayOf_sci_Stream$StreamBuilder(obj, depth) {
  return (($isArrayOf_sci_Stream$StreamBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream$StreamBuilder;", depth))
}
var $d_sci_Stream$StreamBuilder = new $TypeData().initClass({
  sci_Stream$StreamBuilder: 0
}, false, "scala.collection.immutable.Stream$StreamBuilder", {
  sci_Stream$StreamBuilder: 1,
  scm_LazyBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_Stream$StreamBuilder.prototype.$classData = $d_sci_Stream$StreamBuilder;
/** @constructor */
function $c_sci_VectorBuilder() {
  this.sci_VectorBuilder__f_blockIndex = 0;
  this.sci_VectorBuilder__f_lo = 0;
  this.sci_VectorBuilder__f_depth = 0;
  this.sci_VectorBuilder__f_display0 = null;
  this.sci_VectorBuilder__f_display1 = null;
  this.sci_VectorBuilder__f_display2 = null;
  this.sci_VectorBuilder__f_display3 = null;
  this.sci_VectorBuilder__f_display4 = null;
  this.sci_VectorBuilder__f_display5 = null;
  this.sci_VectorBuilder__f_display0 = new $ac_O(32);
  this.sci_VectorBuilder__f_depth = 1;
  this.sci_VectorBuilder__f_blockIndex = 0;
  this.sci_VectorBuilder__f_lo = 0
}
$c_sci_VectorBuilder.prototype = new $h_O();
$c_sci_VectorBuilder.prototype.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
  /*<skip>*/
}
$h_sci_VectorBuilder.prototype = $c_sci_VectorBuilder.prototype;
$c_sci_VectorBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_VectorBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sci_VectorBuilder.prototype.depth__I = (function() {
  return this.sci_VectorBuilder__f_depth
});
$c_sci_VectorBuilder.prototype.depth_$eq__I__V = (function(x$1) {
  this.sci_VectorBuilder__f_depth = x$1
});
$c_sci_VectorBuilder.prototype.display0__AO = (function() {
  return this.sci_VectorBuilder__f_display0
});
$c_sci_VectorBuilder.prototype.display0_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display0 = x$1
});
$c_sci_VectorBuilder.prototype.display1__AO = (function() {
  return this.sci_VectorBuilder__f_display1
});
$c_sci_VectorBuilder.prototype.display1_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display1 = x$1
});
$c_sci_VectorBuilder.prototype.display2__AO = (function() {
  return this.sci_VectorBuilder__f_display2
});
$c_sci_VectorBuilder.prototype.display2_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display2 = x$1
});
$c_sci_VectorBuilder.prototype.display3__AO = (function() {
  return this.sci_VectorBuilder__f_display3
});
$c_sci_VectorBuilder.prototype.display3_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display3 = x$1
});
$c_sci_VectorBuilder.prototype.display4__AO = (function() {
  return this.sci_VectorBuilder__f_display4
});
$c_sci_VectorBuilder.prototype.display4_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display4 = x$1
});
$c_sci_VectorBuilder.prototype.display5__AO = (function() {
  return this.sci_VectorBuilder__f_display5
});
$c_sci_VectorBuilder.prototype.display5_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display5 = x$1
});
$c_sci_VectorBuilder.prototype.$plus$eq__O__sci_VectorBuilder = (function(elem) {
  if ((this.sci_VectorBuilder__f_lo >= this.sci_VectorBuilder__f_display0.u.length)) {
    var newBlockIndex = ((32 + this.sci_VectorBuilder__f_blockIndex) | 0);
    var xor = (this.sci_VectorBuilder__f_blockIndex ^ newBlockIndex);
    $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V(this, newBlockIndex, xor);
    this.sci_VectorBuilder__f_blockIndex = newBlockIndex;
    this.sci_VectorBuilder__f_lo = 0
  };
  this.sci_VectorBuilder__f_display0.set(this.sci_VectorBuilder__f_lo, elem);
  this.sci_VectorBuilder__f_lo = ((1 + this.sci_VectorBuilder__f_lo) | 0);
  return this
});
$c_sci_VectorBuilder.prototype.result__sci_Vector = (function() {
  var size = ((this.sci_VectorBuilder__f_blockIndex + this.sci_VectorBuilder__f_lo) | 0);
  if ((size === 0)) {
    var this$1 = $m_sci_Vector$();
    return this$1.sci_Vector$__f_NIL
  };
  var s = new $c_sci_Vector(0, size, 0);
  var depth = this.sci_VectorBuilder__f_depth;
  $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
  if ((this.sci_VectorBuilder__f_depth > 1)) {
    var xor = (((-1) + size) | 0);
    $f_sci_VectorPointer__gotoPos__I__I__V(s, 0, xor)
  };
  return s
});
$c_sci_VectorBuilder.prototype.result__O = (function() {
  return this.result__sci_Vector()
});
$c_sci_VectorBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $as_sci_VectorBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
});
$c_sci_VectorBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__sci_VectorBuilder(elem)
});
$c_sci_VectorBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__sci_VectorBuilder(elem)
});
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"))
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)))
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth))
}
var $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
/** @constructor */
function $c_sci_VectorIterator(_startIndex, endIndex) {
  this.sci_VectorIterator__f_endIndex = 0;
  this.sci_VectorIterator__f_blockIndex = 0;
  this.sci_VectorIterator__f_lo = 0;
  this.sci_VectorIterator__f_endLo = 0;
  this.sci_VectorIterator__f__hasNext = false;
  this.sci_VectorIterator__f_depth = 0;
  this.sci_VectorIterator__f_display0 = null;
  this.sci_VectorIterator__f_display1 = null;
  this.sci_VectorIterator__f_display2 = null;
  this.sci_VectorIterator__f_display3 = null;
  this.sci_VectorIterator__f_display4 = null;
  this.sci_VectorIterator__f_display5 = null;
  this.sci_VectorIterator__f_endIndex = endIndex;
  this.sci_VectorIterator__f_blockIndex = ((-32) & _startIndex);
  this.sci_VectorIterator__f_lo = (31 & _startIndex);
  var x = ((endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
  this.sci_VectorIterator__f_endLo = ((x < 32) ? x : 32);
  this.sci_VectorIterator__f__hasNext = (((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0) < endIndex)
}
$c_sci_VectorIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_VectorIterator.prototype.constructor = $c_sci_VectorIterator;
/** @constructor */
function $h_sci_VectorIterator() {
  /*<skip>*/
}
$h_sci_VectorIterator.prototype = $c_sci_VectorIterator.prototype;
$c_sci_VectorIterator.prototype.depth__I = (function() {
  return this.sci_VectorIterator__f_depth
});
$c_sci_VectorIterator.prototype.depth_$eq__I__V = (function(x$1) {
  this.sci_VectorIterator__f_depth = x$1
});
$c_sci_VectorIterator.prototype.display0__AO = (function() {
  return this.sci_VectorIterator__f_display0
});
$c_sci_VectorIterator.prototype.display0_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display0 = x$1
});
$c_sci_VectorIterator.prototype.display1__AO = (function() {
  return this.sci_VectorIterator__f_display1
});
$c_sci_VectorIterator.prototype.display1_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display1 = x$1
});
$c_sci_VectorIterator.prototype.display2__AO = (function() {
  return this.sci_VectorIterator__f_display2
});
$c_sci_VectorIterator.prototype.display2_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display2 = x$1
});
$c_sci_VectorIterator.prototype.display3__AO = (function() {
  return this.sci_VectorIterator__f_display3
});
$c_sci_VectorIterator.prototype.display3_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display3 = x$1
});
$c_sci_VectorIterator.prototype.display4__AO = (function() {
  return this.sci_VectorIterator__f_display4
});
$c_sci_VectorIterator.prototype.display4_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display4 = x$1
});
$c_sci_VectorIterator.prototype.display5__AO = (function() {
  return this.sci_VectorIterator__f_display5
});
$c_sci_VectorIterator.prototype.display5_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display5 = x$1
});
$c_sci_VectorIterator.prototype.hasNext__Z = (function() {
  return this.sci_VectorIterator__f__hasNext
});
$c_sci_VectorIterator.prototype.next__O = (function() {
  if ((!this.sci_VectorIterator__f__hasNext)) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "reached iterator end")
  };
  var res = this.sci_VectorIterator__f_display0.get(this.sci_VectorIterator__f_lo);
  this.sci_VectorIterator__f_lo = ((1 + this.sci_VectorIterator__f_lo) | 0);
  if ((this.sci_VectorIterator__f_lo === this.sci_VectorIterator__f_endLo)) {
    if ((((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0) < this.sci_VectorIterator__f_endIndex)) {
      var newBlockIndex = ((32 + this.sci_VectorIterator__f_blockIndex) | 0);
      var xor = (this.sci_VectorIterator__f_blockIndex ^ newBlockIndex);
      $f_sci_VectorPointer__gotoNextBlockStart__I__I__V(this, newBlockIndex, xor);
      this.sci_VectorIterator__f_blockIndex = newBlockIndex;
      var x = ((this.sci_VectorIterator__f_endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
      this.sci_VectorIterator__f_endLo = ((x < 32) ? x : 32);
      this.sci_VectorIterator__f_lo = 0
    } else {
      this.sci_VectorIterator__f__hasNext = false
    }
  };
  return res
});
var $d_sci_VectorIterator = new $TypeData().initClass({
  sci_VectorIterator: 0
}, false, "scala.collection.immutable.VectorIterator", {
  sci_VectorIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorIterator.prototype.$classData = $d_sci_VectorIterator;
function $f_s_math_Ordering__lteq__O__O__Z($thiz, x, y) {
  return ($thiz.compare__O__O__I(x, y) <= 0)
}
function $f_s_math_Ordering__gteq__O__O__Z($thiz, x, y) {
  return ($thiz.compare__O__O__I(x, y) >= 0)
}
/** @constructor */
function $c_Lscalatags_generic_AttrPair(a, v, ev) {
  this.Lscalatags_generic_AttrPair__f_a = null;
  this.Lscalatags_generic_AttrPair__f_v = null;
  this.Lscalatags_generic_AttrPair__f_ev = null;
  this.Lscalatags_generic_AttrPair__f_a = a;
  this.Lscalatags_generic_AttrPair__f_v = v;
  this.Lscalatags_generic_AttrPair__f_ev = ev
}
$c_Lscalatags_generic_AttrPair.prototype = new $h_O();
$c_Lscalatags_generic_AttrPair.prototype.constructor = $c_Lscalatags_generic_AttrPair;
/** @constructor */
function $h_Lscalatags_generic_AttrPair() {
  /*<skip>*/
}
$h_Lscalatags_generic_AttrPair.prototype = $c_Lscalatags_generic_AttrPair.prototype;
$c_Lscalatags_generic_AttrPair.prototype.applyTo__O__V = (function(t) {
  var this$1 = this.Lscalatags_generic_AttrPair__f_ev;
  var a = this.Lscalatags_generic_AttrPair__f_a;
  var v = this.Lscalatags_generic_AttrPair__f_v;
  this$1.apply__Lorg_scalajs_dom_raw_Element__Lscalatags_generic_Attr__O__V(t, a, v)
});
$c_Lscalatags_generic_AttrPair.prototype.productPrefix__T = (function() {
  return "AttrPair"
});
$c_Lscalatags_generic_AttrPair.prototype.productArity__I = (function() {
  return 3
});
$c_Lscalatags_generic_AttrPair.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lscalatags_generic_AttrPair__f_a;
      break
    }
    case 1: {
      return this.Lscalatags_generic_AttrPair__f_v;
      break
    }
    case 2: {
      return this.Lscalatags_generic_AttrPair__f_ev;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_Lscalatags_generic_AttrPair.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lscalatags_generic_AttrPair.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_Lscalatags_generic_AttrPair.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lscalatags_generic_AttrPair.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lscalatags_generic_AttrPair)) {
    var AttrPair$1 = $as_Lscalatags_generic_AttrPair(x$1);
    var x = this.Lscalatags_generic_AttrPair__f_a;
    var x$2 = AttrPair$1.Lscalatags_generic_AttrPair__f_a;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Lscalatags_generic_AttrPair__f_v;
      var y = AttrPair$1.Lscalatags_generic_AttrPair__f_v;
      var $$x1 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$3, y)
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$3$1 = this.Lscalatags_generic_AttrPair__f_ev;
      var x$4 = AttrPair$1.Lscalatags_generic_AttrPair__f_ev;
      return (x$3$1 === x$4)
    } else {
      return false
    }
  } else {
    return false
  }
});
function $as_Lscalatags_generic_AttrPair(obj) {
  return (((obj instanceof $c_Lscalatags_generic_AttrPair) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.AttrPair"))
}
function $isArrayOf_Lscalatags_generic_AttrPair(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_AttrPair)))
}
function $asArrayOf_Lscalatags_generic_AttrPair(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_AttrPair(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.AttrPair;", depth))
}
var $d_Lscalatags_generic_AttrPair = new $TypeData().initClass({
  Lscalatags_generic_AttrPair: 0
}, false, "scalatags.generic.AttrPair", {
  Lscalatags_generic_AttrPair: 1,
  O: 1,
  Lscalatags_generic_Modifier: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_AttrPair.prototype.$classData = $d_Lscalatags_generic_AttrPair;
/** @constructor */
function $c_Lscalatags_generic_StyleMisc$AutoStyle(outer, jsName, cssName) {
  this.Lscalatags_generic_Style__f_jsName = null;
  this.Lscalatags_generic_Style__f_cssName = null;
  this.Lscalatags_generic_StyleMisc$AutoStyle__f_auto = null;
  this.Lscalatags_generic_StyleMisc$AutoStyle__f_bitmap$0 = false;
  this.Lscalatags_generic_StyleMisc$AutoStyle__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.Lscalatags_generic_StyleMisc$AutoStyle__f_$outer = outer
  };
  $ct_Lscalatags_generic_Style__T__T__(this, jsName, cssName)
}
$c_Lscalatags_generic_StyleMisc$AutoStyle.prototype = new $h_Lscalatags_generic_Style();
$c_Lscalatags_generic_StyleMisc$AutoStyle.prototype.constructor = $c_Lscalatags_generic_StyleMisc$AutoStyle;
/** @constructor */
function $h_Lscalatags_generic_StyleMisc$AutoStyle() {
  /*<skip>*/
}
$h_Lscalatags_generic_StyleMisc$AutoStyle.prototype = $c_Lscalatags_generic_StyleMisc$AutoStyle.prototype;
var $d_Lscalatags_generic_StyleMisc$AutoStyle = new $TypeData().initClass({
  Lscalatags_generic_StyleMisc$AutoStyle: 0
}, false, "scalatags.generic.StyleMisc$AutoStyle", {
  Lscalatags_generic_StyleMisc$AutoStyle: 1,
  Lscalatags_generic_Style: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_StyleMisc$AutoStyle.prototype.$classData = $d_Lscalatags_generic_StyleMisc$AutoStyle;
/** @constructor */
function $c_Lscalatags_generic_StyleMisc$PixelAutoStyle(outer, jsName, cssName) {
  this.Lscalatags_generic_PixelStyle__f_jsName = null;
  this.Lscalatags_generic_PixelStyle__f_cssName = null;
  this.Lscalatags_generic_PixelStyle__f_realStyle = null;
  this.Lscalatags_generic_StyleMisc$PixelAutoStyle__f_auto = null;
  this.Lscalatags_generic_StyleMisc$PixelAutoStyle__f_bitmap$0 = false;
  this.Lscalatags_generic_StyleMisc$PixelAutoStyle__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.Lscalatags_generic_StyleMisc$PixelAutoStyle__f_$outer = outer
  };
  $ct_Lscalatags_generic_PixelStyle__T__T__(this, jsName, cssName)
}
$c_Lscalatags_generic_StyleMisc$PixelAutoStyle.prototype = new $h_Lscalatags_generic_PixelStyle();
$c_Lscalatags_generic_StyleMisc$PixelAutoStyle.prototype.constructor = $c_Lscalatags_generic_StyleMisc$PixelAutoStyle;
/** @constructor */
function $h_Lscalatags_generic_StyleMisc$PixelAutoStyle() {
  /*<skip>*/
}
$h_Lscalatags_generic_StyleMisc$PixelAutoStyle.prototype = $c_Lscalatags_generic_StyleMisc$PixelAutoStyle.prototype;
var $d_Lscalatags_generic_StyleMisc$PixelAutoStyle = new $TypeData().initClass({
  Lscalatags_generic_StyleMisc$PixelAutoStyle: 0
}, false, "scalatags.generic.StyleMisc$PixelAutoStyle", {
  Lscalatags_generic_StyleMisc$PixelAutoStyle: 1,
  Lscalatags_generic_PixelStyle: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_StyleMisc$PixelAutoStyle.prototype.$classData = $d_Lscalatags_generic_StyleMisc$PixelAutoStyle;
/** @constructor */
function $c_Lscalatags_generic_StylePair(s, v, ev) {
  this.Lscalatags_generic_StylePair__f_s = null;
  this.Lscalatags_generic_StylePair__f_v = null;
  this.Lscalatags_generic_StylePair__f_ev = null;
  this.Lscalatags_generic_StylePair__f_s = s;
  this.Lscalatags_generic_StylePair__f_v = v;
  this.Lscalatags_generic_StylePair__f_ev = ev
}
$c_Lscalatags_generic_StylePair.prototype = new $h_O();
$c_Lscalatags_generic_StylePair.prototype.constructor = $c_Lscalatags_generic_StylePair;
/** @constructor */
function $h_Lscalatags_generic_StylePair() {
  /*<skip>*/
}
$h_Lscalatags_generic_StylePair.prototype = $c_Lscalatags_generic_StylePair.prototype;
$c_Lscalatags_generic_StylePair.prototype.applyTo__O__V = (function(t) {
  var this$1 = this.Lscalatags_generic_StylePair__f_ev;
  var s = this.Lscalatags_generic_StylePair__f_s;
  var v = this.Lscalatags_generic_StylePair__f_v;
  this$1.apply__Lorg_scalajs_dom_raw_Element__Lscalatags_generic_Style__O__V(t, s, v)
});
$c_Lscalatags_generic_StylePair.prototype.productPrefix__T = (function() {
  return "StylePair"
});
$c_Lscalatags_generic_StylePair.prototype.productArity__I = (function() {
  return 3
});
$c_Lscalatags_generic_StylePair.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lscalatags_generic_StylePair__f_s;
      break
    }
    case 1: {
      return this.Lscalatags_generic_StylePair__f_v;
      break
    }
    case 2: {
      return this.Lscalatags_generic_StylePair__f_ev;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_Lscalatags_generic_StylePair.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lscalatags_generic_StylePair.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_Lscalatags_generic_StylePair.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lscalatags_generic_StylePair.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lscalatags_generic_StylePair)) {
    var StylePair$1 = $as_Lscalatags_generic_StylePair(x$1);
    var x = this.Lscalatags_generic_StylePair__f_s;
    var x$2 = StylePair$1.Lscalatags_generic_StylePair__f_s;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Lscalatags_generic_StylePair__f_v;
      var y = StylePair$1.Lscalatags_generic_StylePair__f_v;
      var $$x1 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$3, y)
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$3$1 = this.Lscalatags_generic_StylePair__f_ev;
      var x$4 = StylePair$1.Lscalatags_generic_StylePair__f_ev;
      return (x$3$1 === x$4)
    } else {
      return false
    }
  } else {
    return false
  }
});
function $as_Lscalatags_generic_StylePair(obj) {
  return (((obj instanceof $c_Lscalatags_generic_StylePair) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.StylePair"))
}
function $isArrayOf_Lscalatags_generic_StylePair(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_StylePair)))
}
function $asArrayOf_Lscalatags_generic_StylePair(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_StylePair(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.StylePair;", depth))
}
var $d_Lscalatags_generic_StylePair = new $TypeData().initClass({
  Lscalatags_generic_StylePair: 0
}, false, "scalatags.generic.StylePair", {
  Lscalatags_generic_StylePair: 1,
  O: 1,
  Lscalatags_generic_Modifier: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_StylePair.prototype.$classData = $d_Lscalatags_generic_StylePair;
function $p_Lscalatags_generic_Styles$display$__inline$minusblock$lzycompute__Lscalatags_generic_StylePair($thiz) {
  if (((16 & $thiz.Lscalatags_generic_Styles$display$__f_bitmap$0) === 0)) {
    $thiz.Lscalatags_generic_Styles$display$__f_inline$minusblock = $thiz.$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair("inline-block", new $c_Lscalatags_JsDom$GenericStyle());
    $thiz.Lscalatags_generic_Styles$display$__f_bitmap$0 = (16 | $thiz.Lscalatags_generic_Styles$display$__f_bitmap$0)
  };
  return $thiz.Lscalatags_generic_Styles$display$__f_inline$minusblock
}
/** @constructor */
function $c_Lscalatags_generic_Styles$display$(outer) {
  this.Lscalatags_generic_Style__f_jsName = null;
  this.Lscalatags_generic_Style__f_cssName = null;
  this.Lscalatags_generic_Styles$display$__f_none = null;
  this.Lscalatags_generic_Styles$display$__f_inline = null;
  this.Lscalatags_generic_Styles$display$__f_block = null;
  this.Lscalatags_generic_Styles$display$__f_list$minusitem = null;
  this.Lscalatags_generic_Styles$display$__f_inline$minusblock = null;
  this.Lscalatags_generic_Styles$display$__f_inline$minustable = null;
  this.Lscalatags_generic_Styles$display$__f_table = null;
  this.Lscalatags_generic_Styles$display$__f_table$minuscaption = null;
  this.Lscalatags_generic_Styles$display$__f_table$minuscell = null;
  this.Lscalatags_generic_Styles$display$__f_table$minuscolumn = null;
  this.Lscalatags_generic_Styles$display$__f_table$minuscolumn$minusgroup = null;
  this.Lscalatags_generic_Styles$display$__f_table$minusfooter$minusgroup = null;
  this.Lscalatags_generic_Styles$display$__f_table$minusheader$minusgroup = null;
  this.Lscalatags_generic_Styles$display$__f_table$minusrow = null;
  this.Lscalatags_generic_Styles$display$__f_table$minusrow$minusgroup = null;
  this.Lscalatags_generic_Styles$display$__f_flex = null;
  this.Lscalatags_generic_Styles$display$__f_inline$minusflex = null;
  this.Lscalatags_generic_Styles$display$__f_bitmap$0 = 0;
  this.Lscalatags_generic_Styles$display$__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.Lscalatags_generic_Styles$display$__f_$outer = outer
  };
  $ct_Lscalatags_generic_Style__T__T__(this, "display", "display")
}
$c_Lscalatags_generic_Styles$display$.prototype = new $h_Lscalatags_generic_Style();
$c_Lscalatags_generic_Styles$display$.prototype.constructor = $c_Lscalatags_generic_Styles$display$;
/** @constructor */
function $h_Lscalatags_generic_Styles$display$() {
  /*<skip>*/
}
$h_Lscalatags_generic_Styles$display$.prototype = $c_Lscalatags_generic_Styles$display$.prototype;
$c_Lscalatags_generic_Styles$display$.prototype.inline$minusblock__Lscalatags_generic_StylePair = (function() {
  return (((16 & this.Lscalatags_generic_Styles$display$__f_bitmap$0) === 0) ? $p_Lscalatags_generic_Styles$display$__inline$minusblock$lzycompute__Lscalatags_generic_StylePair(this) : this.Lscalatags_generic_Styles$display$__f_inline$minusblock)
});
var $d_Lscalatags_generic_Styles$display$ = new $TypeData().initClass({
  Lscalatags_generic_Styles$display$: 0
}, false, "scalatags.generic.Styles$display$", {
  Lscalatags_generic_Styles$display$: 1,
  Lscalatags_generic_Style: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_Styles$display$.prototype.$classData = $d_Lscalatags_generic_Styles$display$;
/** @constructor */
function $c_Lscalatags_generic_Styles$margin$(outer) {
  this.Lscalatags_generic_PixelStyle__f_jsName = null;
  this.Lscalatags_generic_PixelStyle__f_cssName = null;
  this.Lscalatags_generic_PixelStyle__f_realStyle = null;
  this.Lscalatags_generic_Styles$margin$__f_auto = null;
  this.Lscalatags_generic_Styles$margin$__f_bitmap$0 = false;
  this.Lscalatags_generic_Styles$margin$__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.Lscalatags_generic_Styles$margin$__f_$outer = outer
  };
  $ct_Lscalatags_generic_PixelStyle__T__T__(this, "margin", "margin")
}
$c_Lscalatags_generic_Styles$margin$.prototype = new $h_Lscalatags_generic_PixelStyle();
$c_Lscalatags_generic_Styles$margin$.prototype.constructor = $c_Lscalatags_generic_Styles$margin$;
/** @constructor */
function $h_Lscalatags_generic_Styles$margin$() {
  /*<skip>*/
}
$h_Lscalatags_generic_Styles$margin$.prototype = $c_Lscalatags_generic_Styles$margin$.prototype;
var $d_Lscalatags_generic_Styles$margin$ = new $TypeData().initClass({
  Lscalatags_generic_Styles$margin$: 0
}, false, "scalatags.generic.Styles$margin$", {
  Lscalatags_generic_Styles$margin$: 1,
  Lscalatags_generic_PixelStyle: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_Styles$margin$.prototype.$classData = $d_Lscalatags_generic_Styles$margin$;
function $p_Lscalatags_generic_Styles$position$__absolute$lzycompute__Lscalatags_generic_StylePair($thiz) {
  if (((((4 & $thiz.Lscalatags_generic_Styles$position$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.Lscalatags_generic_Styles$position$__f_absolute = $thiz.$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair("absolute", new $c_Lscalatags_JsDom$GenericStyle());
    $thiz.Lscalatags_generic_Styles$position$__f_bitmap$0 = (((4 | $thiz.Lscalatags_generic_Styles$position$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.Lscalatags_generic_Styles$position$__f_absolute
}
/** @constructor */
function $c_Lscalatags_generic_Styles$position$(outer) {
  this.Lscalatags_generic_Style__f_jsName = null;
  this.Lscalatags_generic_Style__f_cssName = null;
  this.Lscalatags_generic_Styles$position$__f_static = null;
  this.Lscalatags_generic_Styles$position$__f_relative = null;
  this.Lscalatags_generic_Styles$position$__f_absolute = null;
  this.Lscalatags_generic_Styles$position$__f_fixed = null;
  this.Lscalatags_generic_Styles$position$__f_bitmap$0 = 0;
  this.Lscalatags_generic_Styles$position$__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.Lscalatags_generic_Styles$position$__f_$outer = outer
  };
  $ct_Lscalatags_generic_Style__T__T__(this, "position", "position")
}
$c_Lscalatags_generic_Styles$position$.prototype = new $h_Lscalatags_generic_Style();
$c_Lscalatags_generic_Styles$position$.prototype.constructor = $c_Lscalatags_generic_Styles$position$;
/** @constructor */
function $h_Lscalatags_generic_Styles$position$() {
  /*<skip>*/
}
$h_Lscalatags_generic_Styles$position$.prototype = $c_Lscalatags_generic_Styles$position$.prototype;
$c_Lscalatags_generic_Styles$position$.prototype.absolute__Lscalatags_generic_StylePair = (function() {
  return (((((4 & this.Lscalatags_generic_Styles$position$__f_bitmap$0) << 24) >> 24) === 0) ? $p_Lscalatags_generic_Styles$position$__absolute$lzycompute__Lscalatags_generic_StylePair(this) : this.Lscalatags_generic_Styles$position$__f_absolute)
});
var $d_Lscalatags_generic_Styles$position$ = new $TypeData().initClass({
  Lscalatags_generic_Styles$position$: 0
}, false, "scalatags.generic.Styles$position$", {
  Lscalatags_generic_Styles$position$: 1,
  Lscalatags_generic_Style: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_Styles$position$.prototype.$classData = $d_Lscalatags_generic_Styles$position$;
function $f_sc_GenSetLike__equals__O__Z($thiz, that) {
  if ($is_sc_GenSet(that)) {
    var x2 = $as_sc_GenSet(that);
    return $m_sc_GenSet$().setEquals__sc_GenSetLike__sc_GenSet__Z($thiz, x2)
  } else {
    return false
  }
}
function $is_sc_GenSetLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSetLike)))
}
function $as_sc_GenSetLike(obj) {
  return (($is_sc_GenSetLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSetLike"))
}
function $isArrayOf_sc_GenSetLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSetLike)))
}
function $asArrayOf_sc_GenSetLike(obj, depth) {
  return (($isArrayOf_sc_GenSetLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSetLike;", depth))
}
/** @constructor */
function $c_sc_LinearSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sc_LinearSeq$.prototype = new $h_scg_SeqFactory();
$c_sc_LinearSeq$.prototype.constructor = $c_sc_LinearSeq$;
/** @constructor */
function $h_sc_LinearSeq$() {
  /*<skip>*/
}
$h_sc_LinearSeq$.prototype = $c_sc_LinearSeq$.prototype;
$c_sc_LinearSeq$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_LinearSeq$();
  return new $c_scm_ListBuffer()
});
var $d_sc_LinearSeq$ = new $TypeData().initClass({
  sc_LinearSeq$: 0
}, false, "scala.collection.LinearSeq$", {
  sc_LinearSeq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_LinearSeq$.prototype.$classData = $d_sc_LinearSeq$;
var $n_sc_LinearSeq$;
function $m_sc_LinearSeq$() {
  if ((!$n_sc_LinearSeq$)) {
    $n_sc_LinearSeq$ = new $c_sc_LinearSeq$()
  };
  return $n_sc_LinearSeq$
}
/** @constructor */
function $c_sc_Seq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sc_Seq$.prototype = new $h_scg_SeqFactory();
$c_sc_Seq$.prototype.constructor = $c_sc_Seq$;
/** @constructor */
function $h_sc_Seq$() {
  /*<skip>*/
}
$h_sc_Seq$.prototype = $c_sc_Seq$.prototype;
$c_sc_Seq$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Seq$();
  return new $c_scm_ListBuffer()
});
var $d_sc_Seq$ = new $TypeData().initClass({
  sc_Seq$: 0
}, false, "scala.collection.Seq$", {
  sc_Seq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Seq$.prototype.$classData = $d_sc_Seq$;
var $n_sc_Seq$;
function $m_sc_Seq$() {
  if ((!$n_sc_Seq$)) {
    $n_sc_Seq$ = new $c_sc_Seq$()
  };
  return $n_sc_Seq$
}
function $f_sc_TraversableLike__map__F1__scg_CanBuildFrom__O($thiz, f, bf) {
  var b = $p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder($thiz, bf);
  $thiz.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$1, b$1, f$1) => ((x$2) => b$1.$plus$eq__O__scm_Builder(f$1.apply__O__O(x$2))))($thiz, b, f)));
  return b.result__O()
}
function $f_sc_TraversableLike__flatMap__F1__scg_CanBuildFrom__O($thiz, f, bf) {
  var b = bf.apply__O__scm_Builder($thiz.repr__O());
  $thiz.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$1, b$1, f$1) => ((x$2) => $as_scm_Builder(b$1.$plus$plus$eq__sc_TraversableOnce__scg_Growable($as_sc_GenTraversableOnce(f$1.apply__O__O(x$2)).seq__sc_TraversableOnce()))))($thiz, b, f)));
  return b.result__O()
}
function $f_sc_TraversableLike__toString__T($thiz) {
  return $thiz.mkString__T__T__T__T(($thiz.stringPrefix__T() + "("), ", ", ")")
}
function $f_sc_TraversableLike__stringPrefix__T($thiz) {
  var this$1 = $thiz.repr__O();
  var fqn = $objectClassName(this$1);
  var pos = (((-1) + $uI(fqn.length)) | 0);
  while (true) {
    if ((pos !== (-1))) {
      var index = pos;
      var $$x1 = ((65535 & $uI(fqn.charCodeAt(index))) === 36)
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      pos = (((-1) + pos) | 0)
    } else {
      break
    }
  };
  if ((pos === (-1))) {
    var $$x2 = true
  } else {
    var index$1 = pos;
    var $$x2 = ((65535 & $uI(fqn.charCodeAt(index$1))) === 46)
  };
  if ($$x2) {
    return ""
  };
  var result = "";
  while (true) {
    var partEnd = ((1 + pos) | 0);
    while (true) {
      if ((pos !== (-1))) {
        var index$2 = pos;
        var $$x4 = ((65535 & $uI(fqn.charCodeAt(index$2))) <= 57)
      } else {
        var $$x4 = false
      };
      if ($$x4) {
        var index$3 = pos;
        var $$x3 = ((65535 & $uI(fqn.charCodeAt(index$3))) >= 48)
      } else {
        var $$x3 = false
      };
      if ($$x3) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    var lastNonDigit = pos;
    while (true) {
      if ((pos !== (-1))) {
        var index$4 = pos;
        var $$x6 = ((65535 & $uI(fqn.charCodeAt(index$4))) !== 36)
      } else {
        var $$x6 = false
      };
      if ($$x6) {
        var index$5 = pos;
        var $$x5 = ((65535 & $uI(fqn.charCodeAt(index$5))) !== 46)
      } else {
        var $$x5 = false
      };
      if ($$x5) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    var partStart = ((1 + pos) | 0);
    if (((pos === lastNonDigit) && (partEnd !== $uI(fqn.length)))) {
      return result
    };
    while (true) {
      if ((pos !== (-1))) {
        var index$6 = pos;
        var $$x7 = ((65535 & $uI(fqn.charCodeAt(index$6))) === 36)
      } else {
        var $$x7 = false
      };
      if ($$x7) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    if ((pos === (-1))) {
      var atEnd = true
    } else {
      var index$7 = pos;
      var atEnd = ((65535 & $uI(fqn.charCodeAt(index$7))) === 46)
    };
    if ((atEnd || (!$p_sc_TraversableLike__isPartLikelySynthetic$1__T__I__Z($thiz, fqn, partStart)))) {
      var part = $as_T(fqn.substring(partStart, partEnd));
      var this$2 = result;
      if ((this$2 === "")) {
        result = part
      } else {
        result = ((part + ".") + result)
      };
      if (atEnd) {
        return result
      }
    }
  }
}
function $p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder($thiz, bf$3) {
  var b = bf$3.apply__O__scm_Builder($thiz.repr__O());
  $f_scm_Builder__sizeHint__sc_TraversableLike__V(b, $thiz);
  return b
}
function $p_sc_TraversableLike__isPartLikelySynthetic$1__T__I__Z($thiz, fqn$1, partStart$1) {
  var firstChar = (65535 & $uI(fqn$1.charCodeAt(partStart$1)));
  return (((firstChar > 90) && (firstChar < 127)) || (firstChar < 65))
}
function $is_sc_TraversableLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_TraversableLike)))
}
function $as_sc_TraversableLike(obj) {
  return (($is_sc_TraversableLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.TraversableLike"))
}
function $isArrayOf_sc_TraversableLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_TraversableLike)))
}
function $asArrayOf_sc_TraversableLike(obj, depth) {
  return (($isArrayOf_sc_TraversableLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.TraversableLike;", depth))
}
/** @constructor */
function $c_scg_IndexedSeqFactory() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
}
$c_scg_IndexedSeqFactory.prototype = new $h_scg_SeqFactory();
$c_scg_IndexedSeqFactory.prototype.constructor = $c_scg_IndexedSeqFactory;
/** @constructor */
function $h_scg_IndexedSeqFactory() {
  /*<skip>*/
}
$h_scg_IndexedSeqFactory.prototype = $c_scg_IndexedSeqFactory.prototype;
function $p_sci_HashMap$__improve__I__I($thiz, hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0))
}
/** @constructor */
function $c_sci_HashMap$() {
  this.sci_HashMap$__f__defaultMerger = null;
  this.sci_HashMap$__f__concatMerger = null;
  this.sci_HashMap$__f_ReusableCBF = null;
  $n_sci_HashMap$ = this;
  this.sci_HashMap$__f__defaultMerger = new $c_sci_HashMap$$anon$1();
  this.sci_HashMap$__f__concatMerger = new $c_sci_HashMap$$anon$3();
  this.sci_HashMap$__f_ReusableCBF = new $c_scg_GenMapFactory$MapCanBuildFrom(this)
}
$c_sci_HashMap$.prototype = new $h_scg_ImmutableMapFactory();
$c_sci_HashMap$.prototype.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
  /*<skip>*/
}
$h_sci_HashMap$.prototype = $c_sci_HashMap$.prototype;
$c_sci_HashMap$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_HashMap$HashMapBuilder()
});
$c_sci_HashMap$.prototype.scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap = (function(hash0, elem0, hash1, elem1, level, size) {
  var index0 = (31 & ((hash0 >>> level) | 0));
  var index1 = (31 & ((hash1 >>> level) | 0));
  if ((index0 !== index1)) {
    var bitmap = ((1 << index0) | (1 << index1));
    var elems = new ($d_sci_HashMap.getArrayOf().constr)(2);
    if ((index0 < index1)) {
      elems.set(0, elem0);
      elems.set(1, elem1)
    } else {
      elems.set(0, elem1);
      elems.set(1, elem0)
    };
    return new $c_sci_HashMap$HashTrieMap(bitmap, elems, size)
  } else {
    var elems$2 = new ($d_sci_HashMap.getArrayOf().constr)(1);
    var bitmap$2 = (1 << index0);
    elems$2.set(0, this.scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(hash0, elem0, hash1, elem1, ((5 + level) | 0), size));
    return new $c_sci_HashMap$HashTrieMap(bitmap$2, elems$2, size)
  }
});
$c_sci_HashMap$.prototype.scala$collection$immutable$HashMap$$computeHashImpl__O__I = (function(key) {
  return $p_sci_HashMap$__improve__I__I(this, $m_sr_Statics$().anyHash__O__I(key))
});
$c_sci_HashMap$.prototype.empty__sc_GenMap = (function() {
  return $m_sci_HashMap$EmptyHashMap$()
});
var $d_sci_HashMap$ = new $TypeData().initClass({
  sci_HashMap$: 0
}, false, "scala.collection.immutable.HashMap$", {
  sci_HashMap$: 1,
  scg_ImmutableMapFactory: 1,
  scg_MapFactory: 1,
  scg_GenMapFactory: 1,
  O: 1,
  scg_BitOperations$Int: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashMap$.prototype.$classData = $d_sci_HashMap$;
var $n_sci_HashMap$;
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$()
  };
  return $n_sci_HashMap$
}
/** @constructor */
function $c_sci_LinearSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_LinearSeq$.prototype = new $h_scg_SeqFactory();
$c_sci_LinearSeq$.prototype.constructor = $c_sci_LinearSeq$;
/** @constructor */
function $h_sci_LinearSeq$() {
  /*<skip>*/
}
$h_sci_LinearSeq$.prototype = $c_sci_LinearSeq$.prototype;
$c_sci_LinearSeq$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_LinearSeq$ = new $TypeData().initClass({
  sci_LinearSeq$: 0
}, false, "scala.collection.immutable.LinearSeq$", {
  sci_LinearSeq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_LinearSeq$.prototype.$classData = $d_sci_LinearSeq$;
var $n_sci_LinearSeq$;
function $m_sci_LinearSeq$() {
  if ((!$n_sci_LinearSeq$)) {
    $n_sci_LinearSeq$ = new $c_sci_LinearSeq$()
  };
  return $n_sci_LinearSeq$
}
function $ct_sci_Map$MapNIterator__($thiz) {
  $thiz.sci_Map$MapNIterator__f_current = 0;
  return $thiz
}
/** @constructor */
function $c_sci_Map$MapNIterator() {
  this.sci_Map$MapNIterator__f_current = 0
}
$c_sci_Map$MapNIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_Map$MapNIterator.prototype.constructor = $c_sci_Map$MapNIterator;
/** @constructor */
function $h_sci_Map$MapNIterator() {
  /*<skip>*/
}
$h_sci_Map$MapNIterator.prototype = $c_sci_Map$MapNIterator.prototype;
$c_sci_Map$MapNIterator.prototype.hasNext__Z = (function() {
  return (this.sci_Map$MapNIterator__f_current < this.size__I())
});
$c_sci_Map$MapNIterator.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var i = this.sci_Map$MapNIterator__f_current;
    var r = this.apply__I__T2(i);
    this.sci_Map$MapNIterator__f_current = ((1 + this.sci_Map$MapNIterator__f_current) | 0);
    return r
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  }
});
/** @constructor */
function $c_sci_Seq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_Seq$.prototype = new $h_scg_SeqFactory();
$c_sci_Seq$.prototype.constructor = $c_sci_Seq$;
/** @constructor */
function $h_sci_Seq$() {
  /*<skip>*/
}
$h_sci_Seq$.prototype = $c_sci_Seq$.prototype;
$c_sci_Seq$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
var $n_sci_Seq$;
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
function $ct_sci_Set$SetNIterator__I__($thiz, n) {
  $thiz.sci_Set$SetNIterator__f_current = 0;
  $thiz.sci_Set$SetNIterator__f_remainder = n;
  return $thiz
}
/** @constructor */
function $c_sci_Set$SetNIterator() {
  this.sci_Set$SetNIterator__f_current = 0;
  this.sci_Set$SetNIterator__f_remainder = 0
}
$c_sci_Set$SetNIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_Set$SetNIterator.prototype.constructor = $c_sci_Set$SetNIterator;
/** @constructor */
function $h_sci_Set$SetNIterator() {
  /*<skip>*/
}
$h_sci_Set$SetNIterator.prototype = $c_sci_Set$SetNIterator.prototype;
$c_sci_Set$SetNIterator.prototype.hasNext__Z = (function() {
  return (this.sci_Set$SetNIterator__f_remainder > 0)
});
$c_sci_Set$SetNIterator.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var r = this.apply__I__O(this.sci_Set$SetNIterator__f_current);
    this.sci_Set$SetNIterator__f_current = ((1 + this.sci_Set$SetNIterator__f_current) | 0);
    this.sci_Set$SetNIterator__f_remainder = (((-1) + this.sci_Set$SetNIterator__f_remainder) | 0);
    return r
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  }
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_IndexedSeq$.prototype = new $h_scg_SeqFactory();
$c_scm_IndexedSeq$.prototype.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
  /*<skip>*/
}
$h_scm_IndexedSeq$.prototype = $c_scm_IndexedSeq$.prototype;
$c_scm_IndexedSeq$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())
});
var $d_scm_IndexedSeq$ = new $TypeData().initClass({
  scm_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", {
  scm_IndexedSeq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_scm_IndexedSeq$.prototype.$classData = $d_scm_IndexedSeq$;
var $n_scm_IndexedSeq$;
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$()
  };
  return $n_scm_IndexedSeq$
}
/** @constructor */
function $c_s_math_Ordering$Reverse(outer) {
  this.s_math_Ordering$Reverse__f_outer = null;
  this.s_math_Ordering$Reverse__f_outer = outer
}
$c_s_math_Ordering$Reverse.prototype = new $h_O();
$c_s_math_Ordering$Reverse.prototype.constructor = $c_s_math_Ordering$Reverse;
/** @constructor */
function $h_s_math_Ordering$Reverse() {
  /*<skip>*/
}
$h_s_math_Ordering$Reverse.prototype = $c_s_math_Ordering$Reverse.prototype;
$c_s_math_Ordering$Reverse.prototype.compare__O__O__I = (function(x, y) {
  return this.s_math_Ordering$Reverse__f_outer.compare__O__O__I(y, x)
});
$c_s_math_Ordering$Reverse.prototype.lteq__O__O__Z = (function(x, y) {
  return this.s_math_Ordering$Reverse__f_outer.lteq__O__O__Z(y, x)
});
$c_s_math_Ordering$Reverse.prototype.gteq__O__O__Z = (function(x, y) {
  return this.s_math_Ordering$Reverse__f_outer.gteq__O__O__Z(y, x)
});
$c_s_math_Ordering$Reverse.prototype.equals__O__Z = (function(obj) {
  if ((obj !== null)) {
    if ((this === obj)) {
      return true
    }
  };
  if ((obj instanceof $c_s_math_Ordering$Reverse)) {
    var x3 = $as_s_math_Ordering$Reverse(obj);
    var x = this.s_math_Ordering$Reverse__f_outer;
    var x$2 = x3.s_math_Ordering$Reverse__f_outer;
    return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
  };
  return false
});
$c_s_math_Ordering$Reverse.prototype.hashCode__I = (function() {
  return $imul(41, this.s_math_Ordering$Reverse__f_outer.hashCode__I())
});
function $as_s_math_Ordering$Reverse(obj) {
  return (((obj instanceof $c_s_math_Ordering$Reverse) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.Ordering$Reverse"))
}
function $isArrayOf_s_math_Ordering$Reverse(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_Ordering$Reverse)))
}
function $asArrayOf_s_math_Ordering$Reverse(obj, depth) {
  return (($isArrayOf_s_math_Ordering$Reverse(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.Ordering$Reverse;", depth))
}
var $d_s_math_Ordering$Reverse = new $TypeData().initClass({
  s_math_Ordering$Reverse: 0
}, false, "scala.math.Ordering$Reverse", {
  s_math_Ordering$Reverse: 1,
  O: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$Reverse.prototype.$classData = $d_s_math_Ordering$Reverse;
/** @constructor */
function $c_sjs_js_WrappedArray$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sjs_js_WrappedArray$.prototype = new $h_scg_SeqFactory();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray())
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
function $p_Lscalatags_JsDom$styles$__backgroundColor$lzycompute__Lscalatags_generic_Style($thiz) {
  var b = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
  var lo = (8 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lscalatags_JsDom$styles$__f_backgroundColor = $ct_Lscalatags_generic_Style__T__T__(new $c_Lscalatags_generic_Style(), "backgroundColor", "background-color");
    var b$1 = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
    var lo$1 = (8 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$styles$__f_bitmap$0 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$styles$__f_backgroundColor
}
function $p_Lscalatags_JsDom$styles$__border$lzycompute__Lscalatags_generic_Style($thiz) {
  var b = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
  var lo = (16384 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lscalatags_JsDom$styles$__f_border = $ct_Lscalatags_generic_Style__T__T__(new $c_Lscalatags_generic_Style(), "border", "border");
    var b$1 = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
    var lo$1 = (16384 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$styles$__f_bitmap$0 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$styles$__f_border
}
function $p_Lscalatags_JsDom$styles$__height$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz) {
  var b = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (1 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$styles$__f_height = new $c_Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz, "height", "height");
    var b$1 = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (1 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$styles$__f_bitmap$0 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$styles$__f_height
}
function $p_Lscalatags_JsDom$styles$__right$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz) {
  var b = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (64 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$styles$__f_right = new $c_Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz, "right", "right");
    var b$1 = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (64 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$styles$__f_bitmap$0 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$styles$__f_right
}
function $p_Lscalatags_JsDom$styles$__left$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz) {
  var b = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (256 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$styles$__f_left = new $c_Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz, "left", "left");
    var b$1 = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (256 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$styles$__f_bitmap$0 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$styles$__f_left
}
function $p_Lscalatags_JsDom$styles$__marginLeft$lzycompute__Lscalatags_generic_StyleMisc$MarginAuto($thiz) {
  var b = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (524288 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$styles$__f_marginLeft = new $c_Lscalatags_generic_Styles$$anon$3($thiz);
    var b$1 = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (524288 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$styles$__f_bitmap$0 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$styles$__f_marginLeft
}
function $p_Lscalatags_JsDom$styles$__top$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz) {
  var b = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (1048576 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$styles$__f_top = new $c_Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz, "top", "top");
    var b$1 = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (1048576 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$styles$__f_bitmap$0 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$styles$__f_top
}
function $p_Lscalatags_JsDom$styles$__width$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz) {
  var b = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (2097152 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$styles$__f_width = new $c_Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz, "width", "width");
    var b$1 = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (2097152 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$styles$__f_bitmap$0 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$styles$__f_width
}
function $p_Lscalatags_JsDom$styles$__bottom$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz) {
  var b = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (4194304 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$styles$__f_bottom = new $c_Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz, "bottom", "bottom");
    var b$1 = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (4194304 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$styles$__f_bitmap$0 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$styles$__f_bottom
}
function $p_Lscalatags_JsDom$styles$__textAlign$lzycompute__Lscalatags_generic_Styles$TextAlign($thiz) {
  var b = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = ((-2147483648) & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$styles$__f_textAlign = new $c_Lscalatags_generic_Styles$$anon$5($thiz);
    var b$1 = $thiz.Lscalatags_JsDom$styles$__f_bitmap$0;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = ((-2147483648) | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$styles$__f_bitmap$0 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$styles$__f_textAlign
}
function $p_Lscalatags_JsDom$styles$__zIndex$lzycompute__Lscalatags_generic_StyleMisc$AutoStyle($thiz) {
  var b = $thiz.Lscalatags_JsDom$styles$__f_bitmap$1;
  var lo = (256 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lscalatags_JsDom$styles$__f_zIndex = new $c_Lscalatags_generic_StyleMisc$AutoStyle($thiz, "zIndex", "z-index");
    var b$1 = $thiz.Lscalatags_JsDom$styles$__f_bitmap$1;
    var lo$1 = (256 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$styles$__f_bitmap$1 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$styles$__f_zIndex
}
function $p_Lscalatags_JsDom$styles$__display$lzycompute$1__V($thiz) {
  if (($m_Lscalatags_JsDom$styles$().Lscalatags_JsDom$styles$__f_display$module === null)) {
    $m_Lscalatags_JsDom$styles$().Lscalatags_JsDom$styles$__f_display$module = new $c_Lscalatags_generic_Styles$display$($thiz)
  }
}
function $p_Lscalatags_JsDom$styles$__position$lzycompute$1__V($thiz) {
  if (($m_Lscalatags_JsDom$styles$().Lscalatags_JsDom$styles$__f_position$module === null)) {
    $m_Lscalatags_JsDom$styles$().Lscalatags_JsDom$styles$__f_position$module = new $c_Lscalatags_generic_Styles$position$($thiz)
  }
}
function $p_Lscalatags_JsDom$styles$__margin$lzycompute$1__V($thiz) {
  if (($m_Lscalatags_JsDom$styles$().Lscalatags_JsDom$styles$__f_margin$module === null)) {
    $m_Lscalatags_JsDom$styles$().Lscalatags_JsDom$styles$__f_margin$module = new $c_Lscalatags_generic_Styles$margin$($thiz)
  }
}
/** @constructor */
function $c_Lscalatags_JsDom$styles$() {
  this.Lscalatags_JsDom$styles$__f_backgroundAttachment$module = null;
  this.Lscalatags_JsDom$styles$__f_background = null;
  this.Lscalatags_JsDom$styles$__f_backgroundRepeat = null;
  this.Lscalatags_JsDom$styles$__f_backgroundPosition = null;
  this.Lscalatags_JsDom$styles$__f_backgroundColor = null;
  this.Lscalatags_JsDom$styles$__f_backgroundOrigin$module = null;
  this.Lscalatags_JsDom$styles$__f_backgroundClip$module = null;
  this.Lscalatags_JsDom$styles$__f_backgroundSize$module = null;
  this.Lscalatags_JsDom$styles$__f_backgroundImage = null;
  this.Lscalatags_JsDom$styles$__f_borderTopColor = null;
  this.Lscalatags_JsDom$styles$__f_borderStyle = null;
  this.Lscalatags_JsDom$styles$__f_borderTopStyle = null;
  this.Lscalatags_JsDom$styles$__f_borderRightStyle = null;
  this.Lscalatags_JsDom$styles$__f_borderRightWidth = null;
  this.Lscalatags_JsDom$styles$__f_borderTopRightRadius = null;
  this.Lscalatags_JsDom$styles$__f_borderBottomLeftRadius = null;
  this.Lscalatags_JsDom$styles$__f_borderRightColor = null;
  this.Lscalatags_JsDom$styles$__f_borderBottom = null;
  this.Lscalatags_JsDom$styles$__f_border = null;
  this.Lscalatags_JsDom$styles$__f_borderBottomWidth = null;
  this.Lscalatags_JsDom$styles$__f_borderLeftColor = null;
  this.Lscalatags_JsDom$styles$__f_borderBottomColor = null;
  this.Lscalatags_JsDom$styles$__f_borderCollapse$module = null;
  this.Lscalatags_JsDom$styles$__f_borderLeft = null;
  this.Lscalatags_JsDom$styles$__f_borderLeftStyle = null;
  this.Lscalatags_JsDom$styles$__f_borderRight = null;
  this.Lscalatags_JsDom$styles$__f_borderBottomStyle = null;
  this.Lscalatags_JsDom$styles$__f_borderLeftWidth = null;
  this.Lscalatags_JsDom$styles$__f_borderTopWidth = null;
  this.Lscalatags_JsDom$styles$__f_borderTop = null;
  this.Lscalatags_JsDom$styles$__f_borderSpacing$module = null;
  this.Lscalatags_JsDom$styles$__f_borderRadius = null;
  this.Lscalatags_JsDom$styles$__f_borderWidth = null;
  this.Lscalatags_JsDom$styles$__f_borderBottomRightRadius = null;
  this.Lscalatags_JsDom$styles$__f_borderTopLeftRadius = null;
  this.Lscalatags_JsDom$styles$__f_borderColor = null;
  this.Lscalatags_JsDom$styles$__f_boxSizing$module = null;
  this.Lscalatags_JsDom$styles$__f_color$module = null;
  this.Lscalatags_JsDom$styles$__f_clip$module = null;
  this.Lscalatags_JsDom$styles$__f_cursor$module = null;
  this.Lscalatags_JsDom$styles$__f_float$module = null;
  this.Lscalatags_JsDom$styles$__f_direction$module = null;
  this.Lscalatags_JsDom$styles$__f_display$module = null;
  this.Lscalatags_JsDom$styles$__f_pointerEvents$module = null;
  this.Lscalatags_JsDom$styles$__f_listStyleImage$module = null;
  this.Lscalatags_JsDom$styles$__f_listStylePosition$module = null;
  this.Lscalatags_JsDom$styles$__f_wordWrap$module = null;
  this.Lscalatags_JsDom$styles$__f_opacity = null;
  this.Lscalatags_JsDom$styles$__f_maxWidth = null;
  this.Lscalatags_JsDom$styles$__f_verticalAlign$module = null;
  this.Lscalatags_JsDom$styles$__f_overflow$module = null;
  this.Lscalatags_JsDom$styles$__f_mask$module = null;
  this.Lscalatags_JsDom$styles$__f_emptyCells$module = null;
  this.Lscalatags_JsDom$styles$__f_height = null;
  this.Lscalatags_JsDom$styles$__f_paddingRight = null;
  this.Lscalatags_JsDom$styles$__f_paddingTop = null;
  this.Lscalatags_JsDom$styles$__f_paddingLeft = null;
  this.Lscalatags_JsDom$styles$__f_padding = null;
  this.Lscalatags_JsDom$styles$__f_paddingBottom = null;
  this.Lscalatags_JsDom$styles$__f_right = null;
  this.Lscalatags_JsDom$styles$__f_lineHeight = null;
  this.Lscalatags_JsDom$styles$__f_left = null;
  this.Lscalatags_JsDom$styles$__f_listStyleType$module = null;
  this.Lscalatags_JsDom$styles$__f_listStyle = null;
  this.Lscalatags_JsDom$styles$__f_overflowY = null;
  this.Lscalatags_JsDom$styles$__f_captionSide$module = null;
  this.Lscalatags_JsDom$styles$__f_boxShadow = null;
  this.Lscalatags_JsDom$styles$__f_position$module = null;
  this.Lscalatags_JsDom$styles$__f_quotes$module = null;
  this.Lscalatags_JsDom$styles$__f_tableLayout$module = null;
  this.Lscalatags_JsDom$styles$__f_fontSize$module = null;
  this.Lscalatags_JsDom$styles$__f_fontSizeAdjust = null;
  this.Lscalatags_JsDom$styles$__f_fontFamily = null;
  this.Lscalatags_JsDom$styles$__f_fontWeight$module = null;
  this.Lscalatags_JsDom$styles$__f_font = null;
  this.Lscalatags_JsDom$styles$__f_fontFeatureSettings = null;
  this.Lscalatags_JsDom$styles$__f_fontStyle$module = null;
  this.Lscalatags_JsDom$styles$__f_clear$module = null;
  this.Lscalatags_JsDom$styles$__f_marginBottom = null;
  this.Lscalatags_JsDom$styles$__f_marginRight = null;
  this.Lscalatags_JsDom$styles$__f_marginTop = null;
  this.Lscalatags_JsDom$styles$__f_marginLeft = null;
  this.Lscalatags_JsDom$styles$__f_margin$module = null;
  this.Lscalatags_JsDom$styles$__f_top = null;
  this.Lscalatags_JsDom$styles$__f_width = null;
  this.Lscalatags_JsDom$styles$__f_bottom = null;
  this.Lscalatags_JsDom$styles$__f_letterSpacing = null;
  this.Lscalatags_JsDom$styles$__f_maxHeight = null;
  this.Lscalatags_JsDom$styles$__f_minWidth = null;
  this.Lscalatags_JsDom$styles$__f_minHeight = null;
  this.Lscalatags_JsDom$styles$__f_outline = null;
  this.Lscalatags_JsDom$styles$__f_outlineStyle = null;
  this.Lscalatags_JsDom$styles$__f_outlineWidth$module = null;
  this.Lscalatags_JsDom$styles$__f_outlineColor$module = null;
  this.Lscalatags_JsDom$styles$__f_overflowX = null;
  this.Lscalatags_JsDom$styles$__f_textAlignLast = null;
  this.Lscalatags_JsDom$styles$__f_textAlign = null;
  this.Lscalatags_JsDom$styles$__f_textDecoration$module = null;
  this.Lscalatags_JsDom$styles$__f_textIndent = null;
  this.Lscalatags_JsDom$styles$__f_textOverflow$module = null;
  this.Lscalatags_JsDom$styles$__f_textUnderlinePosition$module = null;
  this.Lscalatags_JsDom$styles$__f_textTransform$module = null;
  this.Lscalatags_JsDom$styles$__f_textShadow = null;
  this.Lscalatags_JsDom$styles$__f_transitionDelay = null;
  this.Lscalatags_JsDom$styles$__f_transition = null;
  this.Lscalatags_JsDom$styles$__f_transitionTimingFunction = null;
  this.Lscalatags_JsDom$styles$__f_transitionDuration = null;
  this.Lscalatags_JsDom$styles$__f_transitionProperty = null;
  this.Lscalatags_JsDom$styles$__f_visibility$module = null;
  this.Lscalatags_JsDom$styles$__f_whiteSpace$module = null;
  this.Lscalatags_JsDom$styles$__f_wordSpacing = null;
  this.Lscalatags_JsDom$styles$__f_zIndex = null;
  this.Lscalatags_JsDom$styles$__f_flex = null;
  this.Lscalatags_JsDom$styles$__f_flexBasis = null;
  this.Lscalatags_JsDom$styles$__f_flexGrow = null;
  this.Lscalatags_JsDom$styles$__f_flexShrink = null;
  this.Lscalatags_JsDom$styles$__f_alignContent$module = null;
  this.Lscalatags_JsDom$styles$__f_alignSelf$module = null;
  this.Lscalatags_JsDom$styles$__f_flexWrap$module = null;
  this.Lscalatags_JsDom$styles$__f_alignItems$module = null;
  this.Lscalatags_JsDom$styles$__f_justifyContent$module = null;
  this.Lscalatags_JsDom$styles$__f_flexDirection$module = null;
  this.Lscalatags_JsDom$styles$__f_bitmap$0 = $L0;
  this.Lscalatags_JsDom$styles$__f_bitmap$1 = $L0
}
$c_Lscalatags_JsDom$styles$.prototype = new $h_O();
$c_Lscalatags_JsDom$styles$.prototype.constructor = $c_Lscalatags_JsDom$styles$;
/** @constructor */
function $h_Lscalatags_JsDom$styles$() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$styles$.prototype = $c_Lscalatags_JsDom$styles$.prototype;
$c_Lscalatags_JsDom$styles$.prototype.backgroundColor__Lscalatags_generic_Style = (function() {
  var b = this.Lscalatags_JsDom$styles$__f_bitmap$0;
  var lo = (8 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lscalatags_JsDom$styles$__backgroundColor$lzycompute__Lscalatags_generic_Style(this)
  } else {
    return this.Lscalatags_JsDom$styles$__f_backgroundColor
  }
});
$c_Lscalatags_JsDom$styles$.prototype.border__Lscalatags_generic_Style = (function() {
  var b = this.Lscalatags_JsDom$styles$__f_bitmap$0;
  var lo = (16384 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lscalatags_JsDom$styles$__border$lzycompute__Lscalatags_generic_Style(this)
  } else {
    return this.Lscalatags_JsDom$styles$__f_border
  }
});
$c_Lscalatags_JsDom$styles$.prototype.display__Lscalatags_generic_Styles$display$ = (function() {
  if (($m_Lscalatags_JsDom$styles$().Lscalatags_JsDom$styles$__f_display$module === null)) {
    $p_Lscalatags_JsDom$styles$__display$lzycompute$1__V(this)
  };
  return $m_Lscalatags_JsDom$styles$().Lscalatags_JsDom$styles$__f_display$module
});
$c_Lscalatags_JsDom$styles$.prototype.height__Lscalatags_generic_StyleMisc$PixelAutoStyle = (function() {
  var b = this.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (1 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$styles$__height$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle(this)
  } else {
    return this.Lscalatags_JsDom$styles$__f_height
  }
});
$c_Lscalatags_JsDom$styles$.prototype.right__Lscalatags_generic_StyleMisc$PixelAutoStyle = (function() {
  var b = this.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (64 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$styles$__right$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle(this)
  } else {
    return this.Lscalatags_JsDom$styles$__f_right
  }
});
$c_Lscalatags_JsDom$styles$.prototype.left__Lscalatags_generic_StyleMisc$PixelAutoStyle = (function() {
  var b = this.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (256 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$styles$__left$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle(this)
  } else {
    return this.Lscalatags_JsDom$styles$__f_left
  }
});
$c_Lscalatags_JsDom$styles$.prototype.position__Lscalatags_generic_Styles$position$ = (function() {
  if (($m_Lscalatags_JsDom$styles$().Lscalatags_JsDom$styles$__f_position$module === null)) {
    $p_Lscalatags_JsDom$styles$__position$lzycompute$1__V(this)
  };
  return $m_Lscalatags_JsDom$styles$().Lscalatags_JsDom$styles$__f_position$module
});
$c_Lscalatags_JsDom$styles$.prototype.marginLeft__Lscalatags_generic_StyleMisc$MarginAuto = (function() {
  var b = this.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (524288 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$styles$__marginLeft$lzycompute__Lscalatags_generic_StyleMisc$MarginAuto(this)
  } else {
    return this.Lscalatags_JsDom$styles$__f_marginLeft
  }
});
$c_Lscalatags_JsDom$styles$.prototype.margin__Lscalatags_generic_Styles$margin$ = (function() {
  if (($m_Lscalatags_JsDom$styles$().Lscalatags_JsDom$styles$__f_margin$module === null)) {
    $p_Lscalatags_JsDom$styles$__margin$lzycompute$1__V(this)
  };
  return $m_Lscalatags_JsDom$styles$().Lscalatags_JsDom$styles$__f_margin$module
});
$c_Lscalatags_JsDom$styles$.prototype.top__Lscalatags_generic_StyleMisc$PixelAutoStyle = (function() {
  var b = this.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (1048576 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$styles$__top$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle(this)
  } else {
    return this.Lscalatags_JsDom$styles$__f_top
  }
});
$c_Lscalatags_JsDom$styles$.prototype.width__Lscalatags_generic_StyleMisc$PixelAutoStyle = (function() {
  var b = this.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (2097152 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$styles$__width$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle(this)
  } else {
    return this.Lscalatags_JsDom$styles$__f_width
  }
});
$c_Lscalatags_JsDom$styles$.prototype.bottom__Lscalatags_generic_StyleMisc$PixelAutoStyle = (function() {
  var b = this.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = (4194304 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$styles$__bottom$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle(this)
  } else {
    return this.Lscalatags_JsDom$styles$__f_bottom
  }
});
$c_Lscalatags_JsDom$styles$.prototype.textAlign__Lscalatags_generic_Styles$TextAlign = (function() {
  var b = this.Lscalatags_JsDom$styles$__f_bitmap$0;
  var hi = ((-2147483648) & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$styles$__textAlign$lzycompute__Lscalatags_generic_Styles$TextAlign(this)
  } else {
    return this.Lscalatags_JsDom$styles$__f_textAlign
  }
});
$c_Lscalatags_JsDom$styles$.prototype.zIndex__Lscalatags_generic_StyleMisc$AutoStyle = (function() {
  var b = this.Lscalatags_JsDom$styles$__f_bitmap$1;
  var lo = (256 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lscalatags_JsDom$styles$__zIndex$lzycompute__Lscalatags_generic_StyleMisc$AutoStyle(this)
  } else {
    return this.Lscalatags_JsDom$styles$__f_zIndex
  }
});
var $d_Lscalatags_JsDom$styles$ = new $TypeData().initClass({
  Lscalatags_JsDom$styles$: 0
}, false, "scalatags.JsDom$styles$", {
  Lscalatags_JsDom$styles$: 1,
  O: 1,
  Lscalatags_JsDom$Cap: 1,
  Lscalatags_generic_Util: 1,
  Lscalatags_generic_LowPriUtil: 1,
  Lscalatags_jsdom_TagFactory: 1,
  Lscalatags_generic_Styles: 1,
  Lscalatags_generic_StyleMisc: 1
});
$c_Lscalatags_JsDom$styles$.prototype.$classData = $d_Lscalatags_JsDom$styles$;
var $n_Lscalatags_JsDom$styles$;
function $m_Lscalatags_JsDom$styles$() {
  if ((!$n_Lscalatags_JsDom$styles$)) {
    $n_Lscalatags_JsDom$styles$ = new $c_Lscalatags_JsDom$styles$()
  };
  return $n_Lscalatags_JsDom$styles$
}
function $p_Lscalatags_JsDom$tags$__div$lzycompute__Lscalatags_JsDom$TypedTag($thiz) {
  var b = $thiz.Lscalatags_JsDom$tags$__f_bitmap$0;
  var lo = (134217728 & b.RTLong__f_lo);
  if ((lo === 0)) {
    var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$tags$__f_div = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "div", false, ns));
    var b$1 = $thiz.Lscalatags_JsDom$tags$__f_bitmap$0;
    var lo$1 = (134217728 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$tags$__f_bitmap$0 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$tags$__f_div
}
function $p_Lscalatags_JsDom$tags$__span$lzycompute__Lscalatags_JsDom$TypedTag($thiz) {
  var b = $thiz.Lscalatags_JsDom$tags$__f_bitmap$0;
  var hi = (256 & b.RTLong__f_hi);
  if ((hi === 0)) {
    var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$tags$__f_span = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "span", false, ns));
    var b$1 = $thiz.Lscalatags_JsDom$tags$__f_bitmap$0;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (256 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$tags$__f_bitmap$0 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$tags$__f_span
}
function $p_Lscalatags_JsDom$tags$__label$lzycompute__Lscalatags_JsDom$TypedTag($thiz) {
  var b = $thiz.Lscalatags_JsDom$tags$__f_bitmap$1;
  var lo = (64 & b.RTLong__f_lo);
  if ((lo === 0)) {
    var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$tags$__f_label = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "label", false, ns));
    var b$1 = $thiz.Lscalatags_JsDom$tags$__f_bitmap$1;
    var lo$1 = (64 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$tags$__f_bitmap$1 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$tags$__f_label
}
function $p_Lscalatags_JsDom$tags$__input$lzycompute__Lscalatags_JsDom$TypedTag($thiz) {
  var b = $thiz.Lscalatags_JsDom$tags$__f_bitmap$1;
  var lo = (128 & b.RTLong__f_lo);
  if ((lo === 0)) {
    var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$tags$__f_input = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "input", true, ns));
    var b$1 = $thiz.Lscalatags_JsDom$tags$__f_bitmap$1;
    var lo$1 = (128 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$tags$__f_bitmap$1 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$tags$__f_input
}
/** @constructor */
function $c_Lscalatags_JsDom$tags$() {
  this.Lscalatags_JsDom$tags$__f_html = null;
  this.Lscalatags_JsDom$tags$__f_head = null;
  this.Lscalatags_JsDom$tags$__f_base = null;
  this.Lscalatags_JsDom$tags$__f_link = null;
  this.Lscalatags_JsDom$tags$__f_meta = null;
  this.Lscalatags_JsDom$tags$__f_script = null;
  this.Lscalatags_JsDom$tags$__f_body = null;
  this.Lscalatags_JsDom$tags$__f_h1 = null;
  this.Lscalatags_JsDom$tags$__f_h2 = null;
  this.Lscalatags_JsDom$tags$__f_h3 = null;
  this.Lscalatags_JsDom$tags$__f_h4 = null;
  this.Lscalatags_JsDom$tags$__f_h5 = null;
  this.Lscalatags_JsDom$tags$__f_h6 = null;
  this.Lscalatags_JsDom$tags$__f_header = null;
  this.Lscalatags_JsDom$tags$__f_footer = null;
  this.Lscalatags_JsDom$tags$__f_p = null;
  this.Lscalatags_JsDom$tags$__f_hr = null;
  this.Lscalatags_JsDom$tags$__f_pre = null;
  this.Lscalatags_JsDom$tags$__f_blockquote = null;
  this.Lscalatags_JsDom$tags$__f_ol = null;
  this.Lscalatags_JsDom$tags$__f_ul = null;
  this.Lscalatags_JsDom$tags$__f_li = null;
  this.Lscalatags_JsDom$tags$__f_dl = null;
  this.Lscalatags_JsDom$tags$__f_dt = null;
  this.Lscalatags_JsDom$tags$__f_dd = null;
  this.Lscalatags_JsDom$tags$__f_figure = null;
  this.Lscalatags_JsDom$tags$__f_figcaption = null;
  this.Lscalatags_JsDom$tags$__f_div = null;
  this.Lscalatags_JsDom$tags$__f_a = null;
  this.Lscalatags_JsDom$tags$__f_em = null;
  this.Lscalatags_JsDom$tags$__f_strong = null;
  this.Lscalatags_JsDom$tags$__f_small = null;
  this.Lscalatags_JsDom$tags$__f_s = null;
  this.Lscalatags_JsDom$tags$__f_cite = null;
  this.Lscalatags_JsDom$tags$__f_code = null;
  this.Lscalatags_JsDom$tags$__f_sub = null;
  this.Lscalatags_JsDom$tags$__f_sup = null;
  this.Lscalatags_JsDom$tags$__f_i = null;
  this.Lscalatags_JsDom$tags$__f_b = null;
  this.Lscalatags_JsDom$tags$__f_u = null;
  this.Lscalatags_JsDom$tags$__f_span = null;
  this.Lscalatags_JsDom$tags$__f_br = null;
  this.Lscalatags_JsDom$tags$__f_wbr = null;
  this.Lscalatags_JsDom$tags$__f_ins = null;
  this.Lscalatags_JsDom$tags$__f_del = null;
  this.Lscalatags_JsDom$tags$__f_img = null;
  this.Lscalatags_JsDom$tags$__f_iframe = null;
  this.Lscalatags_JsDom$tags$__f_embed = null;
  this.Lscalatags_JsDom$tags$__f_object = null;
  this.Lscalatags_JsDom$tags$__f_param = null;
  this.Lscalatags_JsDom$tags$__f_video = null;
  this.Lscalatags_JsDom$tags$__f_audio = null;
  this.Lscalatags_JsDom$tags$__f_source = null;
  this.Lscalatags_JsDom$tags$__f_track = null;
  this.Lscalatags_JsDom$tags$__f_canvas = null;
  this.Lscalatags_JsDom$tags$__f_map = null;
  this.Lscalatags_JsDom$tags$__f_area = null;
  this.Lscalatags_JsDom$tags$__f_table = null;
  this.Lscalatags_JsDom$tags$__f_caption = null;
  this.Lscalatags_JsDom$tags$__f_colgroup = null;
  this.Lscalatags_JsDom$tags$__f_col = null;
  this.Lscalatags_JsDom$tags$__f_tbody = null;
  this.Lscalatags_JsDom$tags$__f_thead = null;
  this.Lscalatags_JsDom$tags$__f_tfoot = null;
  this.Lscalatags_JsDom$tags$__f_tr = null;
  this.Lscalatags_JsDom$tags$__f_td = null;
  this.Lscalatags_JsDom$tags$__f_th = null;
  this.Lscalatags_JsDom$tags$__f_form = null;
  this.Lscalatags_JsDom$tags$__f_fieldset = null;
  this.Lscalatags_JsDom$tags$__f_legend = null;
  this.Lscalatags_JsDom$tags$__f_label = null;
  this.Lscalatags_JsDom$tags$__f_input = null;
  this.Lscalatags_JsDom$tags$__f_button = null;
  this.Lscalatags_JsDom$tags$__f_select = null;
  this.Lscalatags_JsDom$tags$__f_datalist = null;
  this.Lscalatags_JsDom$tags$__f_optgroup = null;
  this.Lscalatags_JsDom$tags$__f_option = null;
  this.Lscalatags_JsDom$tags$__f_textarea = null;
  this.Lscalatags_JsDom$tags$__f_bitmap$0 = $L0;
  this.Lscalatags_JsDom$tags$__f_bitmap$1 = $L0
}
$c_Lscalatags_JsDom$tags$.prototype = new $h_O();
$c_Lscalatags_JsDom$tags$.prototype.constructor = $c_Lscalatags_JsDom$tags$;
/** @constructor */
function $h_Lscalatags_JsDom$tags$() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$tags$.prototype = $c_Lscalatags_JsDom$tags$.prototype;
$c_Lscalatags_JsDom$tags$.prototype.div__Lscalatags_JsDom$TypedTag = (function() {
  var b = this.Lscalatags_JsDom$tags$__f_bitmap$0;
  var lo = (134217728 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lscalatags_JsDom$tags$__div$lzycompute__Lscalatags_JsDom$TypedTag(this)
  } else {
    return this.Lscalatags_JsDom$tags$__f_div
  }
});
$c_Lscalatags_JsDom$tags$.prototype.span__Lscalatags_JsDom$TypedTag = (function() {
  var b = this.Lscalatags_JsDom$tags$__f_bitmap$0;
  var hi = (256 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$tags$__span$lzycompute__Lscalatags_JsDom$TypedTag(this)
  } else {
    return this.Lscalatags_JsDom$tags$__f_span
  }
});
$c_Lscalatags_JsDom$tags$.prototype.label__Lscalatags_JsDom$TypedTag = (function() {
  var b = this.Lscalatags_JsDom$tags$__f_bitmap$1;
  var lo = (64 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lscalatags_JsDom$tags$__label$lzycompute__Lscalatags_JsDom$TypedTag(this)
  } else {
    return this.Lscalatags_JsDom$tags$__f_label
  }
});
$c_Lscalatags_JsDom$tags$.prototype.input__Lscalatags_JsDom$TypedTag = (function() {
  var b = this.Lscalatags_JsDom$tags$__f_bitmap$1;
  var lo = (128 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lscalatags_JsDom$tags$__input$lzycompute__Lscalatags_JsDom$TypedTag(this)
  } else {
    return this.Lscalatags_JsDom$tags$__f_input
  }
});
var $d_Lscalatags_JsDom$tags$ = new $TypeData().initClass({
  Lscalatags_JsDom$tags$: 0
}, false, "scalatags.JsDom$tags$", {
  Lscalatags_JsDom$tags$: 1,
  O: 1,
  Lscalatags_JsDom$Cap: 1,
  Lscalatags_generic_Util: 1,
  Lscalatags_generic_LowPriUtil: 1,
  Lscalatags_jsdom_TagFactory: 1,
  Lscalatags_jsdom_Tags: 1,
  Lscalatags_generic_Tags: 1
});
$c_Lscalatags_JsDom$tags$.prototype.$classData = $d_Lscalatags_JsDom$tags$;
var $n_Lscalatags_JsDom$tags$;
function $m_Lscalatags_JsDom$tags$() {
  if ((!$n_Lscalatags_JsDom$tags$)) {
    $n_Lscalatags_JsDom$tags$ = new $c_Lscalatags_JsDom$tags$()
  };
  return $n_Lscalatags_JsDom$tags$
}
/** @constructor */
function $c_Lscalatags_generic_Styles$$anon$3(outer) {
  this.Lscalatags_generic_PixelStyle__f_jsName = null;
  this.Lscalatags_generic_PixelStyle__f_cssName = null;
  this.Lscalatags_generic_PixelStyle__f_realStyle = null;
  this.Lscalatags_generic_Styles$$anon$3__f_auto = null;
  this.Lscalatags_generic_Styles$$anon$3__f_bitmap$0 = false;
  this.Lscalatags_generic_Styles$$anon$3__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.Lscalatags_generic_Styles$$anon$3__f_$outer = outer
  };
  $ct_Lscalatags_generic_PixelStyle__T__T__(this, "marginLeft", "margin-left")
}
$c_Lscalatags_generic_Styles$$anon$3.prototype = new $h_Lscalatags_generic_PixelStyle();
$c_Lscalatags_generic_Styles$$anon$3.prototype.constructor = $c_Lscalatags_generic_Styles$$anon$3;
/** @constructor */
function $h_Lscalatags_generic_Styles$$anon$3() {
  /*<skip>*/
}
$h_Lscalatags_generic_Styles$$anon$3.prototype = $c_Lscalatags_generic_Styles$$anon$3.prototype;
var $d_Lscalatags_generic_Styles$$anon$3 = new $TypeData().initClass({
  Lscalatags_generic_Styles$$anon$3: 0
}, false, "scalatags.generic.Styles$$anon$3", {
  Lscalatags_generic_Styles$$anon$3: 1,
  Lscalatags_generic_PixelStyle: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  Lscalatags_generic_StyleMisc$MarginAuto: 1
});
$c_Lscalatags_generic_Styles$$anon$3.prototype.$classData = $d_Lscalatags_generic_Styles$$anon$3;
function $p_Lscalatags_generic_Styles$$anon$5__right$lzycompute__Lscalatags_generic_StylePair($thiz) {
  if (((((8 & $thiz.Lscalatags_generic_Styles$$anon$5__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.Lscalatags_generic_Styles$$anon$5__f_right = $f_Lscalatags_generic_Styles$TextAlign__right__Lscalatags_generic_StylePair($thiz);
    $thiz.Lscalatags_generic_Styles$$anon$5__f_bitmap$0 = (((8 | $thiz.Lscalatags_generic_Styles$$anon$5__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.Lscalatags_generic_Styles$$anon$5__f_right
}
/** @constructor */
function $c_Lscalatags_generic_Styles$$anon$5(outer) {
  this.Lscalatags_generic_Style__f_jsName = null;
  this.Lscalatags_generic_Style__f_cssName = null;
  this.Lscalatags_generic_Styles$$anon$5__f_start = null;
  this.Lscalatags_generic_Styles$$anon$5__f_end = null;
  this.Lscalatags_generic_Styles$$anon$5__f_left = null;
  this.Lscalatags_generic_Styles$$anon$5__f_right = null;
  this.Lscalatags_generic_Styles$$anon$5__f_center = null;
  this.Lscalatags_generic_Styles$$anon$5__f_justify = null;
  this.Lscalatags_generic_Styles$$anon$5__f_bitmap$0 = 0;
  this.Lscalatags_generic_Styles$$anon$5__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.Lscalatags_generic_Styles$$anon$5__f_$outer = outer
  };
  $ct_Lscalatags_generic_Style__T__T__(this, "textAlign", "text-align")
}
$c_Lscalatags_generic_Styles$$anon$5.prototype = new $h_Lscalatags_generic_Style();
$c_Lscalatags_generic_Styles$$anon$5.prototype.constructor = $c_Lscalatags_generic_Styles$$anon$5;
/** @constructor */
function $h_Lscalatags_generic_Styles$$anon$5() {
  /*<skip>*/
}
$h_Lscalatags_generic_Styles$$anon$5.prototype = $c_Lscalatags_generic_Styles$$anon$5.prototype;
$c_Lscalatags_generic_Styles$$anon$5.prototype.right__Lscalatags_generic_StylePair = (function() {
  return (((((8 & this.Lscalatags_generic_Styles$$anon$5__f_bitmap$0) << 24) >> 24) === 0) ? $p_Lscalatags_generic_Styles$$anon$5__right$lzycompute__Lscalatags_generic_StylePair(this) : this.Lscalatags_generic_Styles$$anon$5__f_right)
});
var $d_Lscalatags_generic_Styles$$anon$5 = new $TypeData().initClass({
  Lscalatags_generic_Styles$$anon$5: 0
}, false, "scalatags.generic.Styles$$anon$5", {
  Lscalatags_generic_Styles$$anon$5: 1,
  Lscalatags_generic_Style: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  Lscalatags_generic_Styles$TextAlign: 1
});
$c_Lscalatags_generic_Styles$$anon$5.prototype.$classData = $d_Lscalatags_generic_Styles$$anon$5;
/** @constructor */
function $c_sc_IndexedSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sc_IndexedSeq$.prototype = new $h_scg_IndexedSeqFactory();
$c_sc_IndexedSeq$.prototype.constructor = $c_sc_IndexedSeq$;
/** @constructor */
function $h_sc_IndexedSeq$() {
  /*<skip>*/
}
$h_sc_IndexedSeq$.prototype = $c_sc_IndexedSeq$.prototype;
$c_sc_IndexedSeq$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  return new $c_sci_VectorBuilder()
});
var $d_sc_IndexedSeq$ = new $TypeData().initClass({
  sc_IndexedSeq$: 0
}, false, "scala.collection.IndexedSeq$", {
  sc_IndexedSeq$: 1,
  scg_IndexedSeqFactory: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_IndexedSeq$.prototype.$classData = $d_sc_IndexedSeq$;
var $n_sc_IndexedSeq$;
function $m_sc_IndexedSeq$() {
  if ((!$n_sc_IndexedSeq$)) {
    $n_sc_IndexedSeq$ = new $c_sc_IndexedSeq$()
  };
  return $n_sc_IndexedSeq$
}
/** @constructor */
function $c_sc_IndexedSeqLike$Elements(outer, start, end) {
  this.sc_IndexedSeqLike$Elements__f_end = 0;
  this.sc_IndexedSeqLike$Elements__f_index = 0;
  this.sc_IndexedSeqLike$Elements__f_$outer = null;
  this.sc_IndexedSeqLike$Elements__f_end = end;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sc_IndexedSeqLike$Elements__f_$outer = outer
  };
  this.sc_IndexedSeqLike$Elements__f_index = start
}
$c_sc_IndexedSeqLike$Elements.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqLike$Elements.prototype.constructor = $c_sc_IndexedSeqLike$Elements;
/** @constructor */
function $h_sc_IndexedSeqLike$Elements() {
  /*<skip>*/
}
$h_sc_IndexedSeqLike$Elements.prototype = $c_sc_IndexedSeqLike$Elements.prototype;
$c_sc_IndexedSeqLike$Elements.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqLike$Elements__f_index < this.sc_IndexedSeqLike$Elements__f_end)
});
$c_sc_IndexedSeqLike$Elements.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqLike$Elements__f_index >= this.sc_IndexedSeqLike$Elements__f_end)) {
    $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  };
  var x = this.sc_IndexedSeqLike$Elements__f_$outer.apply__I__O(this.sc_IndexedSeqLike$Elements__f_index);
  this.sc_IndexedSeqLike$Elements__f_index = ((1 + this.sc_IndexedSeqLike$Elements__f_index) | 0);
  return x
});
var $d_sc_IndexedSeqLike$Elements = new $TypeData().initClass({
  sc_IndexedSeqLike$Elements: 0
}, false, "scala.collection.IndexedSeqLike$Elements", {
  sc_IndexedSeqLike$Elements: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_BufferedIterator: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqLike$Elements.prototype.$classData = $d_sc_IndexedSeqLike$Elements;
/** @constructor */
function $c_sci_HashSet$() {
  this.sci_HashSet$__f_ReusableCBF = null;
  $n_sci_HashSet$ = this;
  this.sci_HashSet$__f_ReusableCBF = new $c_scg_GenSetFactory$$anon$1(this)
}
$c_sci_HashSet$.prototype = new $h_scg_ImmutableSetFactory();
$c_sci_HashSet$.prototype.constructor = $c_sci_HashSet$;
/** @constructor */
function $h_sci_HashSet$() {
  /*<skip>*/
}
$h_sci_HashSet$.prototype = $c_sci_HashSet$.prototype;
$c_sci_HashSet$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_HashSet$HashSetBuilder()
});
$c_sci_HashSet$.prototype.scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet = (function(hash0, elem0, hash1, elem1, level, newSize) {
  var index0 = (31 & ((hash0 >>> level) | 0));
  var index1 = (31 & ((hash1 >>> level) | 0));
  if ((index0 !== index1)) {
    var bitmap = ((1 << index0) | (1 << index1));
    var elems = new ($d_sci_HashSet.getArrayOf().constr)(2);
    if ((index0 < index1)) {
      elems.set(0, elem0);
      elems.set(1, elem1)
    } else {
      elems.set(0, elem1);
      elems.set(1, elem0)
    };
    return new $c_sci_HashSet$HashTrieSet(bitmap, elems, newSize)
  } else {
    var bitmap$2 = (1 << index0);
    var child = this.scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(hash0, elem0, hash1, elem1, ((5 + level) | 0), newSize);
    var elems$2 = new ($d_sci_HashSet.getArrayOf().constr)(1);
    elems$2.set(0, child);
    return new $c_sci_HashSet$HashTrieSet(bitmap$2, elems$2, newSize)
  }
});
$c_sci_HashSet$.prototype.improve__I__I = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0))
});
$c_sci_HashSet$.prototype.computeHash__O__I = (function(key) {
  return this.improve__I__I($m_sr_Statics$().anyHash__O__I(key))
});
$c_sci_HashSet$.prototype.emptyInstance__sci_Set = (function() {
  return $m_sci_HashSet$EmptyHashSet$()
});
var $d_sci_HashSet$ = new $TypeData().initClass({
  sci_HashSet$: 0
}, false, "scala.collection.immutable.HashSet$", {
  sci_HashSet$: 1,
  scg_ImmutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$.prototype.$classData = $d_sci_HashSet$;
var $n_sci_HashSet$;
function $m_sci_HashSet$() {
  if ((!$n_sci_HashSet$)) {
    $n_sci_HashSet$ = new $c_sci_HashSet$()
  };
  return $n_sci_HashSet$
}
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_IndexedSeq$.prototype = new $h_scg_IndexedSeqFactory();
$c_sci_IndexedSeq$.prototype.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
  /*<skip>*/
}
$h_sci_IndexedSeq$.prototype = $c_sci_IndexedSeq$.prototype;
$c_sci_IndexedSeq$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Vector$();
  return new $c_sci_VectorBuilder()
});
var $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  scg_IndexedSeqFactory: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
/** @constructor */
function $c_sci_ListSet$() {
  this.sci_ListSet$__f_ReusableCBF = null;
  $n_sci_ListSet$ = this;
  this.sci_ListSet$__f_ReusableCBF = new $c_scg_GenSetFactory$$anon$1(this)
}
$c_sci_ListSet$.prototype = new $h_scg_ImmutableSetFactory();
$c_sci_ListSet$.prototype.constructor = $c_sci_ListSet$;
/** @constructor */
function $h_sci_ListSet$() {
  /*<skip>*/
}
$h_sci_ListSet$.prototype = $c_sci_ListSet$.prototype;
$c_sci_ListSet$.prototype.emptyInstance__sci_Set = (function() {
  return $m_sci_ListSet$EmptyListSet$()
});
var $d_sci_ListSet$ = new $TypeData().initClass({
  sci_ListSet$: 0
}, false, "scala.collection.immutable.ListSet$", {
  sci_ListSet$: 1,
  scg_ImmutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet$.prototype.$classData = $d_sci_ListSet$;
var $n_sci_ListSet$;
function $m_sci_ListSet$() {
  if ((!$n_sci_ListSet$)) {
    $n_sci_ListSet$ = new $c_sci_ListSet$()
  };
  return $n_sci_ListSet$
}
function $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.sci_Map$Map2$Map2Iterator__f_$outer = outer
  };
  $ct_sci_Map$MapNIterator__($thiz);
  return $thiz
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.sci_Map$MapNIterator__f_current = 0;
  this.sci_Map$Map2$Map2Iterator__f_$outer = null
}
$c_sci_Map$Map2$Map2Iterator.prototype = new $h_sci_Map$MapNIterator();
$c_sci_Map$Map2$Map2Iterator.prototype.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
  /*<skip>*/
}
$h_sci_Map$Map2$Map2Iterator.prototype = $c_sci_Map$Map2$Map2Iterator.prototype;
$c_sci_Map$Map2$Map2Iterator.prototype.size__I = (function() {
  return 2
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.sci_Map$Map3$Map3Iterator__f_$outer = outer
  };
  $ct_sci_Map$MapNIterator__($thiz);
  return $thiz
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.sci_Map$MapNIterator__f_current = 0;
  this.sci_Map$Map3$Map3Iterator__f_$outer = null
}
$c_sci_Map$Map3$Map3Iterator.prototype = new $h_sci_Map$MapNIterator();
$c_sci_Map$Map3$Map3Iterator.prototype.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
  /*<skip>*/
}
$h_sci_Map$Map3$Map3Iterator.prototype = $c_sci_Map$Map3$Map3Iterator.prototype;
$c_sci_Map$Map3$Map3Iterator.prototype.size__I = (function() {
  return 3
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.sci_Map$Map4$Map4Iterator__f_$outer = outer
  };
  $ct_sci_Map$MapNIterator__($thiz);
  return $thiz
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.sci_Map$MapNIterator__f_current = 0;
  this.sci_Map$Map4$Map4Iterator__f_$outer = null
}
$c_sci_Map$Map4$Map4Iterator.prototype = new $h_sci_Map$MapNIterator();
$c_sci_Map$Map4$Map4Iterator.prototype.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
  /*<skip>*/
}
$h_sci_Map$Map4$Map4Iterator.prototype = $c_sci_Map$Map4$Map4Iterator.prototype;
$c_sci_Map$Map4$Map4Iterator.prototype.size__I = (function() {
  return 4
});
/** @constructor */
function $c_sci_Set$Set2$$anon$1(outer) {
  this.sci_Set$SetNIterator__f_current = 0;
  this.sci_Set$SetNIterator__f_remainder = 0;
  this.sci_Set$Set2$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sci_Set$Set2$$anon$1__f_$outer = outer
  };
  $ct_sci_Set$SetNIterator__I__(this, 2)
}
$c_sci_Set$Set2$$anon$1.prototype = new $h_sci_Set$SetNIterator();
$c_sci_Set$Set2$$anon$1.prototype.constructor = $c_sci_Set$Set2$$anon$1;
/** @constructor */
function $h_sci_Set$Set2$$anon$1() {
  /*<skip>*/
}
$h_sci_Set$Set2$$anon$1.prototype = $c_sci_Set$Set2$$anon$1.prototype;
$c_sci_Set$Set2$$anon$1.prototype.apply__I__O = (function(i) {
  return this.sci_Set$Set2$$anon$1__f_$outer.scala$collection$immutable$Set$Set2$$getElem__I__O(i)
});
var $d_sci_Set$Set2$$anon$1 = new $TypeData().initClass({
  sci_Set$Set2$$anon$1: 0
}, false, "scala.collection.immutable.Set$Set2$$anon$1", {
  sci_Set$Set2$$anon$1: 1,
  sci_Set$SetNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set2$$anon$1.prototype.$classData = $d_sci_Set$Set2$$anon$1;
/** @constructor */
function $c_sci_Set$Set3$$anon$2(outer) {
  this.sci_Set$SetNIterator__f_current = 0;
  this.sci_Set$SetNIterator__f_remainder = 0;
  this.sci_Set$Set3$$anon$2__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sci_Set$Set3$$anon$2__f_$outer = outer
  };
  $ct_sci_Set$SetNIterator__I__(this, 3)
}
$c_sci_Set$Set3$$anon$2.prototype = new $h_sci_Set$SetNIterator();
$c_sci_Set$Set3$$anon$2.prototype.constructor = $c_sci_Set$Set3$$anon$2;
/** @constructor */
function $h_sci_Set$Set3$$anon$2() {
  /*<skip>*/
}
$h_sci_Set$Set3$$anon$2.prototype = $c_sci_Set$Set3$$anon$2.prototype;
$c_sci_Set$Set3$$anon$2.prototype.apply__I__O = (function(i) {
  return this.sci_Set$Set3$$anon$2__f_$outer.scala$collection$immutable$Set$Set3$$getElem__I__O(i)
});
var $d_sci_Set$Set3$$anon$2 = new $TypeData().initClass({
  sci_Set$Set3$$anon$2: 0
}, false, "scala.collection.immutable.Set$Set3$$anon$2", {
  sci_Set$Set3$$anon$2: 1,
  sci_Set$SetNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set3$$anon$2.prototype.$classData = $d_sci_Set$Set3$$anon$2;
/** @constructor */
function $c_sci_Set$Set4$$anon$3(outer) {
  this.sci_Set$SetNIterator__f_current = 0;
  this.sci_Set$SetNIterator__f_remainder = 0;
  this.sci_Set$Set4$$anon$3__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sci_Set$Set4$$anon$3__f_$outer = outer
  };
  $ct_sci_Set$SetNIterator__I__(this, 4)
}
$c_sci_Set$Set4$$anon$3.prototype = new $h_sci_Set$SetNIterator();
$c_sci_Set$Set4$$anon$3.prototype.constructor = $c_sci_Set$Set4$$anon$3;
/** @constructor */
function $h_sci_Set$Set4$$anon$3() {
  /*<skip>*/
}
$h_sci_Set$Set4$$anon$3.prototype = $c_sci_Set$Set4$$anon$3.prototype;
$c_sci_Set$Set4$$anon$3.prototype.apply__I__O = (function(i) {
  return this.sci_Set$Set4$$anon$3__f_$outer.scala$collection$immutable$Set$Set4$$getElem__I__O(i)
});
var $d_sci_Set$Set4$$anon$3 = new $TypeData().initClass({
  sci_Set$Set4$$anon$3: 0
}, false, "scala.collection.immutable.Set$Set4$$anon$3", {
  sci_Set$Set4$$anon$3: 1,
  sci_Set$SetNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set4$$anon$3.prototype.$classData = $d_sci_Set$Set4$$anon$3;
/** @constructor */
function $c_s_math_Ordering$Int$() {
  /*<skip>*/
}
$c_s_math_Ordering$Int$.prototype = new $h_O();
$c_s_math_Ordering$Int$.prototype.constructor = $c_s_math_Ordering$Int$;
/** @constructor */
function $h_s_math_Ordering$Int$() {
  /*<skip>*/
}
$h_s_math_Ordering$Int$.prototype = $c_s_math_Ordering$Int$.prototype;
$c_s_math_Ordering$Int$.prototype.lteq__O__O__Z = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y)
});
$c_s_math_Ordering$Int$.prototype.gteq__O__O__Z = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y)
});
$c_s_math_Ordering$Int$.prototype.compare__O__O__I = (function(x, y) {
  var x$1 = $uI(x);
  var y$1 = $uI(y);
  return ((x$1 === y$1) ? 0 : ((x$1 < y$1) ? (-1) : 1))
});
var $d_s_math_Ordering$Int$ = new $TypeData().initClass({
  s_math_Ordering$Int$: 0
}, false, "scala.math.Ordering$Int$", {
  s_math_Ordering$Int$: 1,
  O: 1,
  s_math_Ordering$IntOrdering: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$Int$.prototype.$classData = $d_s_math_Ordering$Int$;
var $n_s_math_Ordering$Int$;
function $m_s_math_Ordering$Int$() {
  if ((!$n_s_math_Ordering$Int$)) {
    $n_s_math_Ordering$Int$ = new $c_s_math_Ordering$Int$()
  };
  return $n_s_math_Ordering$Int$
}
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.s_reflect_AnyValManifest__f_toString = null
}
$c_s_reflect_AnyValManifest.prototype = new $h_O();
$c_s_reflect_AnyValManifest.prototype.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
  /*<skip>*/
}
$h_s_reflect_AnyValManifest.prototype = $c_s_reflect_AnyValManifest.prototype;
$c_s_reflect_AnyValManifest.prototype.toString__T = (function() {
  return this.s_reflect_AnyValManifest__f_toString
});
$c_s_reflect_AnyValManifest.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_s_reflect_AnyValManifest.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null
}
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.sjs_js_JavaScriptException__f_exception = null;
    this.sjs_js_JavaScriptException__f_exception = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $dp_toString__T(this.sjs_js_JavaScriptException__f_exception)
  };
  fillInStackTrace__jl_Throwable() {
    this.setStackTraceStateInternal__O__(this.sjs_js_JavaScriptException__f_exception);
    return this
  };
  productPrefix__T() {
    return "JavaScriptException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    if ((x$1 === 0)) {
      return this.sjs_js_JavaScriptException__f_exception
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
      var JavaScriptException$1 = $as_sjs_js_JavaScriptException(x$1);
      var x = this.sjs_js_JavaScriptException__f_exception;
      var y = JavaScriptException$1.sjs_js_JavaScriptException__f_exception;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
  setStackTraceStateInternal__O__(e) {
    this.jl_Throwable__f_stackTraceStateInternal = e
  };
}
function $as_sjs_js_JavaScriptException(obj) {
  return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
var $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
/** @constructor */
function $c_Lscalatags_JsDom$RawFrag(v) {
  this.Lscalatags_JsDom$RawFrag__f_v = null;
  this.Lscalatags_JsDom$RawFrag__f_v = v;
  if ((v === null)) {
    throw new $c_jl_NullPointerException()
  }
}
$c_Lscalatags_JsDom$RawFrag.prototype = new $h_O();
$c_Lscalatags_JsDom$RawFrag.prototype.constructor = $c_Lscalatags_JsDom$RawFrag;
/** @constructor */
function $h_Lscalatags_JsDom$RawFrag() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$RawFrag.prototype = $c_Lscalatags_JsDom$RawFrag.prototype;
$c_Lscalatags_JsDom$RawFrag.prototype.render__Lorg_scalajs_dom_raw_Node = (function() {
  return $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createRange().createContextualFragment(this.Lscalatags_JsDom$RawFrag__f_v)
});
$c_Lscalatags_JsDom$RawFrag.prototype.productPrefix__T = (function() {
  return "RawFrag"
});
$c_Lscalatags_JsDom$RawFrag.prototype.productArity__I = (function() {
  return 1
});
$c_Lscalatags_JsDom$RawFrag.prototype.productElement__I__O = (function(x$1) {
  if ((x$1 === 0)) {
    return this.Lscalatags_JsDom$RawFrag__f_v
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
  }
});
$c_Lscalatags_JsDom$RawFrag.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lscalatags_JsDom$RawFrag.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_Lscalatags_JsDom$RawFrag.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lscalatags_JsDom$RawFrag.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lscalatags_JsDom$RawFrag)) {
    var RawFrag$1 = $as_Lscalatags_JsDom$RawFrag(x$1);
    return (this.Lscalatags_JsDom$RawFrag__f_v === RawFrag$1.Lscalatags_JsDom$RawFrag__f_v)
  } else {
    return false
  }
});
$c_Lscalatags_JsDom$RawFrag.prototype.applyTo__O__V = (function(t) {
  $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_raw_Element__V(this, t)
});
function $as_Lscalatags_JsDom$RawFrag(obj) {
  return (((obj instanceof $c_Lscalatags_JsDom$RawFrag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$RawFrag"))
}
function $isArrayOf_Lscalatags_JsDom$RawFrag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_JsDom$RawFrag)))
}
function $asArrayOf_Lscalatags_JsDom$RawFrag(obj, depth) {
  return (($isArrayOf_Lscalatags_JsDom$RawFrag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.JsDom$RawFrag;", depth))
}
var $d_Lscalatags_JsDom$RawFrag = new $TypeData().initClass({
  Lscalatags_JsDom$RawFrag: 0
}, false, "scalatags.JsDom$RawFrag", {
  Lscalatags_JsDom$RawFrag: 1,
  O: 1,
  Lscalatags_jsdom_Frag: 1,
  Lscalatags_generic_Frag: 1,
  Lscalatags_generic_Modifier: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$RawFrag.prototype.$classData = $d_Lscalatags_JsDom$RawFrag;
/** @constructor */
function $c_Lscalatags_JsDom$StringFrag(v) {
  this.Lscalatags_JsDom$StringFrag__f_v = null;
  this.Lscalatags_JsDom$StringFrag__f_v = v;
  if ((v === null)) {
    throw new $c_jl_NullPointerException()
  }
}
$c_Lscalatags_JsDom$StringFrag.prototype = new $h_O();
$c_Lscalatags_JsDom$StringFrag.prototype.constructor = $c_Lscalatags_JsDom$StringFrag;
/** @constructor */
function $h_Lscalatags_JsDom$StringFrag() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$StringFrag.prototype = $c_Lscalatags_JsDom$StringFrag.prototype;
$c_Lscalatags_JsDom$StringFrag.prototype.render__Lorg_scalajs_dom_raw_Text = (function() {
  return $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createTextNode(this.Lscalatags_JsDom$StringFrag__f_v)
});
$c_Lscalatags_JsDom$StringFrag.prototype.productPrefix__T = (function() {
  return "StringFrag"
});
$c_Lscalatags_JsDom$StringFrag.prototype.productArity__I = (function() {
  return 1
});
$c_Lscalatags_JsDom$StringFrag.prototype.productElement__I__O = (function(x$1) {
  if ((x$1 === 0)) {
    return this.Lscalatags_JsDom$StringFrag__f_v
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
  }
});
$c_Lscalatags_JsDom$StringFrag.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lscalatags_JsDom$StringFrag.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_Lscalatags_JsDom$StringFrag.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lscalatags_JsDom$StringFrag.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lscalatags_JsDom$StringFrag)) {
    var StringFrag$1 = $as_Lscalatags_JsDom$StringFrag(x$1);
    return (this.Lscalatags_JsDom$StringFrag__f_v === StringFrag$1.Lscalatags_JsDom$StringFrag__f_v)
  } else {
    return false
  }
});
$c_Lscalatags_JsDom$StringFrag.prototype.applyTo__O__V = (function(t) {
  $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_raw_Element__V(this, t)
});
$c_Lscalatags_JsDom$StringFrag.prototype.render__Lorg_scalajs_dom_raw_Node = (function() {
  return this.render__Lorg_scalajs_dom_raw_Text()
});
function $as_Lscalatags_JsDom$StringFrag(obj) {
  return (((obj instanceof $c_Lscalatags_JsDom$StringFrag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$StringFrag"))
}
function $isArrayOf_Lscalatags_JsDom$StringFrag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_JsDom$StringFrag)))
}
function $asArrayOf_Lscalatags_JsDom$StringFrag(obj, depth) {
  return (($isArrayOf_Lscalatags_JsDom$StringFrag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.JsDom$StringFrag;", depth))
}
var $d_Lscalatags_JsDom$StringFrag = new $TypeData().initClass({
  Lscalatags_JsDom$StringFrag: 0
}, false, "scalatags.JsDom$StringFrag", {
  Lscalatags_JsDom$StringFrag: 1,
  O: 1,
  Lscalatags_jsdom_Frag: 1,
  Lscalatags_generic_Frag: 1,
  Lscalatags_generic_Modifier: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$StringFrag.prototype.$classData = $d_Lscalatags_JsDom$StringFrag;
/** @constructor */
function $c_sci_List$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  this.sci_List$__f_partialNotApplied = null;
  $ct_scg_GenTraversableFactory__(this);
  $n_sci_List$ = this;
  this.sci_List$__f_partialNotApplied = new $c_sci_List$$anon$1()
}
$c_sci_List$.prototype = new $h_scg_SeqFactory();
$c_sci_List$.prototype.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
  /*<skip>*/
}
$h_sci_List$.prototype = $c_sci_List$.prototype;
$c_sci_List$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
$c_sci_List$.prototype.empty__sc_GenTraversable = (function() {
  return $m_sci_Nil$()
});
var $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.sci_Map$MapNIterator__f_current = 0;
  this.sci_Map$Map2$Map2Iterator__f_$outer = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer)
}
$c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$c_sci_Map$Map2$$anon$1.prototype.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
  /*<skip>*/
}
$h_sci_Map$Map2$$anon$1.prototype = $c_sci_Map$Map2$$anon$1.prototype;
$c_sci_Map$Map2$$anon$1.prototype.apply__I__T2 = (function(i) {
  return new $c_T2(this.sci_Map$Map2$Map2Iterator__f_$outer.scala$collection$immutable$Map$Map2$$_getKey__I__O(i), this.sci_Map$Map2$Map2Iterator__f_$outer.scala$collection$immutable$Map$Map2$$_getValue__I__O(i))
});
var $d_sci_Map$Map2$$anon$1 = new $TypeData().initClass({
  sci_Map$Map2$$anon$1: 0
}, false, "scala.collection.immutable.Map$Map2$$anon$1", {
  sci_Map$Map2$$anon$1: 1,
  sci_Map$Map2$Map2Iterator: 1,
  sci_Map$MapNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map2$$anon$1.prototype.$classData = $d_sci_Map$Map2$$anon$1;
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.sci_Map$MapNIterator__f_current = 0;
  this.sci_Map$Map3$Map3Iterator__f_$outer = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer)
}
$c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$c_sci_Map$Map3$$anon$4.prototype.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
  /*<skip>*/
}
$h_sci_Map$Map3$$anon$4.prototype = $c_sci_Map$Map3$$anon$4.prototype;
$c_sci_Map$Map3$$anon$4.prototype.apply__I__T2 = (function(i) {
  return new $c_T2(this.sci_Map$Map3$Map3Iterator__f_$outer.scala$collection$immutable$Map$Map3$$_getKey__I__O(i), this.sci_Map$Map3$Map3Iterator__f_$outer.scala$collection$immutable$Map$Map3$$_getValue__I__O(i))
});
var $d_sci_Map$Map3$$anon$4 = new $TypeData().initClass({
  sci_Map$Map3$$anon$4: 0
}, false, "scala.collection.immutable.Map$Map3$$anon$4", {
  sci_Map$Map3$$anon$4: 1,
  sci_Map$Map3$Map3Iterator: 1,
  sci_Map$MapNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map3$$anon$4.prototype.$classData = $d_sci_Map$Map3$$anon$4;
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.sci_Map$MapNIterator__f_current = 0;
  this.sci_Map$Map4$Map4Iterator__f_$outer = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer)
}
$c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$c_sci_Map$Map4$$anon$7.prototype.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
  /*<skip>*/
}
$h_sci_Map$Map4$$anon$7.prototype = $c_sci_Map$Map4$$anon$7.prototype;
$c_sci_Map$Map4$$anon$7.prototype.apply__I__T2 = (function(i) {
  return new $c_T2(this.sci_Map$Map4$Map4Iterator__f_$outer.scala$collection$immutable$Map$Map4$$_getKey__I__O(i), this.sci_Map$Map4$Map4Iterator__f_$outer.scala$collection$immutable$Map$Map4$$_getValue__I__O(i))
});
var $d_sci_Map$Map4$$anon$7 = new $TypeData().initClass({
  sci_Map$Map4$$anon$7: 0
}, false, "scala.collection.immutable.Map$Map4$$anon$7", {
  sci_Map$Map4$$anon$7: 1,
  sci_Map$Map4$Map4Iterator: 1,
  sci_Map$MapNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map4$$anon$7.prototype.$classData = $d_sci_Map$Map4$$anon$7;
/** @constructor */
function $c_sci_Stream$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  this.sci_Stream$__f_ReusableCBF = null;
  $ct_scg_GenTraversableFactory__(this);
  $n_sci_Stream$ = this;
  this.sci_Stream$__f_ReusableCBF = new $c_sci_Stream$StreamCanBuildFrom()
}
$c_sci_Stream$.prototype = new $h_scg_SeqFactory();
$c_sci_Stream$.prototype.constructor = $c_sci_Stream$;
/** @constructor */
function $h_sci_Stream$() {
  /*<skip>*/
}
$h_sci_Stream$.prototype = $c_sci_Stream$.prototype;
$c_sci_Stream$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_Stream$StreamBuilder()
});
$c_sci_Stream$.prototype.filteredTail__sci_Stream__F1__Z__sci_Stream$Cons = (function(stream, p, isFlipped) {
  var hd = stream.head__O();
  var tl = new $c_sjsr_AnonFunction0(((this$1, stream$1, p$1, isFlipped$1) => (() => $as_sci_Stream(stream$1.tail__O()).filterImpl__F1__Z__sci_Stream(p$1, isFlipped$1)))(this, stream, p, isFlipped));
  return new $c_sci_Stream$Cons(hd, tl)
});
$c_sci_Stream$.prototype.empty__sc_GenTraversable = (function() {
  return $m_sci_Stream$Empty$()
});
var $d_sci_Stream$ = new $TypeData().initClass({
  sci_Stream$: 0
}, false, "scala.collection.immutable.Stream$", {
  sci_Stream$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$.prototype.$classData = $d_sci_Stream$;
var $n_sci_Stream$;
function $m_sci_Stream$() {
  if ((!$n_sci_Stream$)) {
    $n_sci_Stream$ = new $c_sci_Stream$()
  };
  return $n_sci_Stream$
}
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_ArrayBuffer$.prototype = new $h_scg_SeqFactory();
$c_scm_ArrayBuffer$.prototype.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
  /*<skip>*/
}
$h_scm_ArrayBuffer$.prototype = $c_scm_ArrayBuffer$.prototype;
$c_scm_ArrayBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())
});
var $d_scm_ArrayBuffer$ = new $TypeData().initClass({
  scm_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", {
  scm_ArrayBuffer$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer$.prototype.$classData = $d_scm_ArrayBuffer$;
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$()
  };
  return $n_scm_ArrayBuffer$
}
/** @constructor */
function $c_scm_ListBuffer$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_ListBuffer$.prototype = new $h_scg_SeqFactory();
$c_scm_ListBuffer$.prototype.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
  /*<skip>*/
}
$h_scm_ListBuffer$.prototype = $c_scm_ListBuffer$.prototype;
$c_scm_ListBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_GrowingBuilder(new $c_scm_ListBuffer())
});
var $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Boolean"
}
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$BooleanManifest$: 0
}, false, "scala.reflect.ManifestFactory$BooleanManifest$", {
  s_reflect_ManifestFactory$BooleanManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$BooleanManifest$;
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$()
  };
  return $n_s_reflect_ManifestFactory$BooleanManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Byte"
}
$c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $c_s_reflect_ManifestFactory$ByteManifest$.prototype;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ByteManifest$: 0
}, false, "scala.reflect.ManifestFactory$ByteManifest$", {
  s_reflect_ManifestFactory$ByteManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ByteManifest$;
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$()
  };
  return $n_s_reflect_ManifestFactory$ByteManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Char"
}
$c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$CharManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $c_s_reflect_ManifestFactory$CharManifest$.prototype;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$CharManifest$: 0
}, false, "scala.reflect.ManifestFactory$CharManifest$", {
  s_reflect_ManifestFactory$CharManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$CharManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$CharManifest$;
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$()
  };
  return $n_s_reflect_ManifestFactory$CharManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Double"
}
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$DoubleManifest$: 0
}, false, "scala.reflect.ManifestFactory$DoubleManifest$", {
  s_reflect_ManifestFactory$DoubleManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$DoubleManifest$;
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$()
  };
  return $n_s_reflect_ManifestFactory$DoubleManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Float"
}
$c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $c_s_reflect_ManifestFactory$FloatManifest$.prototype;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$FloatManifest$: 0
}, false, "scala.reflect.ManifestFactory$FloatManifest$", {
  s_reflect_ManifestFactory$FloatManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$FloatManifest$;
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$()
  };
  return $n_s_reflect_ManifestFactory$FloatManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Int"
}
$c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$IntManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $c_s_reflect_ManifestFactory$IntManifest$.prototype;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$IntManifest$: 0
}, false, "scala.reflect.ManifestFactory$IntManifest$", {
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$IntManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$IntManifest$;
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$()
  };
  return $n_s_reflect_ManifestFactory$IntManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Long"
}
$c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$LongManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $c_s_reflect_ManifestFactory$LongManifest$.prototype;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$LongManifest$: 0
}, false, "scala.reflect.ManifestFactory$LongManifest$", {
  s_reflect_ManifestFactory$LongManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$LongManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$LongManifest$;
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$()
  };
  return $n_s_reflect_ManifestFactory$LongManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null
}
$c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $c_s_reflect_ManifestFactory$PhantomManifest.prototype;
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.toString__T = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Short"
}
$c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $c_s_reflect_ManifestFactory$ShortManifest$.prototype;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ShortManifest$: 0
}, false, "scala.reflect.ManifestFactory$ShortManifest$", {
  s_reflect_ManifestFactory$ShortManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ShortManifest$;
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$()
  };
  return $n_s_reflect_ManifestFactory$ShortManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Unit"
}
$c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $c_s_reflect_ManifestFactory$UnitManifest$.prototype;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$UnitManifest$: 0
}, false, "scala.reflect.ManifestFactory$UnitManifest$", {
  s_reflect_ManifestFactory$UnitManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$UnitManifest$;
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$()
  };
  return $n_s_reflect_ManifestFactory$UnitManifest$
}
/** @constructor */
function $c_Lscalatags_JsDom$TypedTag(tag, modifiers, void$1, namespace) {
  this.Lscalatags_JsDom$TypedTag__f_tag = null;
  this.Lscalatags_JsDom$TypedTag__f_modifiers = null;
  this.Lscalatags_JsDom$TypedTag__f_void = false;
  this.Lscalatags_JsDom$TypedTag__f_namespace = null;
  this.Lscalatags_JsDom$TypedTag__f_tag = tag;
  this.Lscalatags_JsDom$TypedTag__f_modifiers = modifiers;
  this.Lscalatags_JsDom$TypedTag__f_void = void$1;
  this.Lscalatags_JsDom$TypedTag__f_namespace = namespace
}
$c_Lscalatags_JsDom$TypedTag.prototype = new $h_O();
$c_Lscalatags_JsDom$TypedTag.prototype.constructor = $c_Lscalatags_JsDom$TypedTag;
/** @constructor */
function $h_Lscalatags_JsDom$TypedTag() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$TypedTag.prototype = $c_Lscalatags_JsDom$TypedTag.prototype;
$c_Lscalatags_JsDom$TypedTag.prototype.render__Lorg_scalajs_dom_raw_Element = (function() {
  var elem = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createElementNS(this.Lscalatags_JsDom$TypedTag__f_namespace.uri__T(), this.Lscalatags_JsDom$TypedTag__f_tag);
  $f_Lscalatags_generic_TypedTag__build__O__V(this, elem);
  return elem
});
$c_Lscalatags_JsDom$TypedTag.prototype.apply__sc_Seq__Lscalatags_JsDom$TypedTag = (function(xs) {
  var x$1 = this.Lscalatags_JsDom$TypedTag__f_tag;
  var x$2 = this.Lscalatags_JsDom$TypedTag__f_void;
  var this$1 = this.Lscalatags_JsDom$TypedTag__f_modifiers;
  var x$3 = new $c_sci_$colon$colon(xs, this$1);
  var x$4 = this.Lscalatags_JsDom$TypedTag__f_namespace;
  return new $c_Lscalatags_JsDom$TypedTag(x$1, x$3, x$2, x$4)
});
$c_Lscalatags_JsDom$TypedTag.prototype.toString__T = (function() {
  return $as_T(this.render__Lorg_scalajs_dom_raw_Element().outerHTML)
});
$c_Lscalatags_JsDom$TypedTag.prototype.productPrefix__T = (function() {
  return "TypedTag"
});
$c_Lscalatags_JsDom$TypedTag.prototype.productArity__I = (function() {
  return 4
});
$c_Lscalatags_JsDom$TypedTag.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lscalatags_JsDom$TypedTag__f_tag;
      break
    }
    case 1: {
      return this.Lscalatags_JsDom$TypedTag__f_modifiers;
      break
    }
    case 2: {
      return this.Lscalatags_JsDom$TypedTag__f_void;
      break
    }
    case 3: {
      return this.Lscalatags_JsDom$TypedTag__f_namespace;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_Lscalatags_JsDom$TypedTag.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lscalatags_JsDom$TypedTag.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var x = this.Lscalatags_JsDom$TypedTag__f_tag;
  var data = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x$1 = this.Lscalatags_JsDom$TypedTag__f_modifiers;
  var data$1 = $m_sr_Statics$().anyHash__O__I(x$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var data$2 = (this.Lscalatags_JsDom$TypedTag__f_void ? 1231 : 1237);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var x$2 = this.Lscalatags_JsDom$TypedTag__f_namespace;
  var data$3 = $m_sr_Statics$().anyHash__O__I(x$2);
  acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 4)
});
$c_Lscalatags_JsDom$TypedTag.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lscalatags_JsDom$TypedTag)) {
    var TypedTag$1 = $as_Lscalatags_JsDom$TypedTag(x$1);
    if ((this.Lscalatags_JsDom$TypedTag__f_tag === TypedTag$1.Lscalatags_JsDom$TypedTag__f_tag)) {
      var x = this.Lscalatags_JsDom$TypedTag__f_modifiers;
      var x$2 = TypedTag$1.Lscalatags_JsDom$TypedTag__f_modifiers;
      var $$x1 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      var $$x1 = false
    };
    if (($$x1 && (this.Lscalatags_JsDom$TypedTag__f_void === TypedTag$1.Lscalatags_JsDom$TypedTag__f_void))) {
      var x$3 = this.Lscalatags_JsDom$TypedTag__f_namespace;
      var x$4 = TypedTag$1.Lscalatags_JsDom$TypedTag__f_namespace;
      return (x$3 === x$4)
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Lscalatags_JsDom$TypedTag.prototype.applyTo__O__V = (function(t) {
  $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_raw_Element__V(this, t)
});
$c_Lscalatags_JsDom$TypedTag.prototype.render__Lorg_scalajs_dom_raw_Node = (function() {
  return this.render__Lorg_scalajs_dom_raw_Element()
});
function $as_Lscalatags_JsDom$TypedTag(obj) {
  return (((obj instanceof $c_Lscalatags_JsDom$TypedTag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$TypedTag"))
}
function $isArrayOf_Lscalatags_JsDom$TypedTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_JsDom$TypedTag)))
}
function $asArrayOf_Lscalatags_JsDom$TypedTag(obj, depth) {
  return (($isArrayOf_Lscalatags_JsDom$TypedTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.JsDom$TypedTag;", depth))
}
var $d_Lscalatags_JsDom$TypedTag = new $TypeData().initClass({
  Lscalatags_JsDom$TypedTag: 0
}, false, "scalatags.JsDom$TypedTag", {
  Lscalatags_JsDom$TypedTag: 1,
  O: 1,
  Lscalatags_generic_TypedTag: 1,
  Lscalatags_generic_Frag: 1,
  Lscalatags_generic_Modifier: 1,
  Lscalatags_jsdom_Frag: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$TypedTag.prototype.$classData = $d_Lscalatags_JsDom$TypedTag;
/** @constructor */
function $c_Lobservatory_Implicits$() {
  this.Lobservatory_Implicits$__f_bindJsAny$module = null;
  this.Lobservatory_Implicits$__f_RawFrag = null;
  this.Lobservatory_Implicits$__f_StringFrag = null;
  this.Lobservatory_Implicits$__f_HtmlTag = null;
  this.Lobservatory_Implicits$__f_SvgTag = null;
  this.Lobservatory_Implicits$__f_Tag = null;
  this.Lobservatory_Implicits$__f_stringAttr = null;
  this.Lobservatory_Implicits$__f_booleanAttr = null;
  this.Lobservatory_Implicits$__f_byteAttr = null;
  this.Lobservatory_Implicits$__f_shortAttr = null;
  this.Lobservatory_Implicits$__f_intAttr = null;
  this.Lobservatory_Implicits$__f_longAttr = null;
  this.Lobservatory_Implicits$__f_floatAttr = null;
  this.Lobservatory_Implicits$__f_doubleAttr = null;
  this.Lobservatory_Implicits$__f_stringStyle = null;
  this.Lobservatory_Implicits$__f_booleanStyle = null;
  this.Lobservatory_Implicits$__f_byteStyle = null;
  this.Lobservatory_Implicits$__f_shortStyle = null;
  this.Lobservatory_Implicits$__f_intStyle = null;
  this.Lobservatory_Implicits$__f_longStyle = null;
  this.Lobservatory_Implicits$__f_floatStyle = null;
  this.Lobservatory_Implicits$__f_doubleStyle = null;
  this.Lobservatory_Implicits$__f_stringPixelStyle = null;
  this.Lobservatory_Implicits$__f_booleanPixelStyle = null;
  this.Lobservatory_Implicits$__f_bytePixelStyle = null;
  this.Lobservatory_Implicits$__f_shortPixelStyle = null;
  this.Lobservatory_Implicits$__f_intPixelStyle = null;
  this.Lobservatory_Implicits$__f_longPixelStyle = null;
  this.Lobservatory_Implicits$__f_floatPixelStyle = null;
  this.Lobservatory_Implicits$__f_doublePixelStyle = null;
  $n_Lobservatory_Implicits$ = this;
  $f_Lscalatags_generic_Aggregate__$init$__V(this);
  $f_Lscalatags_JsDom$Aggregate__$init$__V(this)
}
$c_Lobservatory_Implicits$.prototype = new $h_O();
$c_Lobservatory_Implicits$.prototype.constructor = $c_Lobservatory_Implicits$;
/** @constructor */
function $h_Lobservatory_Implicits$() {
  /*<skip>*/
}
$h_Lobservatory_Implicits$.prototype = $c_Lobservatory_Implicits$.prototype;
var $d_Lobservatory_Implicits$ = new $TypeData().initClass({
  Lobservatory_Implicits$: 0
}, false, "observatory.Implicits$", {
  Lobservatory_Implicits$: 1,
  O: 1,
  Lscalatags_JsDom$Cap: 1,
  Lscalatags_generic_Util: 1,
  Lscalatags_generic_LowPriUtil: 1,
  Lscalatags_jsdom_TagFactory: 1,
  Lscalatags_JsDom$Aggregate: 1,
  Lscalatags_generic_Aggregate: 1,
  Lscalatags_generic_Aliases: 1,
  Lscalatags_DataConverters: 1,
  Lscalatags_LowPriorityImplicits: 1
});
$c_Lobservatory_Implicits$.prototype.$classData = $d_Lobservatory_Implicits$;
var $n_Lobservatory_Implicits$;
function $m_Lobservatory_Implicits$() {
  if ((!$n_Lobservatory_Implicits$)) {
    $n_Lobservatory_Implicits$ = new $c_Lobservatory_Implicits$()
  };
  return $n_Lobservatory_Implicits$
}
function $f_sc_IterableLike__take__I__O($thiz, n) {
  var b = $thiz.newBuilder__scm_Builder();
  if ((n <= 0)) {
    return b.result__O()
  } else {
    b.sizeHintBounded__I__sc_TraversableLike__V(n, $thiz);
    var i = 0;
    var it = $thiz.iterator__sc_Iterator();
    while (((i < n) && it.hasNext__Z())) {
      b.$plus$eq__O__scm_Builder(it.next__O());
      i = ((1 + i) | 0)
    };
    return b.result__O()
  }
}
function $f_sc_IterableLike__copyToArray__O__I__I__V($thiz, xs, start, len) {
  var i = start;
  var x = ((start + len) | 0);
  var that = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  var end = ((x < that) ? x : that);
  var it = $thiz.iterator__sc_Iterator();
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  }
}
function $f_sc_IterableLike__sameElements__sc_GenIterable__Z($thiz, that) {
  if (($thiz === that)) {
    return true
  } else {
    if ((that instanceof $c_sci_Vector)) {
      var x2 = $as_sci_Vector(that);
      if (($thiz instanceof $c_sci_Vector)) {
        var thisVector = $as_sci_Vector($thiz);
        if ((thisVector === x2)) {
          return true
        } else {
          var equal = (thisVector.length__I() === x2.length__I());
          if (equal) {
            var length = x2.length__I();
            var index = 0;
            while (((index < length) && equal)) {
              equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisVector.apply__I__O(index), x2.apply__I__O(index));
              index = ((1 + index) | 0)
            }
          };
          return equal
        }
      }
    };
    if ($is_sc_GenSet(that)) {
      var x3 = $as_sc_GenSet(that);
      if ($is_sc_GenSetLike($thiz)) {
        var thisSet = $as_sc_GenSetLike($thiz);
        return ((thisSet.size__I() === x3.size__I()) && thisSet.subsetOf__sc_GenSet__Z(x3))
      }
    };
    var these = $thiz.iterator__sc_Iterator();
    var those = that.iterator__sc_Iterator();
    while ((these.hasNext__Z() && those.hasNext__Z())) {
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(these.next__O(), those.next__O()))) {
        return false
      }
    };
    return ((!these.hasNext__Z()) && (!those.hasNext__Z()))
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  this.sci_Vector$__f_NIL = null;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
  $ct_scg_GenTraversableFactory__(this);
  $n_sci_Vector$ = this;
  this.sci_Vector$__f_NIL = new $c_sci_Vector(0, 0, 0);
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_VectorIterator(0, 0)
}
$c_sci_Vector$.prototype = new $h_scg_IndexedSeqFactory();
$c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
  /*<skip>*/
}
$h_sci_Vector$.prototype = $c_sci_Vector$.prototype;
$c_sci_Vector$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_VectorBuilder()
});
$c_sci_Vector$.prototype.empty__sc_GenTraversable = (function() {
  return this.sci_Vector$__f_NIL
});
var $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  scg_IndexedSeqFactory: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
  var prefix = $m_s_None$();
  var typeArguments = $m_sci_Nil$();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
}
$c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $c_s_reflect_ManifestFactory$AnyManifest$.prototype;
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyManifest$", {
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyManifest$;
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyValManifest$() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "AnyVal";
  var prefix = $m_s_None$();
  var typeArguments = $m_sci_Nil$();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
}
$c_s_reflect_ManifestFactory$AnyValManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyValManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyValManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyValManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$AnyValManifest$.prototype = $c_s_reflect_ManifestFactory$AnyValManifest$.prototype;
var $d_s_reflect_ManifestFactory$AnyValManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyValManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyValManifest$", {
  s_reflect_ManifestFactory$AnyValManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyValManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyValManifest$;
var $n_s_reflect_ManifestFactory$AnyValManifest$;
function $m_s_reflect_ManifestFactory$AnyValManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyValManifest$)) {
    $n_s_reflect_ManifestFactory$AnyValManifest$ = new $c_s_reflect_ManifestFactory$AnyValManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyValManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
  var prefix = $m_s_None$();
  var typeArguments = $m_sci_Nil$();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Nothing$.getClassOf();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
}
$c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $c_s_reflect_ManifestFactory$NothingManifest$.prototype;
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NothingManifest$: 0
}, false, "scala.reflect.ManifestFactory$NothingManifest$", {
  s_reflect_ManifestFactory$NothingManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NothingManifest$;
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$()
  };
  return $n_s_reflect_ManifestFactory$NothingManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null";
  var prefix = $m_s_None$();
  var typeArguments = $m_sci_Nil$();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Null$.getClassOf();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
}
$c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$NullManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $c_s_reflect_ManifestFactory$NullManifest$.prototype;
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NullManifest$: 0
}, false, "scala.reflect.ManifestFactory$NullManifest$", {
  s_reflect_ManifestFactory$NullManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NullManifest$;
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$()
  };
  return $n_s_reflect_ManifestFactory$NullManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
  var prefix = $m_s_None$();
  var typeArguments = $m_sci_Nil$();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
}
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ObjectManifest$: 0
}, false, "scala.reflect.ManifestFactory$ObjectManifest$", {
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ObjectManifest$;
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$()
  };
  return $n_s_reflect_ManifestFactory$ObjectManifest$
}
/** @constructor */
function $c_sc_AbstractTraversable() {
  /*<skip>*/
}
$c_sc_AbstractTraversable.prototype = new $h_O();
$c_sc_AbstractTraversable.prototype.constructor = $c_sc_AbstractTraversable;
/** @constructor */
function $h_sc_AbstractTraversable() {
  /*<skip>*/
}
$h_sc_AbstractTraversable.prototype = $c_sc_AbstractTraversable.prototype;
$c_sc_AbstractTraversable.prototype.newBuilder__scm_Builder = (function() {
  return this.companion__scg_GenericCompanion().newBuilder__scm_Builder()
});
$c_sc_AbstractTraversable.prototype.repr__O = (function() {
  return this
});
$c_sc_AbstractTraversable.prototype.map__F1__scg_CanBuildFrom__O = (function(f, bf) {
  return $f_sc_TraversableLike__map__F1__scg_CanBuildFrom__O(this, f, bf)
});
$c_sc_AbstractTraversable.prototype.stringPrefix__T = (function() {
  return $f_sc_TraversableLike__stringPrefix__T(this)
});
$c_sc_AbstractTraversable.prototype.withFilter__F1__scg_FilterMonadic = (function(p) {
  return new $c_sc_TraversableLike$WithFilter(this, p)
});
$c_sc_AbstractTraversable.prototype.$div$colon__O__F2__O = (function(z, op) {
  return this.foldLeft__O__F2__O(z, op)
});
$c_sc_AbstractTraversable.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_TraversableOnce__foldLeft__O__F2__O(this, z, op)
});
$c_sc_AbstractTraversable.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_TraversableOnce__reduceLeft__F2__O(this, op)
});
$c_sc_AbstractTraversable.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
});
$c_sc_AbstractTraversable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractTraversable.prototype.sizeHintIfCheap__I = (function() {
  return (-1)
});
function $is_sc_GenMap(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenMap)))
}
function $as_sc_GenMap(obj) {
  return (($is_sc_GenMap(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenMap"))
}
function $isArrayOf_sc_GenMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenMap)))
}
function $asArrayOf_sc_GenMap(obj, depth) {
  return (($isArrayOf_sc_GenMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenMap;", depth))
}
function $is_sc_GenSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSeq)))
}
function $as_sc_GenSeq(obj) {
  return (($is_sc_GenSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSeq"))
}
function $isArrayOf_sc_GenSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSeq)))
}
function $asArrayOf_sc_GenSeq(obj, depth) {
  return (($isArrayOf_sc_GenSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSeq;", depth))
}
/** @constructor */
function $c_s_math_Numeric$IntIsIntegral$() {
  /*<skip>*/
}
$c_s_math_Numeric$IntIsIntegral$.prototype = new $h_O();
$c_s_math_Numeric$IntIsIntegral$.prototype.constructor = $c_s_math_Numeric$IntIsIntegral$;
/** @constructor */
function $h_s_math_Numeric$IntIsIntegral$() {
  /*<skip>*/
}
$h_s_math_Numeric$IntIsIntegral$.prototype = $c_s_math_Numeric$IntIsIntegral$.prototype;
$c_s_math_Numeric$IntIsIntegral$.prototype.lteq__O__O__Z = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y)
});
$c_s_math_Numeric$IntIsIntegral$.prototype.gteq__O__O__Z = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y)
});
$c_s_math_Numeric$IntIsIntegral$.prototype.compare__O__O__I = (function(x, y) {
  var x$1 = $uI(x);
  var y$1 = $uI(y);
  return ((x$1 === y$1) ? 0 : ((x$1 < y$1) ? (-1) : 1))
});
var $d_s_math_Numeric$IntIsIntegral$ = new $TypeData().initClass({
  s_math_Numeric$IntIsIntegral$: 0
}, false, "scala.math.Numeric$IntIsIntegral$", {
  s_math_Numeric$IntIsIntegral$: 1,
  O: 1,
  s_math_Numeric$IntIsIntegral: 1,
  s_math_Integral: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordering$IntOrdering: 1
});
$c_s_math_Numeric$IntIsIntegral$.prototype.$classData = $d_s_math_Numeric$IntIsIntegral$;
var $n_s_math_Numeric$IntIsIntegral$;
function $m_s_math_Numeric$IntIsIntegral$() {
  if ((!$n_s_math_Numeric$IntIsIntegral$)) {
    $n_s_math_Numeric$IntIsIntegral$ = new $c_s_math_Numeric$IntIsIntegral$()
  };
  return $n_s_math_Numeric$IntIsIntegral$
}
function $f_sc_SeqLike__lengthCompare__I__I($thiz, len) {
  if ((len < 0)) {
    return 1
  } else {
    var i = 0;
    var it = $thiz.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      if ((i === len)) {
        return (it.hasNext__Z() ? 1 : 0)
      };
      it.next__O();
      i = ((1 + i) | 0)
    };
    return ((i - len) | 0)
  }
}
function $f_sc_SeqLike__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
}
function $f_sc_SeqLike__reverse__O($thiz) {
  var elem = $m_sci_Nil$();
  var xs = new $c_sr_ObjectRef(elem);
  $thiz.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$2, xs$1) => ((x$2) => {
    var this$3 = $as_sci_List(xs$1.sr_ObjectRef__f_elem);
    xs$1.sr_ObjectRef__f_elem = new $c_sci_$colon$colon(x$2, this$3)
  }))($thiz, xs)));
  var b = $thiz.newBuilder__scm_Builder();
  $f_scm_Builder__sizeHint__sc_TraversableLike__V(b, $thiz);
  var this$4 = $as_sci_List(xs.sr_ObjectRef__f_elem);
  var these = this$4;
  while ((!these.isEmpty__Z())) {
    var arg1 = these.head__O();
    b.$plus$eq__O__scm_Builder(arg1);
    var this$5 = these;
    these = this$5.tail__sci_List()
  };
  return b.result__O()
}
function $is_sc_GenSet(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSet)))
}
function $as_sc_GenSet(obj) {
  return (($is_sc_GenSet(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSet"))
}
function $isArrayOf_sc_GenSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSet)))
}
function $asArrayOf_sc_GenSet(obj, depth) {
  return (($isArrayOf_sc_GenSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSet;", depth))
}
function $f_sc_IndexedSeqLike__iterator__sc_Iterator($thiz) {
  var len = $thiz.length__I();
  return ((len === 0) ? $m_sc_Iterator$().sc_Iterator$__f_empty : new $c_sc_IndexedSeqLike$Elements($thiz, 0, $thiz.length__I()))
}
function $is_sc_IndexedSeqLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeqLike)))
}
function $as_sc_IndexedSeqLike(obj) {
  return (($is_sc_IndexedSeqLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeqLike"))
}
function $isArrayOf_sc_IndexedSeqLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeqLike)))
}
function $asArrayOf_sc_IndexedSeqLike(obj, depth) {
  return (($isArrayOf_sc_IndexedSeqLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeqLike;", depth))
}
function $f_sc_LinearSeqLike__iterator__sc_Iterator($thiz) {
  return ($thiz.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_empty : new $c_sc_LinearSeqLike$$anon$1($thiz))
}
function $is_sc_LinearSeqLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqLike)))
}
function $as_sc_LinearSeqLike(obj) {
  return (($is_sc_LinearSeqLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqLike"))
}
function $isArrayOf_sc_LinearSeqLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqLike)))
}
function $asArrayOf_sc_LinearSeqLike(obj, depth) {
  return (($isArrayOf_sc_LinearSeqLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqLike;", depth))
}
function $f_sc_IndexedSeqOptimized__isEmpty__Z($thiz) {
  return ($thiz.length__I() === 0)
}
function $f_sc_IndexedSeqOptimized__foreach__F1__V($thiz, f) {
  var i = 0;
  var len = $thiz.length__I();
  while ((i < len)) {
    f.apply__O__O($thiz.apply__I__O(i));
    i = ((1 + i) | 0)
  }
}
function $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O($thiz, start, end, z, op) {
  while (true) {
    if ((start === end)) {
      return z
    } else {
      var temp$start = ((1 + start) | 0);
      var temp$z = op.apply__O__O__O(z, $thiz.apply__I__O(start));
      start = temp$start;
      z = temp$z
    }
  }
}
function $f_sc_IndexedSeqOptimized__reduceLeft__F2__O($thiz, op) {
  return (($thiz.length__I() > 0) ? $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O($thiz, 1, $thiz.length__I(), $thiz.apply__I__O(0), op) : $f_sc_TraversableOnce__reduceLeft__F2__O($thiz, op))
}
function $f_sc_IndexedSeqOptimized__head__O($thiz) {
  return ($thiz.isEmpty__Z() ? $f_sc_IndexedSeqLike__iterator__sc_Iterator($thiz).next__O() : $thiz.apply__I__O(0))
}
function $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z($thiz, that) {
  if ($is_sc_IndexedSeq(that)) {
    var x2 = $as_sc_IndexedSeq(that);
    var len = $thiz.length__I();
    if ((len === x2.length__I())) {
      var i = 0;
      while (((i < len) && $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(i), x2.apply__I__O(i)))) {
        i = ((1 + i) | 0)
      };
      return (i === len)
    } else {
      return false
    }
  } else {
    return $f_sc_IterableLike__sameElements__sc_GenIterable__Z($thiz, that)
  }
}
function $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V($thiz, xs, start, len) {
  var i = 0;
  var j = start;
  var x = $thiz.length__I();
  var x$1 = ((x < len) ? x : len);
  var that = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  var end = ((x$1 < that) ? x$1 : that);
  while ((i < end)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, j, $thiz.apply__I__O(i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
}
function $f_sc_IndexedSeqOptimized__lengthCompare__I__I($thiz, len) {
  return (($thiz.length__I() - len) | 0)
}
function $f_sc_IndexedSeqOptimized__reverse__O($thiz) {
  var b = $thiz.newBuilder__scm_Builder();
  b.sizeHint__I__V($thiz.length__I());
  var i = $thiz.length__I();
  while ((i > 0)) {
    i = (((-1) + i) | 0);
    b.$plus$eq__O__scm_Builder($thiz.apply__I__O(i))
  };
  return b.result__O()
}
function $f_sc_LinearSeqOptimized__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sc_LinearSeqOptimized(these.tail__O())
  };
  return len
}
function $f_sc_LinearSeqOptimized__apply__I__O($thiz, n) {
  var rest = $thiz.drop__I__sc_LinearSeqOptimized(n);
  if (((n < 0) || rest.isEmpty__Z())) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return rest.head__O()
}
function $f_sc_LinearSeqOptimized__foldLeft__O__F2__O($thiz, z, op) {
  var acc = z;
  var these = $thiz;
  while ((!these.isEmpty__Z())) {
    acc = op.apply__O__O__O(acc, these.head__O());
    these = $as_sc_LinearSeqOptimized(these.tail__O())
  };
  return acc
}
function $f_sc_LinearSeqOptimized__reduceLeft__F2__O($thiz, op) {
  if ($thiz.isEmpty__Z()) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft")
  } else {
    return $as_sc_LinearSeqOptimized($thiz.tail__O()).foldLeft__O__F2__O($thiz.head__O(), op)
  }
}
function $f_sc_LinearSeqOptimized__last__O($thiz) {
  if ($thiz.isEmpty__Z()) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
  };
  var these = $thiz;
  var nx = $as_sc_LinearSeqOptimized(these.tail__O());
  while ((!nx.isEmpty__Z())) {
    these = nx;
    nx = $as_sc_LinearSeqOptimized(nx.tail__O())
  };
  return these.head__O()
}
function $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    if (($thiz === x2)) {
      return true
    } else {
      var these = $thiz;
      var those = x2;
      while ((((!these.isEmpty__Z()) && (!those.isEmpty__Z())) && $m_sr_BoxesRunTime$().equals__O__O__Z(these.head__O(), those.head__O()))) {
        these = $as_sc_LinearSeqOptimized(these.tail__O());
        those = $as_sc_LinearSeq(those.tail__O())
      };
      return (these.isEmpty__Z() && those.isEmpty__Z())
    }
  } else {
    return $f_sc_IterableLike__sameElements__sc_GenIterable__Z($thiz, that)
  }
}
function $f_sc_LinearSeqOptimized__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOptimized__loop$1__I__sc_LinearSeqOptimized__I__I($thiz, 0, $thiz, len))
}
function $p_sc_LinearSeqOptimized__loop$1__I__sc_LinearSeqOptimized__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sc_LinearSeqOptimized(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $is_sc_LinearSeqOptimized(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqOptimized)))
}
function $as_sc_LinearSeqOptimized(obj) {
  return (($is_sc_LinearSeqOptimized(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqOptimized"))
}
function $isArrayOf_sc_LinearSeqOptimized(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqOptimized)))
}
function $asArrayOf_sc_LinearSeqOptimized(obj, depth) {
  return (($isArrayOf_sc_LinearSeqOptimized(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqOptimized;", depth))
}
function $f_sc_SetLike__isEmpty__Z($thiz) {
  return ($thiz.size__I() === 0)
}
function $f_sc_MapLike__isEmpty__Z($thiz) {
  return ($thiz.size__I() === 0)
}
function $f_sc_MapLike__getOrElse__O__F0__O($thiz, key, default$1) {
  var x1 = $thiz.get__O__s_Option(key);
  if ((x1 instanceof $c_s_Some)) {
    var x2 = $as_s_Some(x1);
    var v = x2.s_Some__f_value;
    return v
  } else {
    var x = $m_s_None$();
    if ((x === x1)) {
      return default$1.apply__O()
    } else {
      throw new $c_s_MatchError(x1)
    }
  }
}
function $f_sc_MapLike__apply__O__O($thiz, key) {
  var x1 = $thiz.get__O__s_Option(key);
  var x = $m_s_None$();
  if ((x === x1)) {
    return $f_sc_MapLike__default__O__O($thiz, key)
  } else if ((x1 instanceof $c_s_Some)) {
    var x2 = $as_s_Some(x1);
    var value = x2.s_Some__f_value;
    return value
  } else {
    throw new $c_s_MatchError(x1)
  }
}
function $f_sc_MapLike__contains__O__Z($thiz, key) {
  var this$1 = $thiz.get__O__s_Option(key);
  return (!this$1.isEmpty__Z())
}
function $f_sc_MapLike__default__O__O($thiz, key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
}
function $f_sc_MapLike__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var this$3 = $thiz.iterator__sc_Iterator();
  var f = new $c_sjsr_AnonFunction1(((this$1) => ((x0$1$2) => {
    var x0$1 = $as_T2(x0$1$2);
    if ((x0$1 !== null)) {
      var k = x0$1.T2__f__1;
      var v = x0$1.T2__f__2;
      return (("" + $m_s_Predef$any2stringadd$().$plus$extension__O__T__T(k, " -> ")) + v)
    } else {
      throw new $c_s_MatchError(x0$1)
    }
  }))($thiz));
  var this$4 = new $c_sc_Iterator$$anon$10(this$3, f);
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$4, b, start, sep, end)
}
function $p_Lscalatags_JsDom$attrs$__onchange$lzycompute__Lscalatags_generic_Attr($thiz) {
  var b = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$0;
  var lo = (33554432 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lscalatags_JsDom$attrs$__f_onchange = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "onchange", null, false);
    var b$1 = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$0;
    var lo$1 = (33554432 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$attrs$__f_bitmap$0 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$attrs$__f_onchange
}
function $p_Lscalatags_JsDom$attrs$__onclick$lzycompute__Lscalatags_generic_Attr($thiz) {
  var b = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$0;
  var hi = (131072 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$attrs$__f_onclick = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "onclick", null, false);
    var b$1 = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$0;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (131072 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$attrs$__f_bitmap$0 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$attrs$__f_onclick
}
function $p_Lscalatags_JsDom$attrs$__checked$lzycompute__Lscalatags_generic_AttrPair($thiz) {
  var b = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1;
  var hi = (4 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$attrs$__f_checked = $f_Lscalatags_generic_InputAttrs__checked__Lscalatags_generic_AttrPair($thiz);
    var b$1 = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (4 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$attrs$__f_checked
}
function $p_Lscalatags_JsDom$attrs$__max$lzycompute__Lscalatags_generic_Attr($thiz) {
  var b = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1;
  var hi = (4096 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$attrs$__f_max = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "max", null, false);
    var b$1 = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (4096 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$attrs$__f_max
}
function $p_Lscalatags_JsDom$attrs$__min$lzycompute__Lscalatags_generic_Attr($thiz) {
  var b = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1;
  var hi = (8192 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$attrs$__f_min = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "min", null, false);
    var b$1 = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (8192 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$attrs$__f_min
}
function $p_Lscalatags_JsDom$attrs$__name$lzycompute__Lscalatags_generic_Attr($thiz) {
  var b = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1;
  var hi = (262144 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$attrs$__f_name = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "name", null, false);
    var b$1 = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (262144 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$attrs$__f_name
}
function $p_Lscalatags_JsDom$attrs$__type$lzycompute__Lscalatags_generic_Attr($thiz) {
  var b = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1;
  var hi = (67108864 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$attrs$__f_type = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "type", null, false);
    var b$1 = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (67108864 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$attrs$__f_type
}
function $p_Lscalatags_JsDom$attrs$__value$lzycompute__Lscalatags_generic_Attr($thiz) {
  var b = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1;
  var hi = (268435456 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$attrs$__f_value = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "value", null, false);
    var b$1 = $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (268435456 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$attrs$__f_bitmap$1 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$attrs$__f_value
}
/** @constructor */
function $c_Lscalatags_JsDom$attrs$() {
  this.Lscalatags_JsDom$attrs$__f_href = null;
  this.Lscalatags_JsDom$attrs$__f_alt = null;
  this.Lscalatags_JsDom$attrs$__f_rel = null;
  this.Lscalatags_JsDom$attrs$__f_src = null;
  this.Lscalatags_JsDom$attrs$__f_xmlns = null;
  this.Lscalatags_JsDom$attrs$__f_accept = null;
  this.Lscalatags_JsDom$attrs$__f_charset = null;
  this.Lscalatags_JsDom$attrs$__f_disabled = null;
  this.Lscalatags_JsDom$attrs$__f_for = null;
  this.Lscalatags_JsDom$attrs$__f_rows = null;
  this.Lscalatags_JsDom$attrs$__f_cols = null;
  this.Lscalatags_JsDom$attrs$__f_role = null;
  this.Lscalatags_JsDom$attrs$__f_content = null;
  this.Lscalatags_JsDom$attrs$__f_httpEquiv = null;
  this.Lscalatags_JsDom$attrs$__f_media = null;
  this.Lscalatags_JsDom$attrs$__f_colspan = null;
  this.Lscalatags_JsDom$attrs$__f_rowspan = null;
  this.Lscalatags_JsDom$attrs$__f_wrap = null;
  this.Lscalatags_JsDom$attrs$__f_defer = null;
  this.Lscalatags_JsDom$attrs$__f_aria$module = null;
  this.Lscalatags_JsDom$attrs$__f_scoped = null;
  this.Lscalatags_JsDom$attrs$__f_high = null;
  this.Lscalatags_JsDom$attrs$__f_low = null;
  this.Lscalatags_JsDom$attrs$__f_optimum = null;
  this.Lscalatags_JsDom$attrs$__f_unselectable = null;
  this.Lscalatags_JsDom$attrs$__f_onblur = null;
  this.Lscalatags_JsDom$attrs$__f_onchange = null;
  this.Lscalatags_JsDom$attrs$__f_onfocus = null;
  this.Lscalatags_JsDom$attrs$__f_onselect = null;
  this.Lscalatags_JsDom$attrs$__f_onsubmit = null;
  this.Lscalatags_JsDom$attrs$__f_onreset = null;
  this.Lscalatags_JsDom$attrs$__f_oncontextmenu = null;
  this.Lscalatags_JsDom$attrs$__f_oninput = null;
  this.Lscalatags_JsDom$attrs$__f_oninvalid = null;
  this.Lscalatags_JsDom$attrs$__f_onsearch = null;
  this.Lscalatags_JsDom$attrs$__f_selected = null;
  this.Lscalatags_JsDom$attrs$__f_onload = null;
  this.Lscalatags_JsDom$attrs$__f_onafterprint = null;
  this.Lscalatags_JsDom$attrs$__f_onbeforeprint = null;
  this.Lscalatags_JsDom$attrs$__f_onbeforeunload = null;
  this.Lscalatags_JsDom$attrs$__f_onhashchange = null;
  this.Lscalatags_JsDom$attrs$__f_onmessage = null;
  this.Lscalatags_JsDom$attrs$__f_onoffline = null;
  this.Lscalatags_JsDom$attrs$__f_ononline = null;
  this.Lscalatags_JsDom$attrs$__f_onpagehide = null;
  this.Lscalatags_JsDom$attrs$__f_onpageshow = null;
  this.Lscalatags_JsDom$attrs$__f_onpopstate = null;
  this.Lscalatags_JsDom$attrs$__f_onresize = null;
  this.Lscalatags_JsDom$attrs$__f_onstorage = null;
  this.Lscalatags_JsDom$attrs$__f_onunload = null;
  this.Lscalatags_JsDom$attrs$__f_onclick = null;
  this.Lscalatags_JsDom$attrs$__f_ondblclick = null;
  this.Lscalatags_JsDom$attrs$__f_ondrag = null;
  this.Lscalatags_JsDom$attrs$__f_ondragend = null;
  this.Lscalatags_JsDom$attrs$__f_ondragenter = null;
  this.Lscalatags_JsDom$attrs$__f_ondragleave = null;
  this.Lscalatags_JsDom$attrs$__f_ondragover = null;
  this.Lscalatags_JsDom$attrs$__f_ondragstart = null;
  this.Lscalatags_JsDom$attrs$__f_ondrop = null;
  this.Lscalatags_JsDom$attrs$__f_onmousedown = null;
  this.Lscalatags_JsDom$attrs$__f_onmousemove = null;
  this.Lscalatags_JsDom$attrs$__f_onmouseout = null;
  this.Lscalatags_JsDom$attrs$__f_onmouseover = null;
  this.Lscalatags_JsDom$attrs$__f_onmouseup = null;
  this.Lscalatags_JsDom$attrs$__f_onscroll = null;
  this.Lscalatags_JsDom$attrs$__f_onwheel = null;
  this.Lscalatags_JsDom$attrs$__f_onkeydown = null;
  this.Lscalatags_JsDom$attrs$__f_onkeyup = null;
  this.Lscalatags_JsDom$attrs$__f_onkeypress = null;
  this.Lscalatags_JsDom$attrs$__f_onshow = null;
  this.Lscalatags_JsDom$attrs$__f_ontoggle = null;
  this.Lscalatags_JsDom$attrs$__f_onabort = null;
  this.Lscalatags_JsDom$attrs$__f_oncanplay = null;
  this.Lscalatags_JsDom$attrs$__f_oncanplaythrough = null;
  this.Lscalatags_JsDom$attrs$__f_oncuechange = null;
  this.Lscalatags_JsDom$attrs$__f_ondurationchange = null;
  this.Lscalatags_JsDom$attrs$__f_onemptied = null;
  this.Lscalatags_JsDom$attrs$__f_onended = null;
  this.Lscalatags_JsDom$attrs$__f_onloadeddata = null;
  this.Lscalatags_JsDom$attrs$__f_onloadedmetadata = null;
  this.Lscalatags_JsDom$attrs$__f_onloadstart = null;
  this.Lscalatags_JsDom$attrs$__f_onpause = null;
  this.Lscalatags_JsDom$attrs$__f_onplay = null;
  this.Lscalatags_JsDom$attrs$__f_onplaying = null;
  this.Lscalatags_JsDom$attrs$__f_onprogress = null;
  this.Lscalatags_JsDom$attrs$__f_onratechange = null;
  this.Lscalatags_JsDom$attrs$__f_onseeked = null;
  this.Lscalatags_JsDom$attrs$__f_onseeking = null;
  this.Lscalatags_JsDom$attrs$__f_onstalled = null;
  this.Lscalatags_JsDom$attrs$__f_onsuspend = null;
  this.Lscalatags_JsDom$attrs$__f_ontimeupdate = null;
  this.Lscalatags_JsDom$attrs$__f_onvolumechange = null;
  this.Lscalatags_JsDom$attrs$__f_onwaiting = null;
  this.Lscalatags_JsDom$attrs$__f_onerror = null;
  this.Lscalatags_JsDom$attrs$__f_oncopy = null;
  this.Lscalatags_JsDom$attrs$__f_oncut = null;
  this.Lscalatags_JsDom$attrs$__f_onpaste = null;
  this.Lscalatags_JsDom$attrs$__f_action = null;
  this.Lscalatags_JsDom$attrs$__f_autocomplete = null;
  this.Lscalatags_JsDom$attrs$__f_autofocus = null;
  this.Lscalatags_JsDom$attrs$__f_checked = null;
  this.Lscalatags_JsDom$attrs$__f_enctype = null;
  this.Lscalatags_JsDom$attrs$__f_formA = null;
  this.Lscalatags_JsDom$attrs$__f_formaction = null;
  this.Lscalatags_JsDom$attrs$__f_formenctype = null;
  this.Lscalatags_JsDom$attrs$__f_formmethod = null;
  this.Lscalatags_JsDom$attrs$__f_formnovalidate = null;
  this.Lscalatags_JsDom$attrs$__f_formtarget = null;
  this.Lscalatags_JsDom$attrs$__f_heightA = null;
  this.Lscalatags_JsDom$attrs$__f_list = null;
  this.Lscalatags_JsDom$attrs$__f_max = null;
  this.Lscalatags_JsDom$attrs$__f_min = null;
  this.Lscalatags_JsDom$attrs$__f_multiple = null;
  this.Lscalatags_JsDom$attrs$__f_minlength = null;
  this.Lscalatags_JsDom$attrs$__f_maxlength = null;
  this.Lscalatags_JsDom$attrs$__f_method = null;
  this.Lscalatags_JsDom$attrs$__f_name = null;
  this.Lscalatags_JsDom$attrs$__f_pattern = null;
  this.Lscalatags_JsDom$attrs$__f_placeholder = null;
  this.Lscalatags_JsDom$attrs$__f_readonly = null;
  this.Lscalatags_JsDom$attrs$__f_required = null;
  this.Lscalatags_JsDom$attrs$__f_size = null;
  this.Lscalatags_JsDom$attrs$__f_step = null;
  this.Lscalatags_JsDom$attrs$__f_target = null;
  this.Lscalatags_JsDom$attrs$__f_type = null;
  this.Lscalatags_JsDom$attrs$__f_tpe = null;
  this.Lscalatags_JsDom$attrs$__f_value = null;
  this.Lscalatags_JsDom$attrs$__f_widthA = null;
  this.Lscalatags_JsDom$attrs$__f_accesskey = null;
  this.Lscalatags_JsDom$attrs$__f_class = null;
  this.Lscalatags_JsDom$attrs$__f_cls = null;
  this.Lscalatags_JsDom$attrs$__f_contenteditable = null;
  this.Lscalatags_JsDom$attrs$__f_contextmenu = null;
  this.Lscalatags_JsDom$attrs$__f_data$module = null;
  this.Lscalatags_JsDom$attrs$__f_dir = null;
  this.Lscalatags_JsDom$attrs$__f_draggable = null;
  this.Lscalatags_JsDom$attrs$__f_dropzone = null;
  this.Lscalatags_JsDom$attrs$__f_hidden = null;
  this.Lscalatags_JsDom$attrs$__f_id = null;
  this.Lscalatags_JsDom$attrs$__f_lang = null;
  this.Lscalatags_JsDom$attrs$__f_spellcheck = null;
  this.Lscalatags_JsDom$attrs$__f_style = null;
  this.Lscalatags_JsDom$attrs$__f_tabindex = null;
  this.Lscalatags_JsDom$attrs$__f_title = null;
  this.Lscalatags_JsDom$attrs$__f_translate = null;
  this.Lscalatags_JsDom$attrs$__f_bitmap$0 = $L0;
  this.Lscalatags_JsDom$attrs$__f_bitmap$1 = $L0;
  this.Lscalatags_JsDom$attrs$__f_bitmap$2 = $L0;
  $n_Lscalatags_JsDom$attrs$ = this;
  $f_Lscalatags_generic_MouseEventAttrs__$init$__V(this)
}
$c_Lscalatags_JsDom$attrs$.prototype = new $h_O();
$c_Lscalatags_JsDom$attrs$.prototype.constructor = $c_Lscalatags_JsDom$attrs$;
/** @constructor */
function $h_Lscalatags_JsDom$attrs$() {
  /*<skip>*/
}
$h_Lscalatags_JsDom$attrs$.prototype = $c_Lscalatags_JsDom$attrs$.prototype;
$c_Lscalatags_JsDom$attrs$.prototype.onchange__Lscalatags_generic_Attr = (function() {
  var b = this.Lscalatags_JsDom$attrs$__f_bitmap$0;
  var lo = (33554432 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lscalatags_JsDom$attrs$__onchange$lzycompute__Lscalatags_generic_Attr(this)
  } else {
    return this.Lscalatags_JsDom$attrs$__f_onchange
  }
});
$c_Lscalatags_JsDom$attrs$.prototype.onclick__Lscalatags_generic_Attr = (function() {
  var b = this.Lscalatags_JsDom$attrs$__f_bitmap$0;
  var hi = (131072 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$attrs$__onclick$lzycompute__Lscalatags_generic_Attr(this)
  } else {
    return this.Lscalatags_JsDom$attrs$__f_onclick
  }
});
$c_Lscalatags_JsDom$attrs$.prototype.checked__Lscalatags_generic_AttrPair = (function() {
  var b = this.Lscalatags_JsDom$attrs$__f_bitmap$1;
  var hi = (4 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$attrs$__checked$lzycompute__Lscalatags_generic_AttrPair(this)
  } else {
    return this.Lscalatags_JsDom$attrs$__f_checked
  }
});
$c_Lscalatags_JsDom$attrs$.prototype.max__Lscalatags_generic_Attr = (function() {
  var b = this.Lscalatags_JsDom$attrs$__f_bitmap$1;
  var hi = (4096 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$attrs$__max$lzycompute__Lscalatags_generic_Attr(this)
  } else {
    return this.Lscalatags_JsDom$attrs$__f_max
  }
});
$c_Lscalatags_JsDom$attrs$.prototype.min__Lscalatags_generic_Attr = (function() {
  var b = this.Lscalatags_JsDom$attrs$__f_bitmap$1;
  var hi = (8192 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$attrs$__min$lzycompute__Lscalatags_generic_Attr(this)
  } else {
    return this.Lscalatags_JsDom$attrs$__f_min
  }
});
$c_Lscalatags_JsDom$attrs$.prototype.name__Lscalatags_generic_Attr = (function() {
  var b = this.Lscalatags_JsDom$attrs$__f_bitmap$1;
  var hi = (262144 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$attrs$__name$lzycompute__Lscalatags_generic_Attr(this)
  } else {
    return this.Lscalatags_JsDom$attrs$__f_name
  }
});
$c_Lscalatags_JsDom$attrs$.prototype.type__Lscalatags_generic_Attr = (function() {
  var b = this.Lscalatags_JsDom$attrs$__f_bitmap$1;
  var hi = (67108864 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$attrs$__type$lzycompute__Lscalatags_generic_Attr(this)
  } else {
    return this.Lscalatags_JsDom$attrs$__f_type
  }
});
$c_Lscalatags_JsDom$attrs$.prototype.value__Lscalatags_generic_Attr = (function() {
  var b = this.Lscalatags_JsDom$attrs$__f_bitmap$1;
  var hi = (268435456 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lscalatags_JsDom$attrs$__value$lzycompute__Lscalatags_generic_Attr(this)
  } else {
    return this.Lscalatags_JsDom$attrs$__f_value
  }
});
var $d_Lscalatags_JsDom$attrs$ = new $TypeData().initClass({
  Lscalatags_JsDom$attrs$: 0
}, false, "scalatags.JsDom$attrs$", {
  Lscalatags_JsDom$attrs$: 1,
  O: 1,
  Lscalatags_JsDom$Cap: 1,
  Lscalatags_generic_Util: 1,
  Lscalatags_generic_LowPriUtil: 1,
  Lscalatags_jsdom_TagFactory: 1,
  Lscalatags_generic_Attrs: 1,
  Lscalatags_generic_InputAttrs: 1,
  Lscalatags_generic_GlobalAttrs: 1,
  Lscalatags_generic_ClipboardEventAttrs: 1,
  Lscalatags_generic_MediaEventAttrs: 1,
  Lscalatags_generic_SharedEventAttrs: 1,
  Lscalatags_generic_MiscellaneousEventAttrs: 1,
  Lscalatags_generic_KeyboardEventAttrs: 1,
  Lscalatags_generic_MouseEventAttrs: 1,
  Lscalatags_generic_WindowEventAttrs: 1,
  Lscalatags_generic_FormEventAttrs: 1
});
$c_Lscalatags_JsDom$attrs$.prototype.$classData = $d_Lscalatags_JsDom$attrs$;
var $n_Lscalatags_JsDom$attrs$;
function $m_Lscalatags_JsDom$attrs$() {
  if ((!$n_Lscalatags_JsDom$attrs$)) {
    $n_Lscalatags_JsDom$attrs$ = new $c_Lscalatags_JsDom$attrs$()
  };
  return $n_Lscalatags_JsDom$attrs$
}
/** @constructor */
function $c_sc_AbstractIterable() {
  /*<skip>*/
}
$c_sc_AbstractIterable.prototype = new $h_sc_AbstractTraversable();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
  /*<skip>*/
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.foreach__F1__V = (function(f) {
  var this$1 = this.iterator__sc_Iterator();
  $f_sc_Iterator__foreach__F1__V(this$1, f)
});
$c_sc_AbstractIterable.prototype.forall__F1__Z = (function(p) {
  var this$1 = this.iterator__sc_Iterator();
  return $f_sc_Iterator__forall__F1__Z(this$1, p)
});
$c_sc_AbstractIterable.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $f_sc_IterableLike__copyToArray__O__I__I__V(this, xs, start, len)
});
$c_sc_AbstractIterable.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_IterableLike__sameElements__sc_GenIterable__Z(this, that)
});
$c_sc_AbstractIterable.prototype.toStream__sci_Stream = (function() {
  return this.iterator__sc_Iterator().toStream__sci_Stream()
});
function $f_sci_StringLike__capitalize__T($thiz) {
  if (($thiz.toString__T() === null)) {
    return null
  } else {
    var this$1 = $thiz.toString__T();
    if (($uI(this$1.length) === 0)) {
      return ""
    } else {
      var this$2 = $thiz.toString__T();
      var c = (65535 & $uI(this$2.charCodeAt(0)));
      var this$5 = $m_jl_Character$();
      if (this$5.isUpperCase__I__Z(c)) {
        return $thiz.toString__T()
      } else {
        var chars = $f_T__toCharArray__AC($thiz.toString__T());
        var c$1 = chars.get(0);
        chars.set(0, $m_jl_Character$().toUpperCase__C__C(c$1));
        var this$8 = $m_jl_String$();
        return this$8.new__AC__I__I__T(chars, 0, chars.u.length)
      }
    }
  }
}
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth))
}
var $d_sci_Iterable = new $TypeData().initClass({
  sci_Iterable: 0
}, true, "scala.collection.immutable.Iterable", {
  sci_Iterable: 1,
  O: 1,
  sci_Traversable: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  s_Immutable: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1
});
/** @constructor */
function $c_sci_StringOps(repr) {
  this.sci_StringOps__f_repr = null;
  this.sci_StringOps__f_repr = repr
}
$c_sci_StringOps.prototype = new $h_O();
$c_sci_StringOps.prototype.constructor = $c_sci_StringOps;
/** @constructor */
function $h_sci_StringOps() {
  /*<skip>*/
}
$h_sci_StringOps.prototype = $c_sci_StringOps.prototype;
$c_sci_StringOps.prototype.isEmpty__Z = (function() {
  return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
});
$c_sci_StringOps.prototype.foreach__F1__V = (function(f) {
  $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
});
$c_sci_StringOps.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IndexedSeqOptimized__reduceLeft__F2__O(this, op)
});
$c_sci_StringOps.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_sci_StringOps.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
});
$c_sci_StringOps.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
});
$c_sci_StringOps.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this)
});
$c_sci_StringOps.prototype.sizeHintIfCheap__I = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return $uI(this$.length)
});
$c_sci_StringOps.prototype.toStream__sci_Stream = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this).toStream__sci_Stream()
});
$c_sci_StringOps.prototype.map__F1__scg_CanBuildFrom__O = (function(f, bf) {
  return $f_sc_TraversableLike__map__F1__scg_CanBuildFrom__O(this, f, bf)
});
$c_sci_StringOps.prototype.stringPrefix__T = (function() {
  return $f_sc_TraversableLike__stringPrefix__T(this)
});
$c_sci_StringOps.prototype.withFilter__F1__scg_FilterMonadic = (function(p) {
  return new $c_sc_TraversableLike$WithFilter(this, p)
});
$c_sci_StringOps.prototype.$div$colon__O__F2__O = (function(z, op) {
  var this$ = this.sci_StringOps__f_repr;
  return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, $uI(this$.length), z, op)
});
$c_sci_StringOps.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
});
$c_sci_StringOps.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sci_StringOps.prototype.toString__T = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return this$
});
$c_sci_StringOps.prototype.length__I = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return $uI(this$.length)
});
$c_sci_StringOps.prototype.hashCode__I = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return $f_T__hashCode__I(this$)
});
$c_sci_StringOps.prototype.equals__O__Z = (function(x$1) {
  return $m_sci_StringOps$().equals$extension__T__O__Z(this.sci_StringOps__f_repr, x$1)
});
$c_sci_StringOps.prototype.seq__sc_TraversableOnce = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return new $c_sci_WrappedString(this$)
});
$c_sci_StringOps.prototype.apply__I__O = (function(idx) {
  var this$ = this.sci_StringOps__f_repr;
  return $bC((65535 & $uI(this$.charCodeAt(idx))))
});
$c_sci_StringOps.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder())
});
$c_sci_StringOps.prototype.repr__O = (function() {
  return this.sci_StringOps__f_repr
});
function $as_sci_StringOps(obj) {
  return (((obj instanceof $c_sci_StringOps) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.StringOps"))
}
function $isArrayOf_sci_StringOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_StringOps)))
}
function $asArrayOf_sci_StringOps(obj, depth) {
  return (($isArrayOf_sci_StringOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.StringOps;", depth))
}
var $d_sci_StringOps = new $TypeData().initClass({
  sci_StringOps: 0
}, false, "scala.collection.immutable.StringOps", {
  sci_StringOps: 1,
  O: 1,
  sci_StringLike: 1,
  sc_IndexedSeqOptimized: 1,
  sc_IndexedSeqLike: 1,
  sc_SeqLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenIterableLike: 1,
  sc_GenSeqLike: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1
});
$c_sci_StringOps.prototype.$classData = $d_sci_StringOps;
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
var $d_sc_Seq = new $TypeData().initClass({
  sc_Seq: 0
}, true, "scala.collection.Seq", {
  sc_Seq: 1,
  O: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_Iterable: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1
});
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Map)))
}
function $as_sc_Map(obj) {
  return (($is_sc_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Map"))
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Map)))
}
function $asArrayOf_sc_Map(obj, depth) {
  return (($isArrayOf_sc_Map(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Map;", depth))
}
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Set)))
}
function $as_sc_Set(obj) {
  return (($is_sc_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Set"))
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Set)))
}
function $asArrayOf_sc_Set(obj, depth) {
  return (($isArrayOf_sc_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Set;", depth))
}
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
/** @constructor */
function $c_sc_AbstractSeq() {
  /*<skip>*/
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
  /*<skip>*/
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_SeqLike__lengthCompare__I__I(this, len)
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqLike__isEmpty__Z(this)
});
$c_sc_AbstractSeq.prototype.reverse__O = (function() {
  return $f_sc_SeqLike__reverse__O(this)
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_TraversableLike__toString__T(this)
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this.seq__sc_Seq())
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(that) {
  return $f_sc_GenSeqLike__equals__O__Z(this, that)
});
/** @constructor */
function $c_sc_AbstractMap() {
  /*<skip>*/
}
$c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractMap.prototype.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
  /*<skip>*/
}
$h_sc_AbstractMap.prototype = $c_sc_AbstractMap.prototype;
$c_sc_AbstractMap.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_MapBuilder(this.empty__sc_Map())
});
$c_sc_AbstractMap.prototype.isEmpty__Z = (function() {
  return $f_sc_MapLike__isEmpty__Z(this)
});
$c_sc_AbstractMap.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return $f_sc_MapLike__getOrElse__O__F0__O(this, key, default$1)
});
$c_sc_AbstractMap.prototype.apply__O__O = (function(key) {
  return $f_sc_MapLike__apply__O__O(this, key)
});
$c_sc_AbstractMap.prototype.contains__O__Z = (function(key) {
  return $f_sc_MapLike__contains__O__Z(this, key)
});
$c_sc_AbstractMap.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_MapLike__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractMap.prototype.stringPrefix__T = (function() {
  return "Map"
});
$c_sc_AbstractMap.prototype.toString__T = (function() {
  return $f_sc_TraversableLike__toString__T(this)
});
$c_sc_AbstractMap.prototype.equals__O__Z = (function(that) {
  return $f_sc_GenMapLike__equals__O__Z(this, that)
});
/** @constructor */
function $c_sc_AbstractSet() {
  /*<skip>*/
}
$c_sc_AbstractSet.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSet.prototype.constructor = $c_sc_AbstractSet;
/** @constructor */
function $h_sc_AbstractSet() {
  /*<skip>*/
}
$h_sc_AbstractSet.prototype = $c_sc_AbstractSet.prototype;
$c_sc_AbstractSet.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_SetBuilder(this.empty__sc_Set())
});
$c_sc_AbstractSet.prototype.map__F1__scg_CanBuildFrom__O = (function(f, bf) {
  return $f_sc_TraversableLike__map__F1__scg_CanBuildFrom__O(this, f, bf)
});
$c_sc_AbstractSet.prototype.isEmpty__Z = (function() {
  return $f_sc_SetLike__isEmpty__Z(this)
});
$c_sc_AbstractSet.prototype.stringPrefix__T = (function() {
  return "Set"
});
$c_sc_AbstractSet.prototype.toString__T = (function() {
  return $f_sc_TraversableLike__toString__T(this)
});
$c_sc_AbstractSet.prototype.subsetOf__sc_GenSet__Z = (function(that) {
  return this.forall__F1__Z(that)
});
$c_sc_AbstractSet.prototype.equals__O__Z = (function(that) {
  return $f_sc_GenSetLike__equals__O__Z(this, that)
});
$c_sc_AbstractSet.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.unorderedHash__sc_TraversableOnce__I__I(this, this$1.s_util_hashing_MurmurHash3$__f_setSeed)
});
function $is_sci_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Set)))
}
function $as_sci_Set(obj) {
  return (($is_sci_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set"))
}
function $isArrayOf_sci_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set)))
}
function $asArrayOf_sci_Set(obj, depth) {
  return (($isArrayOf_sci_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set;", depth))
}
/** @constructor */
function $c_sci_AbstractMap() {
  /*<skip>*/
}
$c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
$c_sci_AbstractMap.prototype.constructor = $c_sci_AbstractMap;
/** @constructor */
function $h_sci_AbstractMap() {
  /*<skip>*/
}
$h_sci_AbstractMap.prototype = $c_sci_AbstractMap.prototype;
$c_sci_AbstractMap.prototype.empty__sci_Map = (function() {
  $m_sci_Map$();
  return $m_sci_Map$EmptyMap$()
});
$c_sci_AbstractMap.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Iterable$()
});
$c_sci_AbstractMap.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_AbstractMap.prototype.empty__sc_Map = (function() {
  return this.empty__sci_Map()
});
function $p_sci_ListSet__skip$1__sci_ListSet__I__sci_ListSet($thiz, ls, count) {
  while (true) {
    if ((count === 0)) {
      return ls
    } else {
      var temp$ls = ls.next__sci_ListSet();
      var temp$count = (((-1) + count) | 0);
      ls = temp$ls;
      count = temp$count
    }
  }
}
function $p_sci_ListSet__containsLimited$1__sci_ListSet__O__sci_ListSet__Z($thiz, n, e, end) {
  while (true) {
    if ((n !== end)) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(e, n.elem__O())) {
        return true
      } else {
        n = n.next__sci_ListSet()
      }
    } else {
      return false
    }
  }
}
function $p_sci_ListSet__reverseList$1__sci_List($thiz) {
  var curr = $thiz;
  var res = $m_sci_Nil$();
  while ((!curr.isEmpty__Z())) {
    var x$4 = curr.elem__O();
    var this$1 = res;
    res = new $c_sci_$colon$colon(x$4, this$1);
    curr = curr.next__sci_ListSet()
  };
  return res
}
/** @constructor */
function $c_sci_ListSet() {
  /*<skip>*/
}
$c_sci_ListSet.prototype = new $h_sc_AbstractSet();
$c_sci_ListSet.prototype.constructor = $c_sci_ListSet;
/** @constructor */
function $h_sci_ListSet() {
  /*<skip>*/
}
$h_sci_ListSet.prototype = $c_sci_ListSet.prototype;
$c_sci_ListSet.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_ListSet$()
});
$c_sci_ListSet.prototype.size__I = (function() {
  return 0
});
$c_sci_ListSet.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_ListSet.prototype.contains__O__Z = (function(elem) {
  return false
});
$c_sci_ListSet.prototype.$plus__O__sci_ListSet = (function(elem) {
  return new $c_sci_ListSet$Node(this, elem)
});
$c_sci_ListSet.prototype.$minus__O__sci_ListSet = (function(elem) {
  return this
});
$c_sci_ListSet.prototype.$plus$plus__sc_GenTraversableOnce__sci_ListSet = (function(xs) {
  if ((xs instanceof $c_sci_ListSet)) {
    var x2 = $as_sci_ListSet(xs);
    if ((x2 === this)) {
      return this
    } else {
      var lsSize = x2.size__I();
      if ((lsSize === 0)) {
        return this
      } else {
        var thisSize = this.size__I();
        var remaining = ((thisSize < lsSize) ? thisSize : lsSize);
        var thisTail = $p_sci_ListSet__skip$1__sci_ListSet__I__sci_ListSet(this, this, ((thisSize - remaining) | 0));
        var lsTail = $p_sci_ListSet__skip$1__sci_ListSet__I__sci_ListSet(this, x2, ((lsSize - remaining) | 0));
        while (((thisTail !== lsTail) && (!lsTail.isEmpty__Z()))) {
          thisTail = thisTail.next__sci_ListSet();
          lsTail = lsTail.next__sci_ListSet()
        };
        var toAdd = x2;
        var result = this;
        while ((toAdd !== lsTail)) {
          var elem = toAdd.elem__O();
          if ((!$p_sci_ListSet__containsLimited$1__sci_ListSet__O__sci_ListSet__Z(this, result, elem, lsTail))) {
            var r = result;
            result = new $c_sci_ListSet$Node(r, elem)
          };
          toAdd = toAdd.next__sci_ListSet()
        };
        return result
      }
    }
  } else {
    return (xs.isEmpty__Z() ? this : $as_sci_ListSet(xs.$div$colon__O__F2__O(this, new $c_sjsr_AnonFunction2(((this$2) => ((x$2$2, x$3$2) => {
      var x$2 = $as_sci_ListSet(x$2$2);
      return x$2.$plus__O__sci_ListSet(x$3$2)
    }))(this)))))
  }
});
$c_sci_ListSet.prototype.iterator__sc_Iterator = (function() {
  var this$1 = $p_sci_ListSet__reverseList$1__sci_List(this);
  return $f_sc_LinearSeqLike__iterator__sc_Iterator(this$1)
});
$c_sci_ListSet.prototype.elem__O = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "elem of empty set")
});
$c_sci_ListSet.prototype.next__sci_ListSet = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next of empty set")
});
$c_sci_ListSet.prototype.stringPrefix__T = (function() {
  return "ListSet"
});
$c_sci_ListSet.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_ListSet.prototype.empty__sc_Set = (function() {
  $m_sci_ListSet$();
  return $m_sci_ListSet$EmptyListSet$()
});
$c_sci_ListSet.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_ListSet.prototype.$minus__O__sc_Set = (function(elem) {
  return this.$minus__O__sci_ListSet(elem)
});
$c_sci_ListSet.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_ListSet(elem)
});
function $as_sci_ListSet(obj) {
  return (((obj instanceof $c_sci_ListSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ListSet"))
}
function $isArrayOf_sci_ListSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ListSet)))
}
function $asArrayOf_sci_ListSet(obj, depth) {
  return (($isArrayOf_sci_ListSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ListSet;", depth))
}
var $d_sci_ListSet = new $TypeData().initClass({
  sci_ListSet: 0
}, false, "scala.collection.immutable.ListSet", {
  sci_ListSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet.prototype.$classData = $d_sci_ListSet;
/** @constructor */
function $c_sci_Set$EmptySet$() {
  /*<skip>*/
}
$c_sci_Set$EmptySet$.prototype = new $h_sc_AbstractSet();
$c_sci_Set$EmptySet$.prototype.constructor = $c_sci_Set$EmptySet$;
/** @constructor */
function $h_sci_Set$EmptySet$() {
  /*<skip>*/
}
$h_sci_Set$EmptySet$.prototype = $c_sci_Set$EmptySet$.prototype;
$c_sci_Set$EmptySet$.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$EmptySet$.prototype.size__I = (function() {
  return 0
});
$c_sci_Set$EmptySet$.prototype.contains__O__Z = (function(elem) {
  return false
});
$c_sci_Set$EmptySet$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_empty
});
$c_sci_Set$EmptySet$.prototype.foreach__F1__V = (function(f) {
  /*<skip>*/
});
$c_sci_Set$EmptySet$.prototype.apply__O__O = (function(v1) {
  return false
});
$c_sci_Set$EmptySet$.prototype.empty__sc_Set = (function() {
  $m_sci_Set$();
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$EmptySet$.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$EmptySet$.prototype.$minus__O__sc_Set = (function(elem) {
  return this
});
$c_sci_Set$EmptySet$.prototype.$plus__O__sc_Set = (function(elem) {
  return new $c_sci_Set$Set1(elem)
});
var $d_sci_Set$EmptySet$ = new $TypeData().initClass({
  sci_Set$EmptySet$: 0
}, false, "scala.collection.immutable.Set$EmptySet$", {
  sci_Set$EmptySet$: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$EmptySet$.prototype.$classData = $d_sci_Set$EmptySet$;
var $n_sci_Set$EmptySet$;
function $m_sci_Set$EmptySet$() {
  if ((!$n_sci_Set$EmptySet$)) {
    $n_sci_Set$EmptySet$ = new $c_sci_Set$EmptySet$()
  };
  return $n_sci_Set$EmptySet$
}
/** @constructor */
function $c_sci_Set$Set1(elem1) {
  this.sci_Set$Set1__f_elem1 = null;
  this.sci_Set$Set1__f_elem1 = elem1
}
$c_sci_Set$Set1.prototype = new $h_sc_AbstractSet();
$c_sci_Set$Set1.prototype.constructor = $c_sci_Set$Set1;
/** @constructor */
function $h_sci_Set$Set1() {
  /*<skip>*/
}
$h_sci_Set$Set1.prototype = $c_sci_Set$Set1.prototype;
$c_sci_Set$Set1.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$Set1.prototype.size__I = (function() {
  return 1
});
$c_sci_Set$Set1.prototype.contains__O__Z = (function(elem) {
  return $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set1__f_elem1)
});
$c_sci_Set$Set1.prototype.$plus__O__sci_Set = (function(elem) {
  return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set2(this.sci_Set$Set1__f_elem1, elem))
});
$c_sci_Set$Set1.prototype.$minus__O__sci_Set = (function(elem) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set1__f_elem1) ? ($m_sci_Set$(), $m_sci_Set$EmptySet$()) : this)
});
$c_sci_Set$Set1.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var elem = this.sci_Set$Set1__f_elem1;
  return new $c_sc_Iterator$$anon$3(elem)
});
$c_sci_Set$Set1.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_Set$Set1__f_elem1)
});
$c_sci_Set$Set1.prototype.forall__F1__Z = (function(p) {
  return $uZ(p.apply__O__O(this.sci_Set$Set1__f_elem1))
});
$c_sci_Set$Set1.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_Set$Set1.prototype.empty__sc_Set = (function() {
  $m_sci_Set$();
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$Set1.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$Set1.prototype.$minus__O__sc_Set = (function(elem) {
  return this.$minus__O__sci_Set(elem)
});
$c_sci_Set$Set1.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_Set(elem)
});
var $d_sci_Set$Set1 = new $TypeData().initClass({
  sci_Set$Set1: 0
}, false, "scala.collection.immutable.Set$Set1", {
  sci_Set$Set1: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set1.prototype.$classData = $d_sci_Set$Set1;
/** @constructor */
function $c_sci_Set$Set2(elem1, elem2) {
  this.sci_Set$Set2__f_elem1 = null;
  this.sci_Set$Set2__f_elem2 = null;
  this.sci_Set$Set2__f_elem1 = elem1;
  this.sci_Set$Set2__f_elem2 = elem2
}
$c_sci_Set$Set2.prototype = new $h_sc_AbstractSet();
$c_sci_Set$Set2.prototype.constructor = $c_sci_Set$Set2;
/** @constructor */
function $h_sci_Set$Set2() {
  /*<skip>*/
}
$h_sci_Set$Set2.prototype = $c_sci_Set$Set2.prototype;
$c_sci_Set$Set2.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$Set2.prototype.size__I = (function() {
  return 2
});
$c_sci_Set$Set2.prototype.contains__O__Z = (function(elem) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem2))
});
$c_sci_Set$Set2.prototype.$plus__O__sci_Set = (function(elem) {
  return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set3(this.sci_Set$Set2__f_elem1, this.sci_Set$Set2__f_elem2, elem))
});
$c_sci_Set$Set2.prototype.$minus__O__sci_Set = (function(elem) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem1) ? new $c_sci_Set$Set1(this.sci_Set$Set2__f_elem2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem2) ? new $c_sci_Set$Set1(this.sci_Set$Set2__f_elem1) : this))
});
$c_sci_Set$Set2.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Set$Set2$$anon$1(this)
});
$c_sci_Set$Set2.prototype.scala$collection$immutable$Set$Set2$$getElem__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Set$Set2__f_elem1;
      break
    }
    case 1: {
      return this.sci_Set$Set2__f_elem2;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Set$Set2.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_Set$Set2__f_elem1);
  f.apply__O__O(this.sci_Set$Set2__f_elem2)
});
$c_sci_Set$Set2.prototype.forall__F1__Z = (function(p) {
  return ($uZ(p.apply__O__O(this.sci_Set$Set2__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set2__f_elem2)))
});
$c_sci_Set$Set2.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_Set$Set2.prototype.empty__sc_Set = (function() {
  $m_sci_Set$();
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$Set2.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$Set2.prototype.$minus__O__sc_Set = (function(elem) {
  return this.$minus__O__sci_Set(elem)
});
$c_sci_Set$Set2.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_Set(elem)
});
var $d_sci_Set$Set2 = new $TypeData().initClass({
  sci_Set$Set2: 0
}, false, "scala.collection.immutable.Set$Set2", {
  sci_Set$Set2: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set2.prototype.$classData = $d_sci_Set$Set2;
/** @constructor */
function $c_sci_Set$Set3(elem1, elem2, elem3) {
  this.sci_Set$Set3__f_elem1 = null;
  this.sci_Set$Set3__f_elem2 = null;
  this.sci_Set$Set3__f_elem3 = null;
  this.sci_Set$Set3__f_elem1 = elem1;
  this.sci_Set$Set3__f_elem2 = elem2;
  this.sci_Set$Set3__f_elem3 = elem3
}
$c_sci_Set$Set3.prototype = new $h_sc_AbstractSet();
$c_sci_Set$Set3.prototype.constructor = $c_sci_Set$Set3;
/** @constructor */
function $h_sci_Set$Set3() {
  /*<skip>*/
}
$h_sci_Set$Set3.prototype = $c_sci_Set$Set3.prototype;
$c_sci_Set$Set3.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$Set3.prototype.size__I = (function() {
  return 3
});
$c_sci_Set$Set3.prototype.contains__O__Z = (function(elem) {
  return (($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem3))
});
$c_sci_Set$Set3.prototype.$plus__O__sci_Set = (function(elem) {
  return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set4(this.sci_Set$Set3__f_elem1, this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3, elem))
});
$c_sci_Set$Set3.prototype.$minus__O__sci_Set = (function(elem) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem1) ? new $c_sci_Set$Set2(this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem2) ? new $c_sci_Set$Set2(this.sci_Set$Set3__f_elem1, this.sci_Set$Set3__f_elem3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem3) ? new $c_sci_Set$Set2(this.sci_Set$Set3__f_elem1, this.sci_Set$Set3__f_elem2) : this)))
});
$c_sci_Set$Set3.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Set$Set3$$anon$2(this)
});
$c_sci_Set$Set3.prototype.scala$collection$immutable$Set$Set3$$getElem__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Set$Set3__f_elem1;
      break
    }
    case 1: {
      return this.sci_Set$Set3__f_elem2;
      break
    }
    case 2: {
      return this.sci_Set$Set3__f_elem3;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Set$Set3.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_Set$Set3__f_elem1);
  f.apply__O__O(this.sci_Set$Set3__f_elem2);
  f.apply__O__O(this.sci_Set$Set3__f_elem3)
});
$c_sci_Set$Set3.prototype.forall__F1__Z = (function(p) {
  return (($uZ(p.apply__O__O(this.sci_Set$Set3__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem3)))
});
$c_sci_Set$Set3.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_Set$Set3.prototype.empty__sc_Set = (function() {
  $m_sci_Set$();
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$Set3.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$Set3.prototype.$minus__O__sc_Set = (function(elem) {
  return this.$minus__O__sci_Set(elem)
});
$c_sci_Set$Set3.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_Set(elem)
});
var $d_sci_Set$Set3 = new $TypeData().initClass({
  sci_Set$Set3: 0
}, false, "scala.collection.immutable.Set$Set3", {
  sci_Set$Set3: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set3.prototype.$classData = $d_sci_Set$Set3;
/** @constructor */
function $c_sci_Set$Set4(elem1, elem2, elem3, elem4) {
  this.sci_Set$Set4__f_elem1 = null;
  this.sci_Set$Set4__f_elem2 = null;
  this.sci_Set$Set4__f_elem3 = null;
  this.sci_Set$Set4__f_elem4 = null;
  this.sci_Set$Set4__f_elem1 = elem1;
  this.sci_Set$Set4__f_elem2 = elem2;
  this.sci_Set$Set4__f_elem3 = elem3;
  this.sci_Set$Set4__f_elem4 = elem4
}
$c_sci_Set$Set4.prototype = new $h_sc_AbstractSet();
$c_sci_Set$Set4.prototype.constructor = $c_sci_Set$Set4;
/** @constructor */
function $h_sci_Set$Set4() {
  /*<skip>*/
}
$h_sci_Set$Set4.prototype = $c_sci_Set$Set4.prototype;
$c_sci_Set$Set4.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$Set4.prototype.size__I = (function() {
  return 4
});
$c_sci_Set$Set4.prototype.contains__O__Z = (function(elem) {
  return ((($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem4))
});
$c_sci_Set$Set4.prototype.$plus__O__sci_Set = (function(elem) {
  return (this.contains__O__Z(elem) ? this : $ct_sci_HashSet__(new $c_sci_HashSet()).$plus__O__sci_HashSet(this.sci_Set$Set4__f_elem1).$plus__O__sci_HashSet(this.sci_Set$Set4__f_elem2).$plus__O__sci_HashSet(this.sci_Set$Set4__f_elem3).$plus__O__sci_HashSet(this.sci_Set$Set4__f_elem4).$plus__O__sci_HashSet(elem))
});
$c_sci_Set$Set4.prototype.$minus__O__sci_Set = (function(elem) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem1) ? new $c_sci_Set$Set3(this.sci_Set$Set4__f_elem2, this.sci_Set$Set4__f_elem3, this.sci_Set$Set4__f_elem4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem2) ? new $c_sci_Set$Set3(this.sci_Set$Set4__f_elem1, this.sci_Set$Set4__f_elem3, this.sci_Set$Set4__f_elem4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem3) ? new $c_sci_Set$Set3(this.sci_Set$Set4__f_elem1, this.sci_Set$Set4__f_elem2, this.sci_Set$Set4__f_elem4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem4) ? new $c_sci_Set$Set3(this.sci_Set$Set4__f_elem1, this.sci_Set$Set4__f_elem2, this.sci_Set$Set4__f_elem3) : this))))
});
$c_sci_Set$Set4.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Set$Set4$$anon$3(this)
});
$c_sci_Set$Set4.prototype.scala$collection$immutable$Set$Set4$$getElem__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Set$Set4__f_elem1;
      break
    }
    case 1: {
      return this.sci_Set$Set4__f_elem2;
      break
    }
    case 2: {
      return this.sci_Set$Set4__f_elem3;
      break
    }
    case 3: {
      return this.sci_Set$Set4__f_elem4;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Set$Set4.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_Set$Set4__f_elem1);
  f.apply__O__O(this.sci_Set$Set4__f_elem2);
  f.apply__O__O(this.sci_Set$Set4__f_elem3);
  f.apply__O__O(this.sci_Set$Set4__f_elem4)
});
$c_sci_Set$Set4.prototype.forall__F1__Z = (function(p) {
  return ((($uZ(p.apply__O__O(this.sci_Set$Set4__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem3))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem4)))
});
$c_sci_Set$Set4.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_Set$Set4.prototype.empty__sc_Set = (function() {
  $m_sci_Set$();
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$Set4.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$Set4.prototype.$minus__O__sc_Set = (function(elem) {
  return this.$minus__O__sci_Set(elem)
});
$c_sci_Set$Set4.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_Set(elem)
});
var $d_sci_Set$Set4 = new $TypeData().initClass({
  sci_Set$Set4: 0
}, false, "scala.collection.immutable.Set$Set4", {
  sci_Set$Set4: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set4.prototype.$classData = $d_sci_Set$Set4;
function $ct_sci_HashSet__($thiz) {
  return $thiz
}
/** @constructor */
function $c_sci_HashSet() {
  /*<skip>*/
}
$c_sci_HashSet.prototype = new $h_sc_AbstractSet();
$c_sci_HashSet.prototype.constructor = $c_sci_HashSet;
/** @constructor */
function $h_sci_HashSet() {
  /*<skip>*/
}
$h_sci_HashSet.prototype = $c_sci_HashSet.prototype;
$c_sci_HashSet.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_HashSet$()
});
$c_sci_HashSet.prototype.size__I = (function() {
  return 0
});
$c_sci_HashSet.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_empty
});
$c_sci_HashSet.prototype.foreach__F1__V = (function(f) {
  /*<skip>*/
});
$c_sci_HashSet.prototype.contains__O__Z = (function(e) {
  return this.get0__O__I__I__Z(e, this.computeHash__O__I(e), 0)
});
$c_sci_HashSet.prototype.subsetOf__sc_GenSet__Z = (function(that) {
  if ((that instanceof $c_sci_HashSet)) {
    var x2 = $as_sci_HashSet(that);
    return this.subsetOf0__sci_HashSet__I__Z(x2, 0)
  } else {
    var this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__forall__F1__Z(this$1, that)
  }
});
$c_sci_HashSet.prototype.subsetOf0__sci_HashSet__I__Z = (function(that, level) {
  return true
});
$c_sci_HashSet.prototype.$plus__O__sci_HashSet = (function(e) {
  return this.updated0__O__I__I__sci_HashSet(e, this.computeHash__O__I(e), 0)
});
$c_sci_HashSet.prototype.union0__sci_HashSet__I__sci_HashSet = (function(that, level) {
  return that
});
$c_sci_HashSet.prototype.$minus__O__sci_HashSet = (function(e) {
  $m_sci_HashSet$();
  var s = this.removed0__O__I__I__sci_HashSet(e, this.computeHash__O__I(e), 0);
  return ((s === null) ? $m_sci_HashSet$EmptyHashSet$() : s)
});
$c_sci_HashSet.prototype.improve__I__I = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0))
});
$c_sci_HashSet.prototype.computeHash__O__I = (function(key) {
  return this.improve__I__I($m_sr_Statics$().anyHash__O__I(key))
});
$c_sci_HashSet.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  return false
});
$c_sci_HashSet.prototype.updated0__O__I__I__sci_HashSet = (function(key, hash, level) {
  return new $c_sci_HashSet$HashSet1(key, hash)
});
$c_sci_HashSet.prototype.removed0__O__I__I__sci_HashSet = (function(key, hash, level) {
  return this
});
$c_sci_HashSet.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_HashSet.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_HashSet.prototype.$minus__O__sc_Set = (function(elem) {
  return this.$minus__O__sci_HashSet(elem)
});
$c_sci_HashSet.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_HashSet(elem)
});
$c_sci_HashSet.prototype.empty__sc_Set = (function() {
  $m_sci_HashSet$();
  return $m_sci_HashSet$EmptyHashSet$()
});
function $as_sci_HashSet(obj) {
  return (((obj instanceof $c_sci_HashSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet"))
}
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet)))
}
function $asArrayOf_sci_HashSet(obj, depth) {
  return (($isArrayOf_sci_HashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet;", depth))
}
var $d_sci_HashSet = new $TypeData().initClass({
  sci_HashSet: 0
}, false, "scala.collection.immutable.HashSet", {
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet.prototype.$classData = $d_sci_HashSet;
/** @constructor */
function $c_sci_ListSet$EmptyListSet$() {
  /*<skip>*/
}
$c_sci_ListSet$EmptyListSet$.prototype = new $h_sci_ListSet();
$c_sci_ListSet$EmptyListSet$.prototype.constructor = $c_sci_ListSet$EmptyListSet$;
/** @constructor */
function $h_sci_ListSet$EmptyListSet$() {
  /*<skip>*/
}
$h_sci_ListSet$EmptyListSet$.prototype = $c_sci_ListSet$EmptyListSet$.prototype;
var $d_sci_ListSet$EmptyListSet$ = new $TypeData().initClass({
  sci_ListSet$EmptyListSet$: 0
}, false, "scala.collection.immutable.ListSet$EmptyListSet$", {
  sci_ListSet$EmptyListSet$: 1,
  sci_ListSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet$EmptyListSet$.prototype.$classData = $d_sci_ListSet$EmptyListSet$;
var $n_sci_ListSet$EmptyListSet$;
function $m_sci_ListSet$EmptyListSet$() {
  if ((!$n_sci_ListSet$EmptyListSet$)) {
    $n_sci_ListSet$EmptyListSet$ = new $c_sci_ListSet$EmptyListSet$()
  };
  return $n_sci_ListSet$EmptyListSet$
}
function $p_sci_ListSet$Node__sizeInternal__sci_ListSet__I__I($thiz, n, acc) {
  while (true) {
    if (n.isEmpty__Z()) {
      return acc
    } else {
      var temp$n = n.next__sci_ListSet();
      var temp$acc = ((1 + acc) | 0);
      n = temp$n;
      acc = temp$acc
    }
  }
}
function $p_sci_ListSet$Node__containsInternal__sci_ListSet__O__Z($thiz, n, e) {
  while (true) {
    if ((!n.isEmpty__Z())) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(n.elem__O(), e)) {
        return true
      } else {
        n = n.next__sci_ListSet()
      }
    } else {
      return false
    }
  }
}
function $p_sci_ListSet$Node__indexInternal__sci_ListSet__O__I__I($thiz, n, e, i) {
  while (true) {
    if (n.isEmpty__Z()) {
      return (-1)
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(n.elem__O(), e)) {
      return i
    } else {
      var temp$n = n.next__sci_ListSet();
      var temp$i = ((1 + i) | 0);
      n = temp$n;
      i = temp$i
    }
  }
}
function $p_sci_ListSet$Node__store$1__I__sci_ListSet__I__Asci_ListSet__V($thiz, i, e, index$1, data$1) {
  while ((i < index$1)) {
    data$1.set(i, e);
    var temp$i = ((1 + i) | 0);
    var temp$e = e.next__sci_ListSet();
    i = temp$i;
    e = temp$e
  }
}
function $p_sci_ListSet$Node__reform$1__I__sci_ListSet__Asci_ListSet__sci_ListSet($thiz, i, e, data$1) {
  while (true) {
    if ((i < 0)) {
      return e
    } else {
      var temp$i = (((-1) + i) | 0);
      var temp$e = new $c_sci_ListSet$Node(e, data$1.get(i).elem__O());
      i = temp$i;
      e = temp$e
    }
  }
}
/** @constructor */
function $c_sci_ListSet$Node(outer, elem) {
  this.sci_ListSet$Node__f_elem = null;
  this.sci_ListSet$Node__f_$outer = null;
  this.sci_ListSet$Node__f_elem = elem;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sci_ListSet$Node__f_$outer = outer
  }
}
$c_sci_ListSet$Node.prototype = new $h_sci_ListSet();
$c_sci_ListSet$Node.prototype.constructor = $c_sci_ListSet$Node;
/** @constructor */
function $h_sci_ListSet$Node() {
  /*<skip>*/
}
$h_sci_ListSet$Node.prototype = $c_sci_ListSet$Node.prototype;
$c_sci_ListSet$Node.prototype.elem__O = (function() {
  return this.sci_ListSet$Node__f_elem
});
$c_sci_ListSet$Node.prototype.size__I = (function() {
  return $p_sci_ListSet$Node__sizeInternal__sci_ListSet__I__I(this, this, 0)
});
$c_sci_ListSet$Node.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_ListSet$Node.prototype.contains__O__Z = (function(e) {
  return $p_sci_ListSet$Node__containsInternal__sci_ListSet__O__Z(this, this, e)
});
$c_sci_ListSet$Node.prototype.$plus__O__sci_ListSet = (function(e) {
  return ($p_sci_ListSet$Node__containsInternal__sci_ListSet__O__Z(this, this, e) ? this : new $c_sci_ListSet$Node(this, e))
});
$c_sci_ListSet$Node.prototype.$minus__O__sci_ListSet = (function(e) {
  var index = $p_sci_ListSet$Node__indexInternal__sci_ListSet__O__I__I(this, this, e, 0);
  if ((index < 0)) {
    return this
  } else if ((index === 0)) {
    return this.sci_ListSet$Node__f_$outer
  } else {
    var data = new ($d_sci_ListSet.getArrayOf().constr)(index);
    $p_sci_ListSet$Node__store$1__I__sci_ListSet__I__Asci_ListSet__V(this, 0, this, index, data);
    return $p_sci_ListSet$Node__reform$1__I__sci_ListSet__Asci_ListSet__sci_ListSet(this, (((-1) + index) | 0), data.get((((-1) + index) | 0)).next__sci_ListSet().next__sci_ListSet(), data)
  }
});
$c_sci_ListSet$Node.prototype.next__sci_ListSet = (function() {
  return this.sci_ListSet$Node__f_$outer
});
$c_sci_ListSet$Node.prototype.$minus__O__sc_Set = (function(elem) {
  return this.$minus__O__sci_ListSet(elem)
});
$c_sci_ListSet$Node.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_ListSet(elem)
});
var $d_sci_ListSet$Node = new $TypeData().initClass({
  sci_ListSet$Node: 0
}, false, "scala.collection.immutable.ListSet$Node", {
  sci_ListSet$Node: 1,
  sci_ListSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet$Node.prototype.$classData = $d_sci_ListSet$Node;
/** @constructor */
function $c_scm_AbstractSeq() {
  /*<skip>*/
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
  /*<skip>*/
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
$c_scm_AbstractSeq.prototype.seq__scm_Seq = (function() {
  return this
});
$c_scm_AbstractSeq.prototype.seq__sc_TraversableOnce = (function() {
  return this.seq__scm_Seq()
});
/** @constructor */
function $c_sci_HashSet$EmptyHashSet$() {
  /*<skip>*/
}
$c_sci_HashSet$EmptyHashSet$.prototype = new $h_sci_HashSet();
$c_sci_HashSet$EmptyHashSet$.prototype.constructor = $c_sci_HashSet$EmptyHashSet$;
/** @constructor */
function $h_sci_HashSet$EmptyHashSet$() {
  /*<skip>*/
}
$h_sci_HashSet$EmptyHashSet$.prototype = $c_sci_HashSet$EmptyHashSet$.prototype;
var $d_sci_HashSet$EmptyHashSet$ = new $TypeData().initClass({
  sci_HashSet$EmptyHashSet$: 0
}, false, "scala.collection.immutable.HashSet$EmptyHashSet$", {
  sci_HashSet$EmptyHashSet$: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$EmptyHashSet$.prototype.$classData = $d_sci_HashSet$EmptyHashSet$;
var $n_sci_HashSet$EmptyHashSet$;
function $m_sci_HashSet$EmptyHashSet$() {
  if ((!$n_sci_HashSet$EmptyHashSet$)) {
    $n_sci_HashSet$EmptyHashSet$ = new $c_sci_HashSet$EmptyHashSet$()
  };
  return $n_sci_HashSet$EmptyHashSet$
}
function $p_sci_HashSet$HashTrieSet__addMaybeSubset$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet($thiz, larger, smaller, level$4) {
  var resultElems = null;
  var ai = 0;
  var bi = 0;
  var abm = larger.sci_HashSet$HashTrieSet__f_bitmap;
  var bbm = smaller.sci_HashSet$HashTrieSet__f_bitmap;
  var a = larger.sci_HashSet$HashTrieSet__f_elems;
  var b = smaller.sci_HashSet$HashTrieSet__f_elems;
  var additionalSize = 0;
  var bsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
  while ((bsb !== 0)) {
    var skippedBitsInA = (abm & (((-1) + bsb) | 0));
    ai = ((ai + $m_jl_Integer$().bitCount__I__I(skippedBitsInA)) | 0);
    abm = (abm ^ skippedBitsInA);
    var aai = a.get(ai);
    var bbi = b.get(bi);
    var result = ((aai === bbi) ? aai : aai.union0__sci_HashSet__I__sci_HashSet(bbi, ((5 + level$4) | 0)));
    if ((result !== aai)) {
      if ((resultElems === null)) {
        resultElems = a.clone__O()
      };
      additionalSize = ((additionalSize + ((result.size__I() - aai.size__I()) | 0)) | 0);
      resultElems.set(ai, result)
    };
    abm = (abm ^ bsb);
    bbm = (bbm ^ bsb);
    bsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
    ai = ((1 + ai) | 0);
    bi = ((1 + bi) | 0)
  };
  return ((resultElems === null) ? larger : new $c_sci_HashSet$HashTrieSet(larger.sci_HashSet$HashTrieSet__f_bitmap, resultElems, ((larger.sci_HashSet$HashTrieSet__f_size0 + additionalSize) | 0)))
}
function $p_sci_HashSet$HashTrieSet__addDistinct$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, that) {
  var ai = 0;
  var bi = 0;
  var offset = 0;
  var abm = $thiz.sci_HashSet$HashTrieSet__f_bitmap;
  var bbm = that.sci_HashSet$HashTrieSet__f_bitmap;
  var a = $thiz.sci_HashSet$HashTrieSet__f_elems;
  var b = that.sci_HashSet$HashTrieSet__f_elems;
  var allBits = (abm | bbm);
  var i = allBits;
  var resultElems = new ($d_sci_HashSet.getArrayOf().constr)($m_jl_Integer$().bitCount__I__I(i));
  var lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
  while ((lsb !== 0)) {
    if (((lsb & abm) !== 0)) {
      resultElems.set(offset, a.get(ai));
      ai = ((1 + ai) | 0)
    } else {
      resultElems.set(offset, b.get(bi));
      bi = ((1 + bi) | 0)
    };
    offset = ((1 + offset) | 0);
    allBits = (allBits ^ lsb);
    lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)))
  };
  return new $c_sci_HashSet$HashTrieSet((abm | bbm), resultElems, (($thiz.sci_HashSet$HashTrieSet__f_size0 + that.sci_HashSet$HashTrieSet__f_size0) | 0))
}
function $p_sci_HashSet$HashTrieSet__addCommon$1__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet($thiz, that, level$4) {
  var ai = 0;
  var bi = 0;
  var abm = $thiz.sci_HashSet$HashTrieSet__f_bitmap;
  var bbm = that.sci_HashSet$HashTrieSet__f_bitmap;
  var a = $thiz.sci_HashSet$HashTrieSet__f_elems;
  var b = that.sci_HashSet$HashTrieSet__f_elems;
  var allBits = (abm | bbm);
  var i = allBits;
  var resultElems = new ($d_sci_HashSet.getArrayOf().constr)($m_jl_Integer$().bitCount__I__I(i));
  var offset = 0;
  var rs = 0;
  var lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
  var result = null;
  while ((lsb !== 0)) {
    if (((lsb & abm) !== 0)) {
      if (((lsb & bbm) !== 0)) {
        var aai = a.get(ai);
        var bbi = b.get(bi);
        result = ((aai === bbi) ? aai : aai.union0__sci_HashSet__I__sci_HashSet(bbi, ((5 + level$4) | 0)));
        ai = ((1 + ai) | 0);
        bi = ((1 + bi) | 0)
      } else {
        result = a.get(ai);
        ai = ((1 + ai) | 0)
      }
    } else {
      result = b.get(bi);
      bi = ((1 + bi) | 0)
    };
    allBits = (allBits ^ lsb);
    lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
    resultElems.set(offset, result);
    rs = ((rs + result.size__I()) | 0);
    offset = ((1 + offset) | 0)
  };
  return new $c_sci_HashSet$HashTrieSet((abm | bbm), resultElems, rs)
}
/** @constructor */
function $c_sci_HashSet$HashTrieSet(bitmap, elems, size0) {
  this.sci_HashSet$HashTrieSet__f_bitmap = 0;
  this.sci_HashSet$HashTrieSet__f_elems = null;
  this.sci_HashSet$HashTrieSet__f_size0 = 0;
  this.sci_HashSet$HashTrieSet__f_bitmap = bitmap;
  this.sci_HashSet$HashTrieSet__f_elems = elems;
  this.sci_HashSet$HashTrieSet__f_size0 = size0
}
$c_sci_HashSet$HashTrieSet.prototype = new $h_sci_HashSet();
$c_sci_HashSet$HashTrieSet.prototype.constructor = $c_sci_HashSet$HashTrieSet;
/** @constructor */
function $h_sci_HashSet$HashTrieSet() {
  /*<skip>*/
}
$h_sci_HashSet$HashTrieSet.prototype = $c_sci_HashSet$HashTrieSet.prototype;
$c_sci_HashSet$HashTrieSet.prototype.size__I = (function() {
  return this.sci_HashSet$HashTrieSet__f_size0
});
$c_sci_HashSet$HashTrieSet.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  var index = (31 & ((hash >>> level) | 0));
  var mask = (1 << index);
  if ((this.sci_HashSet$HashTrieSet__f_bitmap === (-1))) {
    return this.sci_HashSet$HashTrieSet__f_elems.get((31 & index)).get0__O__I__I__Z(key, hash, ((5 + level) | 0))
  } else if (((this.sci_HashSet$HashTrieSet__f_bitmap & mask) !== 0)) {
    var i = (this.sci_HashSet$HashTrieSet__f_bitmap & (((-1) + mask) | 0));
    var offset = $m_jl_Integer$().bitCount__I__I(i);
    return this.sci_HashSet$HashTrieSet__f_elems.get(offset).get0__O__I__I__Z(key, hash, ((5 + level) | 0))
  } else {
    return false
  }
});
$c_sci_HashSet$HashTrieSet.prototype.updated0__O__I__I__sci_HashSet = (function(key, hash, level) {
  var index = (31 & ((hash >>> level) | 0));
  var mask = (1 << index);
  var i = (this.sci_HashSet$HashTrieSet__f_bitmap & (((-1) + mask) | 0));
  var offset = $m_jl_Integer$().bitCount__I__I(i);
  if (((this.sci_HashSet$HashTrieSet__f_bitmap & mask) !== 0)) {
    var sub = this.sci_HashSet$HashTrieSet__f_elems.get(offset);
    var subNew = sub.updated0__O__I__I__sci_HashSet(key, hash, ((5 + level) | 0));
    if ((sub === subNew)) {
      return this
    } else {
      var elemsNew = new ($d_sci_HashSet.getArrayOf().constr)(this.sci_HashSet$HashTrieSet__f_elems.u.length);
      var src = this.sci_HashSet$HashTrieSet__f_elems;
      var length = this.sci_HashSet$HashTrieSet__f_elems.u.length;
      src.copyTo(0, elemsNew, 0, length);
      elemsNew.set(offset, subNew);
      return new $c_sci_HashSet$HashTrieSet(this.sci_HashSet$HashTrieSet__f_bitmap, elemsNew, ((1 + this.sci_HashSet$HashTrieSet__f_size0) | 0))
    }
  } else {
    var elemsNew$2 = new ($d_sci_HashSet.getArrayOf().constr)(((1 + this.sci_HashSet$HashTrieSet__f_elems.u.length) | 0));
    var src$1 = this.sci_HashSet$HashTrieSet__f_elems;
    src$1.copyTo(0, elemsNew$2, 0, offset);
    elemsNew$2.set(offset, new $c_sci_HashSet$HashSet1(key, hash));
    var src$2 = this.sci_HashSet$HashTrieSet__f_elems;
    var destPos = ((1 + offset) | 0);
    var length$1 = ((this.sci_HashSet$HashTrieSet__f_elems.u.length - offset) | 0);
    src$2.copyTo(offset, elemsNew$2, destPos, length$1);
    var bitmapNew = (this.sci_HashSet$HashTrieSet__f_bitmap | mask);
    return new $c_sci_HashSet$HashTrieSet(bitmapNew, elemsNew$2, ((1 + this.sci_HashSet$HashTrieSet__f_size0) | 0))
  }
});
$c_sci_HashSet$HashTrieSet.prototype.union0__sci_HashSet__I__sci_HashSet = (function(that, level) {
  if ((that === this)) {
    return this
  } else if ((that instanceof $c_sci_HashSet$LeafHashSet)) {
    var x2 = $as_sci_HashSet$LeafHashSet(that);
    var index = (31 & ((x2.sci_HashSet$LeafHashSet__f_hash >>> level) | 0));
    var mask = (1 << index);
    var i = (this.sci_HashSet$HashTrieSet__f_bitmap & (((-1) + mask) | 0));
    var offset = $m_jl_Integer$().bitCount__I__I(i);
    if (((this.sci_HashSet$HashTrieSet__f_bitmap & mask) !== 0)) {
      var sub = this.sci_HashSet$HashTrieSet__f_elems.get(offset);
      if ((sub === x2)) {
        return this
      } else {
        var sub1 = sub.union0__sci_HashSet__I__sci_HashSet(x2, ((5 + level) | 0));
        if ((sub === sub1)) {
          return this
        } else {
          var this$1 = this.sci_HashSet$HashTrieSet__f_elems;
          var elems1 = this$1.clone__O();
          elems1.set(offset, sub1);
          return new $c_sci_HashSet$HashTrieSet(this.sci_HashSet$HashTrieSet__f_bitmap, elems1, ((this.sci_HashSet$HashTrieSet__f_size0 + ((sub1.size__I() - sub.size__I()) | 0)) | 0))
        }
      }
    } else {
      var elems1$2 = new ($d_sci_HashSet.getArrayOf().constr)(((1 + this.sci_HashSet$HashTrieSet__f_elems.u.length) | 0));
      var src = this.sci_HashSet$HashTrieSet__f_elems;
      src.copyTo(0, elems1$2, 0, offset);
      elems1$2.set(offset, x2);
      var src$1 = this.sci_HashSet$HashTrieSet__f_elems;
      var destPos = ((1 + offset) | 0);
      var length = ((this.sci_HashSet$HashTrieSet__f_elems.u.length - offset) | 0);
      src$1.copyTo(offset, elems1$2, destPos, length);
      var bitmap1 = (this.sci_HashSet$HashTrieSet__f_bitmap | mask);
      return new $c_sci_HashSet$HashTrieSet(bitmap1, elems1$2, ((this.sci_HashSet$HashTrieSet__f_size0 + x2.size__I()) | 0))
    }
  } else if ((that instanceof $c_sci_HashSet$HashTrieSet)) {
    var x3 = $as_sci_HashSet$HashTrieSet(that);
    var abm = this.sci_HashSet$HashTrieSet__f_bitmap;
    var bbm = x3.sci_HashSet$HashTrieSet__f_bitmap;
    var allBits = (abm | bbm);
    return (((allBits === abm) && ((allBits !== bbm) || (this.sci_HashSet$HashTrieSet__f_size0 >= x3.sci_HashSet$HashTrieSet__f_size0))) ? $p_sci_HashSet$HashTrieSet__addMaybeSubset$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet(this, this, x3, level) : ((allBits === bbm) ? $p_sci_HashSet$HashTrieSet__addMaybeSubset$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet(this, x3, this, level) : (((abm & bbm) === 0) ? $p_sci_HashSet$HashTrieSet__addDistinct$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet(this, x3) : $p_sci_HashSet$HashTrieSet__addCommon$1__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet(this, x3, level))))
  } else {
    return this
  }
});
$c_sci_HashSet$HashTrieSet.prototype.removed0__O__I__I__sci_HashSet = (function(key, hash, level) {
  var index = (31 & ((hash >>> level) | 0));
  var mask = (1 << index);
  var i = (this.sci_HashSet$HashTrieSet__f_bitmap & (((-1) + mask) | 0));
  var offset = $m_jl_Integer$().bitCount__I__I(i);
  if (((this.sci_HashSet$HashTrieSet__f_bitmap & mask) !== 0)) {
    var sub = this.sci_HashSet$HashTrieSet__f_elems.get(offset);
    var subNew = sub.removed0__O__I__I__sci_HashSet(key, hash, ((5 + level) | 0));
    if ((sub === subNew)) {
      return this
    } else if ((subNew === null)) {
      var bitmapNew = (this.sci_HashSet$HashTrieSet__f_bitmap ^ mask);
      if ((bitmapNew !== 0)) {
        if (((this.sci_HashSet$HashTrieSet__f_elems.u.length === 2) && (!(this.sci_HashSet$HashTrieSet__f_elems.get((1 ^ offset)) instanceof $c_sci_HashSet$HashTrieSet)))) {
          return this.sci_HashSet$HashTrieSet__f_elems.get((1 ^ offset))
        } else {
          var elemsNew = new ($d_sci_HashSet.getArrayOf().constr)((((-1) + this.sci_HashSet$HashTrieSet__f_elems.u.length) | 0));
          var src = this.sci_HashSet$HashTrieSet__f_elems;
          src.copyTo(0, elemsNew, 0, offset);
          var src$1 = this.sci_HashSet$HashTrieSet__f_elems;
          var srcPos = ((1 + offset) | 0);
          var length = (((-1) + ((this.sci_HashSet$HashTrieSet__f_elems.u.length - offset) | 0)) | 0);
          src$1.copyTo(srcPos, elemsNew, offset, length);
          var sizeNew = (((-1) + this.sci_HashSet$HashTrieSet__f_size0) | 0);
          return new $c_sci_HashSet$HashTrieSet(bitmapNew, elemsNew, sizeNew)
        }
      } else {
        return null
      }
    } else if (((this.sci_HashSet$HashTrieSet__f_elems.u.length === 1) && (!(subNew instanceof $c_sci_HashSet$HashTrieSet)))) {
      return subNew
    } else {
      var elemsNew$2 = new ($d_sci_HashSet.getArrayOf().constr)(this.sci_HashSet$HashTrieSet__f_elems.u.length);
      var src$2 = this.sci_HashSet$HashTrieSet__f_elems;
      var length$1 = this.sci_HashSet$HashTrieSet__f_elems.u.length;
      src$2.copyTo(0, elemsNew$2, 0, length$1);
      elemsNew$2.set(offset, subNew);
      var sizeNew$2 = (((-1) + this.sci_HashSet$HashTrieSet__f_size0) | 0);
      return new $c_sci_HashSet$HashTrieSet(this.sci_HashSet$HashTrieSet__f_bitmap, elemsNew$2, sizeNew$2)
    }
  } else {
    return this
  }
});
$c_sci_HashSet$HashTrieSet.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_sci_HashSet$HashTrieSet)) {
    var x2 = $as_sci_HashSet$HashTrieSet(other);
    if ((this === x2)) {
      return true
    } else if (((this.sci_HashSet$HashTrieSet__f_bitmap === x2.sci_HashSet$HashTrieSet__f_bitmap) && (this.sci_HashSet$HashTrieSet__f_size0 === x2.sci_HashSet$HashTrieSet__f_size0))) {
      var a = this.sci_HashSet$HashTrieSet__f_elems;
      var b = x2.sci_HashSet$HashTrieSet__f_elems;
      return $m_ju_Arrays$().equals__AO__AO__Z(a, b)
    } else {
      return false
    }
  } else {
    return ((!(other instanceof $c_sci_HashSet)) && $f_sc_GenSetLike__equals__O__Z(this, other))
  }
});
$c_sci_HashSet$HashTrieSet.prototype.subsetOf0__sci_HashSet__I__Z = (function(that, level) {
  if ((that === this)) {
    return true
  } else {
    if ((that instanceof $c_sci_HashSet$HashTrieSet)) {
      var x2 = $as_sci_HashSet$HashTrieSet(that);
      if ((((this.sci_HashSet$HashTrieSet__f_bitmap & (~x2.sci_HashSet$HashTrieSet__f_bitmap)) === 0) && (this.sci_HashSet$HashTrieSet__f_size0 <= x2.sci_HashSet$HashTrieSet__f_size0))) {
        var abm = this.sci_HashSet$HashTrieSet__f_bitmap;
        var a = this.sci_HashSet$HashTrieSet__f_elems;
        var ai = 0;
        var b = x2.sci_HashSet$HashTrieSet__f_elems;
        var bbm = x2.sci_HashSet$HashTrieSet__f_bitmap;
        var bi = 0;
        if (((abm & bbm) === abm)) {
          while ((abm !== 0)) {
            var alsb = (abm ^ (abm & (((-1) + abm) | 0)));
            var blsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
            if ((alsb === blsb)) {
              if ((!a.get(ai).subsetOf0__sci_HashSet__I__Z(b.get(bi), ((5 + level) | 0)))) {
                return false
              };
              abm = (abm & (~alsb));
              ai = ((1 + ai) | 0)
            };
            bbm = (bbm & (~blsb));
            bi = ((1 + bi) | 0)
          };
          return true
        } else {
          return false
        }
      }
    };
    return false
  }
});
$c_sci_HashSet$HashTrieSet.prototype.foreach__F1__V = (function(f) {
  var i = 0;
  while ((i < this.sci_HashSet$HashTrieSet__f_elems.u.length)) {
    this.sci_HashSet$HashTrieSet__f_elems.get(i).foreach__F1__V(f);
    i = ((1 + i) | 0)
  }
});
$c_sci_HashSet$HashTrieSet.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_HashSet$HashTrieSet$$anon$1(this)
});
function $as_sci_HashSet$HashTrieSet(obj) {
  return (((obj instanceof $c_sci_HashSet$HashTrieSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashTrieSet"))
}
function $isArrayOf_sci_HashSet$HashTrieSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashTrieSet)))
}
function $asArrayOf_sci_HashSet$HashTrieSet(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashTrieSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashTrieSet;", depth))
}
var $d_sci_HashSet$HashTrieSet = new $TypeData().initClass({
  sci_HashSet$HashTrieSet: 0
}, false, "scala.collection.immutable.HashSet$HashTrieSet", {
  sci_HashSet$HashTrieSet: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$HashTrieSet.prototype.$classData = $d_sci_HashSet$HashTrieSet;
function $ct_sci_HashSet$LeafHashSet__I__($thiz, hash) {
  $thiz.sci_HashSet$LeafHashSet__f_hash = hash;
  return $thiz
}
/** @constructor */
function $c_sci_HashSet$LeafHashSet() {
  this.sci_HashSet$LeafHashSet__f_hash = 0
}
$c_sci_HashSet$LeafHashSet.prototype = new $h_sci_HashSet();
$c_sci_HashSet$LeafHashSet.prototype.constructor = $c_sci_HashSet$LeafHashSet;
/** @constructor */
function $h_sci_HashSet$LeafHashSet() {
  /*<skip>*/
}
$h_sci_HashSet$LeafHashSet.prototype = $c_sci_HashSet$LeafHashSet.prototype;
function $as_sci_HashSet$LeafHashSet(obj) {
  return (((obj instanceof $c_sci_HashSet$LeafHashSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$LeafHashSet"))
}
function $isArrayOf_sci_HashSet$LeafHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$LeafHashSet)))
}
function $asArrayOf_sci_HashSet$LeafHashSet(obj, depth) {
  return (($isArrayOf_sci_HashSet$LeafHashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$LeafHashSet;", depth))
}
/** @constructor */
function $c_sci_HashSet$HashSet1(key, hash) {
  this.sci_HashSet$LeafHashSet__f_hash = 0;
  this.sci_HashSet$HashSet1__f_key = null;
  this.sci_HashSet$HashSet1__f_key = key;
  $ct_sci_HashSet$LeafHashSet__I__(this, hash)
}
$c_sci_HashSet$HashSet1.prototype = new $h_sci_HashSet$LeafHashSet();
$c_sci_HashSet$HashSet1.prototype.constructor = $c_sci_HashSet$HashSet1;
/** @constructor */
function $h_sci_HashSet$HashSet1() {
  /*<skip>*/
}
$h_sci_HashSet$HashSet1.prototype = $c_sci_HashSet$HashSet1.prototype;
$c_sci_HashSet$HashSet1.prototype.size__I = (function() {
  return 1
});
$c_sci_HashSet$HashSet1.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  return ((hash === this.sci_HashSet$LeafHashSet__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashSet$HashSet1__f_key))
});
$c_sci_HashSet$HashSet1.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_sci_HashSet$HashSet1)) {
    var x2 = $as_sci_HashSet$HashSet1(other);
    return ((this === x2) || ((this.sci_HashSet$LeafHashSet__f_hash === x2.sci_HashSet$LeafHashSet__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.sci_HashSet$HashSet1__f_key, x2.sci_HashSet$HashSet1__f_key)))
  } else {
    return ((!(other instanceof $c_sci_HashSet)) && $f_sc_GenSetLike__equals__O__Z(this, other))
  }
});
$c_sci_HashSet$HashSet1.prototype.subsetOf0__sci_HashSet__I__Z = (function(that, level) {
  return ((this === that) || that.get0__O__I__I__Z(this.sci_HashSet$HashSet1__f_key, this.sci_HashSet$LeafHashSet__f_hash, level))
});
$c_sci_HashSet$HashSet1.prototype.updated0__O__I__I__sci_HashSet = (function(key, hash, level) {
  if ((hash === this.sci_HashSet$LeafHashSet__f_hash)) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashSet$HashSet1__f_key)) {
      return this
    } else {
      $m_sci_ListSet$();
      var this$2 = $m_sci_ListSet$EmptyListSet$();
      var elem = this.sci_HashSet$HashSet1__f_key;
      return new $c_sci_HashSet$HashSetCollision1(hash, new $c_sci_ListSet$Node(this$2, elem).$plus__O__sci_ListSet(key), 2)
    }
  } else {
    return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, hash, new $c_sci_HashSet$HashSet1(key, hash), level, 2)
  }
});
$c_sci_HashSet$HashSet1.prototype.union0__sci_HashSet__I__sci_HashSet = (function(that, level) {
  if ((that instanceof $c_sci_HashSet$HashSet1)) {
    var x2 = $as_sci_HashSet$HashSet1(that);
    if ((this.sci_HashSet$LeafHashSet__f_hash === x2.sci_HashSet$LeafHashSet__f_hash)) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(this.sci_HashSet$HashSet1__f_key, x2.sci_HashSet$HashSet1__f_key)) {
        return this
      } else {
        var $$x1 = this.sci_HashSet$LeafHashSet__f_hash;
        $m_sci_ListSet$();
        var this$2 = $m_sci_ListSet$EmptyListSet$();
        var elem = this.sci_HashSet$HashSet1__f_key;
        return new $c_sci_HashSet$HashSetCollision1($$x1, new $c_sci_ListSet$Node(this$2, elem).$plus__O__sci_ListSet(x2.sci_HashSet$HashSet1__f_key), 2)
      }
    } else {
      return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, x2.sci_HashSet$LeafHashSet__f_hash, x2, level, 2)
    }
  } else {
    return that.union0__sci_HashSet__I__sci_HashSet(this, level)
  }
});
$c_sci_HashSet$HashSet1.prototype.removed0__O__I__I__sci_HashSet = (function(key, hash, level) {
  return (((hash === this.sci_HashSet$LeafHashSet__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashSet$HashSet1__f_key)) ? null : this)
});
$c_sci_HashSet$HashSet1.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var array = [this.sci_HashSet$HashSet1__f_key];
  var elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(elems)
});
$c_sci_HashSet$HashSet1.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_HashSet$HashSet1__f_key)
});
function $as_sci_HashSet$HashSet1(obj) {
  return (((obj instanceof $c_sci_HashSet$HashSet1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashSet1"))
}
function $isArrayOf_sci_HashSet$HashSet1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashSet1)))
}
function $asArrayOf_sci_HashSet$HashSet1(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashSet1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashSet1;", depth))
}
var $d_sci_HashSet$HashSet1 = new $TypeData().initClass({
  sci_HashSet$HashSet1: 0
}, false, "scala.collection.immutable.HashSet$HashSet1", {
  sci_HashSet$HashSet1: 1,
  sci_HashSet$LeafHashSet: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$HashSet1.prototype.$classData = $d_sci_HashSet$HashSet1;
/** @constructor */
function $c_sci_HashSet$HashSetCollision1(hash, ks, size) {
  this.sci_HashSet$LeafHashSet__f_hash = 0;
  this.sci_HashSet$HashSetCollision1__f_ks = null;
  this.sci_HashSet$HashSetCollision1__f_size = 0;
  this.sci_HashSet$HashSetCollision1__f_ks = ks;
  this.sci_HashSet$HashSetCollision1__f_size = size;
  $ct_sci_HashSet$LeafHashSet__I__(this, hash)
}
$c_sci_HashSet$HashSetCollision1.prototype = new $h_sci_HashSet$LeafHashSet();
$c_sci_HashSet$HashSetCollision1.prototype.constructor = $c_sci_HashSet$HashSetCollision1;
/** @constructor */
function $h_sci_HashSet$HashSetCollision1() {
  /*<skip>*/
}
$h_sci_HashSet$HashSetCollision1.prototype = $c_sci_HashSet$HashSetCollision1.prototype;
$c_sci_HashSet$HashSetCollision1.prototype.size__I = (function() {
  return this.sci_HashSet$HashSetCollision1__f_size
});
$c_sci_HashSet$HashSetCollision1.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  return ((hash === this.sci_HashSet$LeafHashSet__f_hash) && this.sci_HashSet$HashSetCollision1__f_ks.contains__O__Z(key))
});
$c_sci_HashSet$HashSetCollision1.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_sci_HashSet$HashSetCollision1)) {
    var x2 = $as_sci_HashSet$HashSetCollision1(other);
    if ((this === x2)) {
      return true
    } else if ((this.sci_HashSet$LeafHashSet__f_hash === x2.sci_HashSet$LeafHashSet__f_hash)) {
      var x = this.sci_HashSet$HashSetCollision1__f_ks;
      var x$2 = x2.sci_HashSet$HashSetCollision1__f_ks;
      return ((x === null) ? (x$2 === null) : $f_sc_GenSetLike__equals__O__Z(x, x$2))
    } else {
      return false
    }
  } else {
    return ((!(other instanceof $c_sci_HashSet)) && $f_sc_GenSetLike__equals__O__Z(this, other))
  }
});
$c_sci_HashSet$HashSetCollision1.prototype.subsetOf0__sci_HashSet__I__Z = (function(that, level) {
  if ((this === that)) {
    return true
  } else {
    var this$1 = this.sci_HashSet$HashSetCollision1__f_ks;
    var this$2 = $p_sci_ListSet__reverseList$1__sci_List(this$1);
    var this$3 = $f_sc_LinearSeqLike__iterator__sc_Iterator(this$2);
    var res = true;
    while ((res && this$3.hasNext__Z())) {
      var arg1 = this$3.next__O();
      res = that.get0__O__I__I__Z(arg1, this.sci_HashSet$LeafHashSet__f_hash, level)
    };
    return res
  }
});
$c_sci_HashSet$HashSetCollision1.prototype.updated0__O__I__I__sci_HashSet = (function(key, hash, level) {
  if ((hash === this.sci_HashSet$LeafHashSet__f_hash)) {
    var ks1 = this.sci_HashSet$HashSetCollision1__f_ks.$plus__O__sci_ListSet(key);
    return ((ks1 === this.sci_HashSet$HashSetCollision1__f_ks) ? this : new $c_sci_HashSet$HashSetCollision1(hash, ks1, ((1 + this.sci_HashSet$HashSetCollision1__f_size) | 0)))
  } else {
    return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, hash, new $c_sci_HashSet$HashSet1(key, hash), level, ((1 + this.sci_HashSet$HashSetCollision1__f_size) | 0))
  }
});
$c_sci_HashSet$HashSetCollision1.prototype.union0__sci_HashSet__I__sci_HashSet = (function(that, level) {
  if ((that instanceof $c_sci_HashSet$HashSet1)) {
    var x2 = $as_sci_HashSet$HashSet1(that);
    if ((x2.sci_HashSet$LeafHashSet__f_hash !== this.sci_HashSet$LeafHashSet__f_hash)) {
      return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, x2.sci_HashSet$LeafHashSet__f_hash, x2, level, ((1 + this.sci_HashSet$HashSetCollision1__f_size) | 0))
    } else {
      var ks1 = this.sci_HashSet$HashSetCollision1__f_ks.$plus__O__sci_ListSet(x2.sci_HashSet$HashSet1__f_key);
      return ((ks1 === this.sci_HashSet$HashSetCollision1__f_ks) ? this : new $c_sci_HashSet$HashSetCollision1(this.sci_HashSet$LeafHashSet__f_hash, ks1, ((1 + this.sci_HashSet$HashSetCollision1__f_size) | 0)))
    }
  } else if ((that instanceof $c_sci_HashSet$HashSetCollision1)) {
    var x3 = $as_sci_HashSet$HashSetCollision1(that);
    if ((x3.sci_HashSet$LeafHashSet__f_hash !== this.sci_HashSet$LeafHashSet__f_hash)) {
      return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, x3.sci_HashSet$LeafHashSet__f_hash, x3, level, ((this.sci_HashSet$HashSetCollision1__f_size + x3.sci_HashSet$HashSetCollision1__f_size) | 0))
    } else if ((this === x3)) {
      return this
    } else {
      var ks1$2 = this.sci_HashSet$HashSetCollision1__f_ks.$plus$plus__sc_GenTraversableOnce__sci_ListSet(x3.sci_HashSet$HashSetCollision1__f_ks);
      if ((ks1$2 === this.sci_HashSet$HashSetCollision1__f_ks)) {
        return this
      } else {
        var newSize = ks1$2.size__I();
        return ((newSize === x3.sci_HashSet$HashSetCollision1__f_size) ? x3 : new $c_sci_HashSet$HashSetCollision1(this.sci_HashSet$LeafHashSet__f_hash, ks1$2, newSize))
      }
    }
  } else {
    return that.union0__sci_HashSet__I__sci_HashSet(this, level)
  }
});
$c_sci_HashSet$HashSetCollision1.prototype.removed0__O__I__I__sci_HashSet = (function(key, hash, level) {
  if ((hash === this.sci_HashSet$LeafHashSet__f_hash)) {
    var ks1 = this.sci_HashSet$HashSetCollision1__f_ks.$minus__O__sci_ListSet(key);
    if ((ks1 === this.sci_HashSet$HashSetCollision1__f_ks)) {
      return this
    } else if ((this.sci_HashSet$HashSetCollision1__f_size === 2)) {
      var this$1 = $p_sci_ListSet__reverseList$1__sci_List(ks1);
      return new $c_sci_HashSet$HashSet1($f_sc_LinearSeqLike__iterator__sc_Iterator(this$1).next__O(), hash)
    } else {
      return new $c_sci_HashSet$HashSetCollision1(hash, ks1, (((-1) + this.sci_HashSet$HashSetCollision1__f_size) | 0))
    }
  } else {
    return this
  }
});
$c_sci_HashSet$HashSetCollision1.prototype.iterator__sc_Iterator = (function() {
  var this$1 = this.sci_HashSet$HashSetCollision1__f_ks;
  var this$2 = $p_sci_ListSet__reverseList$1__sci_List(this$1);
  return $f_sc_LinearSeqLike__iterator__sc_Iterator(this$2)
});
$c_sci_HashSet$HashSetCollision1.prototype.foreach__F1__V = (function(f) {
  var this$1 = this.sci_HashSet$HashSetCollision1__f_ks;
  var this$2 = $p_sci_ListSet__reverseList$1__sci_List(this$1);
  var this$3 = $f_sc_LinearSeqLike__iterator__sc_Iterator(this$2);
  $f_sc_Iterator__foreach__F1__V(this$3, f)
});
function $as_sci_HashSet$HashSetCollision1(obj) {
  return (((obj instanceof $c_sci_HashSet$HashSetCollision1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashSetCollision1"))
}
function $isArrayOf_sci_HashSet$HashSetCollision1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashSetCollision1)))
}
function $asArrayOf_sci_HashSet$HashSetCollision1(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashSetCollision1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashSetCollision1;", depth))
}
var $d_sci_HashSet$HashSetCollision1 = new $TypeData().initClass({
  sci_HashSet$HashSetCollision1: 0
}, false, "scala.collection.immutable.HashSet$HashSetCollision1", {
  sci_HashSet$HashSetCollision1: 1,
  sci_HashSet$LeafHashSet: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$HashSetCollision1.prototype.$classData = $d_sci_HashSet$HashSetCollision1;
function $p_sci_ListMap__reverseList$1__sci_List($thiz) {
  var curr = $thiz;
  var res = $m_sci_Nil$();
  while ((!curr.isEmpty__Z())) {
    var x$4 = new $c_T2(curr.key__O(), curr.value__O());
    var this$1 = res;
    res = new $c_sci_$colon$colon(x$4, this$1);
    curr = curr.next__sci_ListMap()
  };
  return res
}
/** @constructor */
function $c_sci_ListMap() {
  /*<skip>*/
}
$c_sci_ListMap.prototype = new $h_sci_AbstractMap();
$c_sci_ListMap.prototype.constructor = $c_sci_ListMap;
/** @constructor */
function $h_sci_ListMap() {
  /*<skip>*/
}
$h_sci_ListMap.prototype = $c_sci_ListMap.prototype;
$c_sci_ListMap.prototype.size__I = (function() {
  return 0
});
$c_sci_ListMap.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_ListMap.prototype.get__O__s_Option = (function(key) {
  return $m_s_None$()
});
$c_sci_ListMap.prototype.foreachEntry__F2__V = (function(f) {
  var current = this;
  while ((!current.isEmpty__Z())) {
    f.apply__O__O__O(current.key__O(), current.value__O());
    current = current.next__sci_ListMap()
  }
});
$c_sci_ListMap.prototype.hashCode__I = (function() {
  if (this.isEmpty__Z()) {
    return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash
  } else {
    var hasher = new $c_sci_Map$HashCodeAccumulator();
    this.foreachEntry__F2__V(hasher);
    return hasher.finalizeHash__I()
  }
});
$c_sci_ListMap.prototype.updated__O__O__sci_ListMap = (function(key, value) {
  return new $c_sci_ListMap$Node(this, key, value)
});
$c_sci_ListMap.prototype.$plus__T2__sci_ListMap = (function(kv) {
  return new $c_sci_ListMap$Node(this, kv.T2__f__1, kv.T2__f__2)
});
$c_sci_ListMap.prototype.$plus$plus__sc_GenTraversableOnce__sci_ListMap = (function(xs) {
  return (xs.isEmpty__Z() ? this : $as_sci_ListMap(xs.$div$colon__O__F2__O(this, new $c_sjsr_AnonFunction2(((this$1) => ((x$2$2, x$3$2) => {
    var x$2 = $as_sci_ListMap(x$2$2);
    var x$3 = $as_T2(x$3$2);
    return x$2.$plus__T2__sci_ListMap(x$3)
  }))(this)))))
});
$c_sci_ListMap.prototype.iterator__sc_Iterator = (function() {
  var this$1 = $p_sci_ListMap__reverseList$1__sci_List(this);
  return $f_sc_LinearSeqLike__iterator__sc_Iterator(this$1)
});
$c_sci_ListMap.prototype.key__O = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "key of empty map")
});
$c_sci_ListMap.prototype.value__O = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "value of empty map")
});
$c_sci_ListMap.prototype.next__sci_ListMap = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next of empty map")
});
$c_sci_ListMap.prototype.stringPrefix__T = (function() {
  return "ListMap"
});
$c_sci_ListMap.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.$plus__T2__sci_ListMap(kv)
});
$c_sci_ListMap.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.$plus__T2__sci_ListMap(kv)
});
$c_sci_ListMap.prototype.empty__sc_Map = (function() {
  $m_sci_ListMap$();
  return $m_sci_ListMap$EmptyListMap$()
});
$c_sci_ListMap.prototype.empty__sci_Map = (function() {
  $m_sci_ListMap$();
  return $m_sci_ListMap$EmptyListMap$()
});
function $as_sci_ListMap(obj) {
  return (((obj instanceof $c_sci_ListMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ListMap"))
}
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ListMap)))
}
function $asArrayOf_sci_ListMap(obj, depth) {
  return (($isArrayOf_sci_ListMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ListMap;", depth))
}
/** @constructor */
function $c_sci_Map$EmptyMap$() {
  /*<skip>*/
}
$c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$c_sci_Map$EmptyMap$.prototype.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
  /*<skip>*/
}
$h_sci_Map$EmptyMap$.prototype = $c_sci_Map$EmptyMap$.prototype;
$c_sci_Map$EmptyMap$.prototype.size__I = (function() {
  return 0
});
$c_sci_Map$EmptyMap$.prototype.apply__O__E = (function(key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
});
$c_sci_Map$EmptyMap$.prototype.get__O__s_Option = (function(key) {
  return $m_s_None$()
});
$c_sci_Map$EmptyMap$.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return default$1.apply__O()
});
$c_sci_Map$EmptyMap$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_empty
});
$c_sci_Map$EmptyMap$.prototype.$plus__T2__sci_Map = (function(kv) {
  var key = kv.T2__f__1;
  var value = kv.T2__f__2;
  return new $c_sci_Map$Map1(key, value)
});
$c_sci_Map$EmptyMap$.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash
});
$c_sci_Map$EmptyMap$.prototype.$plus__T2__sc_GenMap = (function(kv) {
  var key = kv.T2__f__1;
  var value = kv.T2__f__2;
  return new $c_sci_Map$Map1(key, value)
});
$c_sci_Map$EmptyMap$.prototype.apply__O__O = (function(key) {
  this.apply__O__E(key)
});
var $d_sci_Map$EmptyMap$ = new $TypeData().initClass({
  sci_Map$EmptyMap$: 0
}, false, "scala.collection.immutable.Map$EmptyMap$", {
  sci_Map$EmptyMap$: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$EmptyMap$.prototype.$classData = $d_sci_Map$EmptyMap$;
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$()
  };
  return $n_sci_Map$EmptyMap$
}
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.sci_Map$Map1__f_key1 = null;
  this.sci_Map$Map1__f_value1 = null;
  this.sci_Map$Map1__f_key1 = key1;
  this.sci_Map$Map1__f_value1 = value1
}
$c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map1.prototype.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
  /*<skip>*/
}
$h_sci_Map$Map1.prototype = $c_sci_Map$Map1.prototype;
$c_sci_Map$Map1.prototype.size__I = (function() {
  return 1
});
$c_sci_Map$Map1.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)) {
    return this.sci_Map$Map1__f_value1
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_Map$Map1.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_s_Some(this.sci_Map$Map1__f_value1) : $m_s_None$())
});
$c_sci_Map$Map1.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? this.sci_Map$Map1__f_value1 : default$1.apply__O())
});
$c_sci_Map$Map1.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var elem = new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1);
  return new $c_sc_Iterator$$anon$3(elem)
});
$c_sci_Map$Map1.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_sci_Map$Map1(this.sci_Map$Map1__f_key1, value) : new $c_sci_Map$Map2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1, key, value))
});
$c_sci_Map$Map1.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
$c_sci_Map$Map1.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1))
});
$c_sci_Map$Map1.prototype.forall__F1__Z = (function(p) {
  return $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1)))
});
$c_sci_Map$Map1.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var x = this.sci_Map$Map1__f_key1;
  var y = this.sci_Map$Map1__f_value1;
  var h = this$1.product2Hash__O__O__I__I(x, y, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = $imul(c, h)
  };
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 1)
});
$c_sci_Map$Map1.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
var $d_sci_Map$Map1 = new $TypeData().initClass({
  sci_Map$Map1: 0
}, false, "scala.collection.immutable.Map$Map1", {
  sci_Map$Map1: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$Map1.prototype.$classData = $d_sci_Map$Map1;
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.sci_Map$Map2__f_key1 = null;
  this.sci_Map$Map2__f_value1 = null;
  this.sci_Map$Map2__f_key2 = null;
  this.sci_Map$Map2__f_value2 = null;
  this.sci_Map$Map2__f_key1 = key1;
  this.sci_Map$Map2__f_value1 = value1;
  this.sci_Map$Map2__f_key2 = key2;
  this.sci_Map$Map2__f_value2 = value2
}
$c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map2.prototype.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
  /*<skip>*/
}
$h_sci_Map$Map2.prototype = $c_sci_Map$Map2.prototype;
$c_sci_Map$Map2.prototype.size__I = (function() {
  return 2
});
$c_sci_Map$Map2.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key1)) {
    return this.sci_Map$Map2__f_value1
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key2)) {
    return this.sci_Map$Map2__f_value2
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_Map$Map2.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key1) ? new $c_s_Some(this.sci_Map$Map2__f_value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key2) ? new $c_s_Some(this.sci_Map$Map2__f_value2) : $m_s_None$()))
});
$c_sci_Map$Map2.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key1) ? this.sci_Map$Map2__f_value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key2) ? this.sci_Map$Map2__f_value2 : default$1.apply__O()))
});
$c_sci_Map$Map2.prototype.scala$collection$immutable$Map$Map2$$_getKey__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Map$Map2__f_key1;
      break
    }
    case 1: {
      return this.sci_Map$Map2__f_key2;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Map$Map2.prototype.scala$collection$immutable$Map$Map2$$_getValue__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Map$Map2__f_value1;
      break
    }
    case 1: {
      return this.sci_Map$Map2__f_value2;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Map$Map2.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Map$Map2$$anon$1(this)
});
$c_sci_Map$Map2.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key1) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_key1, value, this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key2) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1, this.sci_Map$Map2__f_key2, value) : new $c_sci_Map$Map3(this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1, this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2, key, value)))
});
$c_sci_Map$Map2.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
$c_sci_Map$Map2.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(new $c_T2(this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1));
  f.apply__O__O(new $c_T2(this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2))
});
$c_sci_Map$Map2.prototype.forall__F1__Z = (function(p) {
  return ($uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2))))
});
$c_sci_Map$Map2.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var x = this.sci_Map$Map2__f_key1;
  var y = this.sci_Map$Map2__f_value1;
  var h = this$1.product2Hash__O__O__I__I(x, y, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = $imul(c, h)
  };
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  var x$1 = this.sci_Map$Map2__f_key2;
  var y$1 = this.sci_Map$Map2__f_value2;
  h = this$2.product2Hash__O__O__I__I(x$1, y$1, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = $imul(c, h)
  };
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 2)
});
$c_sci_Map$Map2.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
var $d_sci_Map$Map2 = new $TypeData().initClass({
  sci_Map$Map2: 0
}, false, "scala.collection.immutable.Map$Map2", {
  sci_Map$Map2: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$Map2.prototype.$classData = $d_sci_Map$Map2;
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.sci_Map$Map3__f_key1 = null;
  this.sci_Map$Map3__f_value1 = null;
  this.sci_Map$Map3__f_key2 = null;
  this.sci_Map$Map3__f_value2 = null;
  this.sci_Map$Map3__f_key3 = null;
  this.sci_Map$Map3__f_value3 = null;
  this.sci_Map$Map3__f_key1 = key1;
  this.sci_Map$Map3__f_value1 = value1;
  this.sci_Map$Map3__f_key2 = key2;
  this.sci_Map$Map3__f_value2 = value2;
  this.sci_Map$Map3__f_key3 = key3;
  this.sci_Map$Map3__f_value3 = value3
}
$c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map3.prototype.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
  /*<skip>*/
}
$h_sci_Map$Map3.prototype = $c_sci_Map$Map3.prototype;
$c_sci_Map$Map3.prototype.size__I = (function() {
  return 3
});
$c_sci_Map$Map3.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key1)) {
    return this.sci_Map$Map3__f_value1
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key2)) {
    return this.sci_Map$Map3__f_value2
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key3)) {
    return this.sci_Map$Map3__f_value3
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_Map$Map3.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key1) ? new $c_s_Some(this.sci_Map$Map3__f_value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key2) ? new $c_s_Some(this.sci_Map$Map3__f_value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key3) ? new $c_s_Some(this.sci_Map$Map3__f_value3) : $m_s_None$())))
});
$c_sci_Map$Map3.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key1) ? this.sci_Map$Map3__f_value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key2) ? this.sci_Map$Map3__f_value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key3) ? this.sci_Map$Map3__f_value3 : default$1.apply__O())))
});
$c_sci_Map$Map3.prototype.scala$collection$immutable$Map$Map3$$_getKey__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Map$Map3__f_key1;
      break
    }
    case 1: {
      return this.sci_Map$Map3__f_key2;
      break
    }
    case 2: {
      return this.sci_Map$Map3__f_key3;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Map$Map3.prototype.scala$collection$immutable$Map$Map3$$_getValue__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Map$Map3__f_value1;
      break
    }
    case 1: {
      return this.sci_Map$Map3__f_value2;
      break
    }
    case 2: {
      return this.sci_Map$Map3__f_value3;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Map$Map3.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Map$Map3$$anon$4(this)
});
$c_sci_Map$Map3.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key1) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_key1, value, this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2, this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key2) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1, this.sci_Map$Map3__f_key2, value, this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key3) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1, this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2, this.sci_Map$Map3__f_key3, value) : new $c_sci_Map$Map4(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1, this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2, this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3, key, value))))
});
$c_sci_Map$Map3.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
$c_sci_Map$Map3.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(new $c_T2(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1));
  f.apply__O__O(new $c_T2(this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2));
  f.apply__O__O(new $c_T2(this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3))
});
$c_sci_Map$Map3.prototype.forall__F1__Z = (function(p) {
  return (($uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2)))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3))))
});
$c_sci_Map$Map3.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var x = this.sci_Map$Map3__f_key1;
  var y = this.sci_Map$Map3__f_value1;
  var h = this$1.product2Hash__O__O__I__I(x, y, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = $imul(c, h)
  };
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  var x$1 = this.sci_Map$Map3__f_key2;
  var y$1 = this.sci_Map$Map3__f_value2;
  h = this$2.product2Hash__O__O__I__I(x$1, y$1, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = $imul(c, h)
  };
  var this$3 = $m_s_util_hashing_MurmurHash3$();
  var x$2 = this.sci_Map$Map3__f_key3;
  var y$2 = this.sci_Map$Map3__f_value3;
  h = this$3.product2Hash__O__O__I__I(x$2, y$2, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = $imul(c, h)
  };
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 3)
});
$c_sci_Map$Map3.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
var $d_sci_Map$Map3 = new $TypeData().initClass({
  sci_Map$Map3: 0
}, false, "scala.collection.immutable.Map$Map3", {
  sci_Map$Map3: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$Map3.prototype.$classData = $d_sci_Map$Map3;
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.sci_Map$Map4__f_key1 = null;
  this.sci_Map$Map4__f_value1 = null;
  this.sci_Map$Map4__f_key2 = null;
  this.sci_Map$Map4__f_value2 = null;
  this.sci_Map$Map4__f_key3 = null;
  this.sci_Map$Map4__f_value3 = null;
  this.sci_Map$Map4__f_key4 = null;
  this.sci_Map$Map4__f_value4 = null;
  this.sci_Map$Map4__f_key1 = key1;
  this.sci_Map$Map4__f_value1 = value1;
  this.sci_Map$Map4__f_key2 = key2;
  this.sci_Map$Map4__f_value2 = value2;
  this.sci_Map$Map4__f_key3 = key3;
  this.sci_Map$Map4__f_value3 = value3;
  this.sci_Map$Map4__f_key4 = key4;
  this.sci_Map$Map4__f_value4 = value4
}
$c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map4.prototype.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
  /*<skip>*/
}
$h_sci_Map$Map4.prototype = $c_sci_Map$Map4.prototype;
$c_sci_Map$Map4.prototype.size__I = (function() {
  return 4
});
$c_sci_Map$Map4.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key1)) {
    return this.sci_Map$Map4__f_value1
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key2)) {
    return this.sci_Map$Map4__f_value2
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key3)) {
    return this.sci_Map$Map4__f_value3
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key4)) {
    return this.sci_Map$Map4__f_value4
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_Map$Map4.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key1) ? new $c_s_Some(this.sci_Map$Map4__f_value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key2) ? new $c_s_Some(this.sci_Map$Map4__f_value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key3) ? new $c_s_Some(this.sci_Map$Map4__f_value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key4) ? new $c_s_Some(this.sci_Map$Map4__f_value4) : $m_s_None$()))))
});
$c_sci_Map$Map4.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key1) ? this.sci_Map$Map4__f_value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key2) ? this.sci_Map$Map4__f_value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key3) ? this.sci_Map$Map4__f_value3 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key4) ? this.sci_Map$Map4__f_value4 : default$1.apply__O()))))
});
$c_sci_Map$Map4.prototype.scala$collection$immutable$Map$Map4$$_getKey__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Map$Map4__f_key1;
      break
    }
    case 1: {
      return this.sci_Map$Map4__f_key2;
      break
    }
    case 2: {
      return this.sci_Map$Map4__f_key3;
      break
    }
    case 3: {
      return this.sci_Map$Map4__f_key4;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Map$Map4.prototype.scala$collection$immutable$Map$Map4$$_getValue__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Map$Map4__f_value1;
      break
    }
    case 1: {
      return this.sci_Map$Map4__f_value2;
      break
    }
    case 2: {
      return this.sci_Map$Map4__f_value3;
      break
    }
    case 3: {
      return this.sci_Map$Map4__f_value4;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Map$Map4.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Map$Map4$$anon$7(this)
});
$c_sci_Map$Map4.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key1) ? new $c_sci_Map$Map4(this.sci_Map$Map4__f_key1, value, this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2, this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3, this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key2) ? new $c_sci_Map$Map4(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1, this.sci_Map$Map4__f_key2, value, this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3, this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key3) ? new $c_sci_Map$Map4(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1, this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2, this.sci_Map$Map4__f_key3, value, this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key4) ? new $c_sci_Map$Map4(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1, this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2, this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3, this.sci_Map$Map4__f_key4, value) : $ct_sci_HashMap__(new $c_sci_HashMap()).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4).updated__O__O__sci_HashMap(key, value)))))
});
$c_sci_Map$Map4.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
$c_sci_Map$Map4.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1));
  f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2));
  f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3));
  f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4))
});
$c_sci_Map$Map4.prototype.forall__F1__Z = (function(p) {
  return ((($uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2)))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3)))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4))))
});
$c_sci_Map$Map4.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var x = this.sci_Map$Map4__f_key1;
  var y = this.sci_Map$Map4__f_value1;
  var h = this$1.product2Hash__O__O__I__I(x, y, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = $imul(c, h)
  };
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  var x$1 = this.sci_Map$Map4__f_key2;
  var y$1 = this.sci_Map$Map4__f_value2;
  h = this$2.product2Hash__O__O__I__I(x$1, y$1, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = $imul(c, h)
  };
  var this$3 = $m_s_util_hashing_MurmurHash3$();
  var x$2 = this.sci_Map$Map4__f_key3;
  var y$2 = this.sci_Map$Map4__f_value3;
  h = this$3.product2Hash__O__O__I__I(x$2, y$2, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = $imul(c, h)
  };
  var this$4 = $m_s_util_hashing_MurmurHash3$();
  var x$3 = this.sci_Map$Map4__f_key4;
  var y$3 = this.sci_Map$Map4__f_value4;
  h = this$4.product2Hash__O__O__I__I(x$3, y$3, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = $imul(c, h)
  };
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 4)
});
$c_sci_Map$Map4.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
var $d_sci_Map$Map4 = new $TypeData().initClass({
  sci_Map$Map4: 0
}, false, "scala.collection.immutable.Map$Map4", {
  sci_Map$Map4: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$Map4.prototype.$classData = $d_sci_Map$Map4;
function $p_sci_Range__gap__J($thiz) {
  var value = $thiz.sci_Range__f_end;
  var hi = (value >> 31);
  var value$1 = $thiz.sci_Range__f_start;
  var hi$1 = (value$1 >> 31);
  var lo = ((value - value$1) | 0);
  var hi$2 = ((((-2147483648) ^ lo) > ((-2147483648) ^ value)) ? (((-1) + ((hi - hi$1) | 0)) | 0) : ((hi - hi$1) | 0));
  return new $c_RTLong(lo, hi$2)
}
function $p_sci_Range__isExact__Z($thiz) {
  var this$2 = $p_sci_Range__gap__J($thiz);
  var value = $thiz.sci_Range__f_step;
  var hi = (value >> 31);
  var this$3 = $m_RTLong$();
  var lo = this$3.remainderImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, value, hi);
  var hi$1 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return ((lo === 0) && (hi$1 === 0))
}
function $p_sci_Range__hasStub__Z($thiz) {
  return true
}
function $p_sci_Range__longLength__J($thiz) {
  var this$2 = $p_sci_Range__gap__J($thiz);
  var value = $thiz.sci_Range__f_step;
  var hi = (value >> 31);
  var this$3 = $m_RTLong$();
  var lo = this$3.divideImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, value, hi);
  var hi$1 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var value$1 = ($p_sci_Range__hasStub__Z($thiz) ? 1 : 0);
  var hi$2 = (value$1 >> 31);
  var lo$1 = ((lo + value$1) | 0);
  var hi$3 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ lo)) ? ((1 + ((hi$1 + hi$2) | 0)) | 0) : ((hi$1 + hi$2) | 0));
  return new $c_RTLong(lo$1, hi$3)
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.sci_Range__f_start = start;
  $thiz.sci_Range__f_end = end;
  $thiz.sci_Range__f_step = step;
  $thiz.sci_Range__f_isEmpty = (((start > end) && (step > 0)) || ((start < end) && (step < 0)));
  if ((step === 0)) {
    var $$x1;
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.")
  } else if ($thiz.sci_Range__f_isEmpty) {
    var $$x1 = 0
  } else {
    var t = $p_sci_Range__longLength__J($thiz);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var $$x1 = (((hi === 0) ? (((-2147483648) ^ lo) > (-1)) : (hi > 0)) ? (-1) : lo)
  };
  $thiz.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = $$x1;
  switch (step) {
    case 1: {
      var $$x2 = end;
      break
    }
    case (-1): {
      var $$x2 = end;
      break
    }
    default: {
      var this$2 = $p_sci_Range__gap__J($thiz);
      var hi$1 = (step >> 31);
      var this$3 = $m_RTLong$();
      var lo$1 = this$3.remainderImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, step, hi$1);
      var $$x2 = ((lo$1 !== 0) ? ((end - lo$1) | 0) : end)
    }
  };
  $thiz.sci_Range__f_scala$collection$immutable$Range$$lastElement = $$x2;
  return $thiz
}
/** @constructor */
function $c_sci_Range() {
  this.sci_Range__f_start = 0;
  this.sci_Range__f_end = 0;
  this.sci_Range__f_step = 0;
  this.sci_Range__f_isEmpty = false;
  this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = 0;
  this.sci_Range__f_scala$collection$immutable$Range$$lastElement = 0
}
$c_sci_Range.prototype = new $h_sc_AbstractSeq();
$c_sci_Range.prototype.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
  /*<skip>*/
}
$h_sci_Range.prototype = $c_sci_Range.prototype;
$c_sci_Range.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_IndexedSeq$()
});
$c_sci_Range.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_Range.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this)
});
$c_sci_Range.prototype.sizeHintIfCheap__I = (function() {
  return this.length__I()
});
$c_sci_Range.prototype.isEmpty__Z = (function() {
  return this.sci_Range__f_isEmpty
});
$c_sci_Range.prototype.last__I = (function() {
  if (this.sci_Range__f_isEmpty) {
    var this$1 = $m_sci_Nil$();
    return $uI($f_sc_LinearSeqOptimized__last__O(this$1))
  } else {
    return this.sci_Range__f_scala$collection$immutable$Range$$lastElement
  }
});
$c_sci_Range.prototype.head__I = (function() {
  return (this.sci_Range__f_isEmpty ? $m_sci_Nil$().head__E() : this.sci_Range__f_start)
});
$c_sci_Range.prototype.min__s_math_Ordering__I = (function(ord) {
  return ((ord === $m_s_math_Ordering$Int$()) ? ((this.sci_Range__f_step > 0) ? this.head__I() : this.last__I()) : $uI($f_sc_TraversableOnce__min__s_math_Ordering__O(this, ord)))
});
$c_sci_Range.prototype.max__s_math_Ordering__I = (function(ord) {
  return ((ord === $m_s_math_Ordering$Int$()) ? ((this.sci_Range__f_step > 0) ? this.last__I() : this.head__I()) : $uI($f_sc_TraversableOnce__max__s_math_Ordering__O(this, ord)))
});
$c_sci_Range.prototype.length__I = (function() {
  return ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements < 0) ? $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, true) : this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements)
});
$c_sci_Range.prototype.scala$collection$immutable$Range$$validateMaxLength__V = (function() {
  if ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, true)
  }
});
$c_sci_Range.prototype.foreach__F1__V = (function(f) {
  if ((!this.sci_Range__f_isEmpty)) {
    var i = this.sci_Range__f_start;
    while (true) {
      f.apply__O__O(i);
      if ((i === this.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
        return (void 0)
      };
      i = ((i + this.sci_Range__f_step) | 0)
    }
  }
});
$c_sci_Range.prototype.reverse__sci_Range = (function() {
  return (this.sci_Range__f_isEmpty ? this : new $c_sci_Range$Inclusive(this.last__I(), this.sci_Range__f_start, ((-this.sci_Range__f_step) | 0)))
});
$c_sci_Range.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    var x2 = $as_sci_Range(other);
    if (this.sci_Range__f_isEmpty) {
      return x2.sci_Range__f_isEmpty
    } else if (((!x2.sci_Range__f_isEmpty) && (this.sci_Range__f_start === x2.sci_Range__f_start))) {
      var l0 = this.last__I();
      return ((l0 === x2.last__I()) && ((this.sci_Range__f_start === l0) || (this.sci_Range__f_step === x2.sci_Range__f_step)))
    } else {
      return false
    }
  } else {
    return $f_sc_GenSeqLike__equals__O__Z(this, other)
  }
});
$c_sci_Range.prototype.toString__T = (function() {
  var stepped = ((this.sci_Range__f_step === 1) ? "" : (" by " + this.sci_Range__f_step));
  var prefix = (this.sci_Range__f_isEmpty ? "empty " : ((!$p_sci_Range__isExact__Z(this)) ? "inexact " : ""));
  return (((((prefix + "Range ") + this.sci_Range__f_start) + " to ") + this.sci_Range__f_end) + stepped)
});
$c_sci_Range.prototype.apply$mcII$sp__I__I = (function(idx) {
  this.scala$collection$immutable$Range$$validateMaxLength__V();
  if (((idx < 0) || (idx >= this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + idx))
  } else {
    return ((this.sci_Range__f_start + $imul(this.sci_Range__f_step, idx)) | 0)
  }
});
$c_sci_Range.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Range.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_Range.prototype.reverse__O = (function() {
  return this.reverse__sci_Range()
});
$c_sci_Range.prototype.apply__O__O = (function(v1) {
  var idx = $uI(v1);
  return this.apply$mcII$sp__I__I(idx)
});
$c_sci_Range.prototype.apply__I__O = (function(idx) {
  return this.apply$mcII$sp__I__I(idx)
});
$c_sci_Range.prototype.head__O = (function() {
  return this.head__I()
});
function $as_sci_Range(obj) {
  return (((obj instanceof $c_sci_Range) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Range"))
}
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Range)))
}
function $asArrayOf_sci_Range(obj, depth) {
  return (($isArrayOf_sci_Range(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Range;", depth))
}
/** @constructor */
function $c_sci_Stream() {
  /*<skip>*/
}
$c_sci_Stream.prototype = new $h_sc_AbstractSeq();
$c_sci_Stream.prototype.constructor = $c_sci_Stream;
/** @constructor */
function $h_sci_Stream() {
  /*<skip>*/
}
$h_sci_Stream.prototype = $c_sci_Stream.prototype;
$c_sci_Stream.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
});
$c_sci_Stream.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_sci_Stream.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_LinearSeqOptimized__lengthCompare__I__I(this, len)
});
$c_sci_Stream.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_Stream.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Stream$()
});
$c_sci_Stream.prototype.append__F0__sci_Stream = (function(rest) {
  if (this.isEmpty__Z()) {
    return $as_sc_GenTraversableOnce(rest.apply__O()).toStream__sci_Stream()
  } else {
    var hd = this.head__O();
    var tl = new $c_sjsr_AnonFunction0(((this$1, rest$1) => (() => $as_sci_Stream(this$1.tail__O()).append__F0__sci_Stream(rest$1)))(this, rest));
    return new $c_sci_Stream$Cons(hd, tl)
  }
});
$c_sci_Stream.prototype.force__sci_Stream = (function() {
  var these = this;
  var those = this;
  if ((!these.isEmpty__Z())) {
    these = $as_sci_Stream(these.tail__O())
  };
  while ((those !== these)) {
    if (these.isEmpty__Z()) {
      return this
    };
    these = $as_sci_Stream(these.tail__O());
    if (these.isEmpty__Z()) {
      return this
    };
    these = $as_sci_Stream(these.tail__O());
    if ((these === those)) {
      return this
    };
    those = $as_sci_Stream(those.tail__O())
  };
  return this
});
$c_sci_Stream.prototype.length__I = (function() {
  var len = 0;
  var left = this;
  while ((!left.isEmpty__Z())) {
    len = ((1 + len) | 0);
    left = $as_sci_Stream(left.tail__O())
  };
  return len
});
$c_sci_Stream.prototype.toStream__sci_Stream = (function() {
  return this
});
$c_sci_Stream.prototype.map__F1__scg_CanBuildFrom__O = (function(f, bf) {
  if ((bf.apply__O__scm_Builder(this) instanceof $c_sci_Stream$StreamBuilder)) {
    if (this.isEmpty__Z()) {
      var x$1 = $m_sci_Stream$Empty$()
    } else {
      var hd = f.apply__O__O(this.head__O());
      var tl = new $c_sjsr_AnonFunction0(((this$1, f$1) => (() => {
        var x = $as_sci_Stream(this$1.tail__O()).map__F1__scg_CanBuildFrom__O(f$1, $m_sci_Stream$().sci_Stream$__f_ReusableCBF);
        return $as_sci_Stream(x)
      }))(this, f));
      var x$1 = new $c_sci_Stream$Cons(hd, tl)
    };
    return x$1
  } else {
    return $f_sc_TraversableLike__map__F1__scg_CanBuildFrom__O(this, f, bf)
  }
});
$c_sci_Stream.prototype.flatMap__F1__scg_CanBuildFrom__O = (function(f, bf) {
  if ((bf.apply__O__scm_Builder(this) instanceof $c_sci_Stream$StreamBuilder)) {
    if (this.isEmpty__Z()) {
      var x$1 = $m_sci_Stream$Empty$()
    } else {
      var nonEmptyPrefix = new $c_sr_ObjectRef(this);
      var prefix = $as_sc_GenTraversableOnce(f.apply__O__O($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).head__O())).toStream__sci_Stream();
      while (((!$as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).isEmpty__Z()) && prefix.isEmpty__Z())) {
        nonEmptyPrefix.sr_ObjectRef__f_elem = $as_sci_Stream($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).tail__O());
        if ((!$as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).isEmpty__Z())) {
          prefix = $as_sc_GenTraversableOnce(f.apply__O__O($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).head__O())).toStream__sci_Stream()
        }
      };
      var x$1 = ($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).isEmpty__Z() ? ($m_sci_Stream$(), $m_sci_Stream$Empty$()) : prefix.append__F0__sci_Stream(new $c_sjsr_AnonFunction0(((this$3, nonEmptyPrefix$1, f$1) => (() => {
        var x = $as_sci_Stream($as_sci_Stream(nonEmptyPrefix$1.sr_ObjectRef__f_elem).tail__O()).flatMap__F1__scg_CanBuildFrom__O(f$1, $m_sci_Stream$().sci_Stream$__f_ReusableCBF);
        return $as_sci_Stream(x)
      }))(this, nonEmptyPrefix, f))))
    };
    return x$1
  } else {
    return $f_sc_TraversableLike__flatMap__F1__scg_CanBuildFrom__O(this, f, bf)
  }
});
$c_sci_Stream.prototype.filterImpl__F1__Z__sci_Stream = (function(p, isFlipped) {
  var rest = this;
  while (((!rest.isEmpty__Z()) && ($uZ(p.apply__O__O(rest.head__O())) === isFlipped))) {
    rest = $as_sci_Stream(rest.tail__O())
  };
  var this$1 = rest;
  if ((!this$1.isEmpty__Z())) {
    return $m_sci_Stream$().filteredTail__sci_Stream__F1__Z__sci_Stream$Cons(rest, p, isFlipped)
  } else {
    return $m_sci_Stream$Empty$()
  }
});
$c_sci_Stream.prototype.withFilter__F1__scg_FilterMonadic = (function(p) {
  return new $c_sci_Stream$StreamWithFilter(new $c_sjsr_AnonFunction0(((this$1) => (() => this$1))(this)), p)
});
$c_sci_Stream.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_StreamIterator(this)
});
$c_sci_Stream.prototype.foreach__F1__V = (function(f) {
  var _$this = this;
  while ((!_$this.isEmpty__Z())) {
    f.apply__O__O(_$this.head__O());
    _$this = $as_sci_Stream(_$this.tail__O())
  }
});
$c_sci_Stream.prototype.foldLeft__O__F2__O = (function(z, op) {
  var _$this = this;
  while (true) {
    if (_$this.isEmpty__Z()) {
      return z
    } else {
      var temp$_$this = $as_sci_Stream(_$this.tail__O());
      var temp$z = op.apply__O__O__O(z, _$this.head__O());
      _$this = temp$_$this;
      z = temp$z
    }
  }
});
$c_sci_Stream.prototype.reduceLeft__F2__O = (function(f) {
  if (this.isEmpty__Z()) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft")
  } else {
    var reducedRes = this.head__O();
    var left = $as_sci_Stream(this.tail__O());
    while ((!left.isEmpty__Z())) {
      reducedRes = f.apply__O__O__O(reducedRes, left.head__O());
      left = $as_sci_Stream(left.tail__O())
    };
    return reducedRes
  }
});
$c_sci_Stream.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  b.append__T__scm_StringBuilder(start);
  if ((!this.isEmpty__Z())) {
    b.append__O__scm_StringBuilder(this.head__O());
    var cursor = this;
    var n = 1;
    if (cursor.tailDefined__Z()) {
      var scout = $as_sci_Stream(this.tail__O());
      if (scout.isEmpty__Z()) {
        b.append__T__scm_StringBuilder(end);
        return b
      };
      if ((cursor !== scout)) {
        cursor = scout;
        if (scout.tailDefined__Z()) {
          scout = $as_sci_Stream(scout.tail__O());
          while (((cursor !== scout) && scout.tailDefined__Z())) {
            b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
            n = ((1 + n) | 0);
            cursor = $as_sci_Stream(cursor.tail__O());
            scout = $as_sci_Stream(scout.tail__O());
            if (scout.tailDefined__Z()) {
              scout = $as_sci_Stream(scout.tail__O())
            }
          }
        }
      };
      if ((!scout.tailDefined__Z())) {
        while ((cursor !== scout)) {
          b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
          n = ((1 + n) | 0);
          cursor = $as_sci_Stream(cursor.tail__O())
        };
        var this$1 = cursor;
        if ((!this$1.isEmpty__Z())) {
          b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O())
        }
      } else {
        var runner = this;
        var k = 0;
        while ((runner !== scout)) {
          runner = $as_sci_Stream(runner.tail__O());
          scout = $as_sci_Stream(scout.tail__O());
          k = ((1 + k) | 0)
        };
        if (((cursor === scout) && (k > 0))) {
          b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
          n = ((1 + n) | 0);
          cursor = $as_sci_Stream(cursor.tail__O())
        };
        while ((cursor !== scout)) {
          b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
          n = ((1 + n) | 0);
          cursor = $as_sci_Stream(cursor.tail__O())
        };
        n = ((n - k) | 0)
      }
    };
    if ((!cursor.isEmpty__Z())) {
      if ((!cursor.tailDefined__Z())) {
        b.append__T__scm_StringBuilder(sep).append__T__scm_StringBuilder("?")
      } else {
        b.append__T__scm_StringBuilder(sep).append__T__scm_StringBuilder("...")
      }
    }
  };
  b.append__T__scm_StringBuilder(end);
  return b
});
$c_sci_Stream.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  this.force__sci_Stream();
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
});
$c_sci_Stream.prototype.toString__T = (function() {
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this, "Stream(", ", ", ")")
});
$c_sci_Stream.prototype.drop__I__sci_Stream = (function(n) {
  var _$this = this;
  while (true) {
    if (((n <= 0) || _$this.isEmpty__Z())) {
      return _$this
    } else {
      var temp$_$this = $as_sci_Stream(_$this.tail__O());
      var temp$n = (((-1) + n) | 0);
      _$this = temp$_$this;
      n = temp$n
    }
  }
});
$c_sci_Stream.prototype.reverse__sci_Stream = (function() {
  var elem = $m_sci_Stream$Empty$();
  var result = new $c_sr_ObjectRef(elem);
  var these = this;
  while ((!these.isEmpty__Z())) {
    $m_sci_Stream$();
    var stream = new $c_sjsr_AnonFunction0(((this$2, result$1) => (() => $as_sci_Stream(result$1.sr_ObjectRef__f_elem)))(this, result));
    var r = new $c_sci_Stream$ConsWrapper(stream).$hash$colon$colon__O__sci_Stream(these.head__O());
    r.tail__O();
    result.sr_ObjectRef__f_elem = r;
    these = $as_sci_Stream(these.tail__O())
  };
  return $as_sci_Stream(result.sr_ObjectRef__f_elem)
});
$c_sci_Stream.prototype.stringPrefix__T = (function() {
  return "Stream"
});
$c_sci_Stream.prototype.equals__O__Z = (function(that) {
  return ((this === that) || $f_sc_GenSeqLike__equals__O__Z(this, that))
});
$c_sci_Stream.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Stream.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_Stream.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
});
$c_sci_Stream.prototype.reverse__O = (function() {
  return this.reverse__sci_Stream()
});
$c_sci_Stream.prototype.drop__I__sc_LinearSeqOptimized = (function(n) {
  return this.drop__I__sci_Stream(n)
});
function $as_sci_Stream(obj) {
  return (((obj instanceof $c_sci_Stream) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream"))
}
function $isArrayOf_sci_Stream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream)))
}
function $asArrayOf_sci_Stream(obj, depth) {
  return (($isArrayOf_sci_Stream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream;", depth))
}
function $ct_sci_HashMap__($thiz) {
  return $thiz
}
/** @constructor */
function $c_sci_HashMap() {
  /*<skip>*/
}
$c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$c_sci_HashMap.prototype.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
  /*<skip>*/
}
$h_sci_HashMap.prototype = $c_sci_HashMap.prototype;
$c_sci_HashMap.prototype.size__I = (function() {
  return 0
});
$c_sci_HashMap.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_empty
});
$c_sci_HashMap.prototype.foreach__F1__V = (function(f) {
  /*<skip>*/
});
$c_sci_HashMap.prototype.foreachEntry__F2__V = (function(f) {
  /*<skip>*/
});
$c_sci_HashMap.prototype.hashCode__I = (function() {
  if ($f_sc_MapLike__isEmpty__Z(this)) {
    return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash
  } else {
    var hasher = new $c_sci_Map$HashCodeAccumulator();
    this.foreachEntry__F2__V(hasher);
    return hasher.finalizeHash__I()
  }
});
$c_sci_HashMap.prototype.get__O__s_Option = (function(key) {
  return this.get0__O__I__I__s_Option(key, this.computeHash__O__I(key), 0)
});
$c_sci_HashMap.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return this.getOrElse0__O__I__I__F0__O(key, this.computeHash__O__I(key), 0, default$1)
});
$c_sci_HashMap.prototype.updated__O__O__sci_HashMap = (function(key, value) {
  return this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(key, this.computeHash__O__I(key), 0, value, null, null)
});
$c_sci_HashMap.prototype.$plus__T2__sci_HashMap = (function(kv) {
  return this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(kv.T2__f__1, this.computeHash__O__I(kv.T2__f__1), 0, kv.T2__f__2, kv, null)
});
$c_sci_HashMap.prototype.improve__I__I = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0))
});
$c_sci_HashMap.prototype.computeHash__O__I = (function(key) {
  return this.improve__I__I($m_sr_Statics$().anyHash__O__I(key))
});
$c_sci_HashMap.prototype.get0__O__I__I__s_Option = (function(key, hash, level) {
  return $m_s_None$()
});
$c_sci_HashMap.prototype.getOrElse0__O__I__I__F0__O = (function(key, hash, level, f) {
  return f.apply__O()
});
$c_sci_HashMap.prototype.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap = (function(key, hash, level, value, kv, merger) {
  return new $c_sci_HashMap$HashMap1(key, hash, value, kv)
});
$c_sci_HashMap.prototype.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap = (function(that, level, merger) {
  return that
});
$c_sci_HashMap.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_HashMap.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.$plus__T2__sci_HashMap(kv)
});
$c_sci_HashMap.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.$plus__T2__sci_HashMap(kv)
});
$c_sci_HashMap.prototype.empty__sc_Map = (function() {
  $m_sci_HashMap$();
  return $m_sci_HashMap$EmptyHashMap$()
});
$c_sci_HashMap.prototype.empty__sci_Map = (function() {
  $m_sci_HashMap$();
  return $m_sci_HashMap$EmptyHashMap$()
});
function $as_sci_HashMap(obj) {
  return (((obj instanceof $c_sci_HashMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap"))
}
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap)))
}
function $asArrayOf_sci_HashMap(obj, depth) {
  return (($isArrayOf_sci_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap;", depth))
}
var $d_sci_HashMap = new $TypeData().initClass({
  sci_HashMap: 0
}, false, "scala.collection.immutable.HashMap", {
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap.prototype.$classData = $d_sci_HashMap;
function $p_sci_List__isLikeListReusableCBF__scg_CanBuildFrom__Z($thiz, bf) {
  return (((((bf === $m_sci_List$().scg_GenTraversableFactory__f_ReusableCBFInstance) || (bf === $m_sci_LinearSeq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sc_LinearSeq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sci_Seq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sc_Seq$().scg_GenTraversableFactory__f_ReusableCBFInstance))
}
/** @constructor */
function $c_sci_List() {
  /*<skip>*/
}
$c_sci_List.prototype = new $h_sc_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
  /*<skip>*/
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.length__I = (function() {
  return $f_sc_LinearSeqOptimized__length__I(this)
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
});
$c_sci_List.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_LinearSeqOptimized__foldLeft__O__F2__O(this, z, op)
});
$c_sci_List.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_LinearSeqOptimized__reduceLeft__F2__O(this, op)
});
$c_sci_List.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_LinearSeqOptimized__lengthCompare__I__I(this, len)
});
$c_sci_List.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_LinearSeqLike__iterator__sc_Iterator(this)
});
$c_sci_List.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_List$()
});
$c_sci_List.prototype.drop__I__sci_List = (function(n) {
  var these = this;
  var count = n;
  while (((!these.isEmpty__Z()) && (count > 0))) {
    var this$1 = these;
    these = this$1.tail__sci_List();
    count = (((-1) + count) | 0)
  };
  return these
});
$c_sci_List.prototype.map__F1__scg_CanBuildFrom__O = (function(f, bf) {
  if ($p_sci_List__isLikeListReusableCBF__scg_CanBuildFrom__Z(this, bf)) {
    if ((this === $m_sci_Nil$())) {
      return $m_sci_Nil$()
    } else {
      var h = new $c_sci_$colon$colon(f.apply__O__O(this.head__O()), $m_sci_Nil$());
      var t = h;
      var rest = this.tail__sci_List();
      while ((rest !== $m_sci_Nil$())) {
        var nx = new $c_sci_$colon$colon(f.apply__O__O(rest.head__O()), $m_sci_Nil$());
        t.sci_$colon$colon__f_tl = nx;
        t = nx;
        var this$1 = rest;
        rest = this$1.tail__sci_List()
      };
      return h
    }
  } else {
    return $f_sc_TraversableLike__map__F1__scg_CanBuildFrom__O(this, f, bf)
  }
});
$c_sci_List.prototype.foreach__F1__V = (function(f) {
  var these = this;
  while ((!these.isEmpty__Z())) {
    f.apply__O__O(these.head__O());
    var this$1 = these;
    these = this$1.tail__sci_List()
  }
});
$c_sci_List.prototype.reverse__sci_List = (function() {
  var result = $m_sci_Nil$();
  var these = this;
  while ((!these.isEmpty__Z())) {
    var x$4 = these.head__O();
    var this$1 = result;
    result = new $c_sci_$colon$colon(x$4, this$1);
    var this$2 = these;
    these = this$2.tail__sci_List()
  };
  return result
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "List"
});
$c_sci_List.prototype.toStream__sci_Stream = (function() {
  return (this.isEmpty__Z() ? $m_sci_Stream$Empty$() : new $c_sci_Stream$Cons(this.head__O(), new $c_sjsr_AnonFunction0(((this$1) => (() => this$1.tail__sci_List().toStream__sci_Stream()))(this))))
});
$c_sci_List.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_List.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
});
$c_sci_List.prototype.reverse__O = (function() {
  return this.reverse__sci_List()
});
$c_sci_List.prototype.drop__I__sc_LinearSeqOptimized = (function(n) {
  return this.drop__I__sci_List(n)
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
/** @constructor */
function $c_sci_ListMap$EmptyListMap$() {
  /*<skip>*/
}
$c_sci_ListMap$EmptyListMap$.prototype = new $h_sci_ListMap();
$c_sci_ListMap$EmptyListMap$.prototype.constructor = $c_sci_ListMap$EmptyListMap$;
/** @constructor */
function $h_sci_ListMap$EmptyListMap$() {
  /*<skip>*/
}
$h_sci_ListMap$EmptyListMap$.prototype = $c_sci_ListMap$EmptyListMap$.prototype;
var $d_sci_ListMap$EmptyListMap$ = new $TypeData().initClass({
  sci_ListMap$EmptyListMap$: 0
}, false, "scala.collection.immutable.ListMap$EmptyListMap$", {
  sci_ListMap$EmptyListMap$: 1,
  sci_ListMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_ListMap$EmptyListMap$.prototype.$classData = $d_sci_ListMap$EmptyListMap$;
var $n_sci_ListMap$EmptyListMap$;
function $m_sci_ListMap$EmptyListMap$() {
  if ((!$n_sci_ListMap$EmptyListMap$)) {
    $n_sci_ListMap$EmptyListMap$ = new $c_sci_ListMap$EmptyListMap$()
  };
  return $n_sci_ListMap$EmptyListMap$
}
function $p_sci_ListMap$Node__sizeInternal__sci_ListMap__I__I($thiz, cur, acc) {
  while (true) {
    if (cur.isEmpty__Z()) {
      return acc
    } else {
      var temp$cur = cur.next__sci_ListMap();
      var temp$acc = ((1 + acc) | 0);
      cur = temp$cur;
      acc = temp$acc
    }
  }
}
function $p_sci_ListMap$Node__applyInternal__sci_ListMap__O__O($thiz, cur, k) {
  while (true) {
    if (cur.isEmpty__Z()) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + k))
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(k, cur.key__O())) {
      return cur.value__O()
    } else {
      cur = cur.next__sci_ListMap()
    }
  }
}
function $p_sci_ListMap$Node__getInternal__sci_ListMap__O__s_Option($thiz, cur, k) {
  while (true) {
    if (cur.isEmpty__Z()) {
      return $m_s_None$()
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(k, cur.key__O())) {
      return new $c_s_Some(cur.value__O())
    } else {
      cur = cur.next__sci_ListMap()
    }
  }
}
function $p_sci_ListMap$Node__containsInternal__sci_ListMap__O__Z($thiz, cur, k) {
  while (true) {
    if ((!cur.isEmpty__Z())) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(k, cur.key__O())) {
        return true
      } else {
        cur = cur.next__sci_ListMap()
      }
    } else {
      return false
    }
  }
}
function $p_sci_ListMap$Node__removeInternal__O__sci_ListMap__sci_List__sci_ListMap($thiz, k, cur, acc) {
  while (true) {
    if (cur.isEmpty__Z()) {
      var this$1 = acc;
      return $as_sci_ListMap($f_sc_LinearSeqOptimized__last__O(this$1))
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(k, cur.key__O())) {
      var x$5 = cur.next__sci_ListMap();
      var this$2 = acc;
      var acc$1 = x$5;
      var these = this$2;
      while ((!these.isEmpty__Z())) {
        var arg1 = acc$1;
        var arg2 = these.head__O();
        var x0$1 = $as_sci_ListMap(arg1);
        var x1$1 = $as_sci_ListMap(arg2);
        acc$1 = new $c_sci_ListMap$Node(x0$1, x1$1.key__O(), x1$1.value__O());
        these = $as_sc_LinearSeqOptimized(these.tail__O())
      };
      return $as_sci_ListMap(acc$1)
    } else {
      var temp$cur = cur.next__sci_ListMap();
      var x$6 = cur;
      var this$3 = acc;
      var temp$acc = new $c_sci_$colon$colon(x$6, this$3);
      cur = temp$cur;
      acc = temp$acc
    }
  }
}
/** @constructor */
function $c_sci_ListMap$Node(outer, key, value) {
  this.sci_ListMap$Node__f_key = null;
  this.sci_ListMap$Node__f_value = null;
  this.sci_ListMap$Node__f_$outer = null;
  this.sci_ListMap$Node__f_key = key;
  this.sci_ListMap$Node__f_value = value;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sci_ListMap$Node__f_$outer = outer
  }
}
$c_sci_ListMap$Node.prototype = new $h_sci_ListMap();
$c_sci_ListMap$Node.prototype.constructor = $c_sci_ListMap$Node;
/** @constructor */
function $h_sci_ListMap$Node() {
  /*<skip>*/
}
$h_sci_ListMap$Node.prototype = $c_sci_ListMap$Node.prototype;
$c_sci_ListMap$Node.prototype.key__O = (function() {
  return this.sci_ListMap$Node__f_key
});
$c_sci_ListMap$Node.prototype.value__O = (function() {
  return this.sci_ListMap$Node__f_value
});
$c_sci_ListMap$Node.prototype.size__I = (function() {
  return $p_sci_ListMap$Node__sizeInternal__sci_ListMap__I__I(this, this, 0)
});
$c_sci_ListMap$Node.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_ListMap$Node.prototype.apply__O__O = (function(k) {
  return $p_sci_ListMap$Node__applyInternal__sci_ListMap__O__O(this, this, k)
});
$c_sci_ListMap$Node.prototype.get__O__s_Option = (function(k) {
  return $p_sci_ListMap$Node__getInternal__sci_ListMap__O__s_Option(this, this, k)
});
$c_sci_ListMap$Node.prototype.contains__O__Z = (function(k) {
  return $p_sci_ListMap$Node__containsInternal__sci_ListMap__O__Z(this, this, k)
});
$c_sci_ListMap$Node.prototype.updated__O__O__sci_ListMap = (function(k, v) {
  var m = $p_sci_ListMap$Node__removeInternal__O__sci_ListMap__sci_List__sci_ListMap(this, k, this, $m_sci_Nil$());
  return new $c_sci_ListMap$Node(m, k, v)
});
$c_sci_ListMap$Node.prototype.$plus__T2__sci_ListMap = (function(kv) {
  var k = kv.T2__f__1;
  var m = $p_sci_ListMap$Node__removeInternal__O__sci_ListMap__sci_List__sci_ListMap(this, k, this, $m_sci_Nil$());
  return new $c_sci_ListMap$Node(m, kv.T2__f__1, kv.T2__f__2)
});
$c_sci_ListMap$Node.prototype.next__sci_ListMap = (function() {
  return this.sci_ListMap$Node__f_$outer
});
$c_sci_ListMap$Node.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.$plus__T2__sci_ListMap(kv)
});
$c_sci_ListMap$Node.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.$plus__T2__sci_ListMap(kv)
});
var $d_sci_ListMap$Node = new $TypeData().initClass({
  sci_ListMap$Node: 0
}, false, "scala.collection.immutable.ListMap$Node", {
  sci_ListMap$Node: 1,
  sci_ListMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_ListMap$Node.prototype.$classData = $d_sci_ListMap$Node;
/** @constructor */
function $c_sci_Range$Inclusive(start, end, step) {
  this.sci_Range__f_start = 0;
  this.sci_Range__f_end = 0;
  this.sci_Range__f_step = 0;
  this.sci_Range__f_isEmpty = false;
  this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = 0;
  this.sci_Range__f_scala$collection$immutable$Range$$lastElement = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step)
}
$c_sci_Range$Inclusive.prototype = new $h_sci_Range();
$c_sci_Range$Inclusive.prototype.constructor = $c_sci_Range$Inclusive;
/** @constructor */
function $h_sci_Range$Inclusive() {
  /*<skip>*/
}
$h_sci_Range$Inclusive.prototype = $c_sci_Range$Inclusive.prototype;
var $d_sci_Range$Inclusive = new $TypeData().initClass({
  sci_Range$Inclusive: 0
}, false, "scala.collection.immutable.Range$Inclusive", {
  sci_Range$Inclusive: 1,
  sci_Range: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$Inclusive.prototype.$classData = $d_sci_Range$Inclusive;
function $p_sci_Stream$Cons__consEq$1__sci_Stream$Cons__sci_Stream$Cons__Z($thiz, a, b) {
  while (true) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(a.sci_Stream$Cons__f_hd, b.sci_Stream$Cons__f_hd)) {
      var x1 = a.tail__sci_Stream();
      if ((x1 instanceof $c_sci_Stream$Cons)) {
        var x2 = $as_sci_Stream$Cons(x1);
        var x1$2 = b.tail__sci_Stream();
        if ((x1$2 instanceof $c_sci_Stream$Cons)) {
          var x2$2 = $as_sci_Stream$Cons(x1$2);
          if ((x2 === x2$2)) {
            return true
          } else {
            a = x2;
            b = x2$2
          }
        } else {
          return false
        }
      } else {
        return b.tail__sci_Stream().isEmpty__Z()
      }
    } else {
      return false
    }
  }
}
/** @constructor */
function $c_sci_Stream$Cons(hd, tl) {
  this.sci_Stream$Cons__f_hd = null;
  this.sci_Stream$Cons__f_tlVal = null;
  this.sci_Stream$Cons__f_tlGen = null;
  this.sci_Stream$Cons__f_hd = hd;
  this.sci_Stream$Cons__f_tlGen = tl
}
$c_sci_Stream$Cons.prototype = new $h_sci_Stream();
$c_sci_Stream$Cons.prototype.constructor = $c_sci_Stream$Cons;
/** @constructor */
function $h_sci_Stream$Cons() {
  /*<skip>*/
}
$h_sci_Stream$Cons.prototype = $c_sci_Stream$Cons.prototype;
$c_sci_Stream$Cons.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_Stream$Cons.prototype.head__O = (function() {
  return this.sci_Stream$Cons__f_hd
});
$c_sci_Stream$Cons.prototype.tailDefined__Z = (function() {
  return (this.sci_Stream$Cons__f_tlGen === null)
});
$c_sci_Stream$Cons.prototype.tail__sci_Stream = (function() {
  if ((!this.tailDefined__Z())) {
    if ((!this.tailDefined__Z())) {
      this.sci_Stream$Cons__f_tlVal = $as_sci_Stream(this.sci_Stream$Cons__f_tlGen.apply__O());
      this.sci_Stream$Cons__f_tlGen = null
    }
  };
  return this.sci_Stream$Cons__f_tlVal
});
$c_sci_Stream$Cons.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  if ((that instanceof $c_sci_Stream$Cons)) {
    var x2 = $as_sci_Stream$Cons(that);
    return $p_sci_Stream$Cons__consEq$1__sci_Stream$Cons__sci_Stream$Cons__Z(this, this, x2)
  } else {
    return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  }
});
$c_sci_Stream$Cons.prototype.tail__O = (function() {
  return this.tail__sci_Stream()
});
function $as_sci_Stream$Cons(obj) {
  return (((obj instanceof $c_sci_Stream$Cons) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream$Cons"))
}
function $isArrayOf_sci_Stream$Cons(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream$Cons)))
}
function $asArrayOf_sci_Stream$Cons(obj, depth) {
  return (($isArrayOf_sci_Stream$Cons(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream$Cons;", depth))
}
var $d_sci_Stream$Cons = new $TypeData().initClass({
  sci_Stream$Cons: 0
}, false, "scala.collection.immutable.Stream$Cons", {
  sci_Stream$Cons: 1,
  sci_Stream: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Cons.prototype.$classData = $d_sci_Stream$Cons;
/** @constructor */
function $c_sci_Stream$Empty$() {
  /*<skip>*/
}
$c_sci_Stream$Empty$.prototype = new $h_sci_Stream();
$c_sci_Stream$Empty$.prototype.constructor = $c_sci_Stream$Empty$;
/** @constructor */
function $h_sci_Stream$Empty$() {
  /*<skip>*/
}
$h_sci_Stream$Empty$.prototype = $c_sci_Stream$Empty$.prototype;
$c_sci_Stream$Empty$.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_Stream$Empty$.prototype.head__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty stream")
});
$c_sci_Stream$Empty$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty stream")
});
$c_sci_Stream$Empty$.prototype.tailDefined__Z = (function() {
  return false
});
$c_sci_Stream$Empty$.prototype.tail__O = (function() {
  this.tail__E()
});
$c_sci_Stream$Empty$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Stream$Empty$ = new $TypeData().initClass({
  sci_Stream$Empty$: 0
}, false, "scala.collection.immutable.Stream$Empty$", {
  sci_Stream$Empty$: 1,
  sci_Stream: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Empty$.prototype.$classData = $d_sci_Stream$Empty$;
var $n_sci_Stream$Empty$;
function $m_sci_Stream$Empty$() {
  if ((!$n_sci_Stream$Empty$)) {
    $n_sci_Stream$Empty$ = new $c_sci_Stream$Empty$()
  };
  return $n_sci_Stream$Empty$
}
function $p_sci_Vector__checkRangeConvert__I__I($thiz, index) {
  var idx = ((index + $thiz.sci_Vector__f_startIndex) | 0);
  if (((index >= 0) && (idx < $thiz.sci_Vector__f_endIndex))) {
    return idx
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + index))
  }
}
/** @constructor */
function $c_sci_Vector(startIndex, endIndex, focus) {
  this.sci_Vector__f_startIndex = 0;
  this.sci_Vector__f_endIndex = 0;
  this.sci_Vector__f_focus = 0;
  this.sci_Vector__f_dirty = false;
  this.sci_Vector__f_depth = 0;
  this.sci_Vector__f_display0 = null;
  this.sci_Vector__f_display1 = null;
  this.sci_Vector__f_display2 = null;
  this.sci_Vector__f_display3 = null;
  this.sci_Vector__f_display4 = null;
  this.sci_Vector__f_display5 = null;
  this.sci_Vector__f_startIndex = startIndex;
  this.sci_Vector__f_endIndex = endIndex;
  this.sci_Vector__f_focus = focus;
  this.sci_Vector__f_dirty = false
}
$c_sci_Vector.prototype = new $h_sc_AbstractSeq();
$c_sci_Vector.prototype.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
  /*<skip>*/
}
$h_sci_Vector.prototype = $c_sci_Vector.prototype;
$c_sci_Vector.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_Vector.prototype.sizeHintIfCheap__I = (function() {
  return this.length__I()
});
$c_sci_Vector.prototype.depth__I = (function() {
  return this.sci_Vector__f_depth
});
$c_sci_Vector.prototype.depth_$eq__I__V = (function(x$1) {
  this.sci_Vector__f_depth = x$1
});
$c_sci_Vector.prototype.display0__AO = (function() {
  return this.sci_Vector__f_display0
});
$c_sci_Vector.prototype.display0_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display0 = x$1
});
$c_sci_Vector.prototype.display1__AO = (function() {
  return this.sci_Vector__f_display1
});
$c_sci_Vector.prototype.display1_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display1 = x$1
});
$c_sci_Vector.prototype.display2__AO = (function() {
  return this.sci_Vector__f_display2
});
$c_sci_Vector.prototype.display2_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display2 = x$1
});
$c_sci_Vector.prototype.display3__AO = (function() {
  return this.sci_Vector__f_display3
});
$c_sci_Vector.prototype.display3_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display3 = x$1
});
$c_sci_Vector.prototype.display4__AO = (function() {
  return this.sci_Vector__f_display4
});
$c_sci_Vector.prototype.display4_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display4 = x$1
});
$c_sci_Vector.prototype.display5__AO = (function() {
  return this.sci_Vector__f_display5
});
$c_sci_Vector.prototype.display5_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display5 = x$1
});
$c_sci_Vector.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Vector$()
});
$c_sci_Vector.prototype.length__I = (function() {
  return ((this.sci_Vector__f_endIndex - this.sci_Vector__f_startIndex) | 0)
});
$c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
  return ((this.length__I() - len) | 0)
});
$c_sci_Vector.prototype.initIterator__sci_VectorIterator__V = (function(s) {
  var depth = this.sci_Vector__f_depth;
  $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
  if (this.sci_Vector__f_dirty) {
    var index = this.sci_Vector__f_focus;
    $f_sci_VectorPointer__stabilize__I__V(s, index)
  };
  if ((s.sci_VectorIterator__f_depth > 1)) {
    var index$1 = this.sci_Vector__f_startIndex;
    var xor = (this.sci_Vector__f_startIndex ^ this.sci_Vector__f_focus);
    $f_sci_VectorPointer__gotoPos__I__I__V(s, index$1, xor)
  }
});
$c_sci_Vector.prototype.iterator__sci_VectorIterator = (function() {
  if ((this.length__I() === 0)) {
    return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator
  } else {
    var s = new $c_sci_VectorIterator(this.sci_Vector__f_startIndex, this.sci_Vector__f_endIndex);
    this.initIterator__sci_VectorIterator__V(s);
    return s
  }
});
$c_sci_Vector.prototype.apply__I__O = (function(index) {
  var idx = $p_sci_Vector__checkRangeConvert__I__I(this, index);
  var xor = (idx ^ this.sci_Vector__f_focus);
  return $f_sci_VectorPointer__getElem__I__I__O(this, idx, xor)
});
$c_sci_Vector.prototype.head__O = (function() {
  if ($f_sc_SeqLike__isEmpty__Z(this)) {
    throw new $c_jl_UnsupportedOperationException("empty.head")
  };
  return this.apply__I__O(0)
});
$c_sci_Vector.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Vector.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_Vector.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
$c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
  return this.iterator__sci_VectorIterator()
});
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
var $d_sci_Vector = new $TypeData().initClass({
  sci_Vector: 0
}, false, "scala.collection.immutable.Vector", {
  sci_Vector: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  sci_VectorPointer: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1
});
$c_sci_Vector.prototype.$classData = $d_sci_Vector;
/** @constructor */
function $c_sci_WrappedString(self) {
  this.sci_WrappedString__f_self = null;
  this.sci_WrappedString__f_self = self
}
$c_sci_WrappedString.prototype = new $h_sc_AbstractSeq();
$c_sci_WrappedString.prototype.constructor = $c_sci_WrappedString;
/** @constructor */
function $h_sci_WrappedString() {
  /*<skip>*/
}
$h_sci_WrappedString.prototype = $c_sci_WrappedString.prototype;
$c_sci_WrappedString.prototype.isEmpty__Z = (function() {
  return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
});
$c_sci_WrappedString.prototype.foreach__F1__V = (function(f) {
  $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
});
$c_sci_WrappedString.prototype.foldLeft__O__F2__O = (function(z, op) {
  var this$1 = this.sci_WrappedString__f_self;
  return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, $uI(this$1.length), z, op)
});
$c_sci_WrappedString.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IndexedSeqOptimized__reduceLeft__F2__O(this, op)
});
$c_sci_WrappedString.prototype.head__O = (function() {
  return $f_sc_IndexedSeqOptimized__head__O(this)
});
$c_sci_WrappedString.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_sci_WrappedString.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
});
$c_sci_WrappedString.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
});
$c_sci_WrappedString.prototype.reverse__O = (function() {
  return $f_sc_IndexedSeqOptimized__reverse__O(this)
});
$c_sci_WrappedString.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_IndexedSeq$()
});
$c_sci_WrappedString.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_WrappedString.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this)
});
$c_sci_WrappedString.prototype.sizeHintIfCheap__I = (function() {
  var this$1 = this.sci_WrappedString__f_self;
  return $uI(this$1.length)
});
$c_sci_WrappedString.prototype.newBuilder__scm_Builder = (function() {
  return $m_sci_WrappedString$().newBuilder__scm_Builder()
});
$c_sci_WrappedString.prototype.length__I = (function() {
  var this$1 = this.sci_WrappedString__f_self;
  return $uI(this$1.length)
});
$c_sci_WrappedString.prototype.toString__T = (function() {
  return this.sci_WrappedString__f_self
});
$c_sci_WrappedString.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_WrappedString.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_WrappedString.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  var this$1 = this.sci_WrappedString__f_self;
  return $bC((65535 & $uI(this$1.charCodeAt(n))))
});
$c_sci_WrappedString.prototype.apply__I__O = (function(idx) {
  var this$1 = this.sci_WrappedString__f_self;
  return $bC((65535 & $uI(this$1.charCodeAt(idx))))
});
function $as_sci_WrappedString(obj) {
  return (((obj instanceof $c_sci_WrappedString) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.WrappedString"))
}
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_WrappedString)))
}
function $asArrayOf_sci_WrappedString(obj, depth) {
  return (($isArrayOf_sci_WrappedString(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.WrappedString;", depth))
}
var $d_sci_WrappedString = new $TypeData().initClass({
  sci_WrappedString: 0
}, false, "scala.collection.immutable.WrappedString", {
  sci_WrappedString: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  sci_StringLike: 1,
  sc_IndexedSeqOptimized: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1
});
$c_sci_WrappedString.prototype.$classData = $d_sci_WrappedString;
function $f_scm_ResizableArray__apply__I__O($thiz, idx) {
  if ((idx >= $thiz.scm_ArrayBuffer__f_size0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + idx))
  };
  return $thiz.scm_ArrayBuffer__f_array.get(idx)
}
function $f_scm_ResizableArray__foreach__F1__V($thiz, f) {
  var i = 0;
  var top = $thiz.length__I();
  while ((i < top)) {
    f.apply__O__O($thiz.scm_ArrayBuffer__f_array.get(i));
    i = ((1 + i) | 0)
  }
}
function $f_scm_ResizableArray__copyToArray__O__I__I__V($thiz, xs, start, len) {
  var that = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  var x = ((len < that) ? len : that);
  var that$1 = $thiz.scm_ArrayBuffer__f_size0;
  var len1 = ((x < that$1) ? x : that$1);
  if ((len1 > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V($thiz.scm_ArrayBuffer__f_array, 0, xs, start, len1)
  }
}
function $f_scm_ResizableArray__ensureSize__I__V($thiz, n) {
  var value = $thiz.scm_ArrayBuffer__f_array.u.length;
  var hi = (value >> 31);
  var hi$1 = (n >> 31);
  if (((hi$1 === hi) ? (((-2147483648) ^ n) > ((-2147483648) ^ value)) : (hi$1 > hi))) {
    var lo = (value << 1);
    var hi$2 = (((value >>> 31) | 0) | (hi << 1));
    var newSize__lo = lo;
    var newSize__hi = hi$2;
    while (true) {
      var hi$3 = (n >> 31);
      var b__lo = newSize__lo;
      var b__hi = newSize__hi;
      var bhi = b__hi;
      if (((hi$3 === bhi) ? (((-2147483648) ^ n) > ((-2147483648) ^ b__lo)) : (hi$3 > bhi))) {
        var this$4__lo = newSize__lo;
        var this$4__hi = newSize__hi;
        var lo$1 = this$4__lo;
        var lo$2 = (lo$1 << 1);
        var hi$4 = (((lo$1 >>> 31) | 0) | (this$4__hi << 1));
        var $$x1__lo = lo$2;
        var $$x1__hi = hi$4;
        newSize__lo = $$x1__lo;
        newSize__hi = $$x1__hi
      } else {
        break
      }
    };
    var this$5__lo = newSize__lo;
    var this$5__hi = newSize__hi;
    var ahi = this$5__hi;
    if (((ahi === 0) ? (((-2147483648) ^ this$5__lo) > (-1)) : (ahi > 0))) {
      var $$x2__lo = 2147483647;
      var $$x2__hi = 0;
      newSize__lo = $$x2__lo;
      newSize__hi = $$x2__hi
    };
    var this$6__lo = newSize__lo;
    var this$6__hi = newSize__hi;
    var newArray = new $ac_O(this$6__lo);
    var src = $thiz.scm_ArrayBuffer__f_array;
    var length = $thiz.scm_ArrayBuffer__f_size0;
    src.copyTo(0, newArray, 0, length);
    $thiz.scm_ArrayBuffer__f_array = newArray
  }
}
function $f_scm_ResizableArray__$init$__V($thiz) {
  var x = $thiz.scm_ArrayBuffer__f_initialSize;
  $thiz.scm_ArrayBuffer__f_array = new $ac_O(((x > 1) ? x : 1));
  $thiz.scm_ArrayBuffer__f_size0 = 0
}
/** @constructor */
function $c_sci_$colon$colon(head, tl) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_tl = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_tl = tl
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
  /*<skip>*/
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head
});
$c_sci_$colon$colon.prototype.tail__sci_List = (function() {
  return this.sci_$colon$colon__f_tl
});
$c_sci_$colon$colon.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::"
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break
    }
    case 1: {
      return this.sci_$colon$colon__f_tl;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_tl
});
var $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  s_Product: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
/** @constructor */
function $c_sci_HashMap$EmptyHashMap$() {
  /*<skip>*/
}
$c_sci_HashMap$EmptyHashMap$.prototype = new $h_sci_HashMap();
$c_sci_HashMap$EmptyHashMap$.prototype.constructor = $c_sci_HashMap$EmptyHashMap$;
/** @constructor */
function $h_sci_HashMap$EmptyHashMap$() {
  /*<skip>*/
}
$h_sci_HashMap$EmptyHashMap$.prototype = $c_sci_HashMap$EmptyHashMap$.prototype;
var $d_sci_HashMap$EmptyHashMap$ = new $TypeData().initClass({
  sci_HashMap$EmptyHashMap$: 0
}, false, "scala.collection.immutable.HashMap$EmptyHashMap$", {
  sci_HashMap$EmptyHashMap$: 1,
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap$EmptyHashMap$.prototype.$classData = $d_sci_HashMap$EmptyHashMap$;
var $n_sci_HashMap$EmptyHashMap$;
function $m_sci_HashMap$EmptyHashMap$() {
  if ((!$n_sci_HashMap$EmptyHashMap$)) {
    $n_sci_HashMap$EmptyHashMap$ = new $c_sci_HashMap$EmptyHashMap$()
  };
  return $n_sci_HashMap$EmptyHashMap$
}
/** @constructor */
function $c_sci_HashMap$HashMap1(key, hash, value, kvOrNull) {
  this.sci_HashMap$HashMap1__f_key = null;
  this.sci_HashMap$HashMap1__f_hash = 0;
  this.sci_HashMap$HashMap1__f_value = null;
  this.sci_HashMap$HashMap1__f_kvOrNull = null;
  this.sci_HashMap$HashMap1__f_key = key;
  this.sci_HashMap$HashMap1__f_hash = hash;
  this.sci_HashMap$HashMap1__f_value = value;
  this.sci_HashMap$HashMap1__f_kvOrNull = kvOrNull
}
$c_sci_HashMap$HashMap1.prototype = new $h_sci_HashMap();
$c_sci_HashMap$HashMap1.prototype.constructor = $c_sci_HashMap$HashMap1;
/** @constructor */
function $h_sci_HashMap$HashMap1() {
  /*<skip>*/
}
$h_sci_HashMap$HashMap1.prototype = $c_sci_HashMap$HashMap1.prototype;
$c_sci_HashMap$HashMap1.prototype.size__I = (function() {
  return 1
});
$c_sci_HashMap$HashMap1.prototype.get0__O__I__I__s_Option = (function(key, hash, level) {
  return (((hash === this.sci_HashMap$HashMap1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashMap$HashMap1__f_key)) ? new $c_s_Some(this.sci_HashMap$HashMap1__f_value) : $m_s_None$())
});
$c_sci_HashMap$HashMap1.prototype.getOrElse0__O__I__I__F0__O = (function(key, hash, level, f) {
  return (((hash === this.sci_HashMap$HashMap1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashMap$HashMap1__f_key)) ? this.sci_HashMap$HashMap1__f_value : f.apply__O())
});
$c_sci_HashMap$HashMap1.prototype.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap = (function(key, hash, level, value, kv, merger) {
  if ((hash === this.sci_HashMap$HashMap1__f_hash)) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashMap$HashMap1__f_key)) {
      if ((merger === null)) {
        return (Object.is(this.sci_HashMap$HashMap1__f_value, value) ? this : new $c_sci_HashMap$HashMap1(this.sci_HashMap$HashMap1__f_key, hash, value, (Object.is(this.sci_HashMap$HashMap1__f_key, key) ? kv : null)))
      } else if (((Object.is(key, this.sci_HashMap$HashMap1__f_key) && Object.is(value, this.sci_HashMap$HashMap1__f_value)) && merger.retainIdentical__Z())) {
        return this
      } else {
        var current = this.ensurePair__T2();
        var nkv = merger.apply__T2__T2__T2(current, ((kv !== null) ? kv : new $c_T2(key, value)));
        return (((current === nkv) || (Object.is(this.sci_HashMap$HashMap1__f_key, nkv.T2__f__1) && Object.is(this.sci_HashMap$HashMap1__f_value, nkv.T2__f__2))) ? this : new $c_sci_HashMap$HashMap1(nkv.T2__f__1, hash, nkv.T2__f__2, nkv))
      }
    } else {
      $m_sci_ListMap$();
      var this$2 = $m_sci_ListMap$EmptyListMap$();
      var key$1 = this.sci_HashMap$HashMap1__f_key;
      var value$1 = this.sci_HashMap$HashMap1__f_value;
      return new $c_sci_HashMap$HashMapCollision1(hash, new $c_sci_ListMap$Node(this$2, key$1, value$1).updated__O__O__sci_ListMap(key, value))
    }
  } else {
    var that = new $c_sci_HashMap$HashMap1(key, hash, value, kv);
    return $m_sci_HashMap$().scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(this.sci_HashMap$HashMap1__f_hash, this, hash, that, level, 2)
  }
});
$c_sci_HashMap$HashMap1.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var array = [this.ensurePair__T2()];
  var elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(elems)
});
$c_sci_HashMap$HashMap1.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.ensurePair__T2())
});
$c_sci_HashMap$HashMap1.prototype.foreachEntry__F2__V = (function(f) {
  f.apply__O__O__O(this.sci_HashMap$HashMap1__f_key, this.sci_HashMap$HashMap1__f_value)
});
$c_sci_HashMap$HashMap1.prototype.ensurePair__T2 = (function() {
  if ((this.sci_HashMap$HashMap1__f_kvOrNull !== null)) {
    return this.sci_HashMap$HashMap1__f_kvOrNull
  } else {
    this.sci_HashMap$HashMap1__f_kvOrNull = new $c_T2(this.sci_HashMap$HashMap1__f_key, this.sci_HashMap$HashMap1__f_value);
    return this.sci_HashMap$HashMap1__f_kvOrNull
  }
});
$c_sci_HashMap$HashMap1.prototype.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap = (function(that, level, merger) {
  if ((that instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(that);
    return (((this === x2) && merger.retainIdentical__Z()) ? this : (((this.sci_HashMap$HashMap1__f_hash === x2.sci_HashMap$HashMap1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.sci_HashMap$HashMap1__f_key, x2.sci_HashMap$HashMap1__f_key)) ? ((merger === $m_sci_HashMap$().sci_HashMap$__f__defaultMerger) ? this : ((merger === $m_sci_HashMap$().sci_HashMap$__f__defaultMerger.invert__sci_HashMap$Merger()) ? x2 : this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(x2.sci_HashMap$HashMap1__f_key, x2.sci_HashMap$HashMap1__f_hash, level, x2.sci_HashMap$HashMap1__f_value, x2.ensurePair__T2(), merger))) : this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(x2.sci_HashMap$HashMap1__f_key, x2.sci_HashMap$HashMap1__f_hash, level, x2.sci_HashMap$HashMap1__f_value, x2.ensurePair__T2(), merger)))
  } else {
    return that.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(this.sci_HashMap$HashMap1__f_key, this.sci_HashMap$HashMap1__f_hash, level, this.sci_HashMap$HashMap1__f_value, this.ensurePair__T2(), merger.invert__sci_HashMap$Merger())
  }
});
$c_sci_HashMap$HashMap1.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(that);
    return ((this === x2) || (((x2.sci_HashMap$HashMap1__f_hash === this.sci_HashMap$HashMap1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(x2.sci_HashMap$HashMap1__f_key, this.sci_HashMap$HashMap1__f_key)) && $m_sr_BoxesRunTime$().equals__O__O__Z(x2.sci_HashMap$HashMap1__f_value, this.sci_HashMap$HashMap1__f_value)))
  } else {
    return ((!(that instanceof $c_sci_HashMap)) && $f_sc_GenMapLike__equals__O__Z(this, that))
  }
});
function $as_sci_HashMap$HashMap1(obj) {
  return (((obj instanceof $c_sci_HashMap$HashMap1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashMap1"))
}
function $isArrayOf_sci_HashMap$HashMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashMap1)))
}
function $asArrayOf_sci_HashMap$HashMap1(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashMap1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashMap1;", depth))
}
var $d_sci_HashMap$HashMap1 = new $TypeData().initClass({
  sci_HashMap$HashMap1: 0
}, false, "scala.collection.immutable.HashMap$HashMap1", {
  sci_HashMap$HashMap1: 1,
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap$HashMap1.prototype.$classData = $d_sci_HashMap$HashMap1;
/** @constructor */
function $c_sci_HashMap$HashMapCollision1(hash, kvs) {
  this.sci_HashMap$HashMapCollision1__f_hash = 0;
  this.sci_HashMap$HashMapCollision1__f_kvs = null;
  this.sci_HashMap$HashMapCollision1__f_hash = hash;
  this.sci_HashMap$HashMapCollision1__f_kvs = kvs
}
$c_sci_HashMap$HashMapCollision1.prototype = new $h_sci_HashMap();
$c_sci_HashMap$HashMapCollision1.prototype.constructor = $c_sci_HashMap$HashMapCollision1;
/** @constructor */
function $h_sci_HashMap$HashMapCollision1() {
  /*<skip>*/
}
$h_sci_HashMap$HashMapCollision1.prototype = $c_sci_HashMap$HashMapCollision1.prototype;
$c_sci_HashMap$HashMapCollision1.prototype.size__I = (function() {
  return this.sci_HashMap$HashMapCollision1__f_kvs.size__I()
});
$c_sci_HashMap$HashMapCollision1.prototype.get0__O__I__I__s_Option = (function(key, hash, level) {
  return ((hash === this.sci_HashMap$HashMapCollision1__f_hash) ? this.sci_HashMap$HashMapCollision1__f_kvs.get__O__s_Option(key) : $m_s_None$())
});
$c_sci_HashMap$HashMapCollision1.prototype.getOrElse0__O__I__I__F0__O = (function(key, hash, level, f) {
  if ((hash === this.sci_HashMap$HashMapCollision1__f_hash)) {
    var this$1 = this.sci_HashMap$HashMapCollision1__f_kvs;
    return $f_sc_MapLike__getOrElse__O__F0__O(this$1, key, f)
  } else {
    return f.apply__O()
  }
});
$c_sci_HashMap$HashMapCollision1.prototype.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap = (function(key, hash, level, value, kv, merger) {
  if ((hash === this.sci_HashMap$HashMapCollision1__f_hash)) {
    return (((merger === null) || (!this.sci_HashMap$HashMapCollision1__f_kvs.contains__O__Z(key))) ? new $c_sci_HashMap$HashMapCollision1(hash, this.sci_HashMap$HashMapCollision1__f_kvs.updated__O__O__sci_ListMap(key, value)) : new $c_sci_HashMap$HashMapCollision1(hash, this.sci_HashMap$HashMapCollision1__f_kvs.$plus__T2__sci_ListMap(merger.apply__T2__T2__T2(new $c_T2(key, this.sci_HashMap$HashMapCollision1__f_kvs.apply__O__O(key)), kv))))
  } else {
    var that = new $c_sci_HashMap$HashMap1(key, hash, value, kv);
    return $m_sci_HashMap$().scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(this.sci_HashMap$HashMapCollision1__f_hash, this, hash, that, level, ((1 + this.sci_HashMap$HashMapCollision1__f_kvs.size__I()) | 0))
  }
});
$c_sci_HashMap$HashMapCollision1.prototype.iterator__sc_Iterator = (function() {
  var this$1 = this.sci_HashMap$HashMapCollision1__f_kvs;
  var this$2 = $p_sci_ListMap__reverseList$1__sci_List(this$1);
  return $f_sc_LinearSeqLike__iterator__sc_Iterator(this$2)
});
$c_sci_HashMap$HashMapCollision1.prototype.foreach__F1__V = (function(f) {
  var this$1 = this.sci_HashMap$HashMapCollision1__f_kvs;
  var this$2 = $p_sci_ListMap__reverseList$1__sci_List(this$1);
  var this$3 = $f_sc_LinearSeqLike__iterator__sc_Iterator(this$2);
  $f_sc_Iterator__foreach__F1__V(this$3, f)
});
$c_sci_HashMap$HashMapCollision1.prototype.foreachEntry__F2__V = (function(f) {
  this.sci_HashMap$HashMapCollision1__f_kvs.foreachEntry__F2__V(f)
});
$c_sci_HashMap$HashMapCollision1.prototype.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap = (function(that, level, merger) {
  if ((that instanceof $c_sci_HashMap$HashTrieMap)) {
    var x2 = $as_sci_HashMap$HashTrieMap(that);
    return x2.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(this, level, merger.invert__sci_HashMap$Merger())
  } else if ((that instanceof $c_sci_HashMap$HashMap1)) {
    var x3 = $as_sci_HashMap$HashMap1(that);
    return ((x3.sci_HashMap$HashMap1__f_hash !== this.sci_HashMap$HashMapCollision1__f_hash) ? $m_sci_HashMap$().scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(this.sci_HashMap$HashMapCollision1__f_hash, this, x3.sci_HashMap$HashMap1__f_hash, x3, level, ((1 + this.sci_HashMap$HashMapCollision1__f_kvs.size__I()) | 0)) : this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(x3.sci_HashMap$HashMap1__f_key, x3.sci_HashMap$HashMap1__f_hash, level, x3.sci_HashMap$HashMap1__f_value, x3.ensurePair__T2(), merger))
  } else if ((that instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x4 = $as_sci_HashMap$HashMapCollision1(that);
    if ((x4.sci_HashMap$HashMapCollision1__f_hash !== this.sci_HashMap$HashMapCollision1__f_hash)) {
      return $m_sci_HashMap$().scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(this.sci_HashMap$HashMapCollision1__f_hash, this, x4.sci_HashMap$HashMapCollision1__f_hash, x4, level, ((x4.sci_HashMap$HashMapCollision1__f_kvs.size__I() + this.sci_HashMap$HashMapCollision1__f_kvs.size__I()) | 0))
    } else if ((merger.retainIdentical__Z() && (x4 === this))) {
      return this
    } else if (((merger === $m_sci_HashMap$().sci_HashMap$__f__defaultMerger) || (merger === $m_sci_HashMap$().sci_HashMap$__f__defaultMerger.invert__sci_HashMap$Merger()))) {
      var newkvs = ((merger === $m_sci_HashMap$().sci_HashMap$__f__defaultMerger) ? x4.sci_HashMap$HashMapCollision1__f_kvs.$plus$plus__sc_GenTraversableOnce__sci_ListMap(this.sci_HashMap$HashMapCollision1__f_kvs) : this.sci_HashMap$HashMapCollision1__f_kvs.$plus$plus__sc_GenTraversableOnce__sci_ListMap(x4.sci_HashMap$HashMapCollision1__f_kvs));
      return ((newkvs === this.sci_HashMap$HashMapCollision1__f_kvs) ? this : ((newkvs === x4.sci_HashMap$HashMapCollision1__f_kvs) ? x4 : new $c_sci_HashMap$HashMapCollision1(this.sci_HashMap$HashMapCollision1__f_hash, newkvs)))
    } else {
      var elem = null;
      elem = null;
      if ((this.sci_HashMap$HashMapCollision1__f_kvs.size__I() >= x4.sci_HashMap$HashMapCollision1__f_kvs.size__I())) {
        elem = this;
        var this$2 = x4.sci_HashMap$HashMapCollision1__f_kvs;
        var this$3 = $p_sci_ListMap__reverseList$1__sci_List(this$2);
        var this$4 = $f_sc_LinearSeqLike__iterator__sc_Iterator(this$3);
        while (this$4.hasNext__Z()) {
          var arg1 = this$4.next__O();
          var p = $as_T2(arg1);
          elem = $as_sci_HashMap(elem).updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(p.T2__f__1, this.sci_HashMap$HashMapCollision1__f_hash, level, p.T2__f__2, p, merger)
        }
      } else {
        elem = x4;
        var this$5 = this.sci_HashMap$HashMapCollision1__f_kvs;
        var this$6 = $p_sci_ListMap__reverseList$1__sci_List(this$5);
        var this$7 = $f_sc_LinearSeqLike__iterator__sc_Iterator(this$6);
        while (this$7.hasNext__Z()) {
          var arg1$1 = this$7.next__O();
          var p$3 = $as_T2(arg1$1);
          elem = $as_sci_HashMap(elem).updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(p$3.T2__f__1, this.sci_HashMap$HashMapCollision1__f_hash, level, p$3.T2__f__2, p$3, merger.invert__sci_HashMap$Merger())
        }
      };
      return $as_sci_HashMap(elem)
    }
  } else if ((that === $m_sci_HashMap$EmptyHashMap$())) {
    return this
  } else {
    throw new $c_s_MatchError(that)
  }
});
$c_sci_HashMap$HashMapCollision1.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x2 = $as_sci_HashMap$HashMapCollision1(that);
    if ((this === x2)) {
      return true
    } else if ((x2.sci_HashMap$HashMapCollision1__f_hash === this.sci_HashMap$HashMapCollision1__f_hash)) {
      var x = x2.sci_HashMap$HashMapCollision1__f_kvs;
      var x$2 = this.sci_HashMap$HashMapCollision1__f_kvs;
      return ((x === null) ? (x$2 === null) : $f_sc_GenMapLike__equals__O__Z(x, x$2))
    } else {
      return false
    }
  } else {
    return ((!(that instanceof $c_sci_HashMap)) && $f_sc_GenMapLike__equals__O__Z(this, that))
  }
});
function $as_sci_HashMap$HashMapCollision1(obj) {
  return (((obj instanceof $c_sci_HashMap$HashMapCollision1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashMapCollision1"))
}
function $isArrayOf_sci_HashMap$HashMapCollision1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashMapCollision1)))
}
function $asArrayOf_sci_HashMap$HashMapCollision1(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashMapCollision1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashMapCollision1;", depth))
}
var $d_sci_HashMap$HashMapCollision1 = new $TypeData().initClass({
  sci_HashMap$HashMapCollision1: 0
}, false, "scala.collection.immutable.HashMap$HashMapCollision1", {
  sci_HashMap$HashMapCollision1: 1,
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap$HashMapCollision1.prototype.$classData = $d_sci_HashMap$HashMapCollision1;
function $p_sci_HashMap$HashTrieMap__mergeMaybeSubset$1__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap($thiz, larger, smaller, merger, level$2) {
  var resultElems = null;
  var ai = 0;
  var bi = 0;
  var abm = larger.sci_HashMap$HashTrieMap__f_bitmap0;
  var bbm = smaller.sci_HashMap$HashTrieMap__f_bitmap0;
  var a = larger.sci_HashMap$HashTrieMap__f_elems0;
  var b = smaller.sci_HashMap$HashTrieMap__f_elems0;
  var additionalSize = 0;
  var bsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
  while ((bsb !== 0)) {
    var skippedBitsInA = (abm & (((-1) + bsb) | 0));
    ai = ((ai + $m_jl_Integer$().bitCount__I__I(skippedBitsInA)) | 0);
    abm = (abm ^ skippedBitsInA);
    var aai = a.get(ai);
    var bbi = b.get(bi);
    var result = (((aai === bbi) && merger.retainIdentical__Z()) ? aai : aai.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(bbi, ((5 + level$2) | 0), merger));
    if ((result !== aai)) {
      if ((resultElems === null)) {
        resultElems = a.clone__O()
      };
      additionalSize = ((additionalSize + ((result.size__I() - aai.size__I()) | 0)) | 0);
      resultElems.set(ai, result)
    };
    abm = (abm ^ bsb);
    bbm = (bbm ^ bsb);
    bsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
    ai = ((1 + ai) | 0);
    bi = ((1 + bi) | 0)
  };
  return ((resultElems === null) ? larger : new $c_sci_HashMap$HashTrieMap(larger.sci_HashMap$HashTrieMap__f_bitmap0, resultElems, ((larger.sci_HashMap$HashTrieMap__f_size0 + additionalSize) | 0)))
}
function $p_sci_HashMap$HashTrieMap__mergeDistinct$1__sci_HashMap$HashTrieMap__sci_HashMap($thiz, x3$1) {
  var ai = 0;
  var bi = 0;
  var offset = 0;
  var abm = $thiz.sci_HashMap$HashTrieMap__f_bitmap0;
  var bbm = x3$1.sci_HashMap$HashTrieMap__f_bitmap0;
  var a = $thiz.sci_HashMap$HashTrieMap__f_elems0;
  var b = x3$1.sci_HashMap$HashTrieMap__f_elems0;
  var allBits = (abm | bbm);
  var i = allBits;
  var resultElems = new ($d_sci_HashMap.getArrayOf().constr)($m_jl_Integer$().bitCount__I__I(i));
  var lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
  while ((lsb !== 0)) {
    if (((lsb & abm) !== 0)) {
      resultElems.set(offset, a.get(ai));
      ai = ((1 + ai) | 0)
    } else {
      resultElems.set(offset, b.get(bi));
      bi = ((1 + bi) | 0)
    };
    offset = ((1 + offset) | 0);
    allBits = (allBits ^ lsb);
    lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)))
  };
  return new $c_sci_HashMap$HashTrieMap((abm | bbm), resultElems, (($thiz.sci_HashMap$HashTrieMap__f_size0 + x3$1.sci_HashMap$HashTrieMap__f_size0) | 0))
}
function $p_sci_HashMap$HashTrieMap__mergeCommon$1__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap($thiz, x3$1, merger$3, level$2) {
  var ai = 0;
  var bi = 0;
  var abm = $thiz.sci_HashMap$HashTrieMap__f_bitmap0;
  var bbm = x3$1.sci_HashMap$HashTrieMap__f_bitmap0;
  var a = $thiz.sci_HashMap$HashTrieMap__f_elems0;
  var b = x3$1.sci_HashMap$HashTrieMap__f_elems0;
  var allBits = (abm | bbm);
  var i = allBits;
  var resultElems = new ($d_sci_HashMap.getArrayOf().constr)($m_jl_Integer$().bitCount__I__I(i));
  var offset = 0;
  var rs = 0;
  var lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
  var result = null;
  while ((lsb !== 0)) {
    if (((lsb & abm) !== 0)) {
      if (((lsb & bbm) !== 0)) {
        var aai = a.get(ai);
        var bbi = b.get(bi);
        result = (((aai === bbi) && merger$3.retainIdentical__Z()) ? aai : aai.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(bbi, ((5 + level$2) | 0), merger$3));
        ai = ((1 + ai) | 0);
        bi = ((1 + bi) | 0)
      } else {
        result = a.get(ai);
        ai = ((1 + ai) | 0)
      }
    } else {
      result = b.get(bi);
      bi = ((1 + bi) | 0)
    };
    allBits = (allBits ^ lsb);
    lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
    resultElems.set(offset, result);
    rs = ((rs + result.size__I()) | 0);
    offset = ((1 + offset) | 0)
  };
  return new $c_sci_HashMap$HashTrieMap((abm | bbm), resultElems, rs)
}
/** @constructor */
function $c_sci_HashMap$HashTrieMap(bitmap0, elems0, size0) {
  this.sci_HashMap$HashTrieMap__f_bitmap0 = 0;
  this.sci_HashMap$HashTrieMap__f_elems0 = null;
  this.sci_HashMap$HashTrieMap__f_size0 = 0;
  this.sci_HashMap$HashTrieMap__f_bitmap0 = bitmap0;
  this.sci_HashMap$HashTrieMap__f_elems0 = elems0;
  this.sci_HashMap$HashTrieMap__f_size0 = size0
}
$c_sci_HashMap$HashTrieMap.prototype = new $h_sci_HashMap();
$c_sci_HashMap$HashTrieMap.prototype.constructor = $c_sci_HashMap$HashTrieMap;
/** @constructor */
function $h_sci_HashMap$HashTrieMap() {
  /*<skip>*/
}
$h_sci_HashMap$HashTrieMap.prototype = $c_sci_HashMap$HashTrieMap.prototype;
$c_sci_HashMap$HashTrieMap.prototype.size__I = (function() {
  return this.sci_HashMap$HashTrieMap__f_size0
});
$c_sci_HashMap$HashTrieMap.prototype.get0__O__I__I__s_Option = (function(key, hash, level) {
  var index = (31 & ((hash >>> level) | 0));
  if ((this.sci_HashMap$HashTrieMap__f_bitmap0 === (-1))) {
    return this.sci_HashMap$HashTrieMap__f_elems0.get(index).get0__O__I__I__s_Option(key, hash, ((5 + level) | 0))
  } else {
    var mask = (1 << index);
    if (((this.sci_HashMap$HashTrieMap__f_bitmap0 & mask) !== 0)) {
      var i = (this.sci_HashMap$HashTrieMap__f_bitmap0 & (((-1) + mask) | 0));
      var offset = $m_jl_Integer$().bitCount__I__I(i);
      return this.sci_HashMap$HashTrieMap__f_elems0.get(offset).get0__O__I__I__s_Option(key, hash, ((5 + level) | 0))
    } else {
      return $m_s_None$()
    }
  }
});
$c_sci_HashMap$HashTrieMap.prototype.getOrElse0__O__I__I__F0__O = (function(key, hash, level, f) {
  var index = (31 & ((hash >>> level) | 0));
  if ((this.sci_HashMap$HashTrieMap__f_bitmap0 === (-1))) {
    return this.sci_HashMap$HashTrieMap__f_elems0.get(index).getOrElse0__O__I__I__F0__O(key, hash, ((5 + level) | 0), f)
  } else {
    var mask = (1 << index);
    if (((this.sci_HashMap$HashTrieMap__f_bitmap0 & mask) !== 0)) {
      var i = (this.sci_HashMap$HashTrieMap__f_bitmap0 & (((-1) + mask) | 0));
      var offset = $m_jl_Integer$().bitCount__I__I(i);
      return this.sci_HashMap$HashTrieMap__f_elems0.get(offset).getOrElse0__O__I__I__F0__O(key, hash, ((5 + level) | 0), f)
    } else {
      return f.apply__O()
    }
  }
});
$c_sci_HashMap$HashTrieMap.prototype.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap = (function(key, hash, level, value, kv, merger) {
  var index = (31 & ((hash >>> level) | 0));
  var mask = (1 << index);
  var i = (this.sci_HashMap$HashTrieMap__f_bitmap0 & (((-1) + mask) | 0));
  var offset = $m_jl_Integer$().bitCount__I__I(i);
  if (((this.sci_HashMap$HashTrieMap__f_bitmap0 & mask) !== 0)) {
    var sub = this.sci_HashMap$HashTrieMap__f_elems0.get(offset);
    var subNew = sub.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(key, hash, ((5 + level) | 0), value, kv, merger);
    if ((subNew === sub)) {
      return this
    } else {
      var this$1 = this.sci_HashMap$HashTrieMap__f_elems0;
      var elemsNew = this$1.clone__O();
      elemsNew.set(offset, subNew);
      return new $c_sci_HashMap$HashTrieMap(this.sci_HashMap$HashTrieMap__f_bitmap0, elemsNew, ((this.sci_HashMap$HashTrieMap__f_size0 + ((subNew.size__I() - sub.size__I()) | 0)) | 0))
    }
  } else {
    var elemsNew$2 = new ($d_sci_HashMap.getArrayOf().constr)(((1 + this.sci_HashMap$HashTrieMap__f_elems0.u.length) | 0));
    var src = this.sci_HashMap$HashTrieMap__f_elems0;
    src.copyTo(0, elemsNew$2, 0, offset);
    elemsNew$2.set(offset, new $c_sci_HashMap$HashMap1(key, hash, value, kv));
    var src$1 = this.sci_HashMap$HashTrieMap__f_elems0;
    var destPos = ((1 + offset) | 0);
    var length = ((this.sci_HashMap$HashTrieMap__f_elems0.u.length - offset) | 0);
    src$1.copyTo(offset, elemsNew$2, destPos, length);
    return new $c_sci_HashMap$HashTrieMap((this.sci_HashMap$HashTrieMap__f_bitmap0 | mask), elemsNew$2, ((1 + this.sci_HashMap$HashTrieMap__f_size0) | 0))
  }
});
$c_sci_HashMap$HashTrieMap.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_HashMap$HashTrieMap$$anon$7(this)
});
$c_sci_HashMap$HashTrieMap.prototype.foreach__F1__V = (function(f) {
  var i = 0;
  while ((i < this.sci_HashMap$HashTrieMap__f_elems0.u.length)) {
    this.sci_HashMap$HashTrieMap__f_elems0.get(i).foreach__F1__V(f);
    i = ((1 + i) | 0)
  }
});
$c_sci_HashMap$HashTrieMap.prototype.foreachEntry__F2__V = (function(f) {
  var i = 0;
  while ((i < this.sci_HashMap$HashTrieMap__f_elems0.u.length)) {
    this.sci_HashMap$HashTrieMap__f_elems0.get(i).foreachEntry__F2__V(f);
    i = ((1 + i) | 0)
  }
});
$c_sci_HashMap$HashTrieMap.prototype.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap = (function(that, level, merger) {
  if ((that instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(that);
    return this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(x2.sci_HashMap$HashMap1__f_key, x2.sci_HashMap$HashMap1__f_hash, level, x2.sci_HashMap$HashMap1__f_value, x2.ensurePair__T2(), merger)
  } else if ((that instanceof $c_sci_HashMap$HashTrieMap)) {
    var x3 = $as_sci_HashMap$HashTrieMap(that);
    var abm = this.sci_HashMap$HashTrieMap__f_bitmap0;
    var bbm = x3.sci_HashMap$HashTrieMap__f_bitmap0;
    var allBits = (abm | bbm);
    return (((this === x3) && merger.retainIdentical__Z()) ? this : (((allBits === abm) && ((allBits !== bbm) || (this.sci_HashMap$HashTrieMap__f_size0 >= x3.sci_HashMap$HashTrieMap__f_size0))) ? $p_sci_HashMap$HashTrieMap__mergeMaybeSubset$1__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap(this, this, x3, merger, level) : ((allBits === bbm) ? $p_sci_HashMap$HashTrieMap__mergeMaybeSubset$1__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap(this, x3, this, merger.invert__sci_HashMap$Merger(), level) : (((abm & bbm) === 0) ? $p_sci_HashMap$HashTrieMap__mergeDistinct$1__sci_HashMap$HashTrieMap__sci_HashMap(this, x3) : $p_sci_HashMap$HashTrieMap__mergeCommon$1__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap(this, x3, merger, level)))))
  } else if ((that instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x4 = $as_sci_HashMap$HashMapCollision1(that);
    var index = (31 & ((x4.sci_HashMap$HashMapCollision1__f_hash >>> level) | 0));
    var mask = (1 << index);
    var i = (this.sci_HashMap$HashTrieMap__f_bitmap0 & (((-1) + mask) | 0));
    var offset = $m_jl_Integer$().bitCount__I__I(i);
    if (((this.sci_HashMap$HashTrieMap__f_bitmap0 & mask) !== 0)) {
      var sub = this.sci_HashMap$HashTrieMap__f_elems0.get(offset);
      var subNew = sub.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(x4, ((5 + level) | 0), merger);
      if ((subNew === sub)) {
        return this
      } else {
        var this$1 = this.sci_HashMap$HashTrieMap__f_elems0;
        var elemsNew = this$1.clone__O();
        elemsNew.set(offset, subNew);
        return new $c_sci_HashMap$HashTrieMap(this.sci_HashMap$HashTrieMap__f_bitmap0, elemsNew, ((this.sci_HashMap$HashTrieMap__f_size0 + ((subNew.size__I() - sub.size__I()) | 0)) | 0))
      }
    } else {
      var elemsNew$2 = new ($d_sci_HashMap.getArrayOf().constr)(((1 + this.sci_HashMap$HashTrieMap__f_elems0.u.length) | 0));
      var src = this.sci_HashMap$HashTrieMap__f_elems0;
      src.copyTo(0, elemsNew$2, 0, offset);
      elemsNew$2.set(offset, x4);
      var src$1 = this.sci_HashMap$HashTrieMap__f_elems0;
      var destPos = ((1 + offset) | 0);
      var length = ((this.sci_HashMap$HashTrieMap__f_elems0.u.length - offset) | 0);
      src$1.copyTo(offset, elemsNew$2, destPos, length);
      return new $c_sci_HashMap$HashTrieMap((this.sci_HashMap$HashTrieMap__f_bitmap0 | mask), elemsNew$2, ((this.sci_HashMap$HashTrieMap__f_size0 + x4.sci_HashMap$HashMapCollision1__f_kvs.size__I()) | 0))
    }
  } else {
    return ((that === $m_sci_HashMap$EmptyHashMap$()) ? this : $m_s_sys_package$().error__T__E("section supposed to be unreachable."))
  }
});
$c_sci_HashMap$HashTrieMap.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_HashMap$HashTrieMap)) {
    var x2 = $as_sci_HashMap$HashTrieMap(that);
    if ((this === x2)) {
      return true
    } else if (((this.sci_HashMap$HashTrieMap__f_bitmap0 === x2.sci_HashMap$HashTrieMap__f_bitmap0) && (this.sci_HashMap$HashTrieMap__f_size0 === x2.sci_HashMap$HashTrieMap__f_size0))) {
      var a = this.sci_HashMap$HashTrieMap__f_elems0;
      var b = x2.sci_HashMap$HashTrieMap__f_elems0;
      return $m_ju_Arrays$().equals__AO__AO__Z(a, b)
    } else {
      return false
    }
  } else {
    return ((!(that instanceof $c_sci_HashMap)) && $f_sc_GenMapLike__equals__O__Z(this, that))
  }
});
function $as_sci_HashMap$HashTrieMap(obj) {
  return (((obj instanceof $c_sci_HashMap$HashTrieMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashTrieMap"))
}
function $isArrayOf_sci_HashMap$HashTrieMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashTrieMap)))
}
function $asArrayOf_sci_HashMap$HashTrieMap(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashTrieMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashTrieMap;", depth))
}
var $d_sci_HashMap$HashTrieMap = new $TypeData().initClass({
  sci_HashMap$HashTrieMap: 0
}, false, "scala.collection.immutable.HashMap$HashTrieMap", {
  sci_HashMap$HashTrieMap: 1,
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap$HashTrieMap.prototype.$classData = $d_sci_HashMap$HashTrieMap;
/** @constructor */
function $c_sci_Nil$() {
  /*<skip>*/
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
  /*<skip>*/
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_Nil$.prototype.head__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list")
});
$c_sci_Nil$.prototype.tail__sci_List = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list")
});
$c_sci_Nil$.prototype.equals__O__Z = (function(that) {
  if ($is_sc_GenSeq(that)) {
    var x2 = $as_sc_GenSeq(that);
    return x2.isEmpty__Z()
  } else {
    return false
  }
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil"
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_Nil$.prototype.tail__O = (function() {
  return this.tail__sci_List()
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  s_Product: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
/** @constructor */
function $c_scm_AbstractBuffer() {
  /*<skip>*/
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
  /*<skip>*/
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
$c_scm_AbstractBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
});
function $as_scm_HashMap(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashMap"))
}
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashMap)))
}
function $asArrayOf_scm_HashMap(obj, depth) {
  return (($isArrayOf_scm_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashMap;", depth))
}
function $as_scm_HashSet(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashSet"))
}
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashSet)))
}
function $asArrayOf_scm_HashSet(obj, depth) {
  return (($isArrayOf_scm_HashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashSet;", depth))
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  if ($thiz.scm_ListBuffer__f_exported) {
    $p_scm_ListBuffer__copy__V($thiz)
  }
}
function $p_scm_ListBuffer__copy__V($thiz) {
  if ($thiz.isEmpty__Z()) {
    return (void 0)
  };
  var cursor = $thiz.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  var this$1 = $thiz.scm_ListBuffer__f_last0;
  var limit = this$1.sci_$colon$colon__f_tl;
  $thiz.clear__V();
  while ((cursor !== limit)) {
    $thiz.$plus$eq__O__scm_ListBuffer(cursor.head__O());
    var this$2 = cursor;
    cursor = this$2.tail__sci_List()
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = null;
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_exported = false;
  this.scm_ListBuffer__f_len = 0;
  this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = $m_sci_Nil$();
  this.scm_ListBuffer__f_exported = false;
  this.scm_ListBuffer__f_len = 0
}
$c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ListBuffer.prototype.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
  /*<skip>*/
}
$h_scm_ListBuffer.prototype = $c_scm_ListBuffer.prototype;
$c_scm_ListBuffer.prototype.lengthCompare__I__I = (function(len) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_LinearSeqOptimized__lengthCompare__I__I(this$1, len)
});
$c_scm_ListBuffer.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this$1, that)
});
$c_scm_ListBuffer.prototype.foreach__F1__V = (function(f) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  var these = this$1;
  while ((!these.isEmpty__Z())) {
    f.apply__O__O(these.head__O());
    var this$2 = these;
    these = this$2.tail__sci_List()
  }
});
$c_scm_ListBuffer.prototype.foldLeft__O__F2__O = (function(z, op) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_LinearSeqOptimized__foldLeft__O__F2__O(this$1, z, op)
});
$c_scm_ListBuffer.prototype.$div$colon__O__F2__O = (function(z, op) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_LinearSeqOptimized__foldLeft__O__F2__O(this$1, z, op)
});
$c_scm_ListBuffer.prototype.reduceLeft__F2__O = (function(op) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_LinearSeqOptimized__reduceLeft__F2__O(this$1, op)
});
$c_scm_ListBuffer.prototype.head__O = (function() {
  return this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.head__O()
});
$c_scm_ListBuffer.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this$1, start, sep, end)
});
$c_scm_ListBuffer.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$1, b, start, sep, end)
});
$c_scm_ListBuffer.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_ListBuffer.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_ListBuffer.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_ListBuffer$()
});
$c_scm_ListBuffer.prototype.length__I = (function() {
  return this.scm_ListBuffer__f_len
});
$c_scm_ListBuffer.prototype.isEmpty__Z = (function() {
  return (this.scm_ListBuffer__f_len === 0)
});
$c_scm_ListBuffer.prototype.apply__I__O = (function(n) {
  if (((n < 0) || (n >= this.scm_ListBuffer__f_len))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  } else {
    var this$2 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
    return $f_sc_LinearSeqOptimized__apply__I__O(this$2, n)
  }
});
$c_scm_ListBuffer.prototype.$plus$eq__O__scm_ListBuffer = (function(x) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(x, $m_sci_Nil$());
  if ((this.scm_ListBuffer__f_len === 0)) {
    this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = last1
  } else {
    this.scm_ListBuffer__f_last0.sci_$colon$colon__f_tl = last1
  };
  this.scm_ListBuffer__f_last0 = last1;
  this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
  return this
});
$c_scm_ListBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scm_ListBuffer = (function(xs) {
  while (true) {
    var x1 = xs;
    if ((x1 !== null)) {
      if ((x1 === this)) {
        var n = this.scm_ListBuffer__f_len;
        xs = $as_sc_TraversableOnce($f_sc_IterableLike__take__I__O(this, n));
        continue
      }
    };
    return $as_scm_ListBuffer($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
  }
});
$c_scm_ListBuffer.prototype.clear__V = (function() {
  this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = $m_sci_Nil$();
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_exported = false;
  this.scm_ListBuffer__f_len = 0
});
$c_scm_ListBuffer.prototype.toList__sci_List = (function() {
  this.scm_ListBuffer__f_exported = (!this.isEmpty__Z());
  return this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start
});
$c_scm_ListBuffer.prototype.toStream__sci_Stream = (function() {
  return this.toList__sci_List().toStream__sci_Stream()
});
$c_scm_ListBuffer.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_ListBuffer$$anon$1(this)
});
$c_scm_ListBuffer.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ListBuffer)) {
    var x2 = $as_scm_ListBuffer(that);
    return this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.equals__O__Z(x2.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start)
  } else {
    return $f_sc_GenSeqLike__equals__O__Z(this, that)
  }
});
$c_scm_ListBuffer.prototype.stringPrefix__T = (function() {
  return "ListBuffer"
});
$c_scm_ListBuffer.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_ListBuffer.prototype.result__O = (function() {
  return this.toList__sci_List()
});
$c_scm_ListBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__scm_ListBuffer(xs)
});
$c_scm_ListBuffer.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_ListBuffer(elem)
});
$c_scm_ListBuffer.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_ListBuffer(elem)
});
$c_scm_ListBuffer.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
var $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_SeqForwarder: 1,
  scg_IterableForwarder: 1,
  scg_TraversableForwarder: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
}
function $ct_scm_StringBuilder__I__T__($thiz, initCapacity, initValue) {
  var this$1 = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), (($uI(initValue.length) + initCapacity) | 0));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + initValue);
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, this$1);
  return $thiz
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__I__T__($thiz, 16, "");
  return $thiz
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
  /*<skip>*/
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_StringBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_StringBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_StringBuilder.prototype.foreach__F1__V = (function(f) {
  $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
});
$c_scm_StringBuilder.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this.scm_StringBuilder__f_underlying.length__I(), z, op)
});
$c_scm_StringBuilder.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IndexedSeqOptimized__reduceLeft__F2__O(this, op)
});
$c_scm_StringBuilder.prototype.head__O = (function() {
  return $f_sc_IndexedSeqOptimized__head__O(this)
});
$c_scm_StringBuilder.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_scm_StringBuilder.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
});
$c_scm_StringBuilder.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_IndexedSeq$()
});
$c_scm_StringBuilder.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this)
});
$c_scm_StringBuilder.prototype.sizeHintIfCheap__I = (function() {
  return this.scm_StringBuilder__f_underlying.length__I()
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return this.scm_StringBuilder__f_underlying.length__I()
});
$c_scm_StringBuilder.prototype.substring__I__I__T = (function(start, end) {
  return this.scm_StringBuilder__f_underlying.substring__I__I__T(start, end)
});
$c_scm_StringBuilder.prototype.$plus$eq__C__scm_StringBuilder = (function(x) {
  this.append__C__scm_StringBuilder(x);
  return this
});
$c_scm_StringBuilder.prototype.append__O__scm_StringBuilder = (function(x) {
  var this$2 = this.scm_StringBuilder__f_underlying;
  var str = ("" + x);
  this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
  return this
});
$c_scm_StringBuilder.prototype.append__T__scm_StringBuilder = (function(s) {
  var this$1 = this.scm_StringBuilder__f_underlying;
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s);
  return this
});
$c_scm_StringBuilder.prototype.append__C__scm_StringBuilder = (function(x) {
  var this$1 = this.scm_StringBuilder__f_underlying;
  var str = $as_T(String.fromCharCode(x));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
  return this
});
$c_scm_StringBuilder.prototype.reverse__scm_StringBuilder = (function() {
  return $ct_scm_StringBuilder__jl_StringBuilder__(new $c_scm_StringBuilder(), $ct_jl_StringBuilder__jl_CharSequence__(new $c_jl_StringBuilder(), this.scm_StringBuilder__f_underlying).reverse__jl_StringBuilder())
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return (this.scm_StringBuilder__f_underlying.length__I() === 0)
});
$c_scm_StringBuilder.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_scm_StringBuilder.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_StringBuilder.prototype.seq__scm_Seq = (function() {
  return this
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.reverse__O = (function() {
  return this.reverse__scm_StringBuilder()
});
$c_scm_StringBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(index))
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(idx) {
  return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(idx))
});
$c_scm_StringBuilder.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_GrowingBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()))
});
var $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  jl_CharSequence: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  sci_StringLike: 1,
  sc_IndexedSeqOptimized: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
}
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sjs_js_WrappedArray.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sjs_js_WrappedArray.prototype.isEmpty__Z = (function() {
  return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
});
$c_sjs_js_WrappedArray.prototype.foreach__F1__V = (function(f) {
  $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
});
$c_sjs_js_WrappedArray.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length), z, op)
});
$c_sjs_js_WrappedArray.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IndexedSeqOptimized__reduceLeft__F2__O(this, op)
});
$c_sjs_js_WrappedArray.prototype.head__O = (function() {
  return $f_sc_IndexedSeqOptimized__head__O(this)
});
$c_sjs_js_WrappedArray.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_sjs_js_WrappedArray.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
});
$c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
});
$c_sjs_js_WrappedArray.prototype.reverse__O = (function() {
  return $f_sc_IndexedSeqOptimized__reverse__O(this)
});
$c_sjs_js_WrappedArray.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this)
});
$c_sjs_js_WrappedArray.prototype.sizeHintIfCheap__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sjs_js_WrappedArray$()
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "WrappedArray"
});
$c_sjs_js_WrappedArray.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.seq__scm_Seq = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
var $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  scm_Builder: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
function $ct_scm_ArrayBuffer__I__($thiz, initialSize) {
  $thiz.scm_ArrayBuffer__f_initialSize = initialSize;
  $f_scm_ResizableArray__$init$__V($thiz);
  return $thiz
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__I__($thiz, 16);
  return $thiz
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.scm_ArrayBuffer__f_initialSize = 0;
  this.scm_ArrayBuffer__f_array = null;
  this.scm_ArrayBuffer__f_size0 = 0
}
$c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ArrayBuffer.prototype.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
  /*<skip>*/
}
$h_scm_ArrayBuffer.prototype = $c_scm_ArrayBuffer.prototype;
$c_scm_ArrayBuffer.prototype.length__I = (function() {
  return this.scm_ArrayBuffer__f_size0
});
$c_scm_ArrayBuffer.prototype.apply__I__O = (function(idx) {
  return $f_scm_ResizableArray__apply__I__O(this, idx)
});
$c_scm_ArrayBuffer.prototype.foreach__F1__V = (function(f) {
  $f_scm_ResizableArray__foreach__F1__V(this, f)
});
$c_scm_ArrayBuffer.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $f_scm_ResizableArray__copyToArray__O__I__I__V(this, xs, start, len)
});
$c_scm_ArrayBuffer.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_ArrayBuffer.prototype.isEmpty__Z = (function() {
  return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
});
$c_scm_ArrayBuffer.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this.scm_ArrayBuffer__f_size0, z, op)
});
$c_scm_ArrayBuffer.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IndexedSeqOptimized__reduceLeft__F2__O(this, op)
});
$c_scm_ArrayBuffer.prototype.head__O = (function() {
  return $f_sc_IndexedSeqOptimized__head__O(this)
});
$c_scm_ArrayBuffer.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_scm_ArrayBuffer.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
});
$c_scm_ArrayBuffer.prototype.reverse__O = (function() {
  return $f_sc_IndexedSeqOptimized__reverse__O(this)
});
$c_scm_ArrayBuffer.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_scm_ArrayBuffer.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this)
});
$c_scm_ArrayBuffer.prototype.sizeHintIfCheap__I = (function() {
  return this.scm_ArrayBuffer__f_size0
});
$c_scm_ArrayBuffer.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_ArrayBuffer$()
});
$c_scm_ArrayBuffer.prototype.sizeHint__I__V = (function(len) {
  if (((len > this.scm_ArrayBuffer__f_size0) && (len >= 1))) {
    var newarray = new $ac_O(len);
    var src = this.scm_ArrayBuffer__f_array;
    var length = this.scm_ArrayBuffer__f_size0;
    src.copyTo(0, newarray, 0, length);
    this.scm_ArrayBuffer__f_array = newarray
  }
});
$c_scm_ArrayBuffer.prototype.$plus$eq__O__scm_ArrayBuffer = (function(elem) {
  var n = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
  $f_scm_ResizableArray__ensureSize__I__V(this, n);
  this.scm_ArrayBuffer__f_array.set(this.scm_ArrayBuffer__f_size0, elem);
  this.scm_ArrayBuffer__f_size0 = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
  return this
});
$c_scm_ArrayBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scm_ArrayBuffer = (function(xs) {
  if ($is_sc_IndexedSeqLike(xs)) {
    var x2 = $as_sc_IndexedSeqLike(xs);
    var n = x2.length__I();
    var n$1 = ((this.scm_ArrayBuffer__f_size0 + n) | 0);
    $f_scm_ResizableArray__ensureSize__I__V(this, n$1);
    x2.copyToArray__O__I__I__V(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n);
    this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + n) | 0);
    return this
  } else {
    return $as_scm_ArrayBuffer($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
  }
});
$c_scm_ArrayBuffer.prototype.stringPrefix__T = (function() {
  return "ArrayBuffer"
});
$c_scm_ArrayBuffer.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.seq__scm_Seq = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.apply__O__O = (function(v1) {
  var idx = $uI(v1);
  return $f_scm_ResizableArray__apply__I__O(this, idx)
});
$c_scm_ArrayBuffer.prototype.result__O = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__scm_ArrayBuffer(xs)
});
$c_scm_ArrayBuffer.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_ArrayBuffer(elem)
});
$c_scm_ArrayBuffer.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_ArrayBuffer(elem)
});
function $as_scm_ArrayBuffer(obj) {
  return (((obj instanceof $c_scm_ArrayBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer"))
}
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)))
}
function $asArrayOf_scm_ArrayBuffer(obj, depth) {
  return (($isArrayOf_scm_ArrayBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth))
}
var $d_scm_ArrayBuffer = new $TypeData().initClass({
  scm_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", {
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_IndexedSeqOptimized: 1,
  scm_IndexedSeqLike: 1,
  sc_IndexedSeqLike: 1,
  sc_IndexedSeqOptimized: 1,
  scm_Builder: 1,
  scm_ResizableArray: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer.prototype.$classData = $d_scm_ArrayBuffer;
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
$s_Lobservatory_JSMain__main__AT__V(new ($d_T.getArrayOf().constr)([]));
}).call(this);
//# sourceMappingURL=capstoneui-fastopt.js.map
