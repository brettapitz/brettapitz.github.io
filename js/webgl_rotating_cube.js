(() => {
  // ns-hugo:/home/brett/Sites/Personal/dev/assets/js/twgl-full.module.js
  /* @license twgl.js 4.19.1 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
  Available via the MIT license.
  see: http://github.com/greggman/twgl.js for details */
  var VecType = Float32Array;
  function create(x, y, z) {
    const dst = new VecType(3);
    if (x) {
      dst[0] = x;
    }
    if (y) {
      dst[1] = y;
    }
    if (z) {
      dst[2] = z;
    }
    return dst;
  }
  function add(a, b, dst) {
    dst = dst || new VecType(3);
    dst[0] = a[0] + b[0];
    dst[1] = a[1] + b[1];
    dst[2] = a[2] + b[2];
    return dst;
  }
  function subtract(a, b, dst) {
    dst = dst || new VecType(3);
    dst[0] = a[0] - b[0];
    dst[1] = a[1] - b[1];
    dst[2] = a[2] - b[2];
    return dst;
  }
  function cross(a, b, dst) {
    dst = dst || new VecType(3);
    const t1 = a[2] * b[0] - a[0] * b[2];
    const t2 = a[0] * b[1] - a[1] * b[0];
    dst[0] = a[1] * b[2] - a[2] * b[1];
    dst[1] = t1;
    dst[2] = t2;
    return dst;
  }
  function normalize(a, dst) {
    dst = dst || new VecType(3);
    const lenSq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
    const len = Math.sqrt(lenSq);
    if (len > 1e-5) {
      dst[0] = a[0] / len;
      dst[1] = a[1] / len;
      dst[2] = a[2] / len;
    } else {
      dst[0] = 0;
      dst[1] = 0;
      dst[2] = 0;
    }
    return dst;
  }
  function multiply(a, b, dst) {
    dst = dst || new VecType(3);
    dst[0] = a[0] * b[0];
    dst[1] = a[1] * b[1];
    dst[2] = a[2] * b[2];
    return dst;
  }
  var MatType = Float32Array;
  function setDefaultType$1(ctor) {
    const oldType = MatType;
    MatType = ctor;
    return oldType;
  }
  function negate$1(m, dst) {
    dst = dst || new MatType(16);
    dst[0] = -m[0];
    dst[1] = -m[1];
    dst[2] = -m[2];
    dst[3] = -m[3];
    dst[4] = -m[4];
    dst[5] = -m[5];
    dst[6] = -m[6];
    dst[7] = -m[7];
    dst[8] = -m[8];
    dst[9] = -m[9];
    dst[10] = -m[10];
    dst[11] = -m[11];
    dst[12] = -m[12];
    dst[13] = -m[13];
    dst[14] = -m[14];
    dst[15] = -m[15];
    return dst;
  }
  function copy$1(m, dst) {
    dst = dst || new MatType(16);
    dst[0] = m[0];
    dst[1] = m[1];
    dst[2] = m[2];
    dst[3] = m[3];
    dst[4] = m[4];
    dst[5] = m[5];
    dst[6] = m[6];
    dst[7] = m[7];
    dst[8] = m[8];
    dst[9] = m[9];
    dst[10] = m[10];
    dst[11] = m[11];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
    return dst;
  }
  function identity(dst) {
    dst = dst || new MatType(16);
    dst[0] = 1;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 1;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = 1;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
  }
  function transpose(m, dst) {
    dst = dst || new MatType(16);
    if (dst === m) {
      let t;
      t = m[1];
      m[1] = m[4];
      m[4] = t;
      t = m[2];
      m[2] = m[8];
      m[8] = t;
      t = m[3];
      m[3] = m[12];
      m[12] = t;
      t = m[6];
      m[6] = m[9];
      m[9] = t;
      t = m[7];
      m[7] = m[13];
      m[13] = t;
      t = m[11];
      m[11] = m[14];
      m[14] = t;
      return dst;
    }
    const m00 = m[0 * 4 + 0];
    const m01 = m[0 * 4 + 1];
    const m02 = m[0 * 4 + 2];
    const m03 = m[0 * 4 + 3];
    const m10 = m[1 * 4 + 0];
    const m11 = m[1 * 4 + 1];
    const m12 = m[1 * 4 + 2];
    const m13 = m[1 * 4 + 3];
    const m20 = m[2 * 4 + 0];
    const m21 = m[2 * 4 + 1];
    const m22 = m[2 * 4 + 2];
    const m23 = m[2 * 4 + 3];
    const m30 = m[3 * 4 + 0];
    const m31 = m[3 * 4 + 1];
    const m32 = m[3 * 4 + 2];
    const m33 = m[3 * 4 + 3];
    dst[0] = m00;
    dst[1] = m10;
    dst[2] = m20;
    dst[3] = m30;
    dst[4] = m01;
    dst[5] = m11;
    dst[6] = m21;
    dst[7] = m31;
    dst[8] = m02;
    dst[9] = m12;
    dst[10] = m22;
    dst[11] = m32;
    dst[12] = m03;
    dst[13] = m13;
    dst[14] = m23;
    dst[15] = m33;
    return dst;
  }
  function inverse(m, dst) {
    dst = dst || new MatType(16);
    const m00 = m[0 * 4 + 0];
    const m01 = m[0 * 4 + 1];
    const m02 = m[0 * 4 + 2];
    const m03 = m[0 * 4 + 3];
    const m10 = m[1 * 4 + 0];
    const m11 = m[1 * 4 + 1];
    const m12 = m[1 * 4 + 2];
    const m13 = m[1 * 4 + 3];
    const m20 = m[2 * 4 + 0];
    const m21 = m[2 * 4 + 1];
    const m22 = m[2 * 4 + 2];
    const m23 = m[2 * 4 + 3];
    const m30 = m[3 * 4 + 0];
    const m31 = m[3 * 4 + 1];
    const m32 = m[3 * 4 + 2];
    const m33 = m[3 * 4 + 3];
    const tmp_0 = m22 * m33;
    const tmp_1 = m32 * m23;
    const tmp_2 = m12 * m33;
    const tmp_3 = m32 * m13;
    const tmp_4 = m12 * m23;
    const tmp_5 = m22 * m13;
    const tmp_6 = m02 * m33;
    const tmp_7 = m32 * m03;
    const tmp_8 = m02 * m23;
    const tmp_9 = m22 * m03;
    const tmp_10 = m02 * m13;
    const tmp_11 = m12 * m03;
    const tmp_12 = m20 * m31;
    const tmp_13 = m30 * m21;
    const tmp_14 = m10 * m31;
    const tmp_15 = m30 * m11;
    const tmp_16 = m10 * m21;
    const tmp_17 = m20 * m11;
    const tmp_18 = m00 * m31;
    const tmp_19 = m30 * m01;
    const tmp_20 = m00 * m21;
    const tmp_21 = m20 * m01;
    const tmp_22 = m00 * m11;
    const tmp_23 = m10 * m01;
    const t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
    const t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
    const t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
    const t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
    const d = 1 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
    dst[0] = d * t0;
    dst[1] = d * t1;
    dst[2] = d * t2;
    dst[3] = d * t3;
    dst[4] = d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
    dst[5] = d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
    dst[6] = d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
    dst[7] = d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
    dst[8] = d * (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
    dst[9] = d * (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
    dst[10] = d * (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
    dst[11] = d * (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
    dst[12] = d * (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
    dst[13] = d * (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
    dst[14] = d * (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
    dst[15] = d * (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));
    return dst;
  }
  function multiply$1(a, b, dst) {
    dst = dst || new MatType(16);
    const a00 = a[0];
    const a01 = a[1];
    const a02 = a[2];
    const a03 = a[3];
    const a10 = a[4 + 0];
    const a11 = a[4 + 1];
    const a12 = a[4 + 2];
    const a13 = a[4 + 3];
    const a20 = a[8 + 0];
    const a21 = a[8 + 1];
    const a22 = a[8 + 2];
    const a23 = a[8 + 3];
    const a30 = a[12 + 0];
    const a31 = a[12 + 1];
    const a32 = a[12 + 2];
    const a33 = a[12 + 3];
    const b00 = b[0];
    const b01 = b[1];
    const b02 = b[2];
    const b03 = b[3];
    const b10 = b[4 + 0];
    const b11 = b[4 + 1];
    const b12 = b[4 + 2];
    const b13 = b[4 + 3];
    const b20 = b[8 + 0];
    const b21 = b[8 + 1];
    const b22 = b[8 + 2];
    const b23 = b[8 + 3];
    const b30 = b[12 + 0];
    const b31 = b[12 + 1];
    const b32 = b[12 + 2];
    const b33 = b[12 + 3];
    dst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
    dst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
    dst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
    dst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
    dst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
    dst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
    dst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
    dst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
    dst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
    dst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
    dst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
    dst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
    dst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
    dst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
    dst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
    dst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;
    return dst;
  }
  function setTranslation(a, v, dst) {
    dst = dst || identity();
    if (a !== dst) {
      dst[0] = a[0];
      dst[1] = a[1];
      dst[2] = a[2];
      dst[3] = a[3];
      dst[4] = a[4];
      dst[5] = a[5];
      dst[6] = a[6];
      dst[7] = a[7];
      dst[8] = a[8];
      dst[9] = a[9];
      dst[10] = a[10];
      dst[11] = a[11];
    }
    dst[12] = v[0];
    dst[13] = v[1];
    dst[14] = v[2];
    dst[15] = 1;
    return dst;
  }
  function getTranslation(m, dst) {
    dst = dst || create();
    dst[0] = m[12];
    dst[1] = m[13];
    dst[2] = m[14];
    return dst;
  }
  function getAxis(m, axis, dst) {
    dst = dst || create();
    const off = axis * 4;
    dst[0] = m[off + 0];
    dst[1] = m[off + 1];
    dst[2] = m[off + 2];
    return dst;
  }
  function setAxis(a, v, axis, dst) {
    if (dst !== a) {
      dst = copy$1(a, dst);
    }
    const off = axis * 4;
    dst[off + 0] = v[0];
    dst[off + 1] = v[1];
    dst[off + 2] = v[2];
    return dst;
  }
  function perspective(fieldOfViewYInRadians, aspect2, zNear2, zFar2, dst) {
    dst = dst || new MatType(16);
    const f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
    const rangeInv = 1 / (zNear2 - zFar2);
    dst[0] = f / aspect2;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = f;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = (zNear2 + zFar2) * rangeInv;
    dst[11] = -1;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = zNear2 * zFar2 * rangeInv * 2;
    dst[15] = 0;
    return dst;
  }
  function ortho(left, right, bottom, top, near, far, dst) {
    dst = dst || new MatType(16);
    dst[0] = 2 / (right - left);
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 2 / (top - bottom);
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = 2 / (near - far);
    dst[11] = 0;
    dst[12] = (right + left) / (left - right);
    dst[13] = (top + bottom) / (bottom - top);
    dst[14] = (far + near) / (near - far);
    dst[15] = 1;
    return dst;
  }
  function frustum(left, right, bottom, top, near, far, dst) {
    dst = dst || new MatType(16);
    const dx = right - left;
    const dy = top - bottom;
    const dz = near - far;
    dst[0] = 2 * near / dx;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 2 * near / dy;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = (left + right) / dx;
    dst[9] = (top + bottom) / dy;
    dst[10] = far / dz;
    dst[11] = -1;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = near * far / dz;
    dst[15] = 0;
    return dst;
  }
  var xAxis;
  var yAxis;
  var zAxis;
  function lookAt(eye2, target2, up2, dst) {
    dst = dst || new MatType(16);
    xAxis = xAxis || create();
    yAxis = yAxis || create();
    zAxis = zAxis || create();
    normalize(subtract(eye2, target2, zAxis), zAxis);
    normalize(cross(up2, zAxis, xAxis), xAxis);
    normalize(cross(zAxis, xAxis, yAxis), yAxis);
    dst[0] = xAxis[0];
    dst[1] = xAxis[1];
    dst[2] = xAxis[2];
    dst[3] = 0;
    dst[4] = yAxis[0];
    dst[5] = yAxis[1];
    dst[6] = yAxis[2];
    dst[7] = 0;
    dst[8] = zAxis[0];
    dst[9] = zAxis[1];
    dst[10] = zAxis[2];
    dst[11] = 0;
    dst[12] = eye2[0];
    dst[13] = eye2[1];
    dst[14] = eye2[2];
    dst[15] = 1;
    return dst;
  }
  function translation(v, dst) {
    dst = dst || new MatType(16);
    dst[0] = 1;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 1;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = 1;
    dst[11] = 0;
    dst[12] = v[0];
    dst[13] = v[1];
    dst[14] = v[2];
    dst[15] = 1;
    return dst;
  }
  function translate(m, v, dst) {
    dst = dst || new MatType(16);
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    const m00 = m[0];
    const m01 = m[1];
    const m02 = m[2];
    const m03 = m[3];
    const m10 = m[1 * 4 + 0];
    const m11 = m[1 * 4 + 1];
    const m12 = m[1 * 4 + 2];
    const m13 = m[1 * 4 + 3];
    const m20 = m[2 * 4 + 0];
    const m21 = m[2 * 4 + 1];
    const m22 = m[2 * 4 + 2];
    const m23 = m[2 * 4 + 3];
    const m30 = m[3 * 4 + 0];
    const m31 = m[3 * 4 + 1];
    const m32 = m[3 * 4 + 2];
    const m33 = m[3 * 4 + 3];
    if (m !== dst) {
      dst[0] = m00;
      dst[1] = m01;
      dst[2] = m02;
      dst[3] = m03;
      dst[4] = m10;
      dst[5] = m11;
      dst[6] = m12;
      dst[7] = m13;
      dst[8] = m20;
      dst[9] = m21;
      dst[10] = m22;
      dst[11] = m23;
    }
    dst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
    dst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
    dst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
    dst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;
    return dst;
  }
  function rotationX(angleInRadians, dst) {
    dst = dst || new MatType(16);
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    dst[0] = 1;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = c;
    dst[6] = s;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = -s;
    dst[10] = c;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
  }
  function rotateX(m, angleInRadians, dst) {
    dst = dst || new MatType(16);
    const m10 = m[4];
    const m11 = m[5];
    const m12 = m[6];
    const m13 = m[7];
    const m20 = m[8];
    const m21 = m[9];
    const m22 = m[10];
    const m23 = m[11];
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    dst[4] = c * m10 + s * m20;
    dst[5] = c * m11 + s * m21;
    dst[6] = c * m12 + s * m22;
    dst[7] = c * m13 + s * m23;
    dst[8] = c * m20 - s * m10;
    dst[9] = c * m21 - s * m11;
    dst[10] = c * m22 - s * m12;
    dst[11] = c * m23 - s * m13;
    if (m !== dst) {
      dst[0] = m[0];
      dst[1] = m[1];
      dst[2] = m[2];
      dst[3] = m[3];
      dst[12] = m[12];
      dst[13] = m[13];
      dst[14] = m[14];
      dst[15] = m[15];
    }
    return dst;
  }
  function rotationY(angleInRadians, dst) {
    dst = dst || new MatType(16);
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    dst[0] = c;
    dst[1] = 0;
    dst[2] = -s;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 1;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = s;
    dst[9] = 0;
    dst[10] = c;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
  }
  function rotateY(m, angleInRadians, dst) {
    dst = dst || new MatType(16);
    const m00 = m[0 * 4 + 0];
    const m01 = m[0 * 4 + 1];
    const m02 = m[0 * 4 + 2];
    const m03 = m[0 * 4 + 3];
    const m20 = m[2 * 4 + 0];
    const m21 = m[2 * 4 + 1];
    const m22 = m[2 * 4 + 2];
    const m23 = m[2 * 4 + 3];
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    dst[0] = c * m00 - s * m20;
    dst[1] = c * m01 - s * m21;
    dst[2] = c * m02 - s * m22;
    dst[3] = c * m03 - s * m23;
    dst[8] = c * m20 + s * m00;
    dst[9] = c * m21 + s * m01;
    dst[10] = c * m22 + s * m02;
    dst[11] = c * m23 + s * m03;
    if (m !== dst) {
      dst[4] = m[4];
      dst[5] = m[5];
      dst[6] = m[6];
      dst[7] = m[7];
      dst[12] = m[12];
      dst[13] = m[13];
      dst[14] = m[14];
      dst[15] = m[15];
    }
    return dst;
  }
  function rotationZ(angleInRadians, dst) {
    dst = dst || new MatType(16);
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    dst[0] = c;
    dst[1] = s;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = -s;
    dst[5] = c;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = 1;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
  }
  function rotateZ(m, angleInRadians, dst) {
    dst = dst || new MatType(16);
    const m00 = m[0 * 4 + 0];
    const m01 = m[0 * 4 + 1];
    const m02 = m[0 * 4 + 2];
    const m03 = m[0 * 4 + 3];
    const m10 = m[1 * 4 + 0];
    const m11 = m[1 * 4 + 1];
    const m12 = m[1 * 4 + 2];
    const m13 = m[1 * 4 + 3];
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    dst[0] = c * m00 + s * m10;
    dst[1] = c * m01 + s * m11;
    dst[2] = c * m02 + s * m12;
    dst[3] = c * m03 + s * m13;
    dst[4] = c * m10 - s * m00;
    dst[5] = c * m11 - s * m01;
    dst[6] = c * m12 - s * m02;
    dst[7] = c * m13 - s * m03;
    if (m !== dst) {
      dst[8] = m[8];
      dst[9] = m[9];
      dst[10] = m[10];
      dst[11] = m[11];
      dst[12] = m[12];
      dst[13] = m[13];
      dst[14] = m[14];
      dst[15] = m[15];
    }
    return dst;
  }
  function axisRotation(axis, angleInRadians, dst) {
    dst = dst || new MatType(16);
    let x = axis[0];
    let y = axis[1];
    let z = axis[2];
    const n = Math.sqrt(x * x + y * y + z * z);
    x /= n;
    y /= n;
    z /= n;
    const xx = x * x;
    const yy = y * y;
    const zz = z * z;
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    const oneMinusCosine = 1 - c;
    dst[0] = xx + (1 - xx) * c;
    dst[1] = x * y * oneMinusCosine + z * s;
    dst[2] = x * z * oneMinusCosine - y * s;
    dst[3] = 0;
    dst[4] = x * y * oneMinusCosine - z * s;
    dst[5] = yy + (1 - yy) * c;
    dst[6] = y * z * oneMinusCosine + x * s;
    dst[7] = 0;
    dst[8] = x * z * oneMinusCosine + y * s;
    dst[9] = y * z * oneMinusCosine - x * s;
    dst[10] = zz + (1 - zz) * c;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
  }
  function axisRotate(m, axis, angleInRadians, dst) {
    dst = dst || new MatType(16);
    let x = axis[0];
    let y = axis[1];
    let z = axis[2];
    const n = Math.sqrt(x * x + y * y + z * z);
    x /= n;
    y /= n;
    z /= n;
    const xx = x * x;
    const yy = y * y;
    const zz = z * z;
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    const oneMinusCosine = 1 - c;
    const r00 = xx + (1 - xx) * c;
    const r01 = x * y * oneMinusCosine + z * s;
    const r02 = x * z * oneMinusCosine - y * s;
    const r10 = x * y * oneMinusCosine - z * s;
    const r11 = yy + (1 - yy) * c;
    const r12 = y * z * oneMinusCosine + x * s;
    const r20 = x * z * oneMinusCosine + y * s;
    const r21 = y * z * oneMinusCosine - x * s;
    const r22 = zz + (1 - zz) * c;
    const m00 = m[0];
    const m01 = m[1];
    const m02 = m[2];
    const m03 = m[3];
    const m10 = m[4];
    const m11 = m[5];
    const m12 = m[6];
    const m13 = m[7];
    const m20 = m[8];
    const m21 = m[9];
    const m22 = m[10];
    const m23 = m[11];
    dst[0] = r00 * m00 + r01 * m10 + r02 * m20;
    dst[1] = r00 * m01 + r01 * m11 + r02 * m21;
    dst[2] = r00 * m02 + r01 * m12 + r02 * m22;
    dst[3] = r00 * m03 + r01 * m13 + r02 * m23;
    dst[4] = r10 * m00 + r11 * m10 + r12 * m20;
    dst[5] = r10 * m01 + r11 * m11 + r12 * m21;
    dst[6] = r10 * m02 + r11 * m12 + r12 * m22;
    dst[7] = r10 * m03 + r11 * m13 + r12 * m23;
    dst[8] = r20 * m00 + r21 * m10 + r22 * m20;
    dst[9] = r20 * m01 + r21 * m11 + r22 * m21;
    dst[10] = r20 * m02 + r21 * m12 + r22 * m22;
    dst[11] = r20 * m03 + r21 * m13 + r22 * m23;
    if (m !== dst) {
      dst[12] = m[12];
      dst[13] = m[13];
      dst[14] = m[14];
      dst[15] = m[15];
    }
    return dst;
  }
  function scaling(v, dst) {
    dst = dst || new MatType(16);
    dst[0] = v[0];
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = v[1];
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = v[2];
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
  }
  function scale(m, v, dst) {
    dst = dst || new MatType(16);
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    dst[0] = v0 * m[0 * 4 + 0];
    dst[1] = v0 * m[0 * 4 + 1];
    dst[2] = v0 * m[0 * 4 + 2];
    dst[3] = v0 * m[0 * 4 + 3];
    dst[4] = v1 * m[1 * 4 + 0];
    dst[5] = v1 * m[1 * 4 + 1];
    dst[6] = v1 * m[1 * 4 + 2];
    dst[7] = v1 * m[1 * 4 + 3];
    dst[8] = v2 * m[2 * 4 + 0];
    dst[9] = v2 * m[2 * 4 + 1];
    dst[10] = v2 * m[2 * 4 + 2];
    dst[11] = v2 * m[2 * 4 + 3];
    if (m !== dst) {
      dst[12] = m[12];
      dst[13] = m[13];
      dst[14] = m[14];
      dst[15] = m[15];
    }
    return dst;
  }
  function transformPoint(m, v, dst) {
    dst = dst || create();
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    const d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];
    dst[0] = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
    dst[1] = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
    dst[2] = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;
    return dst;
  }
  function transformDirection(m, v, dst) {
    dst = dst || create();
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    dst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
    dst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
    dst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];
    return dst;
  }
  function transformNormal(m, v, dst) {
    dst = dst || create();
    const mi = inverse(m);
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
    dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
    dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
    return dst;
  }
  var m4 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    axisRotate,
    axisRotation,
    copy: copy$1,
    frustum,
    getAxis,
    getTranslation,
    identity,
    inverse,
    lookAt,
    multiply: multiply$1,
    negate: negate$1,
    ortho,
    perspective,
    rotateX,
    rotateY,
    rotateZ,
    rotationX,
    rotationY,
    rotationZ,
    scale,
    scaling,
    setAxis,
    setDefaultType: setDefaultType$1,
    setTranslation,
    transformDirection,
    transformNormal,
    transformPoint,
    translate,
    translation,
    transpose
  });
  var BYTE = 5120;
  var UNSIGNED_BYTE = 5121;
  var SHORT = 5122;
  var UNSIGNED_SHORT = 5123;
  var INT = 5124;
  var UNSIGNED_INT = 5125;
  var FLOAT = 5126;
  var UNSIGNED_SHORT_4_4_4_4 = 32819;
  var UNSIGNED_SHORT_5_5_5_1 = 32820;
  var UNSIGNED_SHORT_5_6_5 = 33635;
  var HALF_FLOAT = 5131;
  var UNSIGNED_INT_2_10_10_10_REV = 33640;
  var UNSIGNED_INT_10F_11F_11F_REV = 35899;
  var UNSIGNED_INT_5_9_9_9_REV = 35902;
  var FLOAT_32_UNSIGNED_INT_24_8_REV = 36269;
  var UNSIGNED_INT_24_8 = 34042;
  var glTypeToTypedArray = {};
  {
    const tt = glTypeToTypedArray;
    tt[BYTE] = Int8Array;
    tt[UNSIGNED_BYTE] = Uint8Array;
    tt[SHORT] = Int16Array;
    tt[UNSIGNED_SHORT] = Uint16Array;
    tt[INT] = Int32Array;
    tt[UNSIGNED_INT] = Uint32Array;
    tt[FLOAT] = Float32Array;
    tt[UNSIGNED_SHORT_4_4_4_4] = Uint16Array;
    tt[UNSIGNED_SHORT_5_5_5_1] = Uint16Array;
    tt[UNSIGNED_SHORT_5_6_5] = Uint16Array;
    tt[HALF_FLOAT] = Uint16Array;
    tt[UNSIGNED_INT_2_10_10_10_REV] = Uint32Array;
    tt[UNSIGNED_INT_10F_11F_11F_REV] = Uint32Array;
    tt[UNSIGNED_INT_5_9_9_9_REV] = Uint32Array;
    tt[FLOAT_32_UNSIGNED_INT_24_8_REV] = Uint32Array;
    tt[UNSIGNED_INT_24_8] = Uint32Array;
  }
  function getGLTypeForTypedArray(typedArray) {
    if (typedArray instanceof Int8Array) {
      return BYTE;
    }
    if (typedArray instanceof Uint8Array) {
      return UNSIGNED_BYTE;
    }
    if (typedArray instanceof Uint8ClampedArray) {
      return UNSIGNED_BYTE;
    }
    if (typedArray instanceof Int16Array) {
      return SHORT;
    }
    if (typedArray instanceof Uint16Array) {
      return UNSIGNED_SHORT;
    }
    if (typedArray instanceof Int32Array) {
      return INT;
    }
    if (typedArray instanceof Uint32Array) {
      return UNSIGNED_INT;
    }
    if (typedArray instanceof Float32Array) {
      return FLOAT;
    }
    throw new Error("unsupported typed array type");
  }
  function getGLTypeForTypedArrayType(typedArrayType) {
    if (typedArrayType === Int8Array) {
      return BYTE;
    }
    if (typedArrayType === Uint8Array) {
      return UNSIGNED_BYTE;
    }
    if (typedArrayType === Uint8ClampedArray) {
      return UNSIGNED_BYTE;
    }
    if (typedArrayType === Int16Array) {
      return SHORT;
    }
    if (typedArrayType === Uint16Array) {
      return UNSIGNED_SHORT;
    }
    if (typedArrayType === Int32Array) {
      return INT;
    }
    if (typedArrayType === Uint32Array) {
      return UNSIGNED_INT;
    }
    if (typedArrayType === Float32Array) {
      return FLOAT;
    }
    throw new Error("unsupported typed array type");
  }
  var isArrayBuffer = typeof SharedArrayBuffer !== "undefined" ? function isArrayBufferOrSharedArrayBuffer(a) {
    return a && a.buffer && (a.buffer instanceof ArrayBuffer || a.buffer instanceof SharedArrayBuffer);
  } : function isArrayBuffer2(a) {
    return a && a.buffer && a.buffer instanceof ArrayBuffer;
  };
  function copyNamedProperties(names, src, dst) {
    names.forEach(function(name) {
      const value = src[name];
      if (value !== void 0) {
        dst[name] = value;
      }
    });
  }
  function error(...args) {
    console.error(...args);
  }
  function isBuffer(gl2, t) {
    return typeof WebGLBuffer !== "undefined" && t instanceof WebGLBuffer;
  }
  function isShader(gl2, t) {
    return typeof WebGLShader !== "undefined" && t instanceof WebGLShader;
  }
  function isTexture(gl2, t) {
    return typeof WebGLTexture !== "undefined" && t instanceof WebGLTexture;
  }
  var STATIC_DRAW = 35044;
  var ARRAY_BUFFER = 34962;
  var ELEMENT_ARRAY_BUFFER = 34963;
  var BUFFER_SIZE = 34660;
  var BYTE$1 = 5120;
  var UNSIGNED_BYTE$1 = 5121;
  var SHORT$1 = 5122;
  var UNSIGNED_SHORT$1 = 5123;
  var INT$1 = 5124;
  var UNSIGNED_INT$1 = 5125;
  var FLOAT$1 = 5126;
  var defaults = {
    attribPrefix: ""
  };
  function setBufferFromTypedArray(gl2, type, buffer, array, drawType) {
    gl2.bindBuffer(type, buffer);
    gl2.bufferData(type, array, drawType || STATIC_DRAW);
  }
  function createBufferFromTypedArray(gl2, typedArray, type, drawType) {
    if (isBuffer(gl2, typedArray)) {
      return typedArray;
    }
    type = type || ARRAY_BUFFER;
    const buffer = gl2.createBuffer();
    setBufferFromTypedArray(gl2, type, buffer, typedArray, drawType);
    return buffer;
  }
  function isIndices(name) {
    return name === "indices";
  }
  function getNormalizationForTypedArray(typedArray) {
    if (typedArray instanceof Int8Array) {
      return true;
    }
    if (typedArray instanceof Uint8Array) {
      return true;
    }
    return false;
  }
  function getNormalizationForTypedArrayType(typedArrayType) {
    if (typedArrayType === Int8Array) {
      return true;
    }
    if (typedArrayType === Uint8Array) {
      return true;
    }
    return false;
  }
  function getArray(array) {
    return array.length ? array : array.data;
  }
  var texcoordRE = /coord|texture/i;
  var colorRE = /color|colour/i;
  function guessNumComponentsFromName(name, length2) {
    let numComponents;
    if (texcoordRE.test(name)) {
      numComponents = 2;
    } else if (colorRE.test(name)) {
      numComponents = 4;
    } else {
      numComponents = 3;
    }
    if (length2 % numComponents > 0) {
      throw new Error(`Can not guess numComponents for attribute '${name}'. Tried ${numComponents} but ${length2} values is not evenly divisible by ${numComponents}. You should specify it.`);
    }
    return numComponents;
  }
  function getNumComponents(array, arrayName) {
    return array.numComponents || array.size || guessNumComponentsFromName(arrayName, getArray(array).length);
  }
  function makeTypedArray(array, name) {
    if (isArrayBuffer(array)) {
      return array;
    }
    if (isArrayBuffer(array.data)) {
      return array.data;
    }
    if (Array.isArray(array)) {
      array = {
        data: array
      };
    }
    let Type = array.type;
    if (!Type) {
      if (isIndices(name)) {
        Type = Uint16Array;
      } else {
        Type = Float32Array;
      }
    }
    return new Type(array.data);
  }
  function createAttribsFromArrays(gl2, arrays) {
    const attribs = {};
    Object.keys(arrays).forEach(function(arrayName) {
      if (!isIndices(arrayName)) {
        const array = arrays[arrayName];
        const attribName = array.attrib || array.name || array.attribName || defaults.attribPrefix + arrayName;
        if (array.value) {
          if (!Array.isArray(array.value) && !isArrayBuffer(array.value)) {
            throw new Error("array.value is not array or typedarray");
          }
          attribs[attribName] = {
            value: array.value
          };
        } else {
          let buffer;
          let type;
          let normalization;
          let numComponents;
          if (array.buffer && array.buffer instanceof WebGLBuffer) {
            buffer = array.buffer;
            numComponents = array.numComponents || array.size;
            type = array.type;
            normalization = array.normalize;
          } else if (typeof array === "number" || typeof array.data === "number") {
            const numValues = array.data || array;
            const arrayType = array.type || Float32Array;
            const numBytes = numValues * arrayType.BYTES_PER_ELEMENT;
            type = getGLTypeForTypedArrayType(arrayType);
            normalization = array.normalize !== void 0 ? array.normalize : getNormalizationForTypedArrayType(arrayType);
            numComponents = array.numComponents || array.size || guessNumComponentsFromName(arrayName, numValues);
            buffer = gl2.createBuffer();
            gl2.bindBuffer(ARRAY_BUFFER, buffer);
            gl2.bufferData(ARRAY_BUFFER, numBytes, array.drawType || STATIC_DRAW);
          } else {
            const typedArray = makeTypedArray(array, arrayName);
            buffer = createBufferFromTypedArray(gl2, typedArray, void 0, array.drawType);
            type = getGLTypeForTypedArray(typedArray);
            normalization = array.normalize !== void 0 ? array.normalize : getNormalizationForTypedArray(typedArray);
            numComponents = getNumComponents(array, arrayName);
          }
          attribs[attribName] = {
            buffer,
            numComponents,
            type,
            normalize: normalization,
            stride: array.stride || 0,
            offset: array.offset || 0,
            divisor: array.divisor === void 0 ? void 0 : array.divisor,
            drawType: array.drawType
          };
        }
      }
    });
    gl2.bindBuffer(ARRAY_BUFFER, null);
    return attribs;
  }
  function getBytesPerValueForGLType(gl2, type) {
    if (type === BYTE$1)
      return 1;
    if (type === UNSIGNED_BYTE$1)
      return 1;
    if (type === SHORT$1)
      return 2;
    if (type === UNSIGNED_SHORT$1)
      return 2;
    if (type === INT$1)
      return 4;
    if (type === UNSIGNED_INT$1)
      return 4;
    if (type === FLOAT$1)
      return 4;
    return 0;
  }
  var positionKeys = ["position", "positions", "a_position"];
  function getNumElementsFromNonIndexedArrays(arrays) {
    let key;
    let ii;
    for (ii = 0; ii < positionKeys.length; ++ii) {
      key = positionKeys[ii];
      if (key in arrays) {
        break;
      }
    }
    if (ii === positionKeys.length) {
      key = Object.keys(arrays)[0];
    }
    const array = arrays[key];
    const length2 = getArray(array).length;
    const numComponents = getNumComponents(array, key);
    const numElements = length2 / numComponents;
    if (length2 % numComponents > 0) {
      throw new Error(`numComponents ${numComponents} not correct for length ${length2}`);
    }
    return numElements;
  }
  function getNumElementsFromAttributes(gl2, attribs) {
    let key;
    let ii;
    for (ii = 0; ii < positionKeys.length; ++ii) {
      key = positionKeys[ii];
      if (key in attribs) {
        break;
      }
      key = defaults.attribPrefix + key;
      if (key in attribs) {
        break;
      }
    }
    if (ii === positionKeys.length) {
      key = Object.keys(attribs)[0];
    }
    const attrib = attribs[key];
    gl2.bindBuffer(ARRAY_BUFFER, attrib.buffer);
    const numBytes = gl2.getBufferParameter(ARRAY_BUFFER, BUFFER_SIZE);
    gl2.bindBuffer(ARRAY_BUFFER, null);
    const bytesPerValue = getBytesPerValueForGLType(gl2, attrib.type);
    const totalElements = numBytes / bytesPerValue;
    const numComponents = attrib.numComponents || attrib.size;
    const numElements = totalElements / numComponents;
    if (numElements % 1 !== 0) {
      throw new Error(`numComponents ${numComponents} not correct for length ${length}`);
    }
    return numElements;
  }
  function createBufferInfoFromArrays(gl2, arrays, srcBufferInfo) {
    const newAttribs = createAttribsFromArrays(gl2, arrays);
    const bufferInfo2 = Object.assign({}, srcBufferInfo ? srcBufferInfo : {});
    bufferInfo2.attribs = Object.assign({}, srcBufferInfo ? srcBufferInfo.attribs : {}, newAttribs);
    const indices = arrays.indices;
    if (indices) {
      const newIndices = makeTypedArray(indices, "indices");
      bufferInfo2.indices = createBufferFromTypedArray(gl2, newIndices, ELEMENT_ARRAY_BUFFER);
      bufferInfo2.numElements = newIndices.length;
      bufferInfo2.elementType = getGLTypeForTypedArray(newIndices);
    } else if (!bufferInfo2.numElements) {
      bufferInfo2.numElements = getNumElementsFromAttributes(gl2, bufferInfo2.attribs);
    }
    return bufferInfo2;
  }
  function createBufferFromArray(gl2, array, arrayName) {
    const type = arrayName === "indices" ? ELEMENT_ARRAY_BUFFER : ARRAY_BUFFER;
    const typedArray = makeTypedArray(array, arrayName);
    return createBufferFromTypedArray(gl2, typedArray, type);
  }
  function createBuffersFromArrays(gl2, arrays) {
    const buffers = {};
    Object.keys(arrays).forEach(function(key) {
      buffers[key] = createBufferFromArray(gl2, arrays[key], key);
    });
    if (arrays.indices) {
      buffers.numElements = arrays.indices.length;
      buffers.elementType = getGLTypeForTypedArray(makeTypedArray(arrays.indices));
    } else {
      buffers.numElements = getNumElementsFromNonIndexedArrays(arrays);
    }
    return buffers;
  }
  var getArray$1 = getArray;
  var getNumComponents$1 = getNumComponents;
  function augmentTypedArray(typedArray, numComponents) {
    let cursor = 0;
    typedArray.push = function() {
      for (let ii = 0; ii < arguments.length; ++ii) {
        const value = arguments[ii];
        if (value instanceof Array || isArrayBuffer(value)) {
          for (let jj = 0; jj < value.length; ++jj) {
            typedArray[cursor++] = value[jj];
          }
        } else {
          typedArray[cursor++] = value;
        }
      }
    };
    typedArray.reset = function(opt_index) {
      cursor = opt_index || 0;
    };
    typedArray.numComponents = numComponents;
    Object.defineProperty(typedArray, "numElements", {
      get: function() {
        return this.length / this.numComponents | 0;
      }
    });
    return typedArray;
  }
  function createAugmentedTypedArray(numComponents, numElements, opt_type) {
    const Type = opt_type || Float32Array;
    return augmentTypedArray(new Type(numComponents * numElements), numComponents);
  }
  function allButIndices(name) {
    return name !== "indices";
  }
  function deindexVertices(vertices) {
    const indices = vertices.indices;
    const newVertices = {};
    const numElements = indices.length;
    function expandToUnindexed(channel) {
      const srcBuffer = vertices[channel];
      const numComponents = srcBuffer.numComponents;
      const dstBuffer = createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);
      for (let ii = 0; ii < numElements; ++ii) {
        const ndx = indices[ii];
        const offset = ndx * numComponents;
        for (let jj = 0; jj < numComponents; ++jj) {
          dstBuffer.push(srcBuffer[offset + jj]);
        }
      }
      newVertices[channel] = dstBuffer;
    }
    Object.keys(vertices).filter(allButIndices).forEach(expandToUnindexed);
    return newVertices;
  }
  function flattenNormals(vertices) {
    if (vertices.indices) {
      throw new Error("can not flatten normals of indexed vertices. deindex them first");
    }
    const normals = vertices.normal;
    const numNormals = normals.length;
    for (let ii = 0; ii < numNormals; ii += 9) {
      const nax = normals[ii + 0];
      const nay = normals[ii + 1];
      const naz = normals[ii + 2];
      const nbx = normals[ii + 3];
      const nby = normals[ii + 4];
      const nbz = normals[ii + 5];
      const ncx = normals[ii + 6];
      const ncy = normals[ii + 7];
      const ncz = normals[ii + 8];
      let nx = nax + nbx + ncx;
      let ny = nay + nby + ncy;
      let nz = naz + nbz + ncz;
      const length2 = Math.sqrt(nx * nx + ny * ny + nz * nz);
      nx /= length2;
      ny /= length2;
      nz /= length2;
      normals[ii + 0] = nx;
      normals[ii + 1] = ny;
      normals[ii + 2] = nz;
      normals[ii + 3] = nx;
      normals[ii + 4] = ny;
      normals[ii + 5] = nz;
      normals[ii + 6] = nx;
      normals[ii + 7] = ny;
      normals[ii + 8] = nz;
    }
    return vertices;
  }
  function applyFuncToV3Array(array, matrix, fn) {
    const len = array.length;
    const tmp = new Float32Array(3);
    for (let ii = 0; ii < len; ii += 3) {
      fn(matrix, [array[ii], array[ii + 1], array[ii + 2]], tmp);
      array[ii] = tmp[0];
      array[ii + 1] = tmp[1];
      array[ii + 2] = tmp[2];
    }
  }
  function transformNormal$1(mi, v, dst) {
    dst = dst || create();
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
    dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
    dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
    return dst;
  }
  function reorientDirections(array, matrix) {
    applyFuncToV3Array(array, matrix, transformDirection);
    return array;
  }
  function reorientNormals(array, matrix) {
    applyFuncToV3Array(array, inverse(matrix), transformNormal$1);
    return array;
  }
  function reorientPositions(array, matrix) {
    applyFuncToV3Array(array, matrix, transformPoint);
    return array;
  }
  function reorientVertices(arrays, matrix) {
    Object.keys(arrays).forEach(function(name) {
      const array = arrays[name];
      if (name.indexOf("pos") >= 0) {
        reorientPositions(array, matrix);
      } else if (name.indexOf("tan") >= 0 || name.indexOf("binorm") >= 0) {
        reorientDirections(array, matrix);
      } else if (name.indexOf("norm") >= 0) {
        reorientNormals(array, matrix);
      }
    });
    return arrays;
  }
  function createXYQuadVertices(size, xOffset, yOffset) {
    size = size || 2;
    xOffset = xOffset || 0;
    yOffset = yOffset || 0;
    size *= 0.5;
    return {
      position: {
        numComponents: 2,
        data: [
          xOffset + -1 * size,
          yOffset + -1 * size,
          xOffset + 1 * size,
          yOffset + -1 * size,
          xOffset + -1 * size,
          yOffset + 1 * size,
          xOffset + 1 * size,
          yOffset + 1 * size
        ]
      },
      normal: [
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1
      ],
      texcoord: [
        0,
        0,
        1,
        0,
        0,
        1,
        1,
        1
      ],
      indices: [0, 1, 2, 2, 1, 3]
    };
  }
  function createPlaneVertices(width, depth, subdivisionsWidth, subdivisionsDepth, matrix) {
    width = width || 1;
    depth = depth || 1;
    subdivisionsWidth = subdivisionsWidth || 1;
    subdivisionsDepth = subdivisionsDepth || 1;
    matrix = matrix || identity();
    const numVertices = (subdivisionsWidth + 1) * (subdivisionsDepth + 1);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    for (let z = 0; z <= subdivisionsDepth; z++) {
      for (let x = 0; x <= subdivisionsWidth; x++) {
        const u = x / subdivisionsWidth;
        const v = z / subdivisionsDepth;
        positions.push(width * u - width * 0.5, 0, depth * v - depth * 0.5);
        normals.push(0, 1, 0);
        texcoords.push(u, v);
      }
    }
    const numVertsAcross = subdivisionsWidth + 1;
    const indices = createAugmentedTypedArray(3, subdivisionsWidth * subdivisionsDepth * 2, Uint16Array);
    for (let z = 0; z < subdivisionsDepth; z++) {
      for (let x = 0; x < subdivisionsWidth; x++) {
        indices.push((z + 0) * numVertsAcross + x, (z + 1) * numVertsAcross + x, (z + 0) * numVertsAcross + x + 1);
        indices.push((z + 1) * numVertsAcross + x, (z + 1) * numVertsAcross + x + 1, (z + 0) * numVertsAcross + x + 1);
      }
    }
    const arrays = reorientVertices({
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    }, matrix);
    return arrays;
  }
  function createSphereVertices(radius, subdivisionsAxis, subdivisionsHeight, opt_startLatitudeInRadians, opt_endLatitudeInRadians, opt_startLongitudeInRadians, opt_endLongitudeInRadians) {
    if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
      throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
    }
    opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
    opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
    opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
    opt_endLongitudeInRadians = opt_endLongitudeInRadians || Math.PI * 2;
    const latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
    const longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians;
    const numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    for (let y = 0; y <= subdivisionsHeight; y++) {
      for (let x = 0; x <= subdivisionsAxis; x++) {
        const u = x / subdivisionsAxis;
        const v = y / subdivisionsHeight;
        const theta = longRange * u + opt_startLongitudeInRadians;
        const phi = latRange * v + opt_startLatitudeInRadians;
        const sinTheta = Math.sin(theta);
        const cosTheta = Math.cos(theta);
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);
        const ux = cosTheta * sinPhi;
        const uy = cosPhi;
        const uz = sinTheta * sinPhi;
        positions.push(radius * ux, radius * uy, radius * uz);
        normals.push(ux, uy, uz);
        texcoords.push(1 - u, v);
      }
    }
    const numVertsAround = subdivisionsAxis + 1;
    const indices = createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);
    for (let x = 0; x < subdivisionsAxis; x++) {
      for (let y = 0; y < subdivisionsHeight; y++) {
        indices.push((y + 0) * numVertsAround + x, (y + 0) * numVertsAround + x + 1, (y + 1) * numVertsAround + x);
        indices.push((y + 1) * numVertsAround + x, (y + 0) * numVertsAround + x + 1, (y + 1) * numVertsAround + x + 1);
      }
    }
    return {
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    };
  }
  var CUBE_FACE_INDICES = [
    [3, 7, 5, 1],
    [6, 2, 0, 4],
    [6, 7, 3, 2],
    [0, 1, 5, 4],
    [7, 6, 4, 5],
    [2, 3, 1, 0]
  ];
  function createCubeVertices(size) {
    size = size || 1;
    const k = size / 2;
    const cornerVertices = [
      [-k, -k, -k],
      [+k, -k, -k],
      [-k, +k, -k],
      [+k, +k, -k],
      [-k, -k, +k],
      [+k, -k, +k],
      [-k, +k, +k],
      [+k, +k, +k]
    ];
    const faceNormals = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    const uvCoords = [
      [1, 0],
      [0, 0],
      [0, 1],
      [1, 1]
    ];
    const numVertices = 6 * 4;
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    const indices = createAugmentedTypedArray(3, 6 * 2, Uint16Array);
    for (let f = 0; f < 6; ++f) {
      const faceIndices = CUBE_FACE_INDICES[f];
      for (let v = 0; v < 4; ++v) {
        const position = cornerVertices[faceIndices[v]];
        const normal = faceNormals[f];
        const uv = uvCoords[v];
        positions.push(position);
        normals.push(normal);
        texcoords.push(uv);
      }
      const offset = 4 * f;
      indices.push(offset + 0, offset + 1, offset + 2);
      indices.push(offset + 0, offset + 2, offset + 3);
    }
    return {
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    };
  }
  function createTruncatedConeVertices(bottomRadius, topRadius, height, radialSubdivisions, verticalSubdivisions, opt_topCap, opt_bottomCap) {
    if (radialSubdivisions < 3) {
      throw new Error("radialSubdivisions must be 3 or greater");
    }
    if (verticalSubdivisions < 1) {
      throw new Error("verticalSubdivisions must be 1 or greater");
    }
    const topCap = opt_topCap === void 0 ? true : opt_topCap;
    const bottomCap = opt_bottomCap === void 0 ? true : opt_bottomCap;
    const extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);
    const numVertices = (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    const indices = createAugmentedTypedArray(3, radialSubdivisions * (verticalSubdivisions + extra / 2) * 2, Uint16Array);
    const vertsAroundEdge = radialSubdivisions + 1;
    const slant = Math.atan2(bottomRadius - topRadius, height);
    const cosSlant = Math.cos(slant);
    const sinSlant = Math.sin(slant);
    const start = topCap ? -2 : 0;
    const end = verticalSubdivisions + (bottomCap ? 2 : 0);
    for (let yy = start; yy <= end; ++yy) {
      let v = yy / verticalSubdivisions;
      let y = height * v;
      let ringRadius;
      if (yy < 0) {
        y = 0;
        v = 1;
        ringRadius = bottomRadius;
      } else if (yy > verticalSubdivisions) {
        y = height;
        v = 1;
        ringRadius = topRadius;
      } else {
        ringRadius = bottomRadius + (topRadius - bottomRadius) * (yy / verticalSubdivisions);
      }
      if (yy === -2 || yy === verticalSubdivisions + 2) {
        ringRadius = 0;
        v = 0;
      }
      y -= height / 2;
      for (let ii = 0; ii < vertsAroundEdge; ++ii) {
        const sin = Math.sin(ii * Math.PI * 2 / radialSubdivisions);
        const cos = Math.cos(ii * Math.PI * 2 / radialSubdivisions);
        positions.push(sin * ringRadius, y, cos * ringRadius);
        if (yy < 0) {
          normals.push(0, -1, 0);
        } else if (yy > verticalSubdivisions) {
          normals.push(0, 1, 0);
        } else if (ringRadius === 0) {
          normals.push(0, 0, 0);
        } else {
          normals.push(sin * cosSlant, sinSlant, cos * cosSlant);
        }
        texcoords.push(ii / radialSubdivisions, 1 - v);
      }
    }
    for (let yy = 0; yy < verticalSubdivisions + extra; ++yy) {
      if (yy === 1 && topCap || yy === verticalSubdivisions + extra - 2 && bottomCap) {
        continue;
      }
      for (let ii = 0; ii < radialSubdivisions; ++ii) {
        indices.push(vertsAroundEdge * (yy + 0) + 0 + ii, vertsAroundEdge * (yy + 0) + 1 + ii, vertsAroundEdge * (yy + 1) + 1 + ii);
        indices.push(vertsAroundEdge * (yy + 0) + 0 + ii, vertsAroundEdge * (yy + 1) + 1 + ii, vertsAroundEdge * (yy + 1) + 0 + ii);
      }
    }
    return {
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    };
  }
  function expandRLEData(rleData, padding) {
    padding = padding || [];
    const data = [];
    for (let ii = 0; ii < rleData.length; ii += 4) {
      const runLength = rleData[ii];
      const element = rleData.slice(ii + 1, ii + 4);
      element.push.apply(element, padding);
      for (let jj = 0; jj < runLength; ++jj) {
        data.push.apply(data, element);
      }
    }
    return data;
  }
  function create3DFVertices() {
    const positions = [
      0,
      0,
      0,
      0,
      150,
      0,
      30,
      0,
      0,
      0,
      150,
      0,
      30,
      150,
      0,
      30,
      0,
      0,
      30,
      0,
      0,
      30,
      30,
      0,
      100,
      0,
      0,
      30,
      30,
      0,
      100,
      30,
      0,
      100,
      0,
      0,
      30,
      60,
      0,
      30,
      90,
      0,
      67,
      60,
      0,
      30,
      90,
      0,
      67,
      90,
      0,
      67,
      60,
      0,
      0,
      0,
      30,
      30,
      0,
      30,
      0,
      150,
      30,
      0,
      150,
      30,
      30,
      0,
      30,
      30,
      150,
      30,
      30,
      0,
      30,
      100,
      0,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      100,
      0,
      30,
      100,
      30,
      30,
      30,
      60,
      30,
      67,
      60,
      30,
      30,
      90,
      30,
      30,
      90,
      30,
      67,
      60,
      30,
      67,
      90,
      30,
      0,
      0,
      0,
      100,
      0,
      0,
      100,
      0,
      30,
      0,
      0,
      0,
      100,
      0,
      30,
      0,
      0,
      30,
      100,
      0,
      0,
      100,
      30,
      0,
      100,
      30,
      30,
      100,
      0,
      0,
      100,
      30,
      30,
      100,
      0,
      30,
      30,
      30,
      0,
      30,
      30,
      30,
      100,
      30,
      30,
      30,
      30,
      0,
      100,
      30,
      30,
      100,
      30,
      0,
      30,
      30,
      0,
      30,
      60,
      30,
      30,
      30,
      30,
      30,
      30,
      0,
      30,
      60,
      0,
      30,
      60,
      30,
      30,
      60,
      0,
      67,
      60,
      30,
      30,
      60,
      30,
      30,
      60,
      0,
      67,
      60,
      0,
      67,
      60,
      30,
      67,
      60,
      0,
      67,
      90,
      30,
      67,
      60,
      30,
      67,
      60,
      0,
      67,
      90,
      0,
      67,
      90,
      30,
      30,
      90,
      0,
      30,
      90,
      30,
      67,
      90,
      30,
      30,
      90,
      0,
      67,
      90,
      30,
      67,
      90,
      0,
      30,
      90,
      0,
      30,
      150,
      30,
      30,
      90,
      30,
      30,
      90,
      0,
      30,
      150,
      0,
      30,
      150,
      30,
      0,
      150,
      0,
      0,
      150,
      30,
      30,
      150,
      30,
      0,
      150,
      0,
      30,
      150,
      30,
      30,
      150,
      0,
      0,
      0,
      0,
      0,
      0,
      30,
      0,
      150,
      30,
      0,
      0,
      0,
      0,
      150,
      30,
      0,
      150,
      0
    ];
    const texcoords = [
      0.22,
      0.19,
      0.22,
      0.79,
      0.34,
      0.19,
      0.22,
      0.79,
      0.34,
      0.79,
      0.34,
      0.19,
      0.34,
      0.19,
      0.34,
      0.31,
      0.62,
      0.19,
      0.34,
      0.31,
      0.62,
      0.31,
      0.62,
      0.19,
      0.34,
      0.43,
      0.34,
      0.55,
      0.49,
      0.43,
      0.34,
      0.55,
      0.49,
      0.55,
      0.49,
      0.43,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0
    ];
    const normals = expandRLEData([
      18,
      0,
      0,
      1,
      18,
      0,
      0,
      -1,
      6,
      0,
      1,
      0,
      6,
      1,
      0,
      0,
      6,
      0,
      -1,
      0,
      6,
      1,
      0,
      0,
      6,
      0,
      1,
      0,
      6,
      1,
      0,
      0,
      6,
      0,
      -1,
      0,
      6,
      1,
      0,
      0,
      6,
      0,
      -1,
      0,
      6,
      -1,
      0,
      0
    ]);
    const colors = expandRLEData([
      18,
      200,
      70,
      120,
      18,
      80,
      70,
      200,
      6,
      70,
      200,
      210,
      6,
      200,
      200,
      70,
      6,
      210,
      100,
      70,
      6,
      210,
      160,
      70,
      6,
      70,
      180,
      210,
      6,
      100,
      70,
      210,
      6,
      76,
      210,
      100,
      6,
      140,
      210,
      80,
      6,
      90,
      130,
      110,
      6,
      160,
      160,
      220
    ], [255]);
    const numVerts = positions.length / 3;
    const arrays = {
      position: createAugmentedTypedArray(3, numVerts),
      texcoord: createAugmentedTypedArray(2, numVerts),
      normal: createAugmentedTypedArray(3, numVerts),
      color: createAugmentedTypedArray(4, numVerts, Uint8Array),
      indices: createAugmentedTypedArray(3, numVerts / 3, Uint16Array)
    };
    arrays.position.push(positions);
    arrays.texcoord.push(texcoords);
    arrays.normal.push(normals);
    arrays.color.push(colors);
    for (let ii = 0; ii < numVerts; ++ii) {
      arrays.indices.push(ii);
    }
    return arrays;
  }
  function createCrescentVertices(verticalRadius, outerRadius, innerRadius, thickness, subdivisionsDown, startOffset, endOffset) {
    if (subdivisionsDown <= 0) {
      throw new Error("subdivisionDown must be > 0");
    }
    startOffset = startOffset || 0;
    endOffset = endOffset || 1;
    const subdivisionsThick = 2;
    const offsetRange = endOffset - startOffset;
    const numVertices = (subdivisionsDown + 1) * 2 * (2 + subdivisionsThick);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    function lerp(a, b, s) {
      return a + (b - a) * s;
    }
    function createArc(arcRadius, x, normalMult, normalAdd, uMult, uAdd) {
      for (let z = 0; z <= subdivisionsDown; z++) {
        const uBack = x / (subdivisionsThick - 1);
        const v = z / subdivisionsDown;
        const xBack = (uBack - 0.5) * 2;
        const angle = (startOffset + v * offsetRange) * Math.PI;
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        const radius = lerp(verticalRadius, arcRadius, s);
        const px = xBack * thickness;
        const py = c * verticalRadius;
        const pz = s * radius;
        positions.push(px, py, pz);
        const n = add(multiply([0, s, c], normalMult), normalAdd);
        normals.push(n);
        texcoords.push(uBack * uMult + uAdd, v);
      }
    }
    for (let x = 0; x < subdivisionsThick; x++) {
      const uBack = (x / (subdivisionsThick - 1) - 0.5) * 2;
      createArc(outerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
      createArc(outerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 0);
      createArc(innerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
      createArc(innerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 1);
    }
    const indices = createAugmentedTypedArray(3, subdivisionsDown * 2 * (2 + subdivisionsThick), Uint16Array);
    function createSurface(leftArcOffset, rightArcOffset) {
      for (let z = 0; z < subdivisionsDown; ++z) {
        indices.push(leftArcOffset + z + 0, leftArcOffset + z + 1, rightArcOffset + z + 0);
        indices.push(leftArcOffset + z + 1, rightArcOffset + z + 1, rightArcOffset + z + 0);
      }
    }
    const numVerticesDown = subdivisionsDown + 1;
    createSurface(numVerticesDown * 0, numVerticesDown * 4);
    createSurface(numVerticesDown * 5, numVerticesDown * 7);
    createSurface(numVerticesDown * 6, numVerticesDown * 2);
    createSurface(numVerticesDown * 3, numVerticesDown * 1);
    return {
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    };
  }
  function createCylinderVertices(radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap) {
    return createTruncatedConeVertices(radius, radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap);
  }
  function createTorusVertices(radius, thickness, radialSubdivisions, bodySubdivisions, startAngle, endAngle) {
    if (radialSubdivisions < 3) {
      throw new Error("radialSubdivisions must be 3 or greater");
    }
    if (bodySubdivisions < 3) {
      throw new Error("verticalSubdivisions must be 3 or greater");
    }
    startAngle = startAngle || 0;
    endAngle = endAngle || Math.PI * 2;
    const range = endAngle - startAngle;
    const radialParts = radialSubdivisions + 1;
    const bodyParts = bodySubdivisions + 1;
    const numVertices = radialParts * bodyParts;
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    const indices = createAugmentedTypedArray(3, radialSubdivisions * bodySubdivisions * 2, Uint16Array);
    for (let slice = 0; slice < bodyParts; ++slice) {
      const v = slice / bodySubdivisions;
      const sliceAngle = v * Math.PI * 2;
      const sliceSin = Math.sin(sliceAngle);
      const ringRadius = radius + sliceSin * thickness;
      const ny = Math.cos(sliceAngle);
      const y = ny * thickness;
      for (let ring = 0; ring < radialParts; ++ring) {
        const u = ring / radialSubdivisions;
        const ringAngle = startAngle + u * range;
        const xSin = Math.sin(ringAngle);
        const zCos = Math.cos(ringAngle);
        const x = xSin * ringRadius;
        const z = zCos * ringRadius;
        const nx = xSin * sliceSin;
        const nz = zCos * sliceSin;
        positions.push(x, y, z);
        normals.push(nx, ny, nz);
        texcoords.push(u, 1 - v);
      }
    }
    for (let slice = 0; slice < bodySubdivisions; ++slice) {
      for (let ring = 0; ring < radialSubdivisions; ++ring) {
        const nextRingIndex = 1 + ring;
        const nextSliceIndex = 1 + slice;
        indices.push(radialParts * slice + ring, radialParts * nextSliceIndex + ring, radialParts * slice + nextRingIndex);
        indices.push(radialParts * nextSliceIndex + ring, radialParts * nextSliceIndex + nextRingIndex, radialParts * slice + nextRingIndex);
      }
    }
    return {
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    };
  }
  function createDiscVertices(radius, divisions, stacks, innerRadius, stackPower) {
    if (divisions < 3) {
      throw new Error("divisions must be at least 3");
    }
    stacks = stacks ? stacks : 1;
    stackPower = stackPower ? stackPower : 1;
    innerRadius = innerRadius ? innerRadius : 0;
    const numVertices = (divisions + 1) * (stacks + 1);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    const indices = createAugmentedTypedArray(3, stacks * divisions * 2, Uint16Array);
    let firstIndex = 0;
    const radiusSpan = radius - innerRadius;
    const pointsPerStack = divisions + 1;
    for (let stack = 0; stack <= stacks; ++stack) {
      const stackRadius = innerRadius + radiusSpan * Math.pow(stack / stacks, stackPower);
      for (let i = 0; i <= divisions; ++i) {
        const theta = 2 * Math.PI * i / divisions;
        const x = stackRadius * Math.cos(theta);
        const z = stackRadius * Math.sin(theta);
        positions.push(x, 0, z);
        normals.push(0, 1, 0);
        texcoords.push(1 - i / divisions, stack / stacks);
        if (stack > 0 && i !== divisions) {
          const a = firstIndex + (i + 1);
          const b = firstIndex + i;
          const c = firstIndex + i - pointsPerStack;
          const d = firstIndex + (i + 1) - pointsPerStack;
          indices.push(a, b, c);
          indices.push(a, c, d);
        }
      }
      firstIndex += divisions + 1;
    }
    return {
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    };
  }
  function randInt(range) {
    return Math.random() * range | 0;
  }
  function makeRandomVertexColors(vertices, options) {
    options = options || {};
    const numElements = vertices.position.numElements;
    const vColors = createAugmentedTypedArray(4, numElements, Uint8Array);
    const rand = options.rand || function(ndx, channel) {
      return channel < 3 ? randInt(256) : 255;
    };
    vertices.color = vColors;
    if (vertices.indices) {
      for (let ii = 0; ii < numElements; ++ii) {
        vColors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
      }
    } else {
      const numVertsPerColor = options.vertsPerColor || 3;
      const numSets = numElements / numVertsPerColor;
      for (let ii = 0; ii < numSets; ++ii) {
        const color = [rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3)];
        for (let jj = 0; jj < numVertsPerColor; ++jj) {
          vColors.push(color);
        }
      }
    }
    return vertices;
  }
  function createBufferFunc(fn) {
    return function(gl2) {
      const arrays = fn.apply(this, Array.prototype.slice.call(arguments, 1));
      return createBuffersFromArrays(gl2, arrays);
    };
  }
  function createBufferInfoFunc(fn) {
    return function(gl2) {
      const arrays = fn.apply(null, Array.prototype.slice.call(arguments, 1));
      return createBufferInfoFromArrays(gl2, arrays);
    };
  }
  var arraySpecPropertyNames = [
    "numComponents",
    "size",
    "type",
    "normalize",
    "stride",
    "offset",
    "attrib",
    "name",
    "attribName"
  ];
  function copyElements(src, dst, dstNdx, offset) {
    offset = offset || 0;
    const length2 = src.length;
    for (let ii = 0; ii < length2; ++ii) {
      dst[dstNdx + ii] = src[ii] + offset;
    }
  }
  function createArrayOfSameType(srcArray, length2) {
    const arraySrc = getArray$1(srcArray);
    const newArray = new arraySrc.constructor(length2);
    let newArraySpec = newArray;
    if (arraySrc.numComponents && arraySrc.numElements) {
      augmentTypedArray(newArray, arraySrc.numComponents);
    }
    if (srcArray.data) {
      newArraySpec = {
        data: newArray
      };
      copyNamedProperties(arraySpecPropertyNames, srcArray, newArraySpec);
    }
    return newArraySpec;
  }
  function concatVertices(arrayOfArrays) {
    const names = {};
    let baseName;
    for (let ii = 0; ii < arrayOfArrays.length; ++ii) {
      const arrays = arrayOfArrays[ii];
      Object.keys(arrays).forEach(function(name) {
        if (!names[name]) {
          names[name] = [];
        }
        if (!baseName && name !== "indices") {
          baseName = name;
        }
        const arrayInfo = arrays[name];
        const numComponents = getNumComponents$1(arrayInfo, name);
        const array = getArray$1(arrayInfo);
        const numElements = array.length / numComponents;
        names[name].push(numElements);
      });
    }
    function getLengthOfCombinedArrays(name) {
      let length2 = 0;
      let arraySpec;
      for (let ii = 0; ii < arrayOfArrays.length; ++ii) {
        const arrays = arrayOfArrays[ii];
        const arrayInfo = arrays[name];
        const array = getArray$1(arrayInfo);
        length2 += array.length;
        if (!arraySpec || arrayInfo.data) {
          arraySpec = arrayInfo;
        }
      }
      return {
        length: length2,
        spec: arraySpec
      };
    }
    function copyArraysToNewArray(name, base2, newArray) {
      let baseIndex = 0;
      let offset = 0;
      for (let ii = 0; ii < arrayOfArrays.length; ++ii) {
        const arrays = arrayOfArrays[ii];
        const arrayInfo = arrays[name];
        const array = getArray$1(arrayInfo);
        if (name === "indices") {
          copyElements(array, newArray, offset, baseIndex);
          baseIndex += base2[ii];
        } else {
          copyElements(array, newArray, offset);
        }
        offset += array.length;
      }
    }
    const base = names[baseName];
    const newArrays = {};
    Object.keys(names).forEach(function(name) {
      const info = getLengthOfCombinedArrays(name);
      const newArraySpec = createArrayOfSameType(info.spec, info.length);
      copyArraysToNewArray(name, base, getArray$1(newArraySpec));
      newArrays[name] = newArraySpec;
    });
    return newArrays;
  }
  function duplicateVertices(arrays) {
    const newArrays = {};
    Object.keys(arrays).forEach(function(name) {
      const arraySpec = arrays[name];
      const srcArray = getArray$1(arraySpec);
      const newArraySpec = createArrayOfSameType(arraySpec, srcArray.length);
      copyElements(srcArray, getArray$1(newArraySpec), 0);
      newArrays[name] = newArraySpec;
    });
    return newArrays;
  }
  var create3DFBufferInfo = createBufferInfoFunc(create3DFVertices);
  var create3DFBuffers = createBufferFunc(create3DFVertices);
  var createCubeBufferInfo = createBufferInfoFunc(createCubeVertices);
  var createCubeBuffers = createBufferFunc(createCubeVertices);
  var createPlaneBufferInfo = createBufferInfoFunc(createPlaneVertices);
  var createPlaneBuffers = createBufferFunc(createPlaneVertices);
  var createSphereBufferInfo = createBufferInfoFunc(createSphereVertices);
  var createSphereBuffers = createBufferFunc(createSphereVertices);
  var createTruncatedConeBufferInfo = createBufferInfoFunc(createTruncatedConeVertices);
  var createTruncatedConeBuffers = createBufferFunc(createTruncatedConeVertices);
  var createXYQuadBufferInfo = createBufferInfoFunc(createXYQuadVertices);
  var createXYQuadBuffers = createBufferFunc(createXYQuadVertices);
  var createCrescentBufferInfo = createBufferInfoFunc(createCrescentVertices);
  var createCrescentBuffers = createBufferFunc(createCrescentVertices);
  var createCylinderBufferInfo = createBufferInfoFunc(createCylinderVertices);
  var createCylinderBuffers = createBufferFunc(createCylinderVertices);
  var createTorusBufferInfo = createBufferInfoFunc(createTorusVertices);
  var createTorusBuffers = createBufferFunc(createTorusVertices);
  var createDiscBufferInfo = createBufferInfoFunc(createDiscVertices);
  var createDiscBuffers = createBufferFunc(createDiscVertices);
  var createCresentBufferInfo = createCrescentBufferInfo;
  var createCresentBuffers = createCrescentBuffers;
  var createCresentVertices = createCrescentVertices;
  var primitives = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    create3DFBufferInfo,
    create3DFBuffers,
    create3DFVertices,
    createAugmentedTypedArray,
    createCubeBufferInfo,
    createCubeBuffers,
    createCubeVertices,
    createPlaneBufferInfo,
    createPlaneBuffers,
    createPlaneVertices,
    createSphereBufferInfo,
    createSphereBuffers,
    createSphereVertices,
    createTruncatedConeBufferInfo,
    createTruncatedConeBuffers,
    createTruncatedConeVertices,
    createXYQuadBufferInfo,
    createXYQuadBuffers,
    createXYQuadVertices,
    createCresentBufferInfo,
    createCresentBuffers,
    createCresentVertices,
    createCrescentBufferInfo,
    createCrescentBuffers,
    createCrescentVertices,
    createCylinderBufferInfo,
    createCylinderBuffers,
    createCylinderVertices,
    createTorusBufferInfo,
    createTorusBuffers,
    createTorusVertices,
    createDiscBufferInfo,
    createDiscBuffers,
    createDiscVertices,
    deindexVertices,
    flattenNormals,
    makeRandomVertexColors,
    reorientDirections,
    reorientNormals,
    reorientPositions,
    reorientVertices,
    concatVertices,
    duplicateVertices
  });
  function isWebGL2(gl2) {
    return !!gl2.texStorage2D;
  }
  var glEnumToString = function() {
    const haveEnumsForType = {};
    const enums = {};
    function addEnums(gl2) {
      const type = gl2.constructor.name;
      if (!haveEnumsForType[type]) {
        for (const key in gl2) {
          if (typeof gl2[key] === "number") {
            const existing = enums[gl2[key]];
            enums[gl2[key]] = existing ? `${existing} | ${key}` : key;
          }
        }
        haveEnumsForType[type] = true;
      }
    }
    return function glEnumToString2(gl2, value) {
      addEnums(gl2);
      return enums[value] || (typeof value === "number" ? `0x${value.toString(16)}` : value);
    };
  }();
  var defaults$1 = {
    textureColor: new Uint8Array([128, 192, 255, 255]),
    textureOptions: {},
    crossOrigin: void 0
  };
  var getShared2DContext = function() {
    let s_ctx;
    return function getShared2DContext2() {
      s_ctx = s_ctx || (typeof document !== "undefined" && document.createElement ? document.createElement("canvas").getContext("2d") : null);
      return s_ctx;
    };
  }();
  var ALPHA = 6406;
  var RGB = 6407;
  var RGBA = 6408;
  var LUMINANCE = 6409;
  var LUMINANCE_ALPHA = 6410;
  var DEPTH_COMPONENT = 6402;
  var DEPTH_STENCIL = 34041;
  var RG = 33319;
  var RG_INTEGER = 33320;
  var RED = 6403;
  var RED_INTEGER = 36244;
  var RGB_INTEGER = 36248;
  var RGBA_INTEGER = 36249;
  var formatInfo = {};
  {
    const f = formatInfo;
    f[ALPHA] = {numColorComponents: 1};
    f[LUMINANCE] = {numColorComponents: 1};
    f[LUMINANCE_ALPHA] = {numColorComponents: 2};
    f[RGB] = {numColorComponents: 3};
    f[RGBA] = {numColorComponents: 4};
    f[RED] = {numColorComponents: 1};
    f[RED_INTEGER] = {numColorComponents: 1};
    f[RG] = {numColorComponents: 2};
    f[RG_INTEGER] = {numColorComponents: 2};
    f[RGB] = {numColorComponents: 3};
    f[RGB_INTEGER] = {numColorComponents: 3};
    f[RGBA] = {numColorComponents: 4};
    f[RGBA_INTEGER] = {numColorComponents: 4};
    f[DEPTH_COMPONENT] = {numColorComponents: 1};
    f[DEPTH_STENCIL] = {numColorComponents: 2};
  }
  var error$1 = error;
  function getElementById(id) {
    return typeof document !== "undefined" && document.getElementById ? document.getElementById(id) : null;
  }
  var TEXTURE0 = 33984;
  var ARRAY_BUFFER$1 = 34962;
  var ELEMENT_ARRAY_BUFFER$1 = 34963;
  var COMPILE_STATUS = 35713;
  var LINK_STATUS = 35714;
  var FRAGMENT_SHADER = 35632;
  var VERTEX_SHADER = 35633;
  var SEPARATE_ATTRIBS = 35981;
  var ACTIVE_UNIFORMS = 35718;
  var ACTIVE_ATTRIBUTES = 35721;
  var TRANSFORM_FEEDBACK_VARYINGS = 35971;
  var ACTIVE_UNIFORM_BLOCKS = 35382;
  var UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 35396;
  var UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 35398;
  var UNIFORM_BLOCK_DATA_SIZE = 35392;
  var UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 35395;
  var FLOAT$3 = 5126;
  var FLOAT_VEC2 = 35664;
  var FLOAT_VEC3 = 35665;
  var FLOAT_VEC4 = 35666;
  var INT$3 = 5124;
  var INT_VEC2 = 35667;
  var INT_VEC3 = 35668;
  var INT_VEC4 = 35669;
  var BOOL = 35670;
  var BOOL_VEC2 = 35671;
  var BOOL_VEC3 = 35672;
  var BOOL_VEC4 = 35673;
  var FLOAT_MAT2 = 35674;
  var FLOAT_MAT3 = 35675;
  var FLOAT_MAT4 = 35676;
  var SAMPLER_2D = 35678;
  var SAMPLER_CUBE = 35680;
  var SAMPLER_3D = 35679;
  var SAMPLER_2D_SHADOW = 35682;
  var FLOAT_MAT2x3 = 35685;
  var FLOAT_MAT2x4 = 35686;
  var FLOAT_MAT3x2 = 35687;
  var FLOAT_MAT3x4 = 35688;
  var FLOAT_MAT4x2 = 35689;
  var FLOAT_MAT4x3 = 35690;
  var SAMPLER_2D_ARRAY = 36289;
  var SAMPLER_2D_ARRAY_SHADOW = 36292;
  var SAMPLER_CUBE_SHADOW = 36293;
  var UNSIGNED_INT$3 = 5125;
  var UNSIGNED_INT_VEC2 = 36294;
  var UNSIGNED_INT_VEC3 = 36295;
  var UNSIGNED_INT_VEC4 = 36296;
  var INT_SAMPLER_2D = 36298;
  var INT_SAMPLER_3D = 36299;
  var INT_SAMPLER_CUBE = 36300;
  var INT_SAMPLER_2D_ARRAY = 36303;
  var UNSIGNED_INT_SAMPLER_2D = 36306;
  var UNSIGNED_INT_SAMPLER_3D = 36307;
  var UNSIGNED_INT_SAMPLER_CUBE = 36308;
  var UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311;
  var TEXTURE_2D$1 = 3553;
  var TEXTURE_CUBE_MAP$1 = 34067;
  var TEXTURE_3D$1 = 32879;
  var TEXTURE_2D_ARRAY$1 = 35866;
  var typeMap = {};
  function getBindPointForSamplerType(gl2, type) {
    return typeMap[type].bindPoint;
  }
  function floatSetter(gl2, location2) {
    return function(v) {
      gl2.uniform1f(location2, v);
    };
  }
  function floatArraySetter(gl2, location2) {
    return function(v) {
      gl2.uniform1fv(location2, v);
    };
  }
  function floatVec2Setter(gl2, location2) {
    return function(v) {
      gl2.uniform2fv(location2, v);
    };
  }
  function floatVec3Setter(gl2, location2) {
    return function(v) {
      gl2.uniform3fv(location2, v);
    };
  }
  function floatVec4Setter(gl2, location2) {
    return function(v) {
      gl2.uniform4fv(location2, v);
    };
  }
  function intSetter(gl2, location2) {
    return function(v) {
      gl2.uniform1i(location2, v);
    };
  }
  function intArraySetter(gl2, location2) {
    return function(v) {
      gl2.uniform1iv(location2, v);
    };
  }
  function intVec2Setter(gl2, location2) {
    return function(v) {
      gl2.uniform2iv(location2, v);
    };
  }
  function intVec3Setter(gl2, location2) {
    return function(v) {
      gl2.uniform3iv(location2, v);
    };
  }
  function intVec4Setter(gl2, location2) {
    return function(v) {
      gl2.uniform4iv(location2, v);
    };
  }
  function uintSetter(gl2, location2) {
    return function(v) {
      gl2.uniform1ui(location2, v);
    };
  }
  function uintArraySetter(gl2, location2) {
    return function(v) {
      gl2.uniform1uiv(location2, v);
    };
  }
  function uintVec2Setter(gl2, location2) {
    return function(v) {
      gl2.uniform2uiv(location2, v);
    };
  }
  function uintVec3Setter(gl2, location2) {
    return function(v) {
      gl2.uniform3uiv(location2, v);
    };
  }
  function uintVec4Setter(gl2, location2) {
    return function(v) {
      gl2.uniform4uiv(location2, v);
    };
  }
  function floatMat2Setter(gl2, location2) {
    return function(v) {
      gl2.uniformMatrix2fv(location2, false, v);
    };
  }
  function floatMat3Setter(gl2, location2) {
    return function(v) {
      gl2.uniformMatrix3fv(location2, false, v);
    };
  }
  function floatMat4Setter(gl2, location2) {
    return function(v) {
      gl2.uniformMatrix4fv(location2, false, v);
    };
  }
  function floatMat23Setter(gl2, location2) {
    return function(v) {
      gl2.uniformMatrix2x3fv(location2, false, v);
    };
  }
  function floatMat32Setter(gl2, location2) {
    return function(v) {
      gl2.uniformMatrix3x2fv(location2, false, v);
    };
  }
  function floatMat24Setter(gl2, location2) {
    return function(v) {
      gl2.uniformMatrix2x4fv(location2, false, v);
    };
  }
  function floatMat42Setter(gl2, location2) {
    return function(v) {
      gl2.uniformMatrix4x2fv(location2, false, v);
    };
  }
  function floatMat34Setter(gl2, location2) {
    return function(v) {
      gl2.uniformMatrix3x4fv(location2, false, v);
    };
  }
  function floatMat43Setter(gl2, location2) {
    return function(v) {
      gl2.uniformMatrix4x3fv(location2, false, v);
    };
  }
  function samplerSetter(gl2, type, unit, location2) {
    const bindPoint = getBindPointForSamplerType(gl2, type);
    return isWebGL2(gl2) ? function(textureOrPair) {
      let texture;
      let sampler;
      if (isTexture(gl2, textureOrPair)) {
        texture = textureOrPair;
        sampler = null;
      } else {
        texture = textureOrPair.texture;
        sampler = textureOrPair.sampler;
      }
      gl2.uniform1i(location2, unit);
      gl2.activeTexture(TEXTURE0 + unit);
      gl2.bindTexture(bindPoint, texture);
      gl2.bindSampler(unit, sampler);
    } : function(texture) {
      gl2.uniform1i(location2, unit);
      gl2.activeTexture(TEXTURE0 + unit);
      gl2.bindTexture(bindPoint, texture);
    };
  }
  function samplerArraySetter(gl2, type, unit, location2, size) {
    const bindPoint = getBindPointForSamplerType(gl2, type);
    const units = new Int32Array(size);
    for (let ii = 0; ii < size; ++ii) {
      units[ii] = unit + ii;
    }
    return isWebGL2(gl2) ? function(textures) {
      gl2.uniform1iv(location2, units);
      textures.forEach(function(textureOrPair, index) {
        gl2.activeTexture(TEXTURE0 + units[index]);
        let texture;
        let sampler;
        if (isTexture(gl2, textureOrPair)) {
          texture = textureOrPair;
          sampler = null;
        } else {
          texture = textureOrPair.texture;
          sampler = textureOrPair.sampler;
        }
        gl2.bindSampler(unit, sampler);
        gl2.bindTexture(bindPoint, texture);
      });
    } : function(textures) {
      gl2.uniform1iv(location2, units);
      textures.forEach(function(texture, index) {
        gl2.activeTexture(TEXTURE0 + units[index]);
        gl2.bindTexture(bindPoint, texture);
      });
    };
  }
  typeMap[FLOAT$3] = {Type: Float32Array, size: 4, setter: floatSetter, arraySetter: floatArraySetter};
  typeMap[FLOAT_VEC2] = {Type: Float32Array, size: 8, setter: floatVec2Setter};
  typeMap[FLOAT_VEC3] = {Type: Float32Array, size: 12, setter: floatVec3Setter};
  typeMap[FLOAT_VEC4] = {Type: Float32Array, size: 16, setter: floatVec4Setter};
  typeMap[INT$3] = {Type: Int32Array, size: 4, setter: intSetter, arraySetter: intArraySetter};
  typeMap[INT_VEC2] = {Type: Int32Array, size: 8, setter: intVec2Setter};
  typeMap[INT_VEC3] = {Type: Int32Array, size: 12, setter: intVec3Setter};
  typeMap[INT_VEC4] = {Type: Int32Array, size: 16, setter: intVec4Setter};
  typeMap[UNSIGNED_INT$3] = {Type: Uint32Array, size: 4, setter: uintSetter, arraySetter: uintArraySetter};
  typeMap[UNSIGNED_INT_VEC2] = {Type: Uint32Array, size: 8, setter: uintVec2Setter};
  typeMap[UNSIGNED_INT_VEC3] = {Type: Uint32Array, size: 12, setter: uintVec3Setter};
  typeMap[UNSIGNED_INT_VEC4] = {Type: Uint32Array, size: 16, setter: uintVec4Setter};
  typeMap[BOOL] = {Type: Uint32Array, size: 4, setter: intSetter, arraySetter: intArraySetter};
  typeMap[BOOL_VEC2] = {Type: Uint32Array, size: 8, setter: intVec2Setter};
  typeMap[BOOL_VEC3] = {Type: Uint32Array, size: 12, setter: intVec3Setter};
  typeMap[BOOL_VEC4] = {Type: Uint32Array, size: 16, setter: intVec4Setter};
  typeMap[FLOAT_MAT2] = {Type: Float32Array, size: 16, setter: floatMat2Setter};
  typeMap[FLOAT_MAT3] = {Type: Float32Array, size: 36, setter: floatMat3Setter};
  typeMap[FLOAT_MAT4] = {Type: Float32Array, size: 64, setter: floatMat4Setter};
  typeMap[FLOAT_MAT2x3] = {Type: Float32Array, size: 24, setter: floatMat23Setter};
  typeMap[FLOAT_MAT2x4] = {Type: Float32Array, size: 32, setter: floatMat24Setter};
  typeMap[FLOAT_MAT3x2] = {Type: Float32Array, size: 24, setter: floatMat32Setter};
  typeMap[FLOAT_MAT3x4] = {Type: Float32Array, size: 48, setter: floatMat34Setter};
  typeMap[FLOAT_MAT4x2] = {Type: Float32Array, size: 32, setter: floatMat42Setter};
  typeMap[FLOAT_MAT4x3] = {Type: Float32Array, size: 48, setter: floatMat43Setter};
  typeMap[SAMPLER_2D] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1};
  typeMap[SAMPLER_CUBE] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP$1};
  typeMap[SAMPLER_3D] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D$1};
  typeMap[SAMPLER_2D_SHADOW] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1};
  typeMap[SAMPLER_2D_ARRAY] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY$1};
  typeMap[SAMPLER_2D_ARRAY_SHADOW] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY$1};
  typeMap[SAMPLER_CUBE_SHADOW] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP$1};
  typeMap[INT_SAMPLER_2D] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1};
  typeMap[INT_SAMPLER_3D] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D$1};
  typeMap[INT_SAMPLER_CUBE] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP$1};
  typeMap[INT_SAMPLER_2D_ARRAY] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY$1};
  typeMap[UNSIGNED_INT_SAMPLER_2D] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1};
  typeMap[UNSIGNED_INT_SAMPLER_3D] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D$1};
  typeMap[UNSIGNED_INT_SAMPLER_CUBE] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP$1};
  typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = {Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY$1};
  function floatAttribSetter(gl2, index) {
    return function(b) {
      if (b.value) {
        gl2.disableVertexAttribArray(index);
        switch (b.value.length) {
          case 4:
            gl2.vertexAttrib4fv(index, b.value);
            break;
          case 3:
            gl2.vertexAttrib3fv(index, b.value);
            break;
          case 2:
            gl2.vertexAttrib2fv(index, b.value);
            break;
          case 1:
            gl2.vertexAttrib1fv(index, b.value);
            break;
          default:
            throw new Error("the length of a float constant value must be between 1 and 4!");
        }
      } else {
        gl2.bindBuffer(ARRAY_BUFFER$1, b.buffer);
        gl2.enableVertexAttribArray(index);
        gl2.vertexAttribPointer(index, b.numComponents || b.size, b.type || FLOAT$3, b.normalize || false, b.stride || 0, b.offset || 0);
        if (b.divisor !== void 0) {
          gl2.vertexAttribDivisor(index, b.divisor);
        }
      }
    };
  }
  function intAttribSetter(gl2, index) {
    return function(b) {
      if (b.value) {
        gl2.disableVertexAttribArray(index);
        if (b.value.length === 4) {
          gl2.vertexAttrib4iv(index, b.value);
        } else {
          throw new Error("The length of an integer constant value must be 4!");
        }
      } else {
        gl2.bindBuffer(ARRAY_BUFFER$1, b.buffer);
        gl2.enableVertexAttribArray(index);
        gl2.vertexAttribIPointer(index, b.numComponents || b.size, b.type || INT$3, b.stride || 0, b.offset || 0);
        if (b.divisor !== void 0) {
          gl2.vertexAttribDivisor(index, b.divisor);
        }
      }
    };
  }
  function uintAttribSetter(gl2, index) {
    return function(b) {
      if (b.value) {
        gl2.disableVertexAttribArray(index);
        if (b.value.length === 4) {
          gl2.vertexAttrib4uiv(index, b.value);
        } else {
          throw new Error("The length of an unsigned integer constant value must be 4!");
        }
      } else {
        gl2.bindBuffer(ARRAY_BUFFER$1, b.buffer);
        gl2.enableVertexAttribArray(index);
        gl2.vertexAttribIPointer(index, b.numComponents || b.size, b.type || UNSIGNED_INT$3, b.stride || 0, b.offset || 0);
        if (b.divisor !== void 0) {
          gl2.vertexAttribDivisor(index, b.divisor);
        }
      }
    };
  }
  function matAttribSetter(gl2, index, typeInfo) {
    const defaultSize = typeInfo.size;
    const count = typeInfo.count;
    return function(b) {
      gl2.bindBuffer(ARRAY_BUFFER$1, b.buffer);
      const numComponents = b.size || b.numComponents || defaultSize;
      const size = numComponents / count;
      const type = b.type || FLOAT$3;
      const typeInfo2 = typeMap[type];
      const stride = typeInfo2.size * numComponents;
      const normalize2 = b.normalize || false;
      const offset = b.offset || 0;
      const rowOffset = stride / count;
      for (let i = 0; i < count; ++i) {
        gl2.enableVertexAttribArray(index + i);
        gl2.vertexAttribPointer(index + i, size, type, normalize2, stride, offset + rowOffset * i);
        if (b.divisor !== void 0) {
          gl2.vertexAttribDivisor(index + i, b.divisor);
        }
      }
    };
  }
  var attrTypeMap = {};
  attrTypeMap[FLOAT$3] = {size: 4, setter: floatAttribSetter};
  attrTypeMap[FLOAT_VEC2] = {size: 8, setter: floatAttribSetter};
  attrTypeMap[FLOAT_VEC3] = {size: 12, setter: floatAttribSetter};
  attrTypeMap[FLOAT_VEC4] = {size: 16, setter: floatAttribSetter};
  attrTypeMap[INT$3] = {size: 4, setter: intAttribSetter};
  attrTypeMap[INT_VEC2] = {size: 8, setter: intAttribSetter};
  attrTypeMap[INT_VEC3] = {size: 12, setter: intAttribSetter};
  attrTypeMap[INT_VEC4] = {size: 16, setter: intAttribSetter};
  attrTypeMap[UNSIGNED_INT$3] = {size: 4, setter: uintAttribSetter};
  attrTypeMap[UNSIGNED_INT_VEC2] = {size: 8, setter: uintAttribSetter};
  attrTypeMap[UNSIGNED_INT_VEC3] = {size: 12, setter: uintAttribSetter};
  attrTypeMap[UNSIGNED_INT_VEC4] = {size: 16, setter: uintAttribSetter};
  attrTypeMap[BOOL] = {size: 4, setter: intAttribSetter};
  attrTypeMap[BOOL_VEC2] = {size: 8, setter: intAttribSetter};
  attrTypeMap[BOOL_VEC3] = {size: 12, setter: intAttribSetter};
  attrTypeMap[BOOL_VEC4] = {size: 16, setter: intAttribSetter};
  attrTypeMap[FLOAT_MAT2] = {size: 4, setter: matAttribSetter, count: 2};
  attrTypeMap[FLOAT_MAT3] = {size: 9, setter: matAttribSetter, count: 3};
  attrTypeMap[FLOAT_MAT4] = {size: 16, setter: matAttribSetter, count: 4};
  var errorRE = /ERROR:\s*\d+:(\d+)/gi;
  function addLineNumbersWithError(src, log = "", lineOffset = 0) {
    const matches = [...log.matchAll(errorRE)];
    const lineNoToErrorMap = new Map(matches.map((m, ndx) => {
      const lineNo = parseInt(m[1]);
      const next = matches[ndx + 1];
      const end = next ? next.index : log.length;
      const msg = log.substring(m.index, end);
      return [lineNo - 1, msg];
    }));
    return src.split("\n").map((line, lineNo) => {
      const err = lineNoToErrorMap.get(lineNo);
      return `${lineNo + 1 + lineOffset}: ${line}${err ? `

^^^ ${err}` : ""}`;
    }).join("\n");
  }
  var spaceRE = /^[ \t]*\n/;
  function loadShader(gl2, shaderSource, shaderType, opt_errorCallback) {
    const errFn = opt_errorCallback || error$1;
    const shader = gl2.createShader(shaderType);
    let lineOffset = 0;
    if (spaceRE.test(shaderSource)) {
      lineOffset = 1;
      shaderSource = shaderSource.replace(spaceRE, "");
    }
    gl2.shaderSource(shader, shaderSource);
    gl2.compileShader(shader);
    const compiled = gl2.getShaderParameter(shader, COMPILE_STATUS);
    if (!compiled) {
      const lastError = gl2.getShaderInfoLog(shader);
      errFn(`${addLineNumbersWithError(shaderSource, lastError, lineOffset)}
Error compiling ${glEnumToString(gl2, shaderType)}: ${lastError}`);
      gl2.deleteShader(shader);
      return null;
    }
    return shader;
  }
  function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
    let transformFeedbackVaryings;
    let transformFeedbackMode;
    if (typeof opt_locations === "function") {
      opt_errorCallback = opt_locations;
      opt_locations = void 0;
    }
    if (typeof opt_attribs === "function") {
      opt_errorCallback = opt_attribs;
      opt_attribs = void 0;
    } else if (opt_attribs && !Array.isArray(opt_attribs)) {
      if (opt_attribs.errorCallback) {
        return opt_attribs;
      }
      const opt = opt_attribs;
      opt_errorCallback = opt.errorCallback;
      opt_attribs = opt.attribLocations;
      transformFeedbackVaryings = opt.transformFeedbackVaryings;
      transformFeedbackMode = opt.transformFeedbackMode;
    }
    const options = {
      errorCallback: opt_errorCallback || error$1,
      transformFeedbackVaryings,
      transformFeedbackMode
    };
    if (opt_attribs) {
      let attribLocations = {};
      if (Array.isArray(opt_attribs)) {
        opt_attribs.forEach(function(attrib, ndx) {
          attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
        });
      } else {
        attribLocations = opt_attribs;
      }
      options.attribLocations = attribLocations;
    }
    return options;
  }
  var defaultShaderType = [
    "VERTEX_SHADER",
    "FRAGMENT_SHADER"
  ];
  function getShaderTypeFromScriptType(gl2, scriptType) {
    if (scriptType.indexOf("frag") >= 0) {
      return FRAGMENT_SHADER;
    } else if (scriptType.indexOf("vert") >= 0) {
      return VERTEX_SHADER;
    }
    return void 0;
  }
  function deleteShaders(gl2, shaders) {
    shaders.forEach(function(shader) {
      gl2.deleteShader(shader);
    });
  }
  function createProgram(gl2, shaders, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    const realShaders = [];
    const newShaders = [];
    for (let ndx = 0; ndx < shaders.length; ++ndx) {
      let shader = shaders[ndx];
      if (typeof shader === "string") {
        const elem = getElementById(shader);
        const src = elem ? elem.text : shader;
        let type = gl2[defaultShaderType[ndx]];
        if (elem && elem.type) {
          type = getShaderTypeFromScriptType(gl2, elem.type) || type;
        }
        shader = loadShader(gl2, src, type, progOptions.errorCallback);
        newShaders.push(shader);
      }
      if (isShader(gl2, shader)) {
        realShaders.push(shader);
      }
    }
    if (realShaders.length !== shaders.length) {
      progOptions.errorCallback("not enough shaders for program");
      deleteShaders(gl2, newShaders);
      return null;
    }
    const program = gl2.createProgram();
    realShaders.forEach(function(shader) {
      gl2.attachShader(program, shader);
    });
    if (progOptions.attribLocations) {
      Object.keys(progOptions.attribLocations).forEach(function(attrib) {
        gl2.bindAttribLocation(program, progOptions.attribLocations[attrib], attrib);
      });
    }
    let varyings = progOptions.transformFeedbackVaryings;
    if (varyings) {
      if (varyings.attribs) {
        varyings = varyings.attribs;
      }
      if (!Array.isArray(varyings)) {
        varyings = Object.keys(varyings);
      }
      gl2.transformFeedbackVaryings(program, varyings, progOptions.transformFeedbackMode || SEPARATE_ATTRIBS);
    }
    gl2.linkProgram(program);
    const linked = gl2.getProgramParameter(program, LINK_STATUS);
    if (!linked) {
      const lastError = gl2.getProgramInfoLog(program);
      progOptions.errorCallback(`${realShaders.map((shader) => {
        const src = addLineNumbersWithError(gl2.getShaderSource(shader), "", 0);
        const type = gl2.getShaderParameter(shader, gl2.SHADER_TYPE);
        return `${glEnumToString(gl2, type)}
${src}}`;
      }).join("\n")}
Error in program linking: ${lastError}`);
      gl2.deleteProgram(program);
      deleteShaders(gl2, newShaders);
      return null;
    }
    return program;
  }
  function createProgramFromSources(gl2, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    const shaders = [];
    for (let ii = 0; ii < shaderSources.length; ++ii) {
      const shader = loadShader(gl2, shaderSources[ii], gl2[defaultShaderType[ii]], progOptions.errorCallback);
      if (!shader) {
        return null;
      }
      shaders.push(shader);
    }
    return createProgram(gl2, shaders, progOptions);
  }
  function isBuiltIn(info) {
    const name = info.name;
    return name.startsWith("gl_") || name.startsWith("webgl_");
  }
  function createUniformSetters(gl2, program) {
    let textureUnit = 0;
    function createUniformSetter(program2, uniformInfo, location2) {
      const isArray = uniformInfo.name.endsWith("[0]");
      const type = uniformInfo.type;
      const typeInfo = typeMap[type];
      if (!typeInfo) {
        throw new Error(`unknown type: 0x${type.toString(16)}`);
      }
      let setter;
      if (typeInfo.bindPoint) {
        const unit = textureUnit;
        textureUnit += uniformInfo.size;
        if (isArray) {
          setter = typeInfo.arraySetter(gl2, type, unit, location2, uniformInfo.size);
        } else {
          setter = typeInfo.setter(gl2, type, unit, location2, uniformInfo.size);
        }
      } else {
        if (typeInfo.arraySetter && isArray) {
          setter = typeInfo.arraySetter(gl2, location2);
        } else {
          setter = typeInfo.setter(gl2, location2);
        }
      }
      setter.location = location2;
      return setter;
    }
    const uniformSetters = {};
    const numUniforms = gl2.getProgramParameter(program, ACTIVE_UNIFORMS);
    for (let ii = 0; ii < numUniforms; ++ii) {
      const uniformInfo = gl2.getActiveUniform(program, ii);
      if (isBuiltIn(uniformInfo)) {
        continue;
      }
      let name = uniformInfo.name;
      if (name.endsWith("[0]")) {
        name = name.substr(0, name.length - 3);
      }
      const location2 = gl2.getUniformLocation(program, uniformInfo.name);
      if (location2) {
        uniformSetters[name] = createUniformSetter(program, uniformInfo, location2);
      }
    }
    return uniformSetters;
  }
  function createTransformFeedbackInfo(gl2, program) {
    const info = {};
    const numVaryings = gl2.getProgramParameter(program, TRANSFORM_FEEDBACK_VARYINGS);
    for (let ii = 0; ii < numVaryings; ++ii) {
      const varying = gl2.getTransformFeedbackVarying(program, ii);
      info[varying.name] = {
        index: ii,
        type: varying.type,
        size: varying.size
      };
    }
    return info;
  }
  function createUniformBlockSpecFromProgram(gl2, program) {
    const numUniforms = gl2.getProgramParameter(program, ACTIVE_UNIFORMS);
    const uniformData = [];
    const uniformIndices = [];
    for (let ii = 0; ii < numUniforms; ++ii) {
      uniformIndices.push(ii);
      uniformData.push({});
      const uniformInfo = gl2.getActiveUniform(program, ii);
      if (isBuiltIn(uniformInfo)) {
        break;
      }
      uniformData[ii].name = uniformInfo.name;
    }
    [
      ["UNIFORM_TYPE", "type"],
      ["UNIFORM_SIZE", "size"],
      ["UNIFORM_BLOCK_INDEX", "blockNdx"],
      ["UNIFORM_OFFSET", "offset"]
    ].forEach(function(pair) {
      const pname = pair[0];
      const key = pair[1];
      gl2.getActiveUniforms(program, uniformIndices, gl2[pname]).forEach(function(value, ndx) {
        uniformData[ndx][key] = value;
      });
    });
    const blockSpecs = {};
    const numUniformBlocks = gl2.getProgramParameter(program, ACTIVE_UNIFORM_BLOCKS);
    for (let ii = 0; ii < numUniformBlocks; ++ii) {
      const name = gl2.getActiveUniformBlockName(program, ii);
      const blockSpec = {
        index: gl2.getUniformBlockIndex(program, name),
        usedByVertexShader: gl2.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
        usedByFragmentShader: gl2.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
        size: gl2.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_DATA_SIZE),
        uniformIndices: gl2.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
      };
      blockSpec.used = blockSpec.usedByVertexShader || blockSpec.usedByFragmentShader;
      blockSpecs[name] = blockSpec;
    }
    return {
      blockSpecs,
      uniformData
    };
  }
  function setUniforms(setters, values) {
    const actualSetters = setters.uniformSetters || setters;
    const numArgs = arguments.length;
    for (let aNdx = 1; aNdx < numArgs; ++aNdx) {
      const values2 = arguments[aNdx];
      if (Array.isArray(values2)) {
        const numValues = values2.length;
        for (let ii = 0; ii < numValues; ++ii) {
          setUniforms(actualSetters, values2[ii]);
        }
      } else {
        for (const name in values2) {
          const setter = actualSetters[name];
          if (setter) {
            setter(values2[name]);
          }
        }
      }
    }
  }
  function createAttributeSetters(gl2, program) {
    const attribSetters = {};
    const numAttribs = gl2.getProgramParameter(program, ACTIVE_ATTRIBUTES);
    for (let ii = 0; ii < numAttribs; ++ii) {
      const attribInfo = gl2.getActiveAttrib(program, ii);
      if (isBuiltIn(attribInfo)) {
        continue;
      }
      const index = gl2.getAttribLocation(program, attribInfo.name);
      const typeInfo = attrTypeMap[attribInfo.type];
      const setter = typeInfo.setter(gl2, index, typeInfo);
      setter.location = index;
      attribSetters[attribInfo.name] = setter;
    }
    return attribSetters;
  }
  function setAttributes(setters, buffers) {
    for (const name in buffers) {
      const setter = setters[name];
      if (setter) {
        setter(buffers[name]);
      }
    }
  }
  function setBuffersAndAttributes(gl2, programInfo2, buffers) {
    if (buffers.vertexArrayObject) {
      gl2.bindVertexArray(buffers.vertexArrayObject);
    } else {
      setAttributes(programInfo2.attribSetters || programInfo2, buffers.attribs);
      if (buffers.indices) {
        gl2.bindBuffer(ELEMENT_ARRAY_BUFFER$1, buffers.indices);
      }
    }
  }
  function createProgramInfoFromProgram(gl2, program) {
    const uniformSetters = createUniformSetters(gl2, program);
    const attribSetters = createAttributeSetters(gl2, program);
    const programInfo2 = {
      program,
      uniformSetters,
      attribSetters
    };
    if (isWebGL2(gl2)) {
      programInfo2.uniformBlockSpec = createUniformBlockSpecFromProgram(gl2, program);
      programInfo2.transformFeedbackInfo = createTransformFeedbackInfo(gl2, program);
    }
    return programInfo2;
  }
  function createProgramInfo(gl2, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    let good = true;
    shaderSources = shaderSources.map(function(source) {
      if (source.indexOf("\n") < 0) {
        const script = getElementById(source);
        if (!script) {
          progOptions.errorCallback("no element with id: " + source);
          good = false;
        } else {
          source = script.text;
        }
      }
      return source;
    });
    if (!good) {
      return null;
    }
    const program = createProgramFromSources(gl2, shaderSources, progOptions);
    if (!program) {
      return null;
    }
    return createProgramInfoFromProgram(gl2, program);
  }
  var TRIANGLES = 4;
  var UNSIGNED_SHORT$3 = 5123;
  function drawBufferInfo(gl2, bufferInfo2, type, count, offset, instanceCount) {
    type = type === void 0 ? TRIANGLES : type;
    const indices = bufferInfo2.indices;
    const elementType = bufferInfo2.elementType;
    const numElements = count === void 0 ? bufferInfo2.numElements : count;
    offset = offset === void 0 ? 0 : offset;
    if (elementType || indices) {
      if (instanceCount !== void 0) {
        gl2.drawElementsInstanced(type, numElements, elementType === void 0 ? UNSIGNED_SHORT$3 : bufferInfo2.elementType, offset, instanceCount);
      } else {
        gl2.drawElements(type, numElements, elementType === void 0 ? UNSIGNED_SHORT$3 : bufferInfo2.elementType, offset);
      }
    } else {
      if (instanceCount !== void 0) {
        gl2.drawArraysInstanced(type, offset, numElements, instanceCount);
      } else {
        gl2.drawArrays(type, offset, numElements);
      }
    }
  }
  var DEPTH_COMPONENT$1 = 6402;
  var DEPTH_COMPONENT24$1 = 33190;
  var DEPTH_COMPONENT32F$1 = 36012;
  var DEPTH24_STENCIL8$1 = 35056;
  var DEPTH32F_STENCIL8$1 = 36013;
  var RGBA4$1 = 32854;
  var RGB5_A1$1 = 32855;
  var RGB565$1 = 36194;
  var DEPTH_COMPONENT16$1 = 33189;
  var STENCIL_INDEX = 6401;
  var STENCIL_INDEX8 = 36168;
  var DEPTH_STENCIL$1 = 34041;
  var DEPTH_ATTACHMENT = 36096;
  var STENCIL_ATTACHMENT = 36128;
  var DEPTH_STENCIL_ATTACHMENT = 33306;
  var attachmentsByFormat = {};
  attachmentsByFormat[DEPTH_STENCIL$1] = DEPTH_STENCIL_ATTACHMENT;
  attachmentsByFormat[STENCIL_INDEX] = STENCIL_ATTACHMENT;
  attachmentsByFormat[STENCIL_INDEX8] = STENCIL_ATTACHMENT;
  attachmentsByFormat[DEPTH_COMPONENT$1] = DEPTH_ATTACHMENT;
  attachmentsByFormat[DEPTH_COMPONENT16$1] = DEPTH_ATTACHMENT;
  attachmentsByFormat[DEPTH_COMPONENT24$1] = DEPTH_ATTACHMENT;
  attachmentsByFormat[DEPTH_COMPONENT32F$1] = DEPTH_ATTACHMENT;
  attachmentsByFormat[DEPTH24_STENCIL8$1] = DEPTH_STENCIL_ATTACHMENT;
  attachmentsByFormat[DEPTH32F_STENCIL8$1] = DEPTH_STENCIL_ATTACHMENT;
  var renderbufferFormats = {};
  renderbufferFormats[RGBA4$1] = true;
  renderbufferFormats[RGB5_A1$1] = true;
  renderbufferFormats[RGB565$1] = true;
  renderbufferFormats[DEPTH_STENCIL$1] = true;
  renderbufferFormats[DEPTH_COMPONENT16$1] = true;
  renderbufferFormats[STENCIL_INDEX] = true;
  renderbufferFormats[STENCIL_INDEX8] = true;
  function resizeCanvasToDisplaySize(canvas2, multiplier) {
    multiplier = multiplier || 1;
    multiplier = Math.max(0, multiplier);
    const width = canvas2.clientWidth * multiplier | 0;
    const height = canvas2.clientHeight * multiplier | 0;
    if (canvas2.width !== width || canvas2.height !== height) {
      canvas2.width = width;
      canvas2.height = height;
      return true;
    }
    return false;
  }

  // js/webgl_rotating_cube.js
  var vsource = `
precision mediump float;

attribute vec4 position;
attribute vec3 normal;

uniform mat4 projectionViewModel;
uniform mat4 model;

varying vec3 v_normal;
varying vec3 v_position;

void main() {
    gl_Position = projectionViewModel * position;
    v_normal = mat3(model) * normal;
    v_position = vec3(model * position);
}
`;
  var fsource = `
precision mediump float;

uniform vec4 objectColor;
uniform vec3 ambientLight;
uniform vec3 lightPosition;
uniform vec3 lightColor;
// uniform vec3 lightDirection;

varying vec3 v_normal;
varying vec3 v_position;

void main() {
    vec3 normal = normalize(v_normal);
    vec3 lightVec = lightPosition - v_position;
    vec3 lightDir = normalize(lightVec);
    float lightDist = length(lightVec);
    float diff = max(dot(normal, lightDir), 0.0);
    vec3 diffuse = diff * lightColor / .7 / (1. + (0.14 * lightDist) + (.07 * lightDist * lightDist));
    vec3 light = diffuse + ambientLight;
    gl_FragColor = objectColor;
    gl_FragColor.rgb *= light;
}
`;
  var canvas = document.getElementById("gl-canvas");
  var gl = canvas.getContext("webgl");
  var programInfo = createProgramInfo(gl, [vsource, fsource]);
  var bufferInfo = primitives.createCubeBufferInfo(gl);
  var fov = 20 * Math.PI / 180;
  var aspect = canvas.width / canvas.height;
  var zNear = 0.5;
  var zFar = 10;
  var projection = m4.perspective(fov, aspect, zNear, zFar);
  var eye = [2, 2, 6];
  var target = [0, 0, 0];
  var up = [0, 1, 0];
  var camera = m4.lookAt(eye, target, up);
  var view = m4.inverse(camera);
  var projectionView = m4.multiply(projection, view);
  var ambientStrength = 0.7;
  var ambientColor = [0.4, 0.7, 0.9];
  var ambientLight = ambientColor.map((el) => el * ambientStrength);
  var lightPosition = [1, 3, 2.3];
  var lightColor = [1, 1, 0.4];
  var objectColor = [0.8, 0.2, 0.2, 1];
  var uniforms = {
    lightPosition,
    lightColor,
    ambientLight,
    objectColor
  };
  gl.enable(gl.CULL_FACE);
  gl.enable(gl.DEPTH_TEST);
  gl.clearColor(ambientColor[0], ambientColor[1], ambientColor[2], 1);
  function render(time) {
    time = time * 1e-3;
    const model = m4.rotationY(time);
    uniforms.model = model;
    uniforms.projectionViewModel = m4.multiply(projectionView, model);
    resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(programInfo.program);
    setUniforms(programInfo, uniforms);
    setBuffersAndAttributes(gl, programInfo, bufferInfo);
    drawBufferInfo(gl, bufferInfo, gl.TRIANGLES);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
})();
