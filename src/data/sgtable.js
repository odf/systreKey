export default `
#
#   Copyright 2005 Olaf Delgado-Friedrichs
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
#

# The table of 1-dimensional space groups

op1 x
    x
opm x
    x
   -x


# The table of 2-dimensional space groups, aka plane groups, aka wallpaper groups.

p1 x,y
    x,y
p2 x,y
    x,y
    -x,-y
pm x,y
    x,y
    -x,y
pg x,y
    x,y
    -x,y+1/2
cm x,y
    x,y
    -x,y
    x+1/2,y+1/2
    -x+1/2,y+1/2
p2mm x,y
    x,y
    -x,-y
    -x,y
    x,-y
p2mg x,y
    x,y
    -x,-y
    -x+1/2,y
    x+1/2,-y
p2gg x,y
    x,y
    -x,-y
    -x+1/2,y+1/2
    x+1/2,-y+1/2
c2mm x,y
    x,y
    -x,-y
    -x,y
    x,-y
    x+1/2,y+1/2
    -x+1/2,-y+1/2
    -x+1/2,y+1/2
    x+1/2,-y+1/2
p4 x,y
    x,y
    -x,-y
    -y,x
    y,-x
p4mm x,y
    x,y
    -x,-y
    -y,x
    y,-x
    -x,y
    x,-y
    y,x
    -y,-x
p4gm x,y
    x,y
    -x,-y
    -y,x
    y,-x
    -x+1/2,y+1/2
    x+1/2,-y+1/2
    y+1/2,x+1/2
    -y+1/2,-x+1/2
p3 x,y
    x,y
    -y,x-y
    -x+y,-x
p3m1 x,y
    x,y
    -y,x-y
    -x+y,-x
    -y,-x
    -x+y,y
    x,x-y
p31m x,y
    x,y
    -y,x-y
    -x+y,-x
    y,x
    x-y,-y
    -x,-x+y
p6 x,y
    x,y
    -y,x-y
    -x+y,-x
    -x,-y
    y,-x+y
    x-y,x
p6mm x,y
    x,y
    -y,x-y
    -x+y,-x
    -x,-y
    y,-x+y
    x-y,x
    -y,-x
    -x+y,y
    x,x-y
    y,x
    x-y,-y
    -x,-x+y


# The table of conventional 3-dimensional space group settings.

P1 x,y,z
    x,y,z
P-1 x,y,z
    x,y,z
    -x,-y,-z
P121 x,y,z
    x,y,z
    -x,y,-z
P112 y,z,x
    x,y,z
    -x,-y,z
P211 z,x,y
    x,y,z
    x,-y,-z
P1211 x,y,z
    x,y,z
    -x,y+1/2,-z
P1121 y,z,x
    x,y,z
    -x,-y,z+1/2
P2111 z,x,y
    x,y,z
    x+1/2,-y,-z
C121 x,y,z
    x,y,z
    -x,y,-z
    x+1/2,y+1/2,z
    -x+1/2,y+1/2,-z
A121 -z,y,x
    x,y,z
    -x,y,-z
    x,y+1/2,z+1/2
    -x,y+1/2,-z+1/2
I121 x,y,x+z
    x,y,z
    -x,y,-z
    x+1/2,y+1/2,z+1/2
    -x+1/2,y+1/2,-z+1/2
A112 y,z,x
    x,y,z
    -x,-y,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
B112 -x,z,y
    x,y,z
    -x,-y,z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
I112 y,z,x+y
    x,y,z
    -x,-y,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
B211 z,x,y
    x,y,z
    x,-y,-z
    x+1/2,y,z+1/2
    x+1/2,-y,-z+1/2
C211 -y,x,z
    x,y,z
    x,-y,-z
    x+1/2,y+1/2,z
    x+1/2,-y+1/2,-z
I211 z,x,y+z
    x,y,z
    x,-y,-z
    x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
P1m1 x,y,z
    x,y,z
    x,-y,z
P11m y,z,x
    x,y,z
    x,y,-z
Pm11 z,x,y
    x,y,z
    -x,y,z
P1c1 x,y,z
    x,y,z
    x,-y,z+1/2
P1n1 x+z,y,z
    x,y,z
    x+1/2,-y,z+1/2
P1a1 -z,y,x
    x,y,z
    x+1/2,-y,z
P11a y,z,x
    x,y,z
    x+1/2,y,-z
P11n x+y,z,x
    x,y,z
    x+1/2,y+1/2,-z
P11b -x,z,y
    x,y,z
    x,y+1/2,-z
Pb11 z,x,y
    x,y,z
    -x,y+1/2,z
Pn11 y+z,x,y
    x,y,z
    -x,y+1/2,z+1/2
Pc11 -y,x,z
    x,y,z
    -x,y,z+1/2
C1m1 x,y,z
    x,y,z
    x,-y,z
    x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
A1m1 -z,y,x
    x,y,z
    x,-y,z
    x,y+1/2,z+1/2
    x,-y+1/2,z+1/2
I1m1 x,y,x+z
    x,y,z
    x,-y,z
    x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
A11m y,z,x
    x,y,z
    x,y,-z
    x,y+1/2,z+1/2
    x,y+1/2,-z+1/2
B11m -x,z,y
    x,y,z
    x,y,-z
    x+1/2,y,z+1/2
    x+1/2,y,-z+1/2
I11m y,z,x+y
    x,y,z
    x,y,-z
    x+1/2,y+1/2,z+1/2
    x+1/2,y+1/2,-z+1/2
Bm11 z,x,y
    x,y,z
    -x,y,z
    x+1/2,y,z+1/2
    -x+1/2,y,z+1/2
Cm11 -y,x,z
    x,y,z
    -x,y,z
    x+1/2,y+1/2,z
    -x+1/2,y+1/2,z
Im11 z,x,y+z
    x,y,z
    -x,y,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,y+1/2,z+1/2
C1c1 x,y,z
    x,y,z
    x,-y,z+1/2
    x+1/2,y+1/2,z
    x+1/2,-y+1/2,z+1/2
A1n1 x-z,y,x
    x,y,z
    x+1/2,-y+1/2,z
    x,y+1/2,z+1/2
    x+1/2,-y+1,z+1/2
I1a1 -z,y,x+z
    x,y,z
    x+1/2,-y,z
    x+1/2,y+1/2,z+1/2
    x+1,-y+1/2,z+1/2
A1a1 -z,y,x
    x,y,z
    x+1/2,-y,z
    x,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
C1n1 x-1/4,y-1/4,z
    x,y,z
    x+1/2,-y,z+1/2
    x+1/2,y+1/2,z
    x+1,-y+1/2,z+1/2
I1c1 x,y,x+z
    x,y,z
    x,-y,z+1/2
    x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1
A11a y,z,x
    x,y,z
    x+1/2,y,-z
    x,y+1/2,z+1/2
    x+1/2,y+1/2,-z+1/2
B11n -x+y,z,y
    x,y,z
    x+1/2,y+1/2,-z
    x+1/2,y,z+1/2
    x+1,y+1/2,-z+1/2
I11b -x,z,x+y
    x,y,z
    x,y+1/2,-z
    x+1/2,y+1/2,z+1/2
    x+1/2,y+1,-z+1/2
B11b -x,z,y
    x,y,z
    x,y+1/2,-z
    x+1/2,y,z+1/2
    x+1/2,y+1/2,-z+1/2
A11n x+y,z,x
    x,y,z
    x+1/2,y+1/2,-z
    x,y+1/2,z+1/2
    x+1/2,y+1,-z+1/2
I11a y,z,x+y
    x,y,z
    x+1/2,y,-z
    x+1/2,y+1/2,z+1/2
    x+1,y+1/2,-z+1/2
Bb11 z,x,y
    x,y,z
    -x,y+1/2,z
    x+1/2,y,z+1/2
    -x+1/2,y+1/2,z+1/2
Cn11 -y+z,x,z
    x,y,z
    -x+1/2,y,z+1/2
    x+1/2,y+1/2,z
    -x+1,y+1/2,z+1/2
Ic11 -y,x,y+z
    x,y,z
    -x,y,z+1/2
    x+1/2,y+1/2,z+1/2
    -x+1/2,y+1/2,z+1
Cc11 -y,x,z
    x,y,z
    -x,y,z+1/2
    x+1/2,y+1/2,z
    -x+1/2,y+1/2,z+1/2
Bn11 y+z,x,y
    x,y,z
    -x+1/2,y+1/2,z
    x+1/2,y,z+1/2
    -x+1,y+1/2,z+1/2
Ib11 z,x,y+z
    x,y,z
    -x,y+1/2,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,y+1,z+1/2
P12/m1 x,y,z
    x,y,z
    -x,y,-z
    -x,-y,-z
    x,-y,z
P112/m y,z,x
    x,y,z
    -x,-y,z
    -x,-y,-z
    x,y,-z
P2/m11 z,x,y
    x,y,z
    x,-y,-z
    -x,-y,-z
    -x,y,z
P121/m1 x,y,z
    x,y,z
    -x,y+1/2,-z
    -x,-y,-z
    x,-y-1/2,z
P1121/m y,z,x
    x,y,z
    -x,-y,z+1/2
    -x,-y,-z
    x,y,-z-1/2
P21/m11 z,x,y
    x,y,z
    x+1/2,-y,-z
    -x,-y,-z
    -x-1/2,y,z
C12/m1 x,y,z
    x,y,z
    -x,y,-z
    -x,-y,-z
    x,-y,z
    x+1/2,y+1/2,z
    -x+1/2,y+1/2,-z
    -x+1/2,-y+1/2,-z
    x+1/2,-y+1/2,z
A12/m1 -z,y,x
    x,y,z
    -x,y,-z
    -x,-y,-z
    x,-y,z
    x,y+1/2,z+1/2
    -x,y+1/2,-z+1/2
    -x,-y+1/2,-z+1/2
    x,-y+1/2,z+1/2
I12/m1 x,y,x+z
    x,y,z
    -x,y,-z
    -x,-y,-z
    x,-y,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,-y+1/2,z+1/2
A112/m y,z,x
    x,y,z
    -x,-y,z
    -x,-y,-z
    x,y,-z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    -x,-y+1/2,-z+1/2
    x,y+1/2,-z+1/2
B112/m -x,z,y
    x,y,z
    -x,-y,z
    -x,-y,-z
    x,y,-z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    -x+1/2,-y,-z+1/2
    x+1/2,y,-z+1/2
I112/m y,z,x+y
    x,y,z
    -x,-y,z
    -x,-y,-z
    x,y,-z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
B2/m11 z,x,y
    x,y,z
    x,-y,-z
    -x,-y,-z
    -x,y,z
    x+1/2,y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,-y,-z+1/2
    -x+1/2,y,z+1/2
C2/m11 -y,x,z
    x,y,z
    x,-y,-z
    -x,-y,-z
    -x,y,z
    x+1/2,y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,z
I2/m11 z,x,y+z
    x,y,z
    x,-y,-z
    -x,-y,-z
    -x,y,z
    x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
P12/c1 x,y,z
    x,y,z
    -x,y,-z+1/2
    -x,-y,-z
    x,-y,z-1/2
P12/n1 x+z,y,z
    x,y,z
    -x+1/2,y,-z+1/2
    -x,-y,-z
    x-1/2,-y,z-1/2
P12/a1 -z,y,x
    x,y,z
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,-y,z
P112/a y,z,x
    x,y,z
    -x+1/2,-y,z
    -x,-y,-z
    x-1/2,y,-z
P112/n x+y,z,x
    x,y,z
    -x+1/2,-y+1/2,z
    -x,-y,-z
    x-1/2,y-1/2,-z
P112/b -x,z,y
    x,y,z
    -x,-y+1/2,z
    -x,-y,-z
    x,y-1/2,-z
P2/b11 z,x,y
    x,y,z
    x,-y+1/2,-z
    -x,-y,-z
    -x,y-1/2,z
P2/n11 y+z,x,y
    x,y,z
    x,-y+1/2,-z+1/2
    -x,-y,-z
    -x,y-1/2,z-1/2
P2/c11 -y,x,z
    x,y,z
    x,-y,-z+1/2
    -x,-y,-z
    -x,y,z-1/2
P121/c1 x,y,z
    x,y,z
    -x,y+1/2,-z+1/2
    -x,-y,-z
    x,-y-1/2,z-1/2
P121/n1 x+z,y,z
    x,y,z
    -x+1/2,y+1/2,-z+1/2
    -x,-y,-z
    x-1/2,-y-1/2,z-1/2
P121/a1 -z,y,x
    x,y,z
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x-1/2,-y-1/2,z
P1121/a y,z,x
    x,y,z
    -x+1/2,-y,z+1/2
    -x,-y,-z
    x-1/2,y,-z-1/2
P1121/n x+y,z,x
    x,y,z
    -x+1/2,-y+1/2,z+1/2
    -x,-y,-z
    x-1/2,y-1/2,-z-1/2
P1121/b -x,z,y
    x,y,z
    -x,-y+1/2,z+1/2
    -x,-y,-z
    x,y-1/2,-z-1/2
P21/b11 z,x,y
    x,y,z
    x+1/2,-y+1/2,-z
    -x,-y,-z
    -x-1/2,y-1/2,z
P21/n11 y+z,x,y
    x,y,z
    x+1/2,-y+1/2,-z+1/2
    -x,-y,-z
    -x-1/2,y-1/2,z-1/2
P21/c11 -y,x,z
    x,y,z
    x+1/2,-y,-z+1/2
    -x,-y,-z
    -x-1/2,y,z-1/2
C12/c1 x,y,z
    x,y,z
    -x,y,-z+1/2
    -x,-y,-z
    x,-y,z-1/2
    x+1/2,y+1/2,z
    -x+1/2,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z
    x+1/2,-y+1/2,z-1/2
A12/n1 x-z,y,x
    x,y,z
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x-1/2,-y-1/2,z
    x,y+1/2,z+1/2
    -x+1/2,y+1,-z+1/2
    -x,-y+1/2,-z+1/2
    x-1/2,-y,z+1/2
I12/a1 -z,y,x+z
    x,y,z
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,-y,z
    x+1/2,y+1/2,z+1/2
    -x+1,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x,-y+1/2,z+1/2
A12/a1 -z,y,x
    x,y,z
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,-y,z
    x,y+1/2,z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x,-y+1/2,-z+1/2
    x-1/2,-y+1/2,z+1/2
C12/n1 x-1/4,y+1/4,z
    x,y,z
    -x+1/2,y,-z+1/2
    -x,-y,-z
    x-1/2,-y,z-1/2
    x+1/2,y+1/2,z
    -x+1,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z
    x,-y+1/2,z-1/2
I12/c1 x,y,x+z
    x,y,z
    -x,y,-z+1/2
    -x,-y,-z
    x,-y,z-1/2
    x+1/2,y+1/2,z+1/2
    -x+1/2,y+1/2,-z+1
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,-y+1/2,z
A112/a y,z,x
    x,y,z
    -x+1/2,-y,z
    -x,-y,-z
    x-1/2,y,-z
    x,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    -x,-y+1/2,-z+1/2
    x-1/2,y+1/2,-z+1/2
B112/n -x+y,z,y
    x,y,z
    -x+1/2,-y+1/2,z
    -x,-y,-z
    x-1/2,y-1/2,-z
    x+1/2,y,z+1/2
    -x+1,-y+1/2,z+1/2
    -x+1/2,-y,-z+1/2
    x,y-1/2,-z+1/2
I112/b -x,z,x+y
    x,y,z
    -x,-y+1/2,z
    -x,-y,-z
    x,y-1/2,-z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1,z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y,-z+1/2
B112/b -x,z,y
    x,y,z
    -x,-y+1/2,z
    -x,-y,-z
    x,y-1/2,-z
    x+1/2,y,z+1/2
    -x+1/2,-y+1/2,z+1/2
    -x+1/2,-y,-z+1/2
    x+1/2,y-1/2,-z+1/2
A112/n x+y,z,x
    x,y,z
    -x+1/2,-y+1/2,z
    -x,-y,-z
    x-1/2,y-1/2,-z
    x,y+1/2,z+1/2
    -x+1/2,-y+1,z+1/2
    -x,-y+1/2,-z+1/2
    x-1/2,y,-z+1/2
I112/a y,z,x+y
    x,y,z
    -x+1/2,-y,z
    -x,-y,-z
    x-1/2,y,-z
    x+1/2,y+1/2,z+1/2
    -x+1,-y+1/2,z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x,y+1/2,-z+1/2
B2/b11 z,x,y
    x,y,z
    x,-y+1/2,-z
    -x,-y,-z
    -x,y-1/2,z
    x+1/2,y,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,-y,-z+1/2
    -x+1/2,y-1/2,z+1/2
C2/n11 -y+z,x,z
    x,y,z
    x+1/2,-y,-z+1/2
    -x,-y,-z
    -x-1/2,y,z-1/2
    x+1/2,y+1/2,z
    x+1,-y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z
    -x,y+1/2,z-1/2
I2/c11 -y,x,y+z
    x,y,z
    x,-y,-z+1/2
    -x,-y,-z
    -x,y,z-1/2
    x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1
    -x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,z
C2/c11 -y,x,z
    x,y,z
    x,-y,-z+1/2
    -x,-y,-z
    -x,y,z-1/2
    x+1/2,y+1/2,z
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,z-1/2
B2/n11 y+z,x,y
    x,y,z
    x+1/2,-y+1/2,-z
    -x,-y,-z
    -x-1/2,y-1/2,z
    x+1/2,y,z+1/2
    x+1,-y+1/2,-z+1/2
    -x+1/2,-y,-z+1/2
    -x,y-1/2,z+1/2
I2/b11 z,x,y+z
    x,y,z
    x,-y+1/2,-z
    -x,-y,-z
    -x,y-1/2,z
    x+1/2,y+1/2,z+1/2
    x+1/2,-y+1,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    -x+1/2,y,z+1/2
P222 x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
P2221 x,y,z
    x,y,z
    -x,-y,z+1/2
    x,-y,-z
    -x,y,-z+1/2
P2122 y,z,x
    x,y,z
    -x+1/2,-y,z
    x+1/2,-y,-z
    -x,y,-z
P2212 z,x,y
    x,y,z
    -x,-y,z
    x,-y+1/2,-z
    -x,y+1/2,-z
P21212 x,y,z
    x,y,z
    -x,-y,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
P22121 y,z,x
    x,y,z
    -x,-y+1/2,z+1/2
    x,-y,-z
    -x,y+1/2,-z+1/2
P21221 z,x,y
    x,y,z
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x,y,-z
P212121 x,y,z
    x,y,z
    -x+1/2,-y,z+1/2
    x+1/2,-y+1/2,-z
    -x,y+1/2,-z+1/2
C2221 x,y,z
    x,y,z
    -x,-y,z+1/2
    x,-y,-z
    -x,y,-z+1/2
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z+1/2
A2122 y,z,x
    x,y,z
    -x+1/2,-y,z
    x+1/2,-y,-z
    -x,y,-z
    x,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
B2212 z,x,y
    x,y,z
    -x,-y,z
    x,-y+1/2,-z
    -x,y+1/2,-z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
C222 x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
A222 y,z,x
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
B222 z,x,y
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y,-z+1/2
F222 x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y,-z+1/2
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
I222 x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
I212121 x,y,z
    x,y,z
    -x,-y+1/2,z
    x,-y,-z+1/2
    -x,y+1/2,-z+1/2
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1,z+1/2
    x+1/2,-y+1/2,-z+1
    -x+1/2,y+1,-z+1
Pmm2 x,y,z
    x,y,z
    -x,-y,z
    -x,y,z
    x,-y,z
P2mm y,z,x
    x,y,z
    x,y,-z
    x,-y,-z
    x,-y,z
Pm2m z,x,y
    x,y,z
    x,y,-z
    -x,y,z
    -x,y,-z
Pmc21 x,y,z
    x,y,z
    -x,-y,z+1/2
    -x,y,z
    x,-y,z+1/2
Pcm21 -y,x,z
    x,y,z
    -x,-y,z+1/2
    -x,y,z+1/2
    x,-y,z
P21ma y,z,x
    x,y,z
    x+1/2,y,-z
    x+1/2,-y,-z
    x,-y,z
P21am -z,y,x
    x,y,z
    x,y,-z
    x+1/2,-y,-z
    x+1/2,-y,z
Pb21m z,x,y
    x,y,z
    x,y,-z
    -x,y+1/2,z
    -x,y+1/2,-z
Pm21b -x,z,y
    x,y,z
    x,y+1/2,-z
    -x,y,z
    -x,y+1/2,-z
Pcc2 x,y,z
    x,y,z
    -x,-y,z
    -x,y,z+1/2
    x,-y,z+1/2
P2aa y,z,x
    x,y,z
    x+1/2,y,-z
    x,-y,-z
    x+1/2,-y,z
Pb2b z,x,y
    x,y,z
    x,y+1/2,-z
    -x,y+1/2,z
    -x,y,-z
Pma2 x,y,z
    x,y,z
    -x,-y,z
    -x+1/2,y,z
    x+1/2,-y,z
Pbm2 -y,x,z
    x,y,z
    -x,-y,z
    -x,y+1/2,z
    x,-y+1/2,z
P2mb y,z,x
    x,y,z
    x,y+1/2,-z
    x,-y,-z
    x,-y+1/2,z
P2cm -z,y,x
    x,y,z
    x,y,-z+1/2
    x,-y,-z
    x,-y,z+1/2
Pc2m z,x,y
    x,y,z
    x,y,-z+1/2
    -x,y,z+1/2
    -x,y,-z
Pm2a -x,z,y
    x,y,z
    x+1/2,y,-z
    -x+1/2,y,z
    -x,y,-z
Pca21 x,y,z
    x,y,z
    -x,-y,z+1/2
    -x+1/2,y,z+1/2
    x+1/2,-y,z
Pbc21 -y,x,z
    x,y,z
    -x,-y,z+1/2
    -x,y+1/2,z
    x,-y+1/2,z+1/2
P21ab y,z,x
    x,y,z
    x,y+1/2,-z
    x+1/2,-y,-z
    x+1/2,-y+1/2,z
P21ca -z,y,x
    x,y,z
    x+1/2,y,-z+1/2
    x+1/2,-y,-z
    x,-y,z+1/2
Pc21b z,x,y
    x,y,z
    x,y+1/2,-z+1/2
    -x,y,z+1/2
    -x,y+1/2,-z
Pb21a -x,z,y
    x,y,z
    x+1/2,y,-z
    -x+1/2,y+1/2,z
    -x,y+1/2,-z
Pnc2 x,y,z
    x,y,z
    -x,-y,z
    -x,y+1/2,z+1/2
    x,-y+1/2,z+1/2
Pcn2 -y,x,z
    x,y,z
    -x,-y,z
    -x+1/2,y,z+1/2
    x+1/2,-y,z+1/2
P2na y,z,x
    x,y,z
    x+1/2,y,-z+1/2
    x,-y,-z
    x+1/2,-y,z+1/2
P2an -z,y,x
    x,y,z
    x+1/2,y+1/2,-z
    x,-y,-z
    x+1/2,-y+1/2,z
Pb2n z,x,y
    x,y,z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    -x,y,-z
Pn2b -x,z,y
    x,y,z
    x,y+1/2,-z+1/2
    -x,y+1/2,z+1/2
    -x,y,-z
Pmn21 x,y,z
    x,y,z
    -x+1/2,-y,z+1/2
    -x,y,z
    x+1/2,-y,z+1/2
Pnm21 -y,x,z
    x,y,z
    -x,-y+1/2,z+1/2
    -x,y+1/2,z+1/2
    x,-y,z
P21mn y,z,x
    x,y,z
    x+1/2,y+1/2,-z
    x+1/2,-y+1/2,-z
    x,-y,z
P21nm -z,y,x
    x,y,z
    x,y,-z
    x+1/2,-y,-z+1/2
    x+1/2,-y,z+1/2
Pn21m z,x,y
    x,y,z
    x,y,-z
    -x,y+1/2,z+1/2
    -x,y+1/2,-z+1/2
Pm21n -x,z,y
    x,y,z
    x+1/2,y+1/2,-z
    -x,y,z
    -x+1/2,y+1/2,-z
Pba2 x,y,z
    x,y,z
    -x,-y,z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
P2cb y,z,x
    x,y,z
    x,y+1/2,-z+1/2
    x,-y,-z
    x,-y+1/2,z+1/2
Pc2a z,x,y
    x,y,z
    x+1/2,y,-z+1/2
    -x+1/2,y,z+1/2
    -x,y,-z
Pna21 x,y,z
    x,y,z
    -x,-y,z+1/2
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z
Pbn21 -y,x,z
    x,y,z
    -x,-y,z+1/2
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z+1/2
P21nb y,z,x
    x,y,z
    x,y+1/2,-z+1/2
    x+1/2,-y,-z
    x+1/2,-y+1/2,z+1/2
P21cn -z,y,x
    x,y,z
    x+1/2,y+1/2,-z+1/2
    x+1/2,-y,-z
    x,-y+1/2,z+1/2
Pc21n z,x,y
    x,y,z
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y,z+1/2
    -x,y+1/2,-z
Pn21a -x,z,y
    x,y,z
    x+1/2,y,-z+1/2
    -x+1/2,y+1/2,z+1/2
    -x,y+1/2,-z
Pnn2 x,y,z
    x,y,z
    -x,-y,z
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
P2nn y,z,x
    x,y,z
    x+1/2,y+1/2,-z+1/2
    x,-y,-z
    x+1/2,-y+1/2,z+1/2
Pn2n z,x,y
    x,y,z
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    -x,y,-z
Cmm2 x,y,z
    x,y,z
    -x,-y,z
    -x,y,z
    x,-y,z
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
A2mm y,z,x
    x,y,z
    x,y,-z
    x,-y,-z
    x,-y,z
    x,y+1/2,z+1/2
    x,y+1/2,-z+1/2
    x,-y+1/2,-z+1/2
    x,-y+1/2,z+1/2
Bm2m z,x,y
    x,y,z
    x,y,-z
    -x,y,z
    -x,y,-z
    x+1/2,y,z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y,z+1/2
    -x+1/2,y,-z+1/2
Cmc21 x,y,z
    x,y,z
    -x,-y,z+1/2
    -x,y,z
    x,-y,z+1/2
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z+1/2
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z+1/2
Ccm21 -y,x,z
    x,y,z
    -x,-y,z+1/2
    -x,y,z+1/2
    x,-y,z
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z+1/2
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z
A21ma y,z,x
    x,y,z
    x+1/2,y,-z
    x+1/2,-y,-z
    x,-y,z
    x,y+1/2,z+1/2
    x+1/2,y+1/2,-z+1/2
    x+1/2,-y+1/2,-z+1/2
    x,-y+1/2,z+1/2
A21am -z,y,x
    x,y,z
    x,y,-z
    x+1/2,-y,-z
    x+1/2,-y,z
    x,y+1/2,z+1/2
    x,y+1/2,-z+1/2
    x+1/2,-y+1/2,-z+1/2
    x+1/2,-y+1/2,z+1/2
Bb21m z,x,y
    x,y,z
    x,y,-z
    -x,y+1/2,z
    -x,y+1/2,-z
    x+1/2,y,z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y+1/2,z+1/2
    -x+1/2,y+1/2,-z+1/2
Bm21b -x,z,y
    x,y,z
    x,y+1/2,-z
    -x,y,z
    -x,y+1/2,-z
    x+1/2,y,z+1/2
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y,z+1/2
    -x+1/2,y+1/2,-z+1/2
Ccc2 x,y,z
    x,y,z
    -x,-y,z
    -x,y,z+1/2
    x,-y,z+1/2
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
A2aa y,z,x
    x,y,z
    x+1/2,y,-z
    x,-y,-z
    x+1/2,-y,z
    x,y+1/2,z+1/2
    x+1/2,y+1/2,-z+1/2
    x,-y+1/2,-z+1/2
    x+1/2,-y+1/2,z+1/2
Bb2b z,x,y
    x,y,z
    x,y+1/2,-z
    -x,y+1/2,z
    -x,y,-z
    x+1/2,y,z+1/2
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    -x+1/2,y,-z+1/2
Amm2 x,y,z
    x,y,z
    -x,-y,z
    -x,y,z
    x,-y,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    -x,y+1/2,z+1/2
    x,-y+1/2,z+1/2
Bmm2 -y,x,z
    x,y,z
    -x,-y,z
    -x,y,z
    x,-y,z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    -x+1/2,y,z+1/2
    x+1/2,-y,z+1/2
B2mm y,z,x
    x,y,z
    x,y,-z
    x,-y,-z
    x,-y,z
    x+1/2,y,z+1/2
    x+1/2,y,-z+1/2
    x+1/2,-y,-z+1/2
    x+1/2,-y,z+1/2
C2mm -z,y,x
    x,y,z
    x,y,-z
    x,-y,-z
    x,-y,z
    x+1/2,y+1/2,z
    x+1/2,y+1/2,-z
    x+1/2,-y+1/2,-z
    x+1/2,-y+1/2,z
Cm2m z,x,y
    x,y,z
    x,y,-z
    -x,y,z
    -x,y,-z
    x+1/2,y+1/2,z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    -x+1/2,y+1/2,-z
Am2m -x,z,y
    x,y,z
    x,y,-z
    -x,y,z
    -x,y,-z
    x,y+1/2,z+1/2
    x,y+1/2,-z+1/2
    -x,y+1/2,z+1/2
    -x,y+1/2,-z+1/2
Abm2 x,y,z
    x,y,z
    -x,-y,z
    -x,y+1/2,z
    x,-y+1/2,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    -x,y+1,z+1/2
    x,-y+1,z+1/2
Bma2 -y,x,z
    x,y,z
    -x,-y,z
    -x+1/2,y,z
    x+1/2,-y,z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    -x+1,y,z+1/2
    x+1,-y,z+1/2
B2cm y,z,x
    x,y,z
    x+1/2,y,-z
    x,-y,-z
    x+1/2,-y,z
    x+1/2,y,z+1/2
    x+1,y,-z+1/2
    x+1/2,-y,-z+1/2
    x+1,-y,z+1/2
C2mb -z,y,x
    x,y,z
    x+1/2,y,-z
    x,-y,-z
    x+1/2,-y,z
    x+1/2,y+1/2,z
    x+1,y+1/2,-z
    x+1/2,-y+1/2,-z
    x+1,-y+1/2,z
Cm2a z,x,y
    x,y,z
    x+1/2,y,-z
    -x+1/2,y,z
    -x,y,-z
    x+1/2,y+1/2,z
    x+1,y+1/2,-z
    -x+1,y+1/2,z
    -x+1/2,y+1/2,-z
Ac2m -x,z,y
    x,y,z
    x,y+1/2,-z
    -x,y+1/2,z
    -x,y,-z
    x,y+1/2,z+1/2
    x,y+1,-z+1/2
    -x,y+1,z+1/2
    -x,y+1/2,-z+1/2
Ama2 x,y,z
    x,y,z
    -x,-y,z
    -x+1/2,y,z
    x+1/2,-y,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
Bbm2 -y,x,z
    x,y,z
    -x,-y,z
    -x,y+1/2,z
    x,-y+1/2,z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
B2mb y,z,x
    x,y,z
    x,y+1/2,-z
    x,-y,-z
    x,-y+1/2,z
    x+1/2,y,z+1/2
    x+1/2,y+1/2,-z+1/2
    x+1/2,-y,-z+1/2
    x+1/2,-y+1/2,z+1/2
C2cm -z,y,x
    x,y,z
    x,y,-z+1/2
    x,-y,-z
    x,-y,z+1/2
    x+1/2,y+1/2,z
    x+1/2,y+1/2,-z+1/2
    x+1/2,-y+1/2,-z
    x+1/2,-y+1/2,z+1/2
Cc2m z,x,y
    x,y,z
    x,y,-z+1/2
    -x,y,z+1/2
    -x,y,-z
    x+1/2,y+1/2,z
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    -x+1/2,y+1/2,-z
Am2a -x,z,y
    x,y,z
    x+1/2,y,-z
    -x+1/2,y,z
    -x,y,-z
    x,y+1/2,z+1/2
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    -x,y+1/2,-z+1/2
Aba2 x,y,z
    x,y,z
    -x,-y,z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    -x+1/2,y+1,z+1/2
    x+1/2,-y+1,z+1/2
Bba2 -y,x,z
    x,y,z
    -x,-y,z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    -x+1,y+1/2,z+1/2
    x+1,-y+1/2,z+1/2
B2cb y,z,x
    x,y,z
    x+1/2,y+1/2,-z
    x,-y,-z
    x+1/2,-y+1/2,z
    x+1/2,y,z+1/2
    x+1,y+1/2,-z+1/2
    x+1/2,-y,-z+1/2
    x+1,-y+1/2,z+1/2
C2cb -z,y,x
    x,y,z
    x+1/2,y,-z+1/2
    x,-y,-z
    x+1/2,-y,z+1/2
    x+1/2,y+1/2,z
    x+1,y+1/2,-z+1/2
    x+1/2,-y+1/2,-z
    x+1,-y+1/2,z+1/2
Cc2a z,x,y
    x,y,z
    x+1/2,y,-z+1/2
    -x+1/2,y,z+1/2
    -x,y,-z
    x+1/2,y+1/2,z
    x+1,y+1/2,-z+1/2
    -x+1,y+1/2,z+1/2
    -x+1/2,y+1/2,-z
Ac2a -x,z,y
    x,y,z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    -x,y,-z
    x,y+1/2,z+1/2
    x+1/2,y+1,-z+1/2
    -x+1/2,y+1,z+1/2
    -x,y+1/2,-z+1/2
Fmm2 x,y,z
    x,y,z
    -x,-y,z
    -x,y,z
    x,-y,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    -x,y+1/2,z+1/2
    x,-y+1/2,z+1/2
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    -x+1/2,y,z+1/2
    x+1/2,-y,z+1/2
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
F2mm y,z,x
    x,y,z
    x,y,-z
    x,-y,-z
    x,-y,z
    x,y+1/2,z+1/2
    x,y+1/2,-z+1/2
    x,-y+1/2,-z+1/2
    x,-y+1/2,z+1/2
    x+1/2,y,z+1/2
    x+1/2,y,-z+1/2
    x+1/2,-y,-z+1/2
    x+1/2,-y,z+1/2
    x+1/2,y+1/2,z
    x+1/2,y+1/2,-z
    x+1/2,-y+1/2,-z
    x+1/2,-y+1/2,z
Fm2m z,x,y
    x,y,z
    x,y,-z
    -x,y,z
    -x,y,-z
    x,y+1/2,z+1/2
    x,y+1/2,-z+1/2
    -x,y+1/2,z+1/2
    -x,y+1/2,-z+1/2
    x+1/2,y,z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y,z+1/2
    -x+1/2,y,-z+1/2
    x+1/2,y+1/2,z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    -x+1/2,y+1/2,-z
Fdd2 x,y,z
    x,y,z
    -x,-y,z
    -x+1/4,y+1/4,z+1/4
    x+3/4,-y+3/4,z+1/4
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    -x+1/4,y+3/4,z+3/4
    x+3/4,-y+5/4,z+3/4
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    -x+3/4,y+1/4,z+3/4
    x+5/4,-y+3/4,z+3/4
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    -x+3/4,y+3/4,z+1/4
    x+5/4,-y+5/4,z+1/4
F2dd y,z,x
    x,y,z
    x+1/4,y+1/4,-z+1/4
    x,-y,-z
    x+1/4,-y+1/4,z+1/4
    x,y+1/2,z+1/2
    x+1/4,y+3/4,-z+3/4
    x,-y+1/2,-z+1/2
    x+1/4,-y+3/4,z+3/4
    x+1/2,y,z+1/2
    x+3/4,y+1/4,-z+3/4
    x+1/2,-y,-z+1/2
    x+3/4,-y+1/4,z+3/4
    x+1/2,y+1/2,z
    x+3/4,y+3/4,-z+1/4
    x+1/2,-y+1/2,-z
    x+3/4,-y+3/4,z+1/4
Fd2d z,x,y
    x,y,z
    x+1/4,y+1/4,-z+1/4
    -x+1/4,y+1/4,z+1/4
    -x+1/2,y+1/2,-z
    x,y+1/2,z+1/2
    x+1/4,y+3/4,-z+3/4
    -x+1/4,y+3/4,z+3/4
    -x+1/2,y+1,-z+1/2
    x+1/2,y,z+1/2
    x+3/4,y+1/4,-z+3/4
    -x+3/4,y+1/4,z+3/4
    -x+1,y+1/2,-z+1/2
    x+1/2,y+1/2,z
    x+3/4,y+3/4,-z+1/4
    -x+3/4,y+3/4,z+1/4
    -x+1,y+1,-z
Imm2 x,y,z
    x,y,z
    -x,-y,z
    -x,y,z
    x,-y,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
I2mm y,z,x
    x,y,z
    x,y,-z
    x,-y,-z
    x,-y,z
    x+1/2,y+1/2,z+1/2
    x+1/2,y+1/2,-z+1/2
    x+1/2,-y+1/2,-z+1/2
    x+1/2,-y+1/2,z+1/2
Im2m z,x,y
    x,y,z
    x,y,-z
    -x,y,z
    -x,y,-z
    x+1/2,y+1/2,z+1/2
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    -x+1/2,y+1/2,-z+1/2
Iba2 x,y,z
    x,y,z
    -x,-y,z
    -x,y,z+1/2
    x,-y,z+1/2
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    -x+1/2,y+1/2,z+1
    x+1/2,-y+1/2,z+1
I2cb y,z,x
    x,y,z
    x+1/2,y,-z
    x,-y,-z
    x+1/2,-y,z
    x+1/2,y+1/2,z+1/2
    x+1,y+1/2,-z+1/2
    x+1/2,-y+1/2,-z+1/2
    x+1,-y+1/2,z+1/2
Ic2a z,x,y
    x,y,z
    x,y+1/2,-z
    -x,y+1/2,z
    -x,y,-z
    x+1/2,y+1/2,z+1/2
    x+1/2,y+1,-z+1/2
    -x+1/2,y+1,z+1/2
    -x+1/2,y+1/2,-z+1/2
Ima2 x,y,z
    x,y,z
    -x,-y,z
    -x+1/2,y,z
    x+1/2,-y,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    -x+1,y+1/2,z+1/2
    x+1,-y+1/2,z+1/2
Ibm2 -y,x,z
    x,y,z
    -x,-y,z
    -x,y+1/2,z
    x,-y+1/2,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    -x+1/2,y+1,z+1/2
    x+1/2,-y+1,z+1/2
I2mb y,z,x
    x,y,z
    x,y+1/2,-z
    x,-y,-z
    x,-y+1/2,z
    x+1/2,y+1/2,z+1/2
    x+1/2,y+1,-z+1/2
    x+1/2,-y+1/2,-z+1/2
    x+1/2,-y+1,z+1/2
I2cm -z,y,x
    x,y,z
    x,y,-z+1/2
    x,-y,-z
    x,-y,z+1/2
    x+1/2,y+1/2,z+1/2
    x+1/2,y+1/2,-z+1
    x+1/2,-y+1/2,-z+1/2
    x+1/2,-y+1/2,z+1
Ic2m z,x,y
    x,y,z
    x,y,-z+1/2
    -x,y,z+1/2
    -x,y,-z
    x+1/2,y+1/2,z+1/2
    x+1/2,y+1/2,-z+1
    -x+1/2,y+1/2,z+1
    -x+1/2,y+1/2,-z+1/2
Im2a -x,z,y
    x,y,z
    x+1/2,y,-z
    -x+1/2,y,z
    -x,y,-z
    x+1/2,y+1/2,z+1/2
    x+1,y+1/2,-z+1/2
    -x+1,y+1/2,z+1/2
    -x+1/2,y+1/2,-z+1/2
Pmmm x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x,-y,-z
    x,y,-z
    -x,y,z
    x,-y,z
Pnnn:2 x,y,z
    x,y,z
    -x+1/2,-y+1/2,z
    x,-y+1/2,-z+1/2
    -x+1/2,y,-z+1/2
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x,y-1/2,z-1/2
    x-1/2,-y,z-1/2
Pnnn:1 x+1/4,y+1/4,z+1/4
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
Pccm x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z+1/2
    -x,y,-z+1/2
    -x,-y,-z
    x,y,-z
    -x,y,z-1/2
    x,-y,z-1/2
Pmaa y,z,x
    x,y,z
    -x+1/2,-y,z
    x,-y,-z
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,y,-z
    -x,y,z
    x-1/2,-y,z
Pbmb z,x,y
    x,y,z
    -x,-y+1/2,z
    x,-y+1/2,-z
    -x,y,-z
    -x,-y,-z
    x,y-1/2,-z
    -x,y-1/2,z
    x,-y,z
Pban:2 x,y,z
    x,y,z
    -x+1/2,-y+1/2,z
    x,-y+1/2,-z
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x,y-1/2,z
    x-1/2,-y,z
Pban:1 x+1/4,y+1/4,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x+1/2,-y+1/2,-z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
Pncb:1 y+1/4,z+1/4,x
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x,-y+1/2,-z+1/2
    x,y+1/2,-z+1/2
    -x,y+1/2,z+1/2
    x,-y+1/2,z+1/2
Pncb:2 y,z,x
    x,y,z
    -x,-y+1/2,z
    x,-y+1/2,-z+1/2
    -x,y,-z+1/2
    -x,-y,-z
    x,y-1/2,-z
    -x,y-1/2,z-1/2
    x,-y,z-1/2
Pcna:1 z+1/4,x+1/4,y
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x+1/2,-y,-z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y,z+1/2
    x+1/2,-y,z+1/2
Pcna:2 z,x,y
    x,y,z
    -x+1/2,-y,z
    x,-y,-z+1/2
    -x+1/2,y,-z+1/2
    -x,-y,-z
    x-1/2,y,-z
    -x,y,z-1/2
    x-1/2,-y,z-1/2
Pmma x,y,z
    x,y,z
    -x+1/2,-y,z
    x+1/2,-y,-z
    -x,y,-z
    -x,-y,-z
    x-1/2,y,-z
    -x-1/2,y,z
    x,-y,z
Pmmb -y,x,z
    x,y,z
    -x,-y+1/2,z
    x,-y,-z
    -x,y+1/2,-z
    -x,-y,-z
    x,y-1/2,-z
    -x,y,z
    x,-y-1/2,z
Pbmm y,z,x
    x,y,z
    -x,-y,z
    x,-y+1/2,-z
    -x,y+1/2,-z
    -x,-y,-z
    x,y,-z
    -x,y-1/2,z
    x,-y-1/2,z
Pcmm -z,y,x
    x,y,z
    -x,-y,z+1/2
    x,-y,-z+1/2
    -x,y,-z
    -x,-y,-z
    x,y,-z-1/2
    -x,y,z-1/2
    x,-y,z
Pmcm z,x,y
    x,y,z
    -x,-y,z+1/2
    x,-y,-z
    -x,y,-z+1/2
    -x,-y,-z
    x,y,-z-1/2
    -x,y,z
    x,-y,z-1/2
Pmam -x,z,y
    x,y,z
    -x,-y,z
    x+1/2,-y,-z
    -x+1/2,y,-z
    -x,-y,-z
    x,y,-z
    -x-1/2,y,z
    x-1/2,-y,z
Pnna x,y,z
    x,y,z
    -x+1/2,-y,z
    x,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x,-y,-z
    x-1/2,y,-z
    -x,y-1/2,z-1/2
    x-1/2,-y-1/2,z-1/2
Pnnb -y,x,z
    x,y,z
    -x,-y+1/2,z
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y,-z+1/2
    -x,-y,-z
    x,y-1/2,-z
    -x-1/2,y-1/2,z-1/2
    x-1/2,-y,z-1/2
Pbnn y,z,x
    x,y,z
    -x+1/2,-y+1/2,z+1/2
    x,-y+1/2,-z
    -x+1/2,y,-z+1/2
    -x,-y,-z
    x-1/2,y-1/2,-z-1/2
    -x,y-1/2,z
    x-1/2,-y,z-1/2
Pcnn -z,y,x
    x,y,z
    -x+1/2,-y+1/2,z
    x,-y,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x,y,z-1/2
    x-1/2,-y-1/2,z-1/2
Pncn z,x,y
    x,y,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z+1/2
    -x,y,-z+1/2
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x-1/2,y-1/2,z-1/2
    x,-y,z-1/2
Pnan -x,z,y
    x,y,z
    -x+1/2,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,y-1/2,-z-1/2
    -x,y-1/2,z-1/2
    x-1/2,-y,z
Pmna x,y,z
    x,y,z
    -x+1/2,-y,z+1/2
    x,-y,-z
    -x+1/2,y,-z+1/2
    -x,-y,-z
    x-1/2,y,-z-1/2
    -x,y,z
    x-1/2,-y,z-1/2
Pnmb -y,x,z
    x,y,z
    -x,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x,y,-z
    -x,-y,-z
    x,y-1/2,-z-1/2
    -x,y-1/2,z-1/2
    x,-y,z
Pbmn y,z,x
    x,y,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x,y,-z
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x-1/2,y-1/2,z
    x,-y,z
Pcnm -z,y,x
    x,y,z
    -x,-y,z
    x+1/2,-y,-z+1/2
    -x+1/2,y,-z+1/2
    -x,-y,-z
    x,y,-z
    -x-1/2,y,z-1/2
    x-1/2,-y,z-1/2
Pncm z,x,y
    x,y,z
    -x,-y,z
    x,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    -x,-y,-z
    x,y,-z
    -x,y-1/2,z-1/2
    x,-y-1/2,z-1/2
Pman -x,z,y
    x,y,z
    -x+1/2,-y+1/2,z
    x,-y,-z
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x,y,z
    x-1/2,-y-1/2,z
Pcca x,y,z
    x,y,z
    -x+1/2,-y,z
    x+1/2,-y,-z+1/2
    -x,y,-z+1/2
    -x,-y,-z
    x-1/2,y,-z
    -x-1/2,y,z-1/2
    x,-y,z-1/2
Pccb -y,x,z
    x,y,z
    -x,-y+1/2,z
    x,-y,-z+1/2
    -x,y+1/2,-z+1/2
    -x,-y,-z
    x,y-1/2,-z
    -x,y,z-1/2
    x,-y-1/2,z-1/2
Pbaa y,z,x
    x,y,z
    -x+1/2,-y,z
    x,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x-1/2,y,-z
    -x,y-1/2,z
    x-1/2,-y-1/2,z
Pcaa -z,y,x
    x,y,z
    -x+1/2,-y,z+1/2
    x,-y,-z+1/2
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,y,-z-1/2
    -x,y,z-1/2
    x-1/2,-y,z
Pbcb z,x,y
    x,y,z
    -x,-y+1/2,z+1/2
    x,-y+1/2,-z
    -x,y,-z+1/2
    -x,-y,-z
    x,y-1/2,-z-1/2
    -x,y-1/2,z
    x,-y,z-1/2
Pbab -x,z,y
    x,y,z
    -x,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,y,-z
    -x,-y,-z
    x,y-1/2,-z
    -x-1/2,y-1/2,z
    x-1/2,-y,z
Pbam x,y,z
    x,y,z
    -x,-y,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x,y,-z
    -x-1/2,y-1/2,z
    x-1/2,-y-1/2,z
Pmcb y,z,x
    x,y,z
    -x,-y+1/2,z+1/2
    x,-y,-z
    -x,y+1/2,-z+1/2
    -x,-y,-z
    x,y-1/2,-z-1/2
    -x,y,z
    x,-y-1/2,z-1/2
Pcma z,x,y
    x,y,z
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x,y,-z
    -x,-y,-z
    x-1/2,y,-z-1/2
    -x-1/2,y,z-1/2
    x,-y,z
Pccn x,y,z
    x,y,z
    -x+1/2,-y+1/2,z
    x+1/2,-y,-z+1/2
    -x,y+1/2,-z+1/2
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x-1/2,y,z-1/2
    x,-y-1/2,z-1/2
Pnaa y,z,x
    x,y,z
    -x+1/2,-y,z+1/2
    x,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x-1/2,y,-z-1/2
    -x,y-1/2,z-1/2
    x-1/2,-y-1/2,z
Pbnb z,x,y
    x,y,z
    -x,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z
    -x+1/2,y,-z+1/2
    -x,-y,-z
    x,y-1/2,-z-1/2
    -x-1/2,y-1/2,z
    x-1/2,-y,z-1/2
Pbcm x,y,z
    x,y,z
    -x,-y,z+1/2
    x,-y+1/2,-z
    -x,y+1/2,-z+1/2
    -x,-y,-z
    x,y,-z-1/2
    -x,y-1/2,z
    x,-y-1/2,z-1/2
Pcam -y,x,z
    x,y,z
    -x,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y,-z
    -x,-y,-z
    x,y,-z-1/2
    -x-1/2,y,z-1/2
    x-1/2,-y,z
Pmca y,z,x
    x,y,z
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z
    -x,y,-z+1/2
    -x,-y,-z
    x-1/2,y,-z-1/2
    -x-1/2,y,z
    x,-y,z-1/2
Pmab -z,y,x
    x,y,z
    -x,-y+1/2,z
    x+1/2,-y,-z
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x,y-1/2,-z
    -x-1/2,y,z
    x-1/2,-y-1/2,z
Pbma z,x,y
    x,y,z
    -x+1/2,-y,z
    x+1/2,-y+1/2,-z
    -x,y+1/2,-z
    -x,-y,-z
    x-1/2,y,-z
    -x-1/2,y-1/2,z
    x,-y-1/2,z
Pcmb -x,z,y
    x,y,z
    -x,-y+1/2,z+1/2
    x,-y,-z+1/2
    -x,y+1/2,-z
    -x,-y,-z
    x,y-1/2,-z-1/2
    -x,y,z-1/2
    x,-y-1/2,z
Pnnm x,y,z
    x,y,z
    -x,-y,z
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x,-y,-z
    x,y,-z
    -x-1/2,y-1/2,z-1/2
    x-1/2,-y-1/2,z-1/2
Pmnn y,z,x
    x,y,z
    -x+1/2,-y+1/2,z+1/2
    x,-y,-z
    -x+1/2,y+1/2,-z+1/2
    -x,-y,-z
    x-1/2,y-1/2,-z-1/2
    -x,y,z
    x-1/2,-y-1/2,z-1/2
Pnmn z,x,y
    x,y,z
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x,y,-z
    -x,-y,-z
    x-1/2,y-1/2,-z-1/2
    -x-1/2,y-1/2,z-1/2
    x,-y,z
Pmmn:2 x,y,z
    x,y,z
    -x+1/2,-y+1/2,z
    x+1/2,-y,-z
    -x,y+1/2,-z
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x-1/2,y,z
    x,-y-1/2,z
Pmmn:1 x+1/4,y+1/4,z
    x,y,z
    -x,-y,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x+1/2,-y+1/2,-z
    x+1/2,y+1/2,-z
    -x,y,z
    x,-y,z
Pnmm:1 y+1/4,z+1/4,x
    x,y,z
    -x,-y+1/2,z+1/2
    x,-y,-z
    -x,y+1/2,-z+1/2
    -x,-y+1/2,-z+1/2
    x,y,-z
    -x,y+1/2,z+1/2
    x,-y,z
Pnmm:2 y,z,x
    x,y,z
    -x,-y,z+1/2
    x,-y+1/2,-z+1/2
    -x,y+1/2,-z
    -x,-y,-z
    x,y,-z-1/2
    -x,y-1/2,z-1/2
    x,-y-1/2,z
Pmnm:1 z+1/4,x+1/4,y
    x,y,z
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x,y,-z
    -x+1/2,-y,-z+1/2
    x,y,-z
    -x,y,z
    x+1/2,-y,z+1/2
Pmnm:2 z,x,y
    x,y,z
    -x,-y,z+1/2
    x+1/2,-y,-z
    -x+1/2,y,-z+1/2
    -x,-y,-z
    x,y,-z-1/2
    -x-1/2,y,z
    x-1/2,-y,z-1/2
Pbcn x,y,z
    x,y,z
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z
    -x,y,-z+1/2
    -x,-y,-z
    x-1/2,y-1/2,-z-1/2
    -x-1/2,y-1/2,z
    x,-y,z-1/2
Pcan -y,x,z
    x,y,z
    -x+1/2,-y+1/2,z+1/2
    x,-y,-z+1/2
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x-1/2,y-1/2,-z-1/2
    -x,y,z-1/2
    x-1/2,-y-1/2,z
Pnca y,z,x
    x,y,z
    -x+1/2,-y,z
    x+1/2,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    -x,-y,-z
    x-1/2,y,-z
    -x-1/2,y-1/2,z-1/2
    x,-y-1/2,z-1/2
Pnab -z,y,x
    x,y,z
    -x,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y,-z
    -x,-y,-z
    x,y-1/2,-z-1/2
    -x-1/2,y-1/2,z-1/2
    x-1/2,-y,z
Pbna z,x,y
    x,y,z
    -x+1/2,-y,z+1/2
    x,-y+1/2,-z
    -x+1/2,y+1/2,-z+1/2
    -x,-y,-z
    x-1/2,y,-z-1/2
    -x,y-1/2,z
    x-1/2,-y-1/2,z-1/2
Pcnb -x,z,y
    x,y,z
    -x,-y+1/2,z
    x+1/2,-y,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x,-y,-z
    x,y-1/2,-z
    -x-1/2,y,z-1/2
    x-1/2,-y-1/2,z-1/2
Pbca x,y,z
    x,y,z
    -x+1/2,-y,z+1/2
    x+1/2,-y+1/2,-z
    -x,y+1/2,-z+1/2
    -x,-y,-z
    x-1/2,y,-z-1/2
    -x-1/2,y-1/2,z
    x,-y-1/2,z-1/2
Pcab -z,y,x
    x,y,z
    -x,-y+1/2,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x,y-1/2,-z-1/2
    -x-1/2,y,z-1/2
    x-1/2,-y-1/2,z
Pnma x,y,z
    x,y,z
    -x+1/2,-y,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x,y+1/2,-z
    -x,-y,-z
    x-1/2,y,-z-1/2
    -x-1/2,y-1/2,z-1/2
    x,-y-1/2,z
Pmnb -y,x,z
    x,y,z
    -x,-y+1/2,z+1/2
    x+1/2,-y,-z
    -x+1/2,y+1/2,-z+1/2
    -x,-y,-z
    x,y-1/2,-z-1/2
    -x-1/2,y,z
    x-1/2,-y-1/2,z-1/2
Pbnm y,z,x
    x,y,z
    -x,-y,z+1/2
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z+1/2
    -x,-y,-z
    x,y,-z-1/2
    -x-1/2,y-1/2,z
    x-1/2,-y-1/2,z-1/2
Pcmn -z,y,x
    x,y,z
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y,-z+1/2
    -x,y+1/2,-z
    -x,-y,-z
    x-1/2,y-1/2,-z-1/2
    -x-1/2,y,z-1/2
    x,-y-1/2,z
Pmcn z,x,y
    x,y,z
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y,-z
    -x,y+1/2,-z+1/2
    -x,-y,-z
    x-1/2,y-1/2,-z-1/2
    -x-1/2,y,z
    x,-y-1/2,z-1/2
Pnam -x,z,y
    x,y,z
    -x,-y,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x,y,-z-1/2
    -x-1/2,y-1/2,z-1/2
    x-1/2,-y-1/2,z
Cmcm x,y,z
    x,y,z
    -x,-y,z+1/2
    x,-y,-z
    -x,y,-z+1/2
    -x,-y,-z
    x,y,-z-1/2
    -x,y,z
    x,-y,z-1/2
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z
    x+1/2,y+1/2,-z-1/2
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z-1/2
Ccmm -y,x,z
    x,y,z
    -x,-y,z+1/2
    x,-y,-z+1/2
    -x,y,-z
    -x,-y,-z
    x,y,-z-1/2
    -x,y,z-1/2
    x,-y,z
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z
    -x+1/2,-y+1/2,-z
    x+1/2,y+1/2,-z-1/2
    -x+1/2,y+1/2,z-1/2
    x+1/2,-y+1/2,z
Amma y,z,x
    x,y,z
    -x+1/2,-y,z
    x+1/2,-y,-z
    -x,y,-z
    -x,-y,-z
    x-1/2,y,-z
    -x-1/2,y,z
    x,-y,z
    x,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    -x,-y+1/2,-z+1/2
    x-1/2,y+1/2,-z+1/2
    -x-1/2,y+1/2,z+1/2
    x,-y+1/2,z+1/2
Amam -z,y,x
    x,y,z
    -x,-y,z
    x+1/2,-y,-z
    -x+1/2,y,-z
    -x,-y,-z
    x,y,-z
    -x-1/2,y,z
    x-1/2,-y,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x,-y+1/2,-z+1/2
    x,y+1/2,-z+1/2
    -x-1/2,y+1/2,z+1/2
    x-1/2,-y+1/2,z+1/2
Bbmm z,x,y
    x,y,z
    -x,-y,z
    x,-y+1/2,-z
    -x,y+1/2,-z
    -x,-y,-z
    x,y,-z
    -x,y-1/2,z
    x,-y-1/2,z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x+1/2,-y,-z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y-1/2,z+1/2
    x+1/2,-y-1/2,z+1/2
Bmmb -x,z,y
    x,y,z
    -x,-y+1/2,z
    x,-y,-z
    -x,y+1/2,-z
    -x,-y,-z
    x,y-1/2,-z
    -x,y,z
    x,-y-1/2,z
    x+1/2,y,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x+1/2,-y,-z+1/2
    x+1/2,y-1/2,-z+1/2
    -x+1/2,y,z+1/2
    x+1/2,-y-1/2,z+1/2
Cmca x,y,z
    x,y,z
    -x+1/2,-y,z+1/2
    x,-y,-z
    -x+1/2,y,-z+1/2
    -x,-y,-z
    x-1/2,y,-z-1/2
    -x,y,z
    x-1/2,-y,z-1/2
    x+1/2,y+1/2,z
    -x+1,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z
    -x+1,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z
    x,y+1/2,-z-1/2
    -x+1/2,y+1/2,z
    x,-y+1/2,z-1/2
Ccmb -y,x,z
    x,y,z
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x,y,-z
    -x,-y,-z
    x-1/2,y,-z-1/2
    -x-1/2,y,z-1/2
    x,-y,z
    x+1/2,y+1/2,z
    -x+1,-y+1/2,z+1/2
    x+1,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z
    -x+1/2,-y+1/2,-z
    x,y+1/2,-z-1/2
    -x,y+1/2,z-1/2
    x+1/2,-y+1/2,z
Abma y,z,x
    x,y,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x,y,-z
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x-1/2,y-1/2,z
    x,-y,z
    x,y+1/2,z+1/2
    -x+1/2,-y+1,z+1/2
    x+1/2,-y+1,-z+1/2
    -x,y+1/2,-z+1/2
    -x,-y+1/2,-z+1/2
    x-1/2,y,-z+1/2
    -x-1/2,y,z+1/2
    x,-y+1/2,z+1/2
Acam -z,y,x
    x,y,z
    -x,-y,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x,y,-z
    -x-1/2,y-1/2,z
    x-1/2,-y-1/2,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x+1/2,-y+1,-z+1/2
    -x+1/2,y+1,-z+1/2
    -x,-y+1/2,-z+1/2
    x,y+1/2,-z+1/2
    -x-1/2,y,z+1/2
    x-1/2,-y,z+1/2
Bbcm z,x,y
    x,y,z
    -x,-y,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x,y,-z
    -x-1/2,y-1/2,z
    x-1/2,-y-1/2,z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1,-y+1/2,-z+1/2
    -x+1,y+1/2,-z+1/2
    -x+1/2,-y,-z+1/2
    x+1/2,y,-z+1/2
    -x,y-1/2,z+1/2
    x,-y-1/2,z+1/2
Bmab -x,z,y
    x,y,z
    -x+1/2,-y+1/2,z
    x,-y,-z
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x,y,z
    x-1/2,-y-1/2,z
    x+1/2,y,z+1/2
    -x+1,-y+1/2,z+1/2
    x+1/2,-y,-z+1/2
    -x+1,y+1/2,-z+1/2
    -x+1/2,-y,-z+1/2
    x,y-1/2,-z+1/2
    -x+1/2,y,z+1/2
    x,-y-1/2,z+1/2
Cmmm x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x,-y,-z
    x,y,-z
    -x,y,z
    x,-y,z
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x+1/2,-y+1/2,-z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
Ammm y,z,x
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x,-y,-z
    x,y,-z
    -x,y,z
    x,-y,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    -x,-y+1/2,-z+1/2
    x,y+1/2,-z+1/2
    -x,y+1/2,z+1/2
    x,-y+1/2,z+1/2
Bmmm z,x,y
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x,-y,-z
    x,y,-z
    -x,y,z
    x,-y,z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y,-z+1/2
    -x+1/2,-y,-z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y,z+1/2
    x+1/2,-y,z+1/2
Cccm x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z+1/2
    -x,y,-z+1/2
    -x,-y,-z
    x,y,-z
    -x,y,z-1/2
    x,-y,z-1/2
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z-1/2
    x+1/2,-y+1/2,z-1/2
Amaa y,z,x
    x,y,z
    -x+1/2,-y,z
    x,-y,-z
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,y,-z
    -x,y,z
    x-1/2,-y,z
    x,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x,-y+1/2,-z+1/2
    x-1/2,y+1/2,-z+1/2
    -x,y+1/2,z+1/2
    x-1/2,-y+1/2,z+1/2
Bbmb z,x,y
    x,y,z
    -x,-y+1/2,z
    x,-y+1/2,-z
    -x,y,-z
    -x,-y,-z
    x,y-1/2,-z
    -x,y-1/2,z
    x,-y,z
    x+1/2,y,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y,-z+1/2
    -x+1/2,-y,-z+1/2
    x+1/2,y-1/2,-z+1/2
    -x+1/2,y-1/2,z+1/2
    x+1/2,-y,z+1/2
Cmma x,y,z
    x,y,z
    -x+1/2,-y,z
    x,-y,-z
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,y,-z
    -x,y,z
    x-1/2,-y,z
    x+1/2,y+1/2,z
    -x+1,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1,y+1/2,-z
    -x+1/2,-y+1/2,-z
    x,y+1/2,-z
    -x+1/2,y+1/2,z
    x,-y+1/2,z
Cmmb x-1/4,y-1/4,z
    x,y,z
    -x+1/2,-y,z
    x+1/2,-y,-z
    -x,y,-z
    -x,-y,-z
    x-1/2,y,-z
    -x-1/2,y,z
    x,-y,z
    x+1/2,y+1/2,z
    -x+1,-y+1/2,z
    x+1,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x+1/2,-y+1/2,-z
    x,y+1/2,-z
    -x,y+1/2,z
    x+1/2,-y+1/2,z
Abmm y,z,x
    x,y,z
    -x,-y+1/2,z
    x,-y+1/2,-z
    -x,y,-z
    -x,-y,-z
    x,y-1/2,-z
    -x,y-1/2,z
    x,-y,z
    x,y+1/2,z+1/2
    -x,-y+1,z+1/2
    x,-y+1,-z+1/2
    -x,y+1/2,-z+1/2
    -x,-y+1/2,-z+1/2
    x,y,-z+1/2
    -x,y,z+1/2
    x,-y+1/2,z+1/2
Acmm -z,y,x
    x,y,z
    -x,-y,z
    x,-y+1/2,-z
    -x,y+1/2,-z
    -x,-y,-z
    x,y,-z
    -x,y-1/2,z
    x,-y-1/2,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x,-y+1,-z+1/2
    -x,y+1,-z+1/2
    -x,-y+1/2,-z+1/2
    x,y+1/2,-z+1/2
    -x,y,z+1/2
    x,-y,z+1/2
Bmcm z,x,y
    x,y,z
    -x,-y,z
    x+1/2,-y,-z
    -x+1/2,y,-z
    -x,-y,-z
    x,y,-z
    -x-1/2,y,z
    x-1/2,-y,z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1,-y,-z+1/2
    -x+1,y,-z+1/2
    -x+1/2,-y,-z+1/2
    x+1/2,y,-z+1/2
    -x,y,z+1/2
    x,-y,z+1/2
Bmam -x,z,y
    x,y,z
    -x+1/2,-y,z
    x,-y,-z
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,y,-z
    -x,y,z
    x-1/2,-y,z
    x+1/2,y,z+1/2
    -x+1,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1,y,-z+1/2
    -x+1/2,-y,-z+1/2
    x,y,-z+1/2
    -x+1/2,y,z+1/2
    x,-y,z+1/2
Ccca:2 x,y,z
    x,y,z
    -x+1/2,-y,z
    x+1/2,-y,-z+1/2
    -x,y,-z+1/2
    -x,-y,-z
    x-1/2,y,-z
    -x-1/2,y,z-1/2
    x,-y,z-1/2
    x+1/2,y+1/2,z
    -x+1,-y+1/2,z
    x+1,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z
    x,y+1/2,-z
    -x,y+1/2,z-1/2
    x+1/2,-y+1/2,z-1/2
Ccca:1 x+1/2,y+1/4,z-1/4
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x+1/2,-y,-z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y,z+1/2
    x+1/2,-y,z+1/2
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x+1,-y+1/2,-z+1/2
    x+1,y+1/2,-z+1/2
    -x+1,y+1/2,z+1/2
    x+1,-y+1/2,z+1/2
Cccb:1 x+1/2,y+1/4,z-1/4
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x+1/2,-y,-z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y,z+1/2
    x+1/2,-y,z+1/2
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x+1,-y+1/2,-z+1/2
    x+1,y+1/2,-z+1/2
    -x+1,y+1/2,z+1/2
    x+1,-y+1/2,z+1/2
Cccb:2 x+1/4,y+1/4,z
    x,y,z
    -x+1/2,-y,z
    x,-y,-z+1/2
    -x+1/2,y,-z+1/2
    -x,-y,-z
    x-1/2,y,-z
    -x,y,z-1/2
    x-1/2,-y,z-1/2
    x+1/2,y+1/2,z
    -x+1,-y+1/2,z
    x+1/2,-y+1/2,-z+1/2
    -x+1,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z
    x,y+1/2,-z
    -x+1/2,y+1/2,z-1/2
    x,-y+1/2,z-1/2
Abaa:1 y+1/2,z+1/4,x-1/4
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x+1/2,-y+1/2,-z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    -x+1/2,-y+1,-z+1/2
    x+1/2,y+1,-z+1/2
    -x+1/2,y+1,z+1/2
    x+1/2,-y+1,z+1/2
Abaa:2 y,z,x
    x,y,z
    -x+1/2,-y,z
    x,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x-1/2,y,-z
    -x,y-1/2,z
    x-1/2,-y-1/2,z
    x,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x,-y+1,-z+1/2
    -x+1/2,y+1,-z+1/2
    -x,-y+1/2,-z+1/2
    x-1/2,y+1/2,-z+1/2
    -x,y,z+1/2
    x-1/2,-y,z+1/2
Acaa:1 y+1/2,z+1/4,x-1/4
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x+1/2,-y+1/2,-z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    -x+1/2,-y+1,-z+1/2
    x+1/2,y+1,-z+1/2
    -x+1/2,y+1,z+1/2
    x+1/2,-y+1,z+1/2
Acaa:2 -z,y,x
    x,y,z
    -x+1/2,-y+1/2,z
    x,-y+1/2,-z
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x,y-1/2,z
    x-1/2,-y,z
    x,y+1/2,z+1/2
    -x+1/2,-y+1,z+1/2
    x,-y+1,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x,-y+1/2,-z+1/2
    x-1/2,y,-z+1/2
    -x,y,z+1/2
    x-1/2,-y+1/2,z+1/2
Bbcb:1 z+1/2,x+1/4,y-1/4
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x+1/2,-y+1/2,-z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y,-z+1/2
    -x+1,-y+1/2,-z+1/2
    x+1,y+1/2,-z+1/2
    -x+1,y+1/2,z+1/2
    x+1,-y+1/2,z+1/2
Bbcb:2 z,x,y
    x,y,z
    -x+1/2,-y+1/2,z
    x,-y+1/2,-z
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x,y-1/2,z
    x-1/2,-y,z
    x+1/2,y,z+1/2
    -x+1,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1,y,-z+1/2
    -x+1/2,-y,-z+1/2
    x,y-1/2,-z+1/2
    -x+1/2,y-1/2,z+1/2
    x,-y,z+1/2
Bbab:1 z+1/2,x+1/4,y-1/4
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x+1/2,-y+1/2,-z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y,-z+1/2
    -x+1,-y+1/2,-z+1/2
    x+1,y+1/2,-z+1/2
    -x+1,y+1/2,z+1/2
    x+1,-y+1/2,z+1/2
Bbab:2 -x,z,y
    x,y,z
    -x,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,y,-z
    -x,-y,-z
    x,y-1/2,-z
    -x-1/2,y-1/2,z
    x-1/2,-y,z
    x+1/2,y,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x+1,-y+1/2,-z+1/2
    -x+1,y,-z+1/2
    -x+1/2,-y,-z+1/2
    x+1/2,y-1/2,-z+1/2
    -x,y-1/2,z+1/2
    x,-y,z+1/2
Fmmm x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x,-y,-z
    x,y,-z
    -x,y,z
    x,-y,z
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    -x,-y+1/2,-z+1/2
    x,y+1/2,-z+1/2
    -x,y+1/2,z+1/2
    x,-y+1/2,z+1/2
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y,-z+1/2
    -x+1/2,-y,-z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y,z+1/2
    x+1/2,-y,z+1/2
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x+1/2,-y+1/2,-z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
Fddd:2 x,y,z
    x,y,z
    -x+1/4,-y+1/4,z
    x,-y+1/4,-z+1/4
    -x+1/4,y,-z+1/4
    -x,-y,-z
    x-1/4,y-1/4,-z
    -x,y-1/4,z-1/4
    x-1/4,-y,z-1/4
    x,y+1/2,z+1/2
    -x+1/4,-y+3/4,z+1/2
    x,-y+3/4,-z+3/4
    -x+1/4,y+1/2,-z+3/4
    -x,-y+1/2,-z+1/2
    x-1/4,y+1/4,-z+1/2
    -x,y+1/4,z+1/4
    x-1/4,-y+1/2,z+1/4
    x+1/2,y,z+1/2
    -x+3/4,-y+1/4,z+1/2
    x+1/2,-y+1/4,-z+3/4
    -x+3/4,y,-z+3/4
    -x+1/2,-y,-z+1/2
    x+1/4,y-1/4,-z+1/2
    -x+1/2,y-1/4,z+1/4
    x+1/4,-y,z+1/4
    x+1/2,y+1/2,z
    -x+3/4,-y+3/4,z
    x+1/2,-y+3/4,-z+1/4
    -x+3/4,y+1/2,-z+1/4
    -x+1/2,-y+1/2,-z
    x+1/4,y+1/4,-z
    -x+1/2,y+1/4,z-1/4
    x+1/4,-y+1/2,z-1/4
Fddd:1 x-1/8,y-1/8,z-1/8
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x+1/4,-y+1/4,-z+1/4
    x+1/4,y+1/4,-z+1/4
    -x+1/4,y+1/4,z+1/4
    x+1/4,-y+1/4,z+1/4
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    -x+1/4,-y+3/4,-z+3/4
    x+1/4,y+3/4,-z+3/4
    -x+1/4,y+3/4,z+3/4
    x+1/4,-y+3/4,z+3/4
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y,-z+1/2
    -x+3/4,-y+1/4,-z+3/4
    x+3/4,y+1/4,-z+3/4
    -x+3/4,y+1/4,z+3/4
    x+3/4,-y+1/4,z+3/4
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x+3/4,-y+3/4,-z+1/4
    x+3/4,y+3/4,-z+1/4
    -x+3/4,y+3/4,z+1/4
    x+3/4,-y+3/4,z+1/4
Immm x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    -x,-y,-z
    x,y,-z
    -x,y,z
    x,-y,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
Ibam x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z+1/2
    -x,y,-z+1/2
    -x,-y,-z
    x,y,-z
    -x,y,z-1/2
    x,-y,z-1/2
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1
    -x+1/2,y+1/2,-z+1
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
Imcb y,z,x
    x,y,z
    -x+1/2,-y,z
    x,-y,-z
    -x+1/2,y,-z
    -x,-y,-z
    x-1/2,y,-z
    -x,y,z
    x-1/2,-y,z
    x+1/2,y+1/2,z+1/2
    -x+1,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x,y+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    x,-y+1/2,z+1/2
Icma z,x,y
    x,y,z
    -x,-y+1/2,z
    x,-y+1/2,-z
    -x,y,-z
    -x,-y,-z
    x,y-1/2,-z
    -x,y-1/2,z
    x,-y,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1,z+1/2
    x+1/2,-y+1,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y,z+1/2
    x+1/2,-y+1/2,z+1/2
Ibca x,y,z
    x,y,z
    -x,-y+1/2,z
    x,-y,-z+1/2
    -x,y+1/2,-z+1/2
    -x,-y,-z
    x,y-1/2,-z
    -x,y,z-1/2
    x,-y-1/2,z-1/2
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1,z+1/2
    x+1/2,-y+1/2,-z+1
    -x+1/2,y+1,-z+1
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y+1/2,z
    x+1/2,-y,z
Icab x-1/4,y+1/4,z-1/4
    x,y,z
    -x+1/2,-y,z
    x,-y+1/2,-z
    -x+1/2,y+1/2,-z
    -x,-y,-z
    x-1/2,y,-z
    -x,y-1/2,z
    x-1/2,-y-1/2,z
    x+1/2,y+1/2,z+1/2
    -x+1,-y+1/2,z+1/2
    x+1/2,-y+1,-z+1/2
    -x+1,y+1,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x,y+1/2,-z+1/2
    -x+1/2,y,z+1/2
    x,-y,z+1/2
Imma x,y,z
    x,y,z
    -x,-y+1/2,z
    x,-y,-z
    -x,y+1/2,-z
    -x,-y,-z
    x,y-1/2,-z
    -x,y,z
    x,-y-1/2,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y,z+1/2
Immb x-1/4,y+1/4,z-1/4
    x,y,z
    -x+1/2,-y,z
    x+1/2,-y,-z
    -x,y,-z
    -x,-y,-z
    x-1/2,y,-z
    -x-1/2,y,z
    x,-y,z
    x+1/2,y+1/2,z+1/2
    -x+1,-y+1/2,z+1/2
    x+1,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x,y+1/2,-z+1/2
    -x,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
Ibmm y,z,x
    x,y,z
    -x,-y,z+1/2
    x,-y,-z+1/2
    -x,y,-z
    -x,-y,-z
    x,y,-z-1/2
    -x,y,z-1/2
    x,-y,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1
    x+1/2,-y+1/2,-z+1
    -x+1/2,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z+1/2
Icmm -z,y,x
    x,y,z
    -x,-y,z
    x,-y+1/2,-z
    -x,y+1/2,-z
    -x,-y,-z
    x,y,-z
    -x,y-1/2,z
    x,-y-1/2,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1,-z+1/2
    -x+1/2,y+1,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y,z+1/2
    x+1/2,-y,z+1/2
Imcm z,x,y
    x,y,z
    -x,-y,z
    x+1/2,-y,-z
    -x+1/2,y,-z
    -x,-y,-z
    x,y,-z
    -x-1/2,y,z
    x-1/2,-y,z
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x+1,-y+1/2,-z+1/2
    -x+1,y+1/2,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -x,y+1/2,z+1/2
    x,-y+1/2,z+1/2
Imam -x,z,y
    x,y,z
    -x,-y,z+1/2
    x,-y,-z
    -x,y,-z+1/2
    -x,-y,-z
    x,y,-z-1/2
    -x,y,z
    x,-y,z-1/2
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z
P4 x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
P41 x,y,z
    x,y,z
    -y,x,z+1/4
    -x,-y,z+1/2
    y,-x,z+3/4
P42 x,y,z
    x,y,z
    -y,x,z+1/2
    -x,-y,z
    y,-x,z+1/2
P43 x,y,z
    x,y,z
    -y,x,z+3/4
    -x,-y,z+1/2
    y,-x,z+1/4
I4 x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x+1/2,z+1/2
I41 x,y,z
    x,y,z
    -y,x+1/2,z+1/4
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x,z+3/4
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1,z+3/4
    -x+1,-y+1,z+1
    y+1,-x+1/2,z+5/4
P-4 x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
I-4 x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    x+1/2,y+1/2,z+1/2
    y+1/2,-x+1/2,-z+1/2
    -x+1/2,-y+1/2,z+1/2
    -y+1/2,x+1/2,-z+1/2
P4/m x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    -x,-y,-z
    y,-x,-z
    x,y,-z
    -y,x,-z
P42/m x,y,z
    x,y,z
    -y,x,z+1/2
    -x,-y,z
    y,-x,z+1/2
    -x,-y,-z
    y,-x,-z-1/2
    x,y,-z
    -y,x,-z-1/2
P4/n:2 x,y,z
    x,y,z
    -y+1/2,x,z
    -x+1/2,-y+1/2,z
    y,-x+1/2,z
    -x,-y,-z
    y-1/2,-x,-z
    x-1/2,y-1/2,-z
    -y,x-1/2,-z
P4/n:1 x+1/4,y-1/4,z
    x,y,z
    -y+1/2,x+1/2,z
    -x,-y,z
    y+1/2,-x+1/2,z
    -x+1/2,-y+1/2,-z
    y,-x,-z
    x+1/2,y+1/2,-z
    -y,x,-z
P42/n:2 x,y,z
    x,y,z
    -y,x+1/2,z+1/2
    -x+1/2,-y+1/2,z
    y+1/2,-x,z+1/2
    -x,-y,-z
    y,-x-1/2,-z-1/2
    x-1/2,y-1/2,-z
    -y-1/2,x,-z-1/2
P42/n:1 x-1/4,y-1/4,z-1/4
    x,y,z
    -y+1/2,x+1/2,z+1/2
    -x,-y,z
    y+1/2,-x+1/2,z+1/2
    -x+1/2,-y+1/2,-z+1/2
    y,-x,-z
    x+1/2,y+1/2,-z+1/2
    -y,x,-z
I4/m x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    -x,-y,-z
    y,-x,-z
    x,y,-z
    -y,x,-z
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x+1/2,z+1/2
    -x+1/2,-y+1/2,-z+1/2
    y+1/2,-x+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -y+1/2,x+1/2,-z+1/2
I41/a:2 x,y,z
    x,y,z
    -y+3/4,x+1/4,z+1/4
    -x+1/2,-y,z+1/2
    y+3/4,-x+3/4,z+3/4
    -x,-y,-z
    y-3/4,-x-1/4,-z-1/4
    x-1/2,y,-z-1/2
    -y-3/4,x-3/4,-z-3/4
    x+1/2,y+1/2,z+1/2
    -y+5/4,x+3/4,z+3/4
    -x+1,-y+1/2,z+1
    y+5/4,-x+5/4,z+5/4
    -x+1/2,-y+1/2,-z+1/2
    y-1/4,-x+1/4,-z+1/4
    x,y+1/2,-z
    -y-1/4,x-1/4,-z-1/4
I41/a:1 x,y-1/4,z-1/8
    x,y,z
    -y,x+1/2,z+1/4
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x,z+3/4
    -x,-y+1/2,-z+1/4
    y,-x,-z
    x-1/2,y,-z-1/4
    -y-1/2,x+1/2,-z-1/2
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1,z+3/4
    -x+1,-y+1,z+1
    y+1,-x+1/2,z+5/4
    -x+1/2,-y+1,-z+3/4
    y+1/2,-x+1/2,-z+1/2
    x,y+1/2,-z+1/4
    -y,x+1,-z
P422 x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
P4212 x,y,z
    x,y,z
    -y+1/2,x+1/2,z
    -x,-y,z
    y+1/2,-x+1/2,z
    x+1/2,-y+1/2,-z
    y,x,-z
    -x+1/2,y+1/2,-z
    -y,-x,-z
P4122 x,y,z
    x,y,z
    -y,x,z+1/4
    -x,-y,z+1/2
    y,-x,z+3/4
    x,-y,-z+1/2
    y,x,-z+3/4
    -x,y,-z
    -y,-x,-z+1/4
P41212 x,y,z
    x,y,z
    -y+1/2,x+1/2,z+1/4
    -x,-y,z+1/2
    y+1/2,-x+1/2,z+3/4
    x+1/2,-y+1/2,-z+3/4
    y,x,-z
    -x+1/2,y+1/2,-z+1/4
    -y,-x,-z+1/2
P4222 x,y,z
    x,y,z
    -y,x,z+1/2
    -x,-y,z
    y,-x,z+1/2
    x,-y,-z
    y,x,-z+1/2
    -x,y,-z
    -y,-x,-z+1/2
P42212 x,y,z
    x,y,z
    -y+1/2,x+1/2,z+1/2
    -x,-y,z
    y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    y,x,-z
    -x+1/2,y+1/2,-z+1/2
    -y,-x,-z
P4322 x,y,z
    x,y,z
    -y,x,z+3/4
    -x,-y,z+1/2
    y,-x,z+1/4
    x,-y,-z+1/2
    y,x,-z+1/4
    -x,y,-z
    -y,-x,-z+3/4
P43212 x,y,z
    x,y,z
    -y+1/2,x+1/2,z+3/4
    -x,-y,z+1/2
    y+1/2,-x+1/2,z+1/4
    x+1/2,-y+1/2,-z+1/4
    y,x,-z
    -x+1/2,y+1/2,-z+3/4
    -y,-x,-z+1/2
I422 x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -y+1/2,-x+1/2,-z+1/2
I4122 x,y,z
    x,y,z
    -y,x+1/2,z+1/4
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x,z+3/4
    x,-y+1/2,-z+1/4
    y+1/2,x+1/2,-z+1/2
    -x+1/2,y,-z+3/4
    -y,-x,-z
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1,z+3/4
    -x+1,-y+1,z+1
    y+1,-x+1/2,z+5/4
    x+1/2,-y+1,-z+3/4
    y+1,x+1,-z+1
    -x+1,y+1/2,-z+5/4
    -y+1/2,-x+1/2,-z+1/2
P4mm x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    -x,y,z
    -y,-x,z
    x,-y,z
    y,x,z
P4bm x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    -x+1/2,y+1/2,z
    -y+1/2,-x+1/2,z
    x+1/2,-y+1/2,z
    y+1/2,x+1/2,z
P42cm x,y,z
    x,y,z
    -y,x,z+1/2
    -x,-y,z
    y,-x,z+1/2
    -x,y,z+1/2
    -y,-x,z
    x,-y,z+1/2
    y,x,z
P42nm x,y,z
    x,y,z
    -y+1/2,x+1/2,z+1/2
    -x,-y,z
    y+1/2,-x+1/2,z+1/2
    -x+1/2,y+1/2,z+1/2
    -y,-x,z
    x+1/2,-y+1/2,z+1/2
    y,x,z
P4cc x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    -x,y,z+1/2
    -y,-x,z+1/2
    x,-y,z+1/2
    y,x,z+1/2
P4nc x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    -x+1/2,y+1/2,z+1/2
    -y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
    y+1/2,x+1/2,z+1/2
P42mc x,y,z
    x,y,z
    -y,x,z+1/2
    -x,-y,z
    y,-x,z+1/2
    -x,y,z
    -y,-x,z+1/2
    x,-y,z
    y,x,z+1/2
P42bc x,y,z
    x,y,z
    -y,x,z+1/2
    -x,-y,z
    y,-x,z+1/2
    -x+1/2,y+1/2,z
    -y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,z
    y+1/2,x+1/2,z+1/2
I4mm x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    -x,y,z
    -y,-x,z
    x,-y,z
    y,x,z
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x+1/2,z+1/2
    -x+1/2,y+1/2,z+1/2
    -y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
    y+1/2,x+1/2,z+1/2
I4cm x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    -x,y,z+1/2
    -y,-x,z+1/2
    x,-y,z+1/2
    y,x,z+1/2
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x+1/2,z+1/2
    -x+1/2,y+1/2,z+1
    -y+1/2,-x+1/2,z+1
    x+1/2,-y+1/2,z+1
    y+1/2,x+1/2,z+1
I41md x,y,z
    x,y,z
    -y,x+1/2,z+1/4
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x,z+3/4
    -x,y,z
    -y,-x+1/2,z+1/4
    x+1/2,-y+1/2,z+1/2
    y+1/2,x,z+3/4
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1,z+3/4
    -x+1,-y+1,z+1
    y+1,-x+1/2,z+5/4
    -x+1/2,y+1/2,z+1/2
    -y+1/2,-x+1,z+3/4
    x+1,-y+1,z+1
    y+1,x+1/2,z+5/4
I41cd x,y,z
    x,y,z
    -y,x+1/2,z+1/4
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x,z+3/4
    -x,y,z+1/2
    -y,-x+1/2,z+3/4
    x+1/2,-y+1/2,z
    y+1/2,x,z+1/4
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1,z+3/4
    -x+1,-y+1,z+1
    y+1,-x+1/2,z+5/4
    -x+1/2,y+1/2,z+1
    -y+1/2,-x+1,z+5/4
    x+1,-y+1,z+1/2
    y+1,x+1/2,z+3/4
P-42m x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    x,-y,-z
    -y,-x,z
    -x,y,-z
    y,x,z
P-42c x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    x,-y,-z+1/2
    -y,-x,z+1/2
    -x,y,-z+1/2
    y,x,z+1/2
P-421m x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    x+1/2,-y+1/2,-z
    -y+1/2,-x+1/2,z
    -x+1/2,y+1/2,-z
    y+1/2,x+1/2,z
P-421c x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    x+1/2,-y+1/2,-z+1/2
    -y+1/2,-x+1/2,z+1/2
    -x+1/2,y+1/2,-z+1/2
    y+1/2,x+1/2,z+1/2
P-4m2 x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    -x,y,z
    y,x,-z
    x,-y,z
    -y,-x,-z
P-4c2 x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    -x,y,z+1/2
    y,x,-z+1/2
    x,-y,z+1/2
    -y,-x,-z+1/2
P-4b2 x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    -x+1/2,y+1/2,z
    y+1/2,x+1/2,-z
    x+1/2,-y+1/2,z
    -y+1/2,-x+1/2,-z
P-4n2 x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    -x+1/2,y+1/2,z+1/2
    y+1/2,x+1/2,-z+1/2
    x+1/2,-y+1/2,z+1/2
    -y+1/2,-x+1/2,-z+1/2
I-4m2 x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    -x,y,z
    y,x,-z
    x,-y,z
    -y,-x,-z
    x+1/2,y+1/2,z+1/2
    y+1/2,-x+1/2,-z+1/2
    -x+1/2,-y+1/2,z+1/2
    -y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    y+1/2,x+1/2,-z+1/2
    x+1/2,-y+1/2,z+1/2
    -y+1/2,-x+1/2,-z+1/2
I-4c2 x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    -x,y,z+1/2
    y,x,-z+1/2
    x,-y,z+1/2
    -y,-x,-z+1/2
    x+1/2,y+1/2,z+1/2
    y+1/2,-x+1/2,-z+1/2
    -x+1/2,-y+1/2,z+1/2
    -y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,z+1
    y+1/2,x+1/2,-z+1
    x+1/2,-y+1/2,z+1
    -y+1/2,-x+1/2,-z+1
I-42m x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    x,-y,-z
    -y,-x,z
    -x,y,-z
    y,x,z
    x+1/2,y+1/2,z+1/2
    y+1/2,-x+1/2,-z+1/2
    -x+1/2,-y+1/2,z+1/2
    -y+1/2,x+1/2,-z+1/2
    x+1/2,-y+1/2,-z+1/2
    -y+1/2,-x+1/2,z+1/2
    -x+1/2,y+1/2,-z+1/2
    y+1/2,x+1/2,z+1/2
I-42d x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    x,-y+1/2,-z+1/4
    -y+1/2,-x,z+3/4
    -x,y+1/2,-z+1/4
    y+1/2,x,z+3/4
    x+1/2,y+1/2,z+1/2
    y+1/2,-x+1/2,-z+1/2
    -x+1/2,-y+1/2,z+1/2
    -y+1/2,x+1/2,-z+1/2
    x+1/2,-y+1,-z+3/4
    -y+1,-x+1/2,z+5/4
    -x+1/2,y+1,-z+3/4
    y+1,x+1/2,z+5/4
P4/mmm x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
    -x,-y,-z
    y,-x,-z
    x,y,-z
    -y,x,-z
    -x,y,z
    -y,-x,z
    x,-y,z
    y,x,z
P4/mcc x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z+1/2
    y,x,-z+1/2
    -x,y,-z+1/2
    -y,-x,-z+1/2
    -x,-y,-z
    y,-x,-z
    x,y,-z
    -y,x,-z
    -x,y,z-1/2
    -y,-x,z-1/2
    x,-y,z-1/2
    y,x,z-1/2
P4/nbm:2 x,y,z
    x,y,z
    -y+1/2,x,z
    -x+1/2,-y+1/2,z
    y,-x+1/2,z
    x,-y+1/2,-z
    y,x,-z
    -x+1/2,y,-z
    -y+1/2,-x+1/2,-z
    -x,-y,-z
    y-1/2,-x,-z
    x-1/2,y-1/2,-z
    -y,x-1/2,-z
    -x,y-1/2,z
    -y,-x,z
    x-1/2,-y,z
    y-1/2,x-1/2,z
P4/nbm:1 x+1/4,y+1/4,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
    -x+1/2,-y+1/2,-z
    y+1/2,-x+1/2,-z
    x+1/2,y+1/2,-z
    -y+1/2,x+1/2,-z
    -x+1/2,y+1/2,z
    -y+1/2,-x+1/2,z
    x+1/2,-y+1/2,z
    y+1/2,x+1/2,z
P4/nnc:2 x,y,z
    x,y,z
    -y+1/2,x,z
    -x+1/2,-y+1/2,z
    y,-x+1/2,z
    x,-y+1/2,-z+1/2
    y,x,-z+1/2
    -x+1/2,y,-z+1/2
    -y+1/2,-x+1/2,-z+1/2
    -x,-y,-z
    y-1/2,-x,-z
    x-1/2,y-1/2,-z
    -y,x-1/2,-z
    -x,y-1/2,z-1/2
    -y,-x,z-1/2
    x-1/2,-y,z-1/2
    y-1/2,x-1/2,z-1/2
P4/nnc:1 x+1/4,y+1/4,z+1/4
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
    -x+1/2,-y+1/2,-z+1/2
    y+1/2,-x+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    -y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
    y+1/2,x+1/2,z+1/2
P4/mbm x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x+1/2,-y+1/2,-z
    y+1/2,x+1/2,-z
    -x+1/2,y+1/2,-z
    -y+1/2,-x+1/2,-z
    -x,-y,-z
    y,-x,-z
    x,y,-z
    -y,x,-z
    -x-1/2,y-1/2,z
    -y-1/2,-x-1/2,z
    x-1/2,-y-1/2,z
    y-1/2,x-1/2,z
P4/mnc x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x+1/2,-y+1/2,-z+1/2
    y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -y+1/2,-x+1/2,-z+1/2
    -x,-y,-z
    y,-x,-z
    x,y,-z
    -y,x,-z
    -x-1/2,y-1/2,z-1/2
    -y-1/2,-x-1/2,z-1/2
    x-1/2,-y-1/2,z-1/2
    y-1/2,x-1/2,z-1/2
P4/nmm:2 x,y,z
    x,y,z
    -y+1/2,x,z
    -x+1/2,-y+1/2,z
    y,-x+1/2,z
    x+1/2,-y,-z
    y+1/2,x+1/2,-z
    -x,y+1/2,-z
    -y,-x,-z
    -x,-y,-z
    y-1/2,-x,-z
    x-1/2,y-1/2,-z
    -y,x-1/2,-z
    -x-1/2,y,z
    -y-1/2,-x-1/2,z
    x,-y-1/2,z
    y,x,z
P4/nmm:1 x+1/4,y-1/4,z
    x,y,z
    -y+1/2,x+1/2,z
    -x,-y,z
    y+1/2,-x+1/2,z
    x+1/2,-y+1/2,-z
    y,x,-z
    -x+1/2,y+1/2,-z
    -y,-x,-z
    -x+1/2,-y+1/2,-z
    y,-x,-z
    x+1/2,y+1/2,-z
    -y,x,-z
    -x,y,z
    -y+1/2,-x+1/2,z
    x,-y,z
    y+1/2,x+1/2,z
P4/ncc:2 x,y,z
    x,y,z
    -y+1/2,x,z
    -x+1/2,-y+1/2,z
    y,-x+1/2,z
    x+1/2,-y,-z+1/2
    y+1/2,x+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    -y,-x,-z+1/2
    -x,-y,-z
    y-1/2,-x,-z
    x-1/2,y-1/2,-z
    -y,x-1/2,-z
    -x-1/2,y,z-1/2
    -y-1/2,-x-1/2,z-1/2
    x,-y-1/2,z-1/2
    y,x,z-1/2
P4/ncc:1 x+1/4,y-1/4,z
    x,y,z
    -y+1/2,x+1/2,z
    -x,-y,z
    y+1/2,-x+1/2,z
    x+1/2,-y+1/2,-z+1/2
    y,x,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -y,-x,-z+1/2
    -x+1/2,-y+1/2,-z
    y,-x,-z
    x+1/2,y+1/2,-z
    -y,x,-z
    -x,y,z-1/2
    -y+1/2,-x+1/2,z-1/2
    x,-y,z-1/2
    y+1/2,x+1/2,z-1/2
P42/mmc x,y,z
    x,y,z
    -y,x,z+1/2
    -x,-y,z
    y,-x,z+1/2
    x,-y,-z
    y,x,-z+1/2
    -x,y,-z
    -y,-x,-z+1/2
    -x,-y,-z
    y,-x,-z-1/2
    x,y,-z
    -y,x,-z-1/2
    -x,y,z
    -y,-x,z-1/2
    x,-y,z
    y,x,z-1/2
P42/mcm x,y,z
    x,y,z
    -y,x,z+1/2
    -x,-y,z
    y,-x,z+1/2
    x,-y,-z+1/2
    y,x,-z
    -x,y,-z+1/2
    -y,-x,-z
    -x,-y,-z
    y,-x,-z-1/2
    x,y,-z
    -y,x,-z-1/2
    -x,y,z-1/2
    -y,-x,z
    x,-y,z-1/2
    y,x,z
P42/nbc:2 x,y,z
    x,y,z
    -y+1/2,x,z+1/2
    -x+1/2,-y+1/2,z
    y,-x+1/2,z+1/2
    x,-y+1/2,-z
    y,x,-z+1/2
    -x+1/2,y,-z
    -y+1/2,-x+1/2,-z+1/2
    -x,-y,-z
    y-1/2,-x,-z-1/2
    x-1/2,y-1/2,-z
    -y,x-1/2,-z-1/2
    -x,y-1/2,z
    -y,-x,z-1/2
    x-1/2,-y,z
    y-1/2,x-1/2,z-1/2
P42/nbc:1 x+1/4,y-1/4,z-1/4
    x,y,z
    -y+1/2,x+1/2,z+1/2
    -x,-y,z
    y+1/2,-x+1/2,z+1/2
    x,-y,-z+1/2
    y+1/2,x+1/2,-z
    -x,y,-z+1/2
    -y+1/2,-x+1/2,-z
    -x+1/2,-y+1/2,-z+1/2
    y,-x,-z
    x+1/2,y+1/2,-z+1/2
    -y,x,-z
    -x+1/2,y+1/2,z
    -y,-x,z+1/2
    x+1/2,-y+1/2,z
    y,x,z+1/2
P42/nnm:2 x,y,z
    x,y,z
    -y+1/2,x,z+1/2
    -x+1/2,-y+1/2,z
    y,-x+1/2,z+1/2
    x,-y+1/2,-z+1/2
    y,x,-z
    -x+1/2,y,-z+1/2
    -y+1/2,-x+1/2,-z
    -x,-y,-z
    y-1/2,-x,-z-1/2
    x-1/2,y-1/2,-z
    -y,x-1/2,-z-1/2
    -x,y-1/2,z-1/2
    -y,-x,z
    x-1/2,-y,z-1/2
    y-1/2,x-1/2,z
P42/nnm:1 x+1/4,y-1/4,z+1/4
    x,y,z
    -y+1/2,x+1/2,z+1/2
    -x,-y,z
    y+1/2,-x+1/2,z+1/2
    x,-y,-z
    y+1/2,x+1/2,-z+1/2
    -x,y,-z
    -y+1/2,-x+1/2,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    y,-x,-z
    x+1/2,y+1/2,-z+1/2
    -y,x,-z
    -x+1/2,y+1/2,z+1/2
    -y,-x,z
    x+1/2,-y+1/2,z+1/2
    y,x,z
P42/mbc x,y,z
    x,y,z
    -y,x,z+1/2
    -x,-y,z
    y,-x,z+1/2
    x+1/2,-y+1/2,-z
    y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,-z
    -y+1/2,-x+1/2,-z+1/2
    -x,-y,-z
    y,-x,-z-1/2
    x,y,-z
    -y,x,-z-1/2
    -x-1/2,y-1/2,z
    -y-1/2,-x-1/2,z-1/2
    x-1/2,-y-1/2,z
    y-1/2,x-1/2,z-1/2
P42/mnm x,y,z
    x,y,z
    -y+1/2,x+1/2,z+1/2
    -x,-y,z
    y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    y,x,-z
    -x+1/2,y+1/2,-z+1/2
    -y,-x,-z
    -x,-y,-z
    y-1/2,-x-1/2,-z-1/2
    x,y,-z
    -y-1/2,x-1/2,-z-1/2
    -x-1/2,y-1/2,z-1/2
    -y,-x,z
    x-1/2,-y-1/2,z-1/2
    y,x,z
P42/nmc:2 x,y,z
    x,y,z
    -y+1/2,x,z+1/2
    -x+1/2,-y+1/2,z
    y,-x+1/2,z+1/2
    x+1/2,-y,-z
    y+1/2,x+1/2,-z+1/2
    -x,y+1/2,-z
    -y,-x,-z+1/2
    -x,-y,-z
    y-1/2,-x,-z-1/2
    x-1/2,y-1/2,-z
    -y,x-1/2,-z-1/2
    -x-1/2,y,z
    -y-1/2,-x-1/2,z-1/2
    x,-y-1/2,z
    y,x,z-1/2
P42/nmc:1 x+1/4,y-1/4,z-1/4
    x,y,z
    -y+1/2,x+1/2,z+1/2
    -x,-y,z
    y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    y,x,-z
    -x+1/2,y+1/2,-z+1/2
    -y,-x,-z
    -x+1/2,-y+1/2,-z+1/2
    y,-x,-z
    x+1/2,y+1/2,-z+1/2
    -y,x,-z
    -x,y,z
    -y+1/2,-x+1/2,z+1/2
    x,-y,z
    y+1/2,x+1/2,z+1/2
P42/ncm:2 x,y,z
    x,y,z
    -y+1/2,x,z+1/2
    -x+1/2,-y+1/2,z
    y,-x+1/2,z+1/2
    x+1/2,-y,-z+1/2
    y+1/2,x+1/2,-z
    -x,y+1/2,-z+1/2
    -y,-x,-z
    -x,-y,-z
    y-1/2,-x,-z-1/2
    x-1/2,y-1/2,-z
    -y,x-1/2,-z-1/2
    -x-1/2,y,z-1/2
    -y-1/2,-x-1/2,z
    x,-y-1/2,z-1/2
    y,x,z
P42/ncm:1 x+1/4,y-1/4,z+1/4
    x,y,z
    -y+1/2,x+1/2,z+1/2
    -x,-y,z
    y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,-z
    y,x,-z+1/2
    -x+1/2,y+1/2,-z
    -y,-x,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    y,-x,-z
    x+1/2,y+1/2,-z+1/2
    -y,x,-z
    -x,y,z+1/2
    -y+1/2,-x+1/2,z
    x,-y,z+1/2
    y+1/2,x+1/2,z
I4/mmm x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
    -x,-y,-z
    y,-x,-z
    x,y,-z
    -y,x,-z
    -x,y,z
    -y,-x,z
    x,-y,z
    y,x,z
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -y+1/2,-x+1/2,-z+1/2
    -x+1/2,-y+1/2,-z+1/2
    y+1/2,-x+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    -y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
    y+1/2,x+1/2,z+1/2
I4/mcm x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z+1/2
    y,x,-z+1/2
    -x,y,-z+1/2
    -y,-x,-z+1/2
    -x,-y,-z
    y,-x,-z
    x,y,-z
    -y,x,-z
    -x,y,z-1/2
    -y,-x,z-1/2
    x,-y,z-1/2
    y,x,z-1/2
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,-z+1
    y+1/2,x+1/2,-z+1
    -x+1/2,y+1/2,-z+1
    -y+1/2,-x+1/2,-z+1
    -x+1/2,-y+1/2,-z+1/2
    y+1/2,-x+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,z
    -y+1/2,-x+1/2,z
    x+1/2,-y+1/2,z
    y+1/2,x+1/2,z
I41/amd:2 x,y,z
    x,y,z
    -y+1/4,x+3/4,z+1/4
    -x+1/2,-y,z+1/2
    y+1/4,-x+1/4,z+3/4
    x,-y,-z
    y+1/4,x+3/4,-z+1/4
    -x+1/2,y,-z+1/2
    -y+1/4,-x+1/4,-z+3/4
    -x,-y,-z
    y-1/4,-x-3/4,-z-1/4
    x-1/2,y,-z-1/2
    -y-1/4,x-1/4,-z-3/4
    -x,y,z
    -y-1/4,-x-3/4,z-1/4
    x-1/2,-y,z-1/2
    y-1/4,x-1/4,z-3/4
    x+1/2,y+1/2,z+1/2
    -y+3/4,x+5/4,z+3/4
    -x+1,-y+1/2,z+1
    y+3/4,-x+3/4,z+5/4
    x+1/2,-y+1/2,-z+1/2
    y+3/4,x+5/4,-z+3/4
    -x+1,y+1/2,-z+1
    -y+3/4,-x+3/4,-z+5/4
    -x+1/2,-y+1/2,-z+1/2
    y+1/4,-x-1/4,-z+1/4
    x,y+1/2,-z
    -y+1/4,x+1/4,-z-1/4
    -x+1/2,y+1/2,z+1/2
    -y+1/4,-x-1/4,z+1/4
    x,-y+1/2,z
    y+1/4,x+1/4,z-1/4
I41/amd:1 x+1/2,y-1/4,z-1/8
    x,y,z
    -y,x+1/2,z+1/4
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x,z+3/4
    x,-y+1/2,-z+1/4
    y+1/2,x+1/2,-z+1/2
    -x+1/2,y,-z+3/4
    -y,-x,-z
    -x,-y+1/2,-z+1/4
    y,-x,-z
    x-1/2,y,-z-1/4
    -y-1/2,x+1/2,-z-1/2
    -x,y,z
    -y-1/2,-x,z-1/4
    x-1/2,-y+1/2,z-1/2
    y,x+1/2,z+1/4
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1,z+3/4
    -x+1,-y+1,z+1
    y+1,-x+1/2,z+5/4
    x+1/2,-y+1,-z+3/4
    y+1,x+1,-z+1
    -x+1,y+1/2,-z+5/4
    -y+1/2,-x+1/2,-z+1/2
    -x+1/2,-y+1,-z+3/4
    y+1/2,-x+1/2,-z+1/2
    x,y+1/2,-z+1/4
    -y,x+1,-z
    -x+1/2,y+1/2,z+1/2
    -y,-x+1/2,z+1/4
    x,-y+1,z
    y+1/2,x+1,z+3/4
I41/acd:2 x,y,z
    x,y,z
    -y+1/4,x+3/4,z+1/4
    -x+1/2,-y,z+1/2
    y+1/4,-x+1/4,z+3/4
    x,-y,-z+1/2
    y+1/4,x+3/4,-z+3/4
    -x+1/2,y,-z
    -y+1/4,-x+1/4,-z+1/4
    -x,-y,-z
    y-1/4,-x-3/4,-z-1/4
    x-1/2,y,-z-1/2
    -y-1/4,x-1/4,-z-3/4
    -x,y,z-1/2
    -y-1/4,-x-3/4,z-3/4
    x-1/2,-y,z
    y-1/4,x-1/4,z-1/4
    x+1/2,y+1/2,z+1/2
    -y+3/4,x+5/4,z+3/4
    -x+1,-y+1/2,z+1
    y+3/4,-x+3/4,z+5/4
    x+1/2,-y+1/2,-z+1
    y+3/4,x+5/4,-z+5/4
    -x+1,y+1/2,-z+1/2
    -y+3/4,-x+3/4,-z+3/4
    -x+1/2,-y+1/2,-z+1/2
    y+1/4,-x-1/4,-z+1/4
    x,y+1/2,-z
    -y+1/4,x+1/4,-z-1/4
    -x+1/2,y+1/2,z
    -y+1/4,-x-1/4,z-1/4
    x,-y+1/2,z+1/2
    y+1/4,x+1/4,z+1/4
I41/acd:1 x+1/2,y-1/4,z+3/8
    x,y,z
    -y,x+1/2,z+1/4
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x,z+3/4
    x+1/2,-y,-z+1/4
    y,x,-z+1/2
    -x,y+1/2,-z+3/4
    -y+1/2,-x+1/2,-z
    -x,-y+1/2,-z+1/4
    y,-x,-z
    x-1/2,y,-z-1/4
    -y-1/2,x+1/2,-z-1/2
    -x-1/2,y+1/2,z
    -y,-x+1/2,z-1/4
    x,-y,z-1/2
    y-1/2,x,z+1/4
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1,z+3/4
    -x+1,-y+1,z+1
    y+1,-x+1/2,z+5/4
    x+1,-y+1/2,-z+3/4
    y+1/2,x+1/2,-z+1
    -x+1/2,y+1,-z+5/4
    -y+1,-x+1,-z+1/2
    -x+1/2,-y+1,-z+3/4
    y+1/2,-x+1/2,-z+1/2
    x,y+1/2,-z+1/4
    -y,x+1,-z
    -x,y+1,z+1/2
    -y+1/2,-x+1,z+1/4
    x+1/2,-y+1/2,z
    y,x+1/2,z+3/4
P3 x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
P31 x,y,z
    x,y,z
    -y,x-y,z+1/3
    -x+y,-x,z+2/3
P32 x,y,z
    x,y,z
    -y,x-y,z+2/3
    -x+y,-x,z+1/3
R3:H x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    x+2/3,y+1/3,z+1/3
    -y+2/3,x-y+1/3,z+1/3
    -x+y+2/3,-x+1/3,z+1/3
    x+1/3,y+2/3,z+2/3
    -y+1/3,x-y+2/3,z+2/3
    -x+y+1/3,-x+2/3,z+2/3
R3:R -1/3*x+2/3*y-1/3*z,-2/3*x+1/3*y+1/3*z,1/3*x+1/3*y+1/3*z
    x,y,z
    z,x,y
    y,z,x
P-3 x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    -x,-y,-z
    y,-x+y,-z
    x-y,x,-z
R-3:H x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    -x,-y,-z
    y,-x+y,-z
    x-y,x,-z
    x+2/3,y+1/3,z+1/3
    -y+2/3,x-y+1/3,z+1/3
    -x+y+2/3,-x+1/3,z+1/3
    -x+2/3,-y+1/3,-z+1/3
    y+2/3,-x+y+1/3,-z+1/3
    x-y+2/3,x+1/3,-z+1/3
    x+1/3,y+2/3,z+2/3
    -y+1/3,x-y+2/3,z+2/3
    -x+y+1/3,-x+2/3,z+2/3
    -x+1/3,-y+2/3,-z+2/3
    y+1/3,-x+y+2/3,-z+2/3
    x-y+1/3,x+2/3,-z+2/3
R-3:R -1/3*x+2/3*y-1/3*z,-2/3*x+1/3*y+1/3*z,1/3*x+1/3*y+1/3*z
    x,y,z
    z,x,y
    y,z,x
    -x,-y,-z
    -z,-x,-y
    -y,-z,-x
P312 x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    -y,-x,-z
    x,x-y,-z
    -x+y,y,-z
P321 x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    y,x,-z
    -x,-x+y,-z
    x-y,-y,-z
P3112 x,y,z
    x,y,z
    -y,x-y,z+1/3
    -x+y,-x,z+2/3
    -y,-x,-z+2/3
    x,x-y,-z
    -x+y,y,-z+1/3
P3121 x,y,z
    x,y,z
    -y,x-y,z+1/3
    -x+y,-x,z+2/3
    y,x,-z
    -x,-x+y,-z+1/3
    x-y,-y,-z+2/3
P3212 x,y,z
    x,y,z
    -y,x-y,z+2/3
    -x+y,-x,z+1/3
    -y,-x,-z+1/3
    x,x-y,-z
    -x+y,y,-z+2/3
P3221 x,y,z
    x,y,z
    -y,x-y,z+2/3
    -x+y,-x,z+1/3
    y,x,-z
    -x,-x+y,-z+2/3
    x-y,-y,-z+1/3
R32:H x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    y,x,-z
    -x,-x+y,-z
    x-y,-y,-z
    x+2/3,y+1/3,z+1/3
    -y+2/3,x-y+1/3,z+1/3
    -x+y+2/3,-x+1/3,z+1/3
    y+2/3,x+1/3,-z+1/3
    -x+2/3,-x+y+1/3,-z+1/3
    x-y+2/3,-y+1/3,-z+1/3
    x+1/3,y+2/3,z+2/3
    -y+1/3,x-y+2/3,z+2/3
    -x+y+1/3,-x+2/3,z+2/3
    y+1/3,x+2/3,-z+2/3
    -x+1/3,-x+y+2/3,-z+2/3
    x-y+1/3,-y+2/3,-z+2/3
R32:R -1/3*x+2/3*y-1/3*z,-2/3*x+1/3*y+1/3*z,1/3*x+1/3*y+1/3*z
    x,y,z
    z,x,y
    y,z,x
    -y,-x,-z
    -z,-y,-x
    -x,-z,-y
P3m1 x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    -y,-x,z
    x,x-y,z
    -x+y,y,z
P31m x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    y,x,z
    -x,-x+y,z
    x-y,-y,z
P3c1 x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    -y,-x,z+1/2
    x,x-y,z+1/2
    -x+y,y,z+1/2
P31c x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    y,x,z+1/2
    -x,-x+y,z+1/2
    x-y,-y,z+1/2
R3m:H x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    -y,-x,z
    x,x-y,z
    -x+y,y,z
    x+2/3,y+1/3,z+1/3
    -y+2/3,x-y+1/3,z+1/3
    -x+y+2/3,-x+1/3,z+1/3
    -y+2/3,-x+1/3,z+1/3
    x+2/3,x-y+1/3,z+1/3
    -x+y+2/3,y+1/3,z+1/3
    x+1/3,y+2/3,z+2/3
    -y+1/3,x-y+2/3,z+2/3
    -x+y+1/3,-x+2/3,z+2/3
    -y+1/3,-x+2/3,z+2/3
    x+1/3,x-y+2/3,z+2/3
    -x+y+1/3,y+2/3,z+2/3
R3m:R -1/3*x+2/3*y-1/3*z,-2/3*x+1/3*y+1/3*z,1/3*x+1/3*y+1/3*z
    x,y,z
    z,x,y
    y,z,x
    y,x,z
    z,y,x
    x,z,y
R3c:H x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    -y,-x,z+1/2
    x,x-y,z+1/2
    -x+y,y,z+1/2
    x+2/3,y+1/3,z+1/3
    -y+2/3,x-y+1/3,z+1/3
    -x+y+2/3,-x+1/3,z+1/3
    -y+2/3,-x+1/3,z+5/6
    x+2/3,x-y+1/3,z+5/6
    -x+y+2/3,y+1/3,z+5/6
    x+1/3,y+2/3,z+2/3
    -y+1/3,x-y+2/3,z+2/3
    -x+y+1/3,-x+2/3,z+2/3
    -y+1/3,-x+2/3,z+7/6
    x+1/3,x-y+2/3,z+7/6
    -x+y+1/3,y+2/3,z+7/6
R3c:R -1/3*x+2/3*y-1/3*z,-2/3*x+1/3*y+1/3*z,1/3*x+1/3*y+1/3*z
    x,y,z
    z,x,y
    y,z,x
    y+1/2,x+1/2,z+1/2
    z+1/2,y+1/2,x+1/2
    x+1/2,z+1/2,y+1/2
P-31m x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    -y,-x,-z
    x,x-y,-z
    -x+y,y,-z
    -x,-y,-z
    y,-x+y,-z
    x-y,x,-z
    y,x,z
    -x,-x+y,z
    x-y,-y,z
P-31c x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    -y,-x,-z+1/2
    x,x-y,-z+1/2
    -x+y,y,-z+1/2
    -x,-y,-z
    y,-x+y,-z
    x-y,x,-z
    y,x,z-1/2
    -x,-x+y,z-1/2
    x-y,-y,z-1/2
P-3m1 x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    y,x,-z
    -x,-x+y,-z
    x-y,-y,-z
    -x,-y,-z
    y,-x+y,-z
    x-y,x,-z
    -y,-x,z
    x,x-y,z
    -x+y,y,z
P-3c1 x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    y,x,-z+1/2
    -x,-x+y,-z+1/2
    x-y,-y,-z+1/2
    -x,-y,-z
    y,-x+y,-z
    x-y,x,-z
    -y,-x,z-1/2
    x,x-y,z-1/2
    -x+y,y,z-1/2
R-3m:H x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    y,x,-z
    -x,-x+y,-z
    x-y,-y,-z
    -x,-y,-z
    y,-x+y,-z
    x-y,x,-z
    -y,-x,z
    x,x-y,z
    -x+y,y,z
    x+2/3,y+1/3,z+1/3
    -y+2/3,x-y+1/3,z+1/3
    -x+y+2/3,-x+1/3,z+1/3
    y+2/3,x+1/3,-z+1/3
    -x+2/3,-x+y+1/3,-z+1/3
    x-y+2/3,-y+1/3,-z+1/3
    -x+2/3,-y+1/3,-z+1/3
    y+2/3,-x+y+1/3,-z+1/3
    x-y+2/3,x+1/3,-z+1/3
    -y+2/3,-x+1/3,z+1/3
    x+2/3,x-y+1/3,z+1/3
    -x+y+2/3,y+1/3,z+1/3
    x+1/3,y+2/3,z+2/3
    -y+1/3,x-y+2/3,z+2/3
    -x+y+1/3,-x+2/3,z+2/3
    y+1/3,x+2/3,-z+2/3
    -x+1/3,-x+y+2/3,-z+2/3
    x-y+1/3,-y+2/3,-z+2/3
    -x+1/3,-y+2/3,-z+2/3
    y+1/3,-x+y+2/3,-z+2/3
    x-y+1/3,x+2/3,-z+2/3
    -y+1/3,-x+2/3,z+2/3
    x+1/3,x-y+2/3,z+2/3
    -x+y+1/3,y+2/3,z+2/3
R-3m:R -1/3*x+2/3*y-1/3*z,-2/3*x+1/3*y+1/3*z,1/3*x+1/3*y+1/3*z
    x,y,z
    z,x,y
    y,z,x
    -y,-x,-z
    -z,-y,-x
    -x,-z,-y
    -x,-y,-z
    -z,-x,-y
    -y,-z,-x
    y,x,z
    z,y,x
    x,z,y
R-3c:H x,y,z
    x,y,z
    -y,x-y,z
    -x+y,-x,z
    y,x,-z+1/2
    -x,-x+y,-z+1/2
    x-y,-y,-z+1/2
    -x,-y,-z
    y,-x+y,-z
    x-y,x,-z
    -y,-x,z-1/2
    x,x-y,z-1/2
    -x+y,y,z-1/2
    x+2/3,y+1/3,z+1/3
    -y+2/3,x-y+1/3,z+1/3
    -x+y+2/3,-x+1/3,z+1/3
    y+2/3,x+1/3,-z+5/6
    -x+2/3,-x+y+1/3,-z+5/6
    x-y+2/3,-y+1/3,-z+5/6
    -x+2/3,-y+1/3,-z+1/3
    y+2/3,-x+y+1/3,-z+1/3
    x-y+2/3,x+1/3,-z+1/3
    -y+2/3,-x+1/3,z-1/6
    x+2/3,x-y+1/3,z-1/6
    -x+y+2/3,y+1/3,z-1/6
    x+1/3,y+2/3,z+2/3
    -y+1/3,x-y+2/3,z+2/3
    -x+y+1/3,-x+2/3,z+2/3
    y+1/3,x+2/3,-z+7/6
    -x+1/3,-x+y+2/3,-z+7/6
    x-y+1/3,-y+2/3,-z+7/6
    -x+1/3,-y+2/3,-z+2/3
    y+1/3,-x+y+2/3,-z+2/3
    x-y+1/3,x+2/3,-z+2/3
    -y+1/3,-x+2/3,z+1/6
    x+1/3,x-y+2/3,z+1/6
    -x+y+1/3,y+2/3,z+1/6
R-3c:R -1/3*x+2/3*y-1/3*z,-2/3*x+1/3*y+1/3*z,1/3*x+1/3*y+1/3*z
    x,y,z
    z,x,y
    y,z,x
    -y+1/2,-x+1/2,-z+1/2
    -z+1/2,-y+1/2,-x+1/2
    -x+1/2,-z+1/2,-y+1/2
    -x,-y,-z
    -z,-x,-y
    -y,-z,-x
    y-1/2,x-1/2,z-1/2
    z-1/2,y-1/2,x-1/2
    x-1/2,z-1/2,y-1/2
P6 x,y,z
    x,y,z
    x-y,x,z
    -y,x-y,z
    -x,-y,z
    -x+y,-x,z
    y,-x+y,z
P61 x,y,z
    x,y,z
    x-y,x,z+1/6
    -y,x-y,z+1/3
    -x,-y,z+1/2
    -x+y,-x,z+2/3
    y,-x+y,z+5/6
P65 x,y,z
    x,y,z
    x-y,x,z+5/6
    -y,x-y,z+2/3
    -x,-y,z+1/2
    -x+y,-x,z+1/3
    y,-x+y,z+1/6
P62 x,y,z
    x,y,z
    x-y,x,z+1/3
    -y,x-y,z+2/3
    -x,-y,z
    -x+y,-x,z+1/3
    y,-x+y,z+2/3
P64 x,y,z
    x,y,z
    x-y,x,z+2/3
    -y,x-y,z+1/3
    -x,-y,z
    -x+y,-x,z+2/3
    y,-x+y,z+1/3
P63 x,y,z
    x,y,z
    x-y,x,z+1/2
    -y,x-y,z
    -x,-y,z+1/2
    -x+y,-x,z
    y,-x+y,z+1/2
P-6 x,y,z
    x,y,z
    -x+y,-x,-z
    -y,x-y,z
    x,y,-z
    -x+y,-x,z
    -y,x-y,-z
P6/m x,y,z
    x,y,z
    x-y,x,z
    -y,x-y,z
    -x,-y,z
    -x+y,-x,z
    y,-x+y,z
    -x,-y,-z
    -x+y,-x,-z
    y,-x+y,-z
    x,y,-z
    x-y,x,-z
    -y,x-y,-z
P63/m x,y,z
    x,y,z
    x-y,x,z+1/2
    -y,x-y,z
    -x,-y,z+1/2
    -x+y,-x,z
    y,-x+y,z+1/2
    -x,-y,-z
    -x+y,-x,-z-1/2
    y,-x+y,-z
    x,y,-z-1/2
    x-y,x,-z
    -y,x-y,-z-1/2
P622 x,y,z
    x,y,z
    x-y,x,z
    -y,x-y,z
    -x,-y,z
    -x+y,-x,z
    y,-x+y,z
    -y,-x,-z
    x-y,-y,-z
    x,x-y,-z
    y,x,-z
    -x+y,y,-z
    -x,-x+y,-z
P6122 x,y,z
    x,y,z
    x-y,x,z+1/6
    -y,x-y,z+1/3
    -x,-y,z+1/2
    -x+y,-x,z+2/3
    y,-x+y,z+5/6
    -y,-x,-z+5/6
    x-y,-y,-z
    x,x-y,-z+1/6
    y,x,-z+1/3
    -x+y,y,-z+1/2
    -x,-x+y,-z+2/3
P6522 x,y,z
    x,y,z
    x-y,x,z+5/6
    -y,x-y,z+2/3
    -x,-y,z+1/2
    -x+y,-x,z+1/3
    y,-x+y,z+1/6
    -y,-x,-z+1/6
    x-y,-y,-z
    x,x-y,-z+5/6
    y,x,-z+2/3
    -x+y,y,-z+1/2
    -x,-x+y,-z+1/3
P6222 x,y,z
    x,y,z
    x-y,x,z+1/3
    -y,x-y,z+2/3
    -x,-y,z
    -x+y,-x,z+1/3
    y,-x+y,z+2/3
    -y,-x,-z+2/3
    x-y,-y,-z
    x,x-y,-z+1/3
    y,x,-z+2/3
    -x+y,y,-z
    -x,-x+y,-z+1/3
P6422 x,y,z
    x,y,z
    x-y,x,z+2/3
    -y,x-y,z+1/3
    -x,-y,z
    -x+y,-x,z+2/3
    y,-x+y,z+1/3
    -y,-x,-z+1/3
    x-y,-y,-z
    x,x-y,-z+2/3
    y,x,-z+1/3
    -x+y,y,-z
    -x,-x+y,-z+2/3
P6322 x,y,z
    x,y,z
    x-y,x,z+1/2
    -y,x-y,z
    -x,-y,z+1/2
    -x+y,-x,z
    y,-x+y,z+1/2
    -y,-x,-z+1/2
    x-y,-y,-z
    x,x-y,-z+1/2
    y,x,-z
    -x+y,y,-z+1/2
    -x,-x+y,-z
P6mm x,y,z
    x,y,z
    x-y,x,z
    -y,x-y,z
    -x,-y,z
    -x+y,-x,z
    y,-x+y,z
    y,x,z
    -x+y,y,z
    -x,-x+y,z
    -y,-x,z
    x-y,-y,z
    x,x-y,z
P6cc x,y,z
    x,y,z
    x-y,x,z
    -y,x-y,z
    -x,-y,z
    -x+y,-x,z
    y,-x+y,z
    y,x,z+1/2
    -x+y,y,z+1/2
    -x,-x+y,z+1/2
    -y,-x,z+1/2
    x-y,-y,z+1/2
    x,x-y,z+1/2
P63cm x,y,z
    x,y,z
    x-y,x,z+1/2
    -y,x-y,z
    -x,-y,z+1/2
    -x+y,-x,z
    y,-x+y,z+1/2
    y,x,z
    -x+y,y,z+1/2
    -x,-x+y,z
    -y,-x,z+1/2
    x-y,-y,z
    x,x-y,z+1/2
P63mc x,y,z
    x,y,z
    x-y,x,z+1/2
    -y,x-y,z
    -x,-y,z+1/2
    -x+y,-x,z
    y,-x+y,z+1/2
    y,x,z+1/2
    -x+y,y,z
    -x,-x+y,z+1/2
    -y,-x,z
    x-y,-y,z+1/2
    x,x-y,z
P-6m2 x,y,z
    x,y,z
    -x+y,-x,-z
    -y,x-y,z
    x,y,-z
    -x+y,-x,z
    -y,x-y,-z
    -y,-x,-z
    -x+y,y,z
    x,x-y,-z
    -y,-x,z
    -x+y,y,-z
    x,x-y,z
P-6c2 x,y,z
    x,y,z
    -x+y,-x,-z+1/2
    -y,x-y,z
    x,y,-z+1/2
    -x+y,-x,z
    -y,x-y,-z+1/2
    -y,-x,-z
    -x+y,y,z+1/2
    x,x-y,-z
    -y,-x,z+1/2
    -x+y,y,-z
    x,x-y,z+1/2
P-62m x,y,z
    x,y,z
    -x+y,-x,-z
    -y,x-y,z
    x,y,-z
    -x+y,-x,z
    -y,x-y,-z
    y,x,z
    x-y,-y,-z
    -x,-x+y,z
    y,x,-z
    x-y,-y,z
    -x,-x+y,-z
P-62c x,y,z
    x,y,z
    -x+y,-x,-z+1/2
    -y,x-y,z
    x,y,-z+1/2
    -x+y,-x,z
    -y,x-y,-z+1/2
    y,x,z+1/2
    x-y,-y,-z
    -x,-x+y,z+1/2
    y,x,-z
    x-y,-y,z+1/2
    -x,-x+y,-z
P6/mmm x,y,z
    x,y,z
    x-y,x,z
    -y,x-y,z
    -x,-y,z
    -x+y,-x,z
    y,-x+y,z
    -y,-x,-z
    x-y,-y,-z
    x,x-y,-z
    y,x,-z
    -x+y,y,-z
    -x,-x+y,-z
    -x,-y,-z
    -x+y,-x,-z
    y,-x+y,-z
    x,y,-z
    x-y,x,-z
    -y,x-y,-z
    y,x,z
    -x+y,y,z
    -x,-x+y,z
    -y,-x,z
    x-y,-y,z
    x,x-y,z
P6/mcc x,y,z
    x,y,z
    x-y,x,z
    -y,x-y,z
    -x,-y,z
    -x+y,-x,z
    y,-x+y,z
    -y,-x,-z+1/2
    x-y,-y,-z+1/2
    x,x-y,-z+1/2
    y,x,-z+1/2
    -x+y,y,-z+1/2
    -x,-x+y,-z+1/2
    -x,-y,-z
    -x+y,-x,-z
    y,-x+y,-z
    x,y,-z
    x-y,x,-z
    -y,x-y,-z
    y,x,z-1/2
    -x+y,y,z-1/2
    -x,-x+y,z-1/2
    -y,-x,z-1/2
    x-y,-y,z-1/2
    x,x-y,z-1/2
P63/mcm x,y,z
    x,y,z
    x-y,x,z+1/2
    -y,x-y,z
    -x,-y,z+1/2
    -x+y,-x,z
    y,-x+y,z+1/2
    -y,-x,-z
    x-y,-y,-z+1/2
    x,x-y,-z
    y,x,-z+1/2
    -x+y,y,-z
    -x,-x+y,-z+1/2
    -x,-y,-z
    -x+y,-x,-z-1/2
    y,-x+y,-z
    x,y,-z-1/2
    x-y,x,-z
    -y,x-y,-z-1/2
    y,x,z
    -x+y,y,z-1/2
    -x,-x+y,z
    -y,-x,z-1/2
    x-y,-y,z
    x,x-y,z-1/2
P63/mmc x,y,z
    x,y,z
    x-y,x,z+1/2
    -y,x-y,z
    -x,-y,z+1/2
    -x+y,-x,z
    y,-x+y,z+1/2
    -y,-x,-z+1/2
    x-y,-y,-z
    x,x-y,-z+1/2
    y,x,-z
    -x+y,y,-z+1/2
    -x,-x+y,-z
    -x,-y,-z
    -x+y,-x,-z-1/2
    y,-x+y,-z
    x,y,-z-1/2
    x-y,x,-z
    -y,x-y,-z-1/2
    y,x,z-1/2
    -x+y,y,z
    -x,-x+y,z-1/2
    -y,-x,z
    x-y,-y,z-1/2
    x,x-y,z
P23 x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    z,x,y
    -z,-x,y
    z,-x,-y
    -z,x,-y
    y,z,x
    y,-z,-x
    -y,z,-x
    -y,-z,x
F23 x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    z,x,y
    -z,-x,y
    z,-x,-y
    -z,x,-y
    y,z,x
    y,-z,-x
    -y,z,-x
    -y,-z,x
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    z,x+1/2,y+1/2
    -z,-x+1/2,y+1/2
    z,-x+1/2,-y+1/2
    -z,x+1/2,-y+1/2
    y,z+1/2,x+1/2
    y,-z+1/2,-x+1/2
    -y,z+1/2,-x+1/2
    -y,-z+1/2,x+1/2
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y,-z+1/2
    z+1/2,x,y+1/2
    -z+1/2,-x,y+1/2
    z+1/2,-x,-y+1/2
    -z+1/2,x,-y+1/2
    y+1/2,z,x+1/2
    y+1/2,-z,-x+1/2
    -y+1/2,z,-x+1/2
    -y+1/2,-z,x+1/2
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
    z+1/2,x+1/2,y
    -z+1/2,-x+1/2,y
    z+1/2,-x+1/2,-y
    -z+1/2,x+1/2,-y
    y+1/2,z+1/2,x
    y+1/2,-z+1/2,-x
    -y+1/2,z+1/2,-x
    -y+1/2,-z+1/2,x
I23 x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    z,x,y
    -z,-x,y
    z,-x,-y
    -z,x,-y
    y,z,x
    y,-z,-x
    -y,z,-x
    -y,-z,x
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    z+1/2,x+1/2,y+1/2
    -z+1/2,-x+1/2,y+1/2
    z+1/2,-x+1/2,-y+1/2
    -z+1/2,x+1/2,-y+1/2
    y+1/2,z+1/2,x+1/2
    y+1/2,-z+1/2,-x+1/2
    -y+1/2,z+1/2,-x+1/2
    -y+1/2,-z+1/2,x+1/2
P213 x,y,z
    x,y,z
    -x+1/2,-y,z+1/2
    x+1/2,-y+1/2,-z
    -x,y+1/2,-z+1/2
    z,x,y
    -z+1/2,-x,y+1/2
    z+1/2,-x+1/2,-y
    -z,x+1/2,-y+1/2
    y,z,x
    y+1/2,-z+1/2,-x
    -y,z+1/2,-x+1/2
    -y+1/2,-z,x+1/2
I213 x,y,z
    x,y,z
    -x,-y+1/2,z
    x,-y,-z+1/2
    -x,y+1/2,-z+1/2
    z,x,y
    -z,-x+1/2,y
    z,-x,-y+1/2
    -z,x+1/2,-y+1/2
    y,z,x
    y,-z,-x+1/2
    -y,z+1/2,-x+1/2
    -y+1/2,-z,x+1/2
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1,z+1/2
    x+1/2,-y+1/2,-z+1
    -x+1/2,y+1,-z+1
    z+1/2,x+1/2,y+1/2
    -z+1/2,-x+1,y+1/2
    z+1/2,-x+1/2,-y+1
    -z+1/2,x+1,-y+1
    y+1/2,z+1/2,x+1/2
    y+1/2,-z+1/2,-x+1
    -y+1/2,z+1,-x+1
    -y+1,-z+1/2,x+1
Pm-3 x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    z,x,y
    -z,-x,y
    z,-x,-y
    -z,x,-y
    y,z,x
    y,-z,-x
    -y,z,-x
    -y,-z,x
    -x,-y,-z
    x,y,-z
    -x,y,z
    x,-y,z
    -z,-x,-y
    z,x,-y
    -z,x,y
    z,-x,y
    -y,-z,-x
    -y,z,x
    y,-z,x
    y,z,-x
Pn-3:2 x,y,z
    x,y,z
    -x+1/2,-y+1/2,z
    x,-y+1/2,-z+1/2
    -x+1/2,y,-z+1/2
    z,x,y
    -z+1/2,-x+1/2,y
    z,-x+1/2,-y+1/2
    -z+1/2,x,-y+1/2
    y,z,x
    y,-z+1/2,-x+1/2
    -y+1/2,z,-x+1/2
    -y+1/2,-z+1/2,x
    -x,-y,-z
    x-1/2,y-1/2,-z
    -x,y-1/2,z-1/2
    x-1/2,-y,z-1/2
    -z,-x,-y
    z-1/2,x-1/2,-y
    -z,x-1/2,y-1/2
    z-1/2,-x,y-1/2
    -y,-z,-x
    -y,z-1/2,x-1/2
    y-1/2,-z,x-1/2
    y-1/2,z-1/2,-x
Pn-3:1 x+1/4,y+1/4,z+1/4
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    z,x,y
    -z,-x,y
    z,-x,-y
    -z,x,-y
    y,z,x
    y,-z,-x
    -y,z,-x
    -y,-z,x
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
    -z+1/2,-x+1/2,-y+1/2
    z+1/2,x+1/2,-y+1/2
    -z+1/2,x+1/2,y+1/2
    z+1/2,-x+1/2,y+1/2
    -y+1/2,-z+1/2,-x+1/2
    -y+1/2,z+1/2,x+1/2
    y+1/2,-z+1/2,x+1/2
    y+1/2,z+1/2,-x+1/2
Fm-3 x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    z,x,y
    -z,-x,y
    z,-x,-y
    -z,x,-y
    y,z,x
    y,-z,-x
    -y,z,-x
    -y,-z,x
    -x,-y,-z
    x,y,-z
    -x,y,z
    x,-y,z
    -z,-x,-y
    z,x,-y
    -z,x,y
    z,-x,y
    -y,-z,-x
    -y,z,x
    y,-z,x
    y,z,-x
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    z,x+1/2,y+1/2
    -z,-x+1/2,y+1/2
    z,-x+1/2,-y+1/2
    -z,x+1/2,-y+1/2
    y,z+1/2,x+1/2
    y,-z+1/2,-x+1/2
    -y,z+1/2,-x+1/2
    -y,-z+1/2,x+1/2
    -x,-y+1/2,-z+1/2
    x,y+1/2,-z+1/2
    -x,y+1/2,z+1/2
    x,-y+1/2,z+1/2
    -z,-x+1/2,-y+1/2
    z,x+1/2,-y+1/2
    -z,x+1/2,y+1/2
    z,-x+1/2,y+1/2
    -y,-z+1/2,-x+1/2
    -y,z+1/2,x+1/2
    y,-z+1/2,x+1/2
    y,z+1/2,-x+1/2
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y,-z+1/2
    z+1/2,x,y+1/2
    -z+1/2,-x,y+1/2
    z+1/2,-x,-y+1/2
    -z+1/2,x,-y+1/2
    y+1/2,z,x+1/2
    y+1/2,-z,-x+1/2
    -y+1/2,z,-x+1/2
    -y+1/2,-z,x+1/2
    -x+1/2,-y,-z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y,z+1/2
    x+1/2,-y,z+1/2
    -z+1/2,-x,-y+1/2
    z+1/2,x,-y+1/2
    -z+1/2,x,y+1/2
    z+1/2,-x,y+1/2
    -y+1/2,-z,-x+1/2
    -y+1/2,z,x+1/2
    y+1/2,-z,x+1/2
    y+1/2,z,-x+1/2
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
    z+1/2,x+1/2,y
    -z+1/2,-x+1/2,y
    z+1/2,-x+1/2,-y
    -z+1/2,x+1/2,-y
    y+1/2,z+1/2,x
    y+1/2,-z+1/2,-x
    -y+1/2,z+1/2,-x
    -y+1/2,-z+1/2,x
    -x+1/2,-y+1/2,-z
    x+1/2,y+1/2,-z
    -x+1/2,y+1/2,z
    x+1/2,-y+1/2,z
    -z+1/2,-x+1/2,-y
    z+1/2,x+1/2,-y
    -z+1/2,x+1/2,y
    z+1/2,-x+1/2,y
    -y+1/2,-z+1/2,-x
    -y+1/2,z+1/2,x
    y+1/2,-z+1/2,x
    y+1/2,z+1/2,-x
Fd-3:2 x,y,z
    x,y,z
    -x+1/4,-y+1/4,z
    x,-y+1/4,-z+1/4
    -x+1/4,y,-z+1/4
    z,x,y
    -z+1/4,-x+1/4,y
    z,-x+1/4,-y+1/4
    -z+1/4,x,-y+1/4
    y,z,x
    y,-z+1/4,-x+1/4
    -y+1/4,z,-x+1/4
    -y+1/4,-z+1/4,x
    -x,-y,-z
    x-1/4,y-1/4,-z
    -x,y-1/4,z-1/4
    x-1/4,-y,z-1/4
    -z,-x,-y
    z-1/4,x-1/4,-y
    -z,x-1/4,y-1/4
    z-1/4,-x,y-1/4
    -y,-z,-x
    -y,z-1/4,x-1/4
    y-1/4,-z,x-1/4
    y-1/4,z-1/4,-x
    x,y+1/2,z+1/2
    -x+1/4,-y+3/4,z+1/2
    x,-y+3/4,-z+3/4
    -x+1/4,y+1/2,-z+3/4
    z,x+1/2,y+1/2
    -z+1/4,-x+3/4,y+1/2
    z,-x+3/4,-y+3/4
    -z+1/4,x+1/2,-y+3/4
    y,z+1/2,x+1/2
    y,-z+3/4,-x+3/4
    -y+1/4,z+1/2,-x+3/4
    -y+1/4,-z+3/4,x+1/2
    -x,-y+1/2,-z+1/2
    x-1/4,y+1/4,-z+1/2
    -x,y+1/4,z+1/4
    x-1/4,-y+1/2,z+1/4
    -z,-x+1/2,-y+1/2
    z-1/4,x+1/4,-y+1/2
    -z,x+1/4,y+1/4
    z-1/4,-x+1/2,y+1/4
    -y,-z+1/2,-x+1/2
    -y,z+1/4,x+1/4
    y-1/4,-z+1/2,x+1/4
    y-1/4,z+1/4,-x+1/2
    x+1/2,y,z+1/2
    -x+3/4,-y+1/4,z+1/2
    x+1/2,-y+1/4,-z+3/4
    -x+3/4,y,-z+3/4
    z+1/2,x,y+1/2
    -z+3/4,-x+1/4,y+1/2
    z+1/2,-x+1/4,-y+3/4
    -z+3/4,x,-y+3/4
    y+1/2,z,x+1/2
    y+1/2,-z+1/4,-x+3/4
    -y+3/4,z,-x+3/4
    -y+3/4,-z+1/4,x+1/2
    -x+1/2,-y,-z+1/2
    x+1/4,y-1/4,-z+1/2
    -x+1/2,y-1/4,z+1/4
    x+1/4,-y,z+1/4
    -z+1/2,-x,-y+1/2
    z+1/4,x-1/4,-y+1/2
    -z+1/2,x-1/4,y+1/4
    z+1/4,-x,y+1/4
    -y+1/2,-z,-x+1/2
    -y+1/2,z-1/4,x+1/4
    y+1/4,-z,x+1/4
    y+1/4,z-1/4,-x+1/2
    x+1/2,y+1/2,z
    -x+3/4,-y+3/4,z
    x+1/2,-y+3/4,-z+1/4
    -x+3/4,y+1/2,-z+1/4
    z+1/2,x+1/2,y
    -z+3/4,-x+3/4,y
    z+1/2,-x+3/4,-y+1/4
    -z+3/4,x+1/2,-y+1/4
    y+1/2,z+1/2,x
    y+1/2,-z+3/4,-x+1/4
    -y+3/4,z+1/2,-x+1/4
    -y+3/4,-z+3/4,x
    -x+1/2,-y+1/2,-z
    x+1/4,y+1/4,-z
    -x+1/2,y+1/4,z-1/4
    x+1/4,-y+1/2,z-1/4
    -z+1/2,-x+1/2,-y
    z+1/4,x+1/4,-y
    -z+1/2,x+1/4,y-1/4
    z+1/4,-x+1/2,y-1/4
    -y+1/2,-z+1/2,-x
    -y+1/2,z+1/4,x-1/4
    y+1/4,-z+1/2,x-1/4
    y+1/4,z+1/4,-x
Fd-3:1 x-1/8,y-1/8,z-1/8
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    z,x,y
    -z,-x,y
    z,-x,-y
    -z,x,-y
    y,z,x
    y,-z,-x
    -y,z,-x
    -y,-z,x
    -x+1/4,-y+1/4,-z+1/4
    x+1/4,y+1/4,-z+1/4
    -x+1/4,y+1/4,z+1/4
    x+1/4,-y+1/4,z+1/4
    -z+1/4,-x+1/4,-y+1/4
    z+1/4,x+1/4,-y+1/4
    -z+1/4,x+1/4,y+1/4
    z+1/4,-x+1/4,y+1/4
    -y+1/4,-z+1/4,-x+1/4
    -y+1/4,z+1/4,x+1/4
    y+1/4,-z+1/4,x+1/4
    y+1/4,z+1/4,-x+1/4
    x,y+1/2,z+1/2
    -x,-y+1/2,z+1/2
    x,-y+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    z,x+1/2,y+1/2
    -z,-x+1/2,y+1/2
    z,-x+1/2,-y+1/2
    -z,x+1/2,-y+1/2
    y,z+1/2,x+1/2
    y,-z+1/2,-x+1/2
    -y,z+1/2,-x+1/2
    -y,-z+1/2,x+1/2
    -x+1/4,-y+3/4,-z+3/4
    x+1/4,y+3/4,-z+3/4
    -x+1/4,y+3/4,z+3/4
    x+1/4,-y+3/4,z+3/4
    -z+1/4,-x+3/4,-y+3/4
    z+1/4,x+3/4,-y+3/4
    -z+1/4,x+3/4,y+3/4
    z+1/4,-x+3/4,y+3/4
    -y+1/4,-z+3/4,-x+3/4
    -y+1/4,z+3/4,x+3/4
    y+1/4,-z+3/4,x+3/4
    y+1/4,z+3/4,-x+3/4
    x+1/2,y,z+1/2
    -x+1/2,-y,z+1/2
    x+1/2,-y,-z+1/2
    -x+1/2,y,-z+1/2
    z+1/2,x,y+1/2
    -z+1/2,-x,y+1/2
    z+1/2,-x,-y+1/2
    -z+1/2,x,-y+1/2
    y+1/2,z,x+1/2
    y+1/2,-z,-x+1/2
    -y+1/2,z,-x+1/2
    -y+1/2,-z,x+1/2
    -x+3/4,-y+1/4,-z+3/4
    x+3/4,y+1/4,-z+3/4
    -x+3/4,y+1/4,z+3/4
    x+3/4,-y+1/4,z+3/4
    -z+3/4,-x+1/4,-y+3/4
    z+3/4,x+1/4,-y+3/4
    -z+3/4,x+1/4,y+3/4
    z+3/4,-x+1/4,y+3/4
    -y+3/4,-z+1/4,-x+3/4
    -y+3/4,z+1/4,x+3/4
    y+3/4,-z+1/4,x+3/4
    y+3/4,z+1/4,-x+3/4
    x+1/2,y+1/2,z
    -x+1/2,-y+1/2,z
    x+1/2,-y+1/2,-z
    -x+1/2,y+1/2,-z
    z+1/2,x+1/2,y
    -z+1/2,-x+1/2,y
    z+1/2,-x+1/2,-y
    -z+1/2,x+1/2,-y
    y+1/2,z+1/2,x
    y+1/2,-z+1/2,-x
    -y+1/2,z+1/2,-x
    -y+1/2,-z+1/2,x
    -x+3/4,-y+3/4,-z+1/4
    x+3/4,y+3/4,-z+1/4
    -x+3/4,y+3/4,z+1/4
    x+3/4,-y+3/4,z+1/4
    -z+3/4,-x+3/4,-y+1/4
    z+3/4,x+3/4,-y+1/4
    -z+3/4,x+3/4,y+1/4
    z+3/4,-x+3/4,y+1/4
    -y+3/4,-z+3/4,-x+1/4
    -y+3/4,z+3/4,x+1/4
    y+3/4,-z+3/4,x+1/4
    y+3/4,z+3/4,-x+1/4
Im-3 x,y,z
    x,y,z
    -x,-y,z
    x,-y,-z
    -x,y,-z
    z,x,y
    -z,-x,y
    z,-x,-y
    -z,x,-y
    y,z,x
    y,-z,-x
    -y,z,-x
    -y,-z,x
    -x,-y,-z
    x,y,-z
    -x,y,z
    x,-y,z
    -z,-x,-y
    z,x,-y
    -z,x,y
    z,-x,y
    -y,-z,-x
    -y,z,x
    y,-z,x
    y,z,-x
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    z+1/2,x+1/2,y+1/2
    -z+1/2,-x+1/2,y+1/2
    z+1/2,-x+1/2,-y+1/2
    -z+1/2,x+1/2,-y+1/2
    y+1/2,z+1/2,x+1/2
    y+1/2,-z+1/2,-x+1/2
    -y+1/2,z+1/2,-x+1/2
    -y+1/2,-z+1/2,x+1/2
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
    -z+1/2,-x+1/2,-y+1/2
    z+1/2,x+1/2,-y+1/2
    -z+1/2,x+1/2,y+1/2
    z+1/2,-x+1/2,y+1/2
    -y+1/2,-z+1/2,-x+1/2
    -y+1/2,z+1/2,x+1/2
    y+1/2,-z+1/2,x+1/2
    y+1/2,z+1/2,-x+1/2
Pa-3 x,y,z
    x,y,z
    -x+1/2,-y,z+1/2
    x+1/2,-y+1/2,-z
    -x,y+1/2,-z+1/2
    z,x,y
    -z+1/2,-x,y+1/2
    z+1/2,-x+1/2,-y
    -z,x+1/2,-y+1/2
    y,z,x
    y+1/2,-z+1/2,-x
    -y,z+1/2,-x+1/2
    -y+1/2,-z,x+1/2
    -x,-y,-z
    x-1/2,y,-z-1/2
    -x-1/2,y-1/2,z
    x,-y-1/2,z-1/2
    -z,-x,-y
    z-1/2,x,-y-1/2
    -z-1/2,x-1/2,y
    z,-x-1/2,y-1/2
    -y,-z,-x
    -y-1/2,z-1/2,x
    y,-z-1/2,x-1/2
    y-1/2,z,-x-1/2
Ia-3 x,y,z
    x,y,z
    -x,-y+1/2,z
    x,-y,-z+1/2
    -x,y+1/2,-z+1/2
    z,x,y
    -z,-x+1/2,y
    z,-x,-y+1/2
    -z,x+1/2,-y+1/2
    y,z,x
    y,-z,-x+1/2
    -y,z+1/2,-x+1/2
    -y+1/2,-z,x+1/2
    -x,-y,-z
    x,y-1/2,-z
    -x,y,z-1/2
    x,-y-1/2,z-1/2
    -z,-x,-y
    z,x-1/2,-y
    -z,x,y-1/2
    z,-x-1/2,y-1/2
    -y,-z,-x
    -y,z,x-1/2
    y,-z-1/2,x-1/2
    y-1/2,z,-x-1/2
    x+1/2,y+1/2,z+1/2
    -x+1/2,-y+1,z+1/2
    x+1/2,-y+1/2,-z+1
    -x+1/2,y+1,-z+1
    z+1/2,x+1/2,y+1/2
    -z+1/2,-x+1,y+1/2
    z+1/2,-x+1/2,-y+1
    -z+1/2,x+1,-y+1
    y+1/2,z+1/2,x+1/2
    y+1/2,-z+1/2,-x+1
    -y+1/2,z+1,-x+1
    -y+1,-z+1/2,x+1
    -x+1/2,-y+1/2,-z+1/2
    x+1/2,y,-z+1/2
    -x+1/2,y+1/2,z
    x+1/2,-y,z
    -z+1/2,-x+1/2,-y+1/2
    z+1/2,x,-y+1/2
    -z+1/2,x+1/2,y
    z+1/2,-x,y
    -y+1/2,-z+1/2,-x+1/2
    -y+1/2,z+1/2,x
    y+1/2,-z,x
    y,z+1/2,-x
P432 x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
    z,x,y
    -x,z,y
    -z,-x,y
    x,-z,y
    z,-x,-y
    x,z,-y
    -z,x,-y
    -x,-z,-y
    y,z,x
    y,-z,-x
    z,y,-x
    -y,z,-x
    -z,-y,-x
    -y,-z,x
    z,-y,x
    -z,y,x
P4232 x,y,z
    x,y,z
    -y+1/2,x+1/2,z+1/2
    -x,-y,z
    y+1/2,-x+1/2,z+1/2
    x,-y,-z
    y+1/2,x+1/2,-z+1/2
    -x,y,-z
    -y+1/2,-x+1/2,-z+1/2
    z,x,y
    -x+1/2,z+1/2,y+1/2
    -z,-x,y
    x+1/2,-z+1/2,y+1/2
    z,-x,-y
    x+1/2,z+1/2,-y+1/2
    -z,x,-y
    -x+1/2,-z+1/2,-y+1/2
    y,z,x
    y,-z,-x
    z+1/2,y+1/2,-x+1/2
    -y,z,-x
    -z+1/2,-y+1/2,-x+1/2
    -y,-z,x
    z+1/2,-y+1/2,x+1/2
    -z+1/2,y+1/2,x+1/2
F432 x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
    z,x,y
    -x,z,y
    -z,-x,y
    x,-z,y
    z,-x,-y
    x,z,-y
    -z,x,-y
    -x,-z,-y
    y,z,x
    y,-z,-x
    z,y,-x
    -y,z,-x
    -z,-y,-x
    -y,-z,x
    z,-y,x
    -z,y,x
    x,y+1/2,z+1/2
    -y,x+1/2,z+1/2
    -x,-y+1/2,z+1/2
    y,-x+1/2,z+1/2
    x,-y+1/2,-z+1/2
    y,x+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    -y,-x+1/2,-z+1/2
    z,x+1/2,y+1/2
    -x,z+1/2,y+1/2
    -z,-x+1/2,y+1/2
    x,-z+1/2,y+1/2
    z,-x+1/2,-y+1/2
    x,z+1/2,-y+1/2
    -z,x+1/2,-y+1/2
    -x,-z+1/2,-y+1/2
    y,z+1/2,x+1/2
    y,-z+1/2,-x+1/2
    z,y+1/2,-x+1/2
    -y,z+1/2,-x+1/2
    -z,-y+1/2,-x+1/2
    -y,-z+1/2,x+1/2
    z,-y+1/2,x+1/2
    -z,y+1/2,x+1/2
    x+1/2,y,z+1/2
    -y+1/2,x,z+1/2
    -x+1/2,-y,z+1/2
    y+1/2,-x,z+1/2
    x+1/2,-y,-z+1/2
    y+1/2,x,-z+1/2
    -x+1/2,y,-z+1/2
    -y+1/2,-x,-z+1/2
    z+1/2,x,y+1/2
    -x+1/2,z,y+1/2
    -z+1/2,-x,y+1/2
    x+1/2,-z,y+1/2
    z+1/2,-x,-y+1/2
    x+1/2,z,-y+1/2
    -z+1/2,x,-y+1/2
    -x+1/2,-z,-y+1/2
    y+1/2,z,x+1/2
    y+1/2,-z,-x+1/2
    z+1/2,y,-x+1/2
    -y+1/2,z,-x+1/2
    -z+1/2,-y,-x+1/2
    -y+1/2,-z,x+1/2
    z+1/2,-y,x+1/2
    -z+1/2,y,x+1/2
    x+1/2,y+1/2,z
    -y+1/2,x+1/2,z
    -x+1/2,-y+1/2,z
    y+1/2,-x+1/2,z
    x+1/2,-y+1/2,-z
    y+1/2,x+1/2,-z
    -x+1/2,y+1/2,-z
    -y+1/2,-x+1/2,-z
    z+1/2,x+1/2,y
    -x+1/2,z+1/2,y
    -z+1/2,-x+1/2,y
    x+1/2,-z+1/2,y
    z+1/2,-x+1/2,-y
    x+1/2,z+1/2,-y
    -z+1/2,x+1/2,-y
    -x+1/2,-z+1/2,-y
    y+1/2,z+1/2,x
    y+1/2,-z+1/2,-x
    z+1/2,y+1/2,-x
    -y+1/2,z+1/2,-x
    -z+1/2,-y+1/2,-x
    -y+1/2,-z+1/2,x
    z+1/2,-y+1/2,x
    -z+1/2,y+1/2,x
F4132 x,y,z
    x,y,z
    -y+1/4,x+1/4,z+1/4
    -x,-y+1/2,z+1/2
    y+3/4,-x+1/4,z+3/4
    x,-y,-z
    y+1/4,x+1/4,-z+1/4
    -x,y+1/2,-z+1/2
    -y+3/4,-x+1/4,-z+3/4
    z,x,y
    -x+1/4,z+1/4,y+1/4
    -z,-x+1/2,y+1/2
    x+3/4,-z+1/4,y+3/4
    z,-x,-y
    x+1/4,z+1/4,-y+1/4
    -z,x+1/2,-y+1/2
    -x+3/4,-z+1/4,-y+3/4
    y,z,x
    y+1/2,-z,-x+1/2
    z+1/4,y+3/4,-x+3/4
    -y+1/2,z+1/2,-x
    -z+1/4,-y+1/4,-x+1/4
    -y,-z,x
    z+1/4,-y+3/4,x+3/4
    -z+3/4,y+3/4,x+1/4
    x,y+1/2,z+1/2
    -y+1/4,x+3/4,z+3/4
    -x,-y+1,z+1
    y+3/4,-x+3/4,z+5/4
    x,-y+1/2,-z+1/2
    y+1/4,x+3/4,-z+3/4
    -x,y+1,-z+1
    -y+3/4,-x+3/4,-z+5/4
    z,x+1/2,y+1/2
    -x+1/4,z+3/4,y+3/4
    -z,-x+1,y+1
    x+3/4,-z+3/4,y+5/4
    z,-x+1/2,-y+1/2
    x+1/4,z+3/4,-y+3/4
    -z,x+1,-y+1
    -x+3/4,-z+3/4,-y+5/4
    y,z+1/2,x+1/2
    y+1/2,-z+1/2,-x+1
    z+1/4,y+5/4,-x+5/4
    -y+1/2,z+1,-x+1/2
    -z+1/4,-y+3/4,-x+3/4
    -y,-z+1/2,x+1/2
    z+1/4,-y+5/4,x+5/4
    -z+3/4,y+5/4,x+3/4
    x+1/2,y,z+1/2
    -y+3/4,x+1/4,z+3/4
    -x+1/2,-y+1/2,z+1
    y+5/4,-x+1/4,z+5/4
    x+1/2,-y,-z+1/2
    y+3/4,x+1/4,-z+3/4
    -x+1/2,y+1/2,-z+1
    -y+5/4,-x+1/4,-z+5/4
    z+1/2,x,y+1/2
    -x+3/4,z+1/4,y+3/4
    -z+1/2,-x+1/2,y+1
    x+5/4,-z+1/4,y+5/4
    z+1/2,-x,-y+1/2
    x+3/4,z+1/4,-y+3/4
    -z+1/2,x+1/2,-y+1
    -x+5/4,-z+1/4,-y+5/4
    y+1/2,z,x+1/2
    y+1,-z,-x+1
    z+3/4,y+3/4,-x+5/4
    -y+1,z+1/2,-x+1/2
    -z+3/4,-y+1/4,-x+3/4
    -y+1/2,-z,x+1/2
    z+3/4,-y+3/4,x+5/4
    -z+5/4,y+3/4,x+3/4
    x+1/2,y+1/2,z
    -y+3/4,x+3/4,z+1/4
    -x+1/2,-y+1,z+1/2
    y+5/4,-x+3/4,z+3/4
    x+1/2,-y+1/2,-z
    y+3/4,x+3/4,-z+1/4
    -x+1/2,y+1,-z+1/2
    -y+5/4,-x+3/4,-z+3/4
    z+1/2,x+1/2,y
    -x+3/4,z+3/4,y+1/4
    -z+1/2,-x+1,y+1/2
    x+5/4,-z+3/4,y+3/4
    z+1/2,-x+1/2,-y
    x+3/4,z+3/4,-y+1/4
    -z+1/2,x+1,-y+1/2
    -x+5/4,-z+3/4,-y+3/4
    y+1/2,z+1/2,x
    y+1,-z+1/2,-x+1/2
    z+3/4,y+5/4,-x+3/4
    -y+1,z+1,-x
    -z+3/4,-y+3/4,-x+1/4
    -y+1/2,-z+1/2,x
    z+3/4,-y+5/4,x+3/4
    -z+5/4,y+5/4,x+1/4
I432 x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
    z,x,y
    -x,z,y
    -z,-x,y
    x,-z,y
    z,-x,-y
    x,z,-y
    -z,x,-y
    -x,-z,-y
    y,z,x
    y,-z,-x
    z,y,-x
    -y,z,-x
    -z,-y,-x
    -y,-z,x
    z,-y,x
    -z,y,x
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -y+1/2,-x+1/2,-z+1/2
    z+1/2,x+1/2,y+1/2
    -x+1/2,z+1/2,y+1/2
    -z+1/2,-x+1/2,y+1/2
    x+1/2,-z+1/2,y+1/2
    z+1/2,-x+1/2,-y+1/2
    x+1/2,z+1/2,-y+1/2
    -z+1/2,x+1/2,-y+1/2
    -x+1/2,-z+1/2,-y+1/2
    y+1/2,z+1/2,x+1/2
    y+1/2,-z+1/2,-x+1/2
    z+1/2,y+1/2,-x+1/2
    -y+1/2,z+1/2,-x+1/2
    -z+1/2,-y+1/2,-x+1/2
    -y+1/2,-z+1/2,x+1/2
    z+1/2,-y+1/2,x+1/2
    -z+1/2,y+1/2,x+1/2
P4332 x,y,z
    x,y,z
    -y+3/4,x+1/4,z+3/4
    -x+1/2,-y,z+1/2
    y+3/4,-x+3/4,z+1/4
    x+1/2,-y+1/2,-z
    y+1/4,x+3/4,-z+3/4
    -x,y+1/2,-z+1/2
    -y+1/4,-x+1/4,-z+1/4
    z,x,y
    -x+3/4,z+1/4,y+3/4
    -z+1/2,-x,y+1/2
    x+3/4,-z+3/4,y+1/4
    z+1/2,-x+1/2,-y
    x+1/4,z+3/4,-y+3/4
    -z,x+1/2,-y+1/2
    -x+1/4,-z+1/4,-y+1/4
    y,z,x
    y+1/2,-z+1/2,-x
    z+1/4,y+3/4,-x+3/4
    -y,z+1/2,-x+1/2
    -z+1/4,-y+1/4,-x+1/4
    -y+1/2,-z,x+1/2
    z+3/4,-y+3/4,x+1/4
    -z+3/4,y+1/4,x+3/4
P4132 x,y,z
    x,y,z
    -y+1/4,x+3/4,z+1/4
    -x+1/2,-y,z+1/2
    y+1/4,-x+1/4,z+3/4
    x+1/2,-y+1/2,-z
    y+3/4,x+1/4,-z+1/4
    -x,y+1/2,-z+1/2
    -y+3/4,-x+3/4,-z+3/4
    z,x,y
    -x+1/4,z+3/4,y+1/4
    -z+1/2,-x,y+1/2
    x+1/4,-z+1/4,y+3/4
    z+1/2,-x+1/2,-y
    x+3/4,z+1/4,-y+1/4
    -z,x+1/2,-y+1/2
    -x+3/4,-z+3/4,-y+3/4
    y,z,x
    y+1/2,-z+1/2,-x
    z+3/4,y+1/4,-x+1/4
    -y,z+1/2,-x+1/2
    -z+3/4,-y+3/4,-x+3/4
    -y+1/2,-z,x+1/2
    z+1/4,-y+1/4,x+3/4
    -z+1/4,y+3/4,x+1/4
I4132 x,y,z
    x,y,z
    -y+1/4,x+3/4,z+1/4
    -x+1/2,-y,z+1/2
    y+1/4,-x+1/4,z+3/4
    x,-y,-z+1/2
    y+1/4,x+3/4,-z+3/4
    -x+1/2,y,-z
    -y+1/4,-x+1/4,-z+1/4
    z,x,y
    -x+1/4,z+3/4,y+1/4
    -z+1/2,-x,y+1/2
    x+1/4,-z+1/4,y+3/4
    z,-x,-y+1/2
    x+1/4,z+3/4,-y+3/4
    -z+1/2,x,-y
    -x+1/4,-z+1/4,-y+1/4
    y,z,x
    y+1/2,-z+1/2,-x
    z+3/4,y+1/4,-x+1/4
    -y,z+1/2,-x+1/2
    -z+1/4,-y+1/4,-x+1/4
    -y+1/2,-z,x+1/2
    z+3/4,-y+3/4,x+1/4
    -z+3/4,y+1/4,x+3/4
    x+1/2,y+1/2,z+1/2
    -y+3/4,x+5/4,z+3/4
    -x+1,-y+1/2,z+1
    y+3/4,-x+3/4,z+5/4
    x+1/2,-y+1/2,-z+1
    y+3/4,x+5/4,-z+5/4
    -x+1,y+1/2,-z+1/2
    -y+3/4,-x+3/4,-z+3/4
    z+1/2,x+1/2,y+1/2
    -x+3/4,z+5/4,y+3/4
    -z+1,-x+1/2,y+1
    x+3/4,-z+3/4,y+5/4
    z+1/2,-x+1/2,-y+1
    x+3/4,z+5/4,-y+5/4
    -z+1,x+1/2,-y+1/2
    -x+3/4,-z+3/4,-y+3/4
    y+1/2,z+1/2,x+1/2
    y+1,-z+1,-x+1/2
    z+5/4,y+3/4,-x+3/4
    -y+1/2,z+1,-x+1
    -z+3/4,-y+3/4,-x+3/4
    -y+1,-z+1/2,x+1
    z+5/4,-y+5/4,x+3/4
    -z+5/4,y+3/4,x+5/4
P-43m x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    x,-y,-z
    -y,-x,z
    -x,y,-z
    y,x,z
    z,x,y
    x,-z,-y
    -z,-x,y
    -x,z,-y
    z,-x,-y
    -x,-z,y
    -z,x,-y
    x,z,y
    y,z,x
    y,-z,-x
    -z,-y,x
    -y,z,-x
    z,y,x
    -y,-z,x
    -z,y,-x
    z,-y,-x
F-43m x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    x,-y,-z
    -y,-x,z
    -x,y,-z
    y,x,z
    z,x,y
    x,-z,-y
    -z,-x,y
    -x,z,-y
    z,-x,-y
    -x,-z,y
    -z,x,-y
    x,z,y
    y,z,x
    y,-z,-x
    -z,-y,x
    -y,z,-x
    z,y,x
    -y,-z,x
    -z,y,-x
    z,-y,-x
    x,y+1/2,z+1/2
    y,-x+1/2,-z+1/2
    -x,-y+1/2,z+1/2
    -y,x+1/2,-z+1/2
    x,-y+1/2,-z+1/2
    -y,-x+1/2,z+1/2
    -x,y+1/2,-z+1/2
    y,x+1/2,z+1/2
    z,x+1/2,y+1/2
    x,-z+1/2,-y+1/2
    -z,-x+1/2,y+1/2
    -x,z+1/2,-y+1/2
    z,-x+1/2,-y+1/2
    -x,-z+1/2,y+1/2
    -z,x+1/2,-y+1/2
    x,z+1/2,y+1/2
    y,z+1/2,x+1/2
    y,-z+1/2,-x+1/2
    -z,-y+1/2,x+1/2
    -y,z+1/2,-x+1/2
    z,y+1/2,x+1/2
    -y,-z+1/2,x+1/2
    -z,y+1/2,-x+1/2
    z,-y+1/2,-x+1/2
    x+1/2,y,z+1/2
    y+1/2,-x,-z+1/2
    -x+1/2,-y,z+1/2
    -y+1/2,x,-z+1/2
    x+1/2,-y,-z+1/2
    -y+1/2,-x,z+1/2
    -x+1/2,y,-z+1/2
    y+1/2,x,z+1/2
    z+1/2,x,y+1/2
    x+1/2,-z,-y+1/2
    -z+1/2,-x,y+1/2
    -x+1/2,z,-y+1/2
    z+1/2,-x,-y+1/2
    -x+1/2,-z,y+1/2
    -z+1/2,x,-y+1/2
    x+1/2,z,y+1/2
    y+1/2,z,x+1/2
    y+1/2,-z,-x+1/2
    -z+1/2,-y,x+1/2
    -y+1/2,z,-x+1/2
    z+1/2,y,x+1/2
    -y+1/2,-z,x+1/2
    -z+1/2,y,-x+1/2
    z+1/2,-y,-x+1/2
    x+1/2,y+1/2,z
    y+1/2,-x+1/2,-z
    -x+1/2,-y+1/2,z
    -y+1/2,x+1/2,-z
    x+1/2,-y+1/2,-z
    -y+1/2,-x+1/2,z
    -x+1/2,y+1/2,-z
    y+1/2,x+1/2,z
    z+1/2,x+1/2,y
    x+1/2,-z+1/2,-y
    -z+1/2,-x+1/2,y
    -x+1/2,z+1/2,-y
    z+1/2,-x+1/2,-y
    -x+1/2,-z+1/2,y
    -z+1/2,x+1/2,-y
    x+1/2,z+1/2,y
    y+1/2,z+1/2,x
    y+1/2,-z+1/2,-x
    -z+1/2,-y+1/2,x
    -y+1/2,z+1/2,-x
    z+1/2,y+1/2,x
    -y+1/2,-z+1/2,x
    -z+1/2,y+1/2,-x
    z+1/2,-y+1/2,-x
I-43m x,y,z
    x,y,z
    y,-x,-z
    -x,-y,z
    -y,x,-z
    x,-y,-z
    -y,-x,z
    -x,y,-z
    y,x,z
    z,x,y
    x,-z,-y
    -z,-x,y
    -x,z,-y
    z,-x,-y
    -x,-z,y
    -z,x,-y
    x,z,y
    y,z,x
    y,-z,-x
    -z,-y,x
    -y,z,-x
    z,y,x
    -y,-z,x
    -z,y,-x
    z,-y,-x
    x+1/2,y+1/2,z+1/2
    y+1/2,-x+1/2,-z+1/2
    -x+1/2,-y+1/2,z+1/2
    -y+1/2,x+1/2,-z+1/2
    x+1/2,-y+1/2,-z+1/2
    -y+1/2,-x+1/2,z+1/2
    -x+1/2,y+1/2,-z+1/2
    y+1/2,x+1/2,z+1/2
    z+1/2,x+1/2,y+1/2
    x+1/2,-z+1/2,-y+1/2
    -z+1/2,-x+1/2,y+1/2
    -x+1/2,z+1/2,-y+1/2
    z+1/2,-x+1/2,-y+1/2
    -x+1/2,-z+1/2,y+1/2
    -z+1/2,x+1/2,-y+1/2
    x+1/2,z+1/2,y+1/2
    y+1/2,z+1/2,x+1/2
    y+1/2,-z+1/2,-x+1/2
    -z+1/2,-y+1/2,x+1/2
    -y+1/2,z+1/2,-x+1/2
    z+1/2,y+1/2,x+1/2
    -y+1/2,-z+1/2,x+1/2
    -z+1/2,y+1/2,-x+1/2
    z+1/2,-y+1/2,-x+1/2
P-43n x,y,z
    x,y,z
    y+1/2,-x+1/2,-z+1/2
    -x,-y,z
    -y+1/2,x+1/2,-z+1/2
    x,-y,-z
    -y+1/2,-x+1/2,z+1/2
    -x,y,-z
    y+1/2,x+1/2,z+1/2
    z,x,y
    x+1/2,-z+1/2,-y+1/2
    -z,-x,y
    -x+1/2,z+1/2,-y+1/2
    z,-x,-y
    -x+1/2,-z+1/2,y+1/2
    -z,x,-y
    x+1/2,z+1/2,y+1/2
    y,z,x
    y,-z,-x
    -z+1/2,-y+1/2,x+1/2
    -y,z,-x
    z+1/2,y+1/2,x+1/2
    -y,-z,x
    -z+1/2,y+1/2,-x+1/2
    z+1/2,-y+1/2,-x+1/2
F-43c x,y,z
    x,y,z
    y+1/2,-x,-z
    -x+1/2,-y+1/2,z
    -y,x+1/2,-z
    x,-y,-z
    -y+1/2,-x,z
    -x+1/2,y+1/2,-z
    y,x+1/2,z
    z,x,y
    x+1/2,-z,-y
    -z+1/2,-x+1/2,y
    -x,z+1/2,-y
    z,-x,-y
    -x+1/2,-z,y
    -z+1/2,x+1/2,-y
    x,z+1/2,y
    y,z,x
    y,-z+1/2,-x+1/2
    -z,-y,x+1/2
    -y+1/2,z,-x+1/2
    z+1/2,y,x
    -y,-z,x
    -z,y,-x+1/2
    z+1/2,-y+1/2,-x+1/2
    x,y+1/2,z+1/2
    y+1/2,-x+1/2,-z+1/2
    -x+1/2,-y+1,z+1/2
    -y,x+1,-z+1/2
    x,-y+1/2,-z+1/2
    -y+1/2,-x+1/2,z+1/2
    -x+1/2,y+1,-z+1/2
    y,x+1,z+1/2
    z,x+1/2,y+1/2
    x+1/2,-z+1/2,-y+1/2
    -z+1/2,-x+1,y+1/2
    -x,z+1,-y+1/2
    z,-x+1/2,-y+1/2
    -x+1/2,-z+1/2,y+1/2
    -z+1/2,x+1,-y+1/2
    x,z+1,y+1/2
    y,z+1/2,x+1/2
    y,-z+1,-x+1
    -z,-y+1/2,x+1
    -y+1/2,z+1/2,-x+1
    z+1/2,y+1/2,x+1/2
    -y,-z+1/2,x+1/2
    -z,y+1/2,-x+1
    z+1/2,-y+1,-x+1
    x+1/2,y,z+1/2
    y+1,-x,-z+1/2
    -x+1,-y+1/2,z+1/2
    -y+1/2,x+1/2,-z+1/2
    x+1/2,-y,-z+1/2
    -y+1,-x,z+1/2
    -x+1,y+1/2,-z+1/2
    y+1/2,x+1/2,z+1/2
    z+1/2,x,y+1/2
    x+1,-z,-y+1/2
    -z+1,-x+1/2,y+1/2
    -x+1/2,z+1/2,-y+1/2
    z+1/2,-x,-y+1/2
    -x+1,-z,y+1/2
    -z+1,x+1/2,-y+1/2
    x+1/2,z+1/2,y+1/2
    y+1/2,z,x+1/2
    y+1/2,-z+1/2,-x+1
    -z+1/2,-y,x+1
    -y+1,z,-x+1
    z+1,y,x+1/2
    -y+1/2,-z,x+1/2
    -z+1/2,y,-x+1
    z+1,-y+1/2,-x+1
    x+1/2,y+1/2,z
    y+1,-x+1/2,-z
    -x+1,-y+1,z
    -y+1/2,x+1,-z
    x+1/2,-y+1/2,-z
    -y+1,-x+1/2,z
    -x+1,y+1,-z
    y+1/2,x+1,z
    z+1/2,x+1/2,y
    x+1,-z+1/2,-y
    -z+1,-x+1,y
    -x+1/2,z+1,-y
    z+1/2,-x+1/2,-y
    -x+1,-z+1/2,y
    -z+1,x+1,-y
    x+1/2,z+1,y
    y+1/2,z+1/2,x
    y+1/2,-z+1,-x+1/2
    -z+1/2,-y+1/2,x+1/2
    -y+1,z+1/2,-x+1/2
    z+1,y+1/2,x
    -y+1/2,-z+1/2,x
    -z+1/2,y+1/2,-x+1/2
    z+1,-y+1,-x+1/2
I-43d x,y,z
    x,y,z
    y+1/4,-x+3/4,-z+1/4
    -x,-y+1/2,z
    -y+3/4,x+3/4,-z+1/4
    x,-y,-z+1/2
    -y+1/4,-x+3/4,z+3/4
    -x,y+1/2,-z+1/2
    y+3/4,x+3/4,z+3/4
    z,x,y
    x+1/4,-z+3/4,-y+1/4
    -z,-x+1/2,y
    -x+3/4,z+3/4,-y+1/4
    z,-x,-y+1/2
    -x+1/4,-z+3/4,y+3/4
    -z,x+1/2,-y+1/2
    x+3/4,z+3/4,y+3/4
    y,z,x
    y,-z,-x+1/2
    -z+1/4,-y+3/4,x+3/4
    -y,z+1/2,-x+1/2
    z+1/4,y+1/4,x+1/4
    -y+1/2,-z,x+1/2
    -z+1/4,y+1/4,-x+3/4
    z+3/4,-y+1/4,-x+3/4
    x+1/2,y+1/2,z+1/2
    y+3/4,-x+5/4,-z+3/4
    -x+1/2,-y+1,z+1/2
    -y+5/4,x+5/4,-z+3/4
    x+1/2,-y+1/2,-z+1
    -y+3/4,-x+5/4,z+5/4
    -x+1/2,y+1,-z+1
    y+5/4,x+5/4,z+5/4
    z+1/2,x+1/2,y+1/2
    x+3/4,-z+5/4,-y+3/4
    -z+1/2,-x+1,y+1/2
    -x+5/4,z+5/4,-y+3/4
    z+1/2,-x+1/2,-y+1
    -x+3/4,-z+5/4,y+5/4
    -z+1/2,x+1,-y+1
    x+5/4,z+5/4,y+5/4
    y+1/2,z+1/2,x+1/2
    y+1/2,-z+1/2,-x+1
    -z+3/4,-y+5/4,x+5/4
    -y+1/2,z+1,-x+1
    z+3/4,y+3/4,x+3/4
    -y+1,-z+1/2,x+1
    -z+3/4,y+3/4,-x+5/4
    z+5/4,-y+3/4,-x+5/4
Pm-3m x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
    z,x,y
    -x,z,y
    -z,-x,y
    x,-z,y
    z,-x,-y
    x,z,-y
    -z,x,-y
    -x,-z,-y
    y,z,x
    y,-z,-x
    z,y,-x
    -y,z,-x
    -z,-y,-x
    -y,-z,x
    z,-y,x
    -z,y,x
    -x,-y,-z
    y,-x,-z
    x,y,-z
    -y,x,-z
    -x,y,z
    -y,-x,z
    x,-y,z
    y,x,z
    -z,-x,-y
    x,-z,-y
    z,x,-y
    -x,z,-y
    -z,x,y
    -x,-z,y
    z,-x,y
    x,z,y
    -y,-z,-x
    -y,z,x
    -z,-y,x
    y,-z,x
    z,y,x
    y,z,-x
    -z,y,-x
    z,-y,-x
Pn-3n:2 x,y,z
    x,y,z
    -y+1/2,x,z
    -x+1/2,-y+1/2,z
    y,-x+1/2,z
    x,-y+1/2,-z+1/2
    y,x,-z+1/2
    -x+1/2,y,-z+1/2
    -y+1/2,-x+1/2,-z+1/2
    z,x,y
    -x+1/2,z,y
    -z+1/2,-x+1/2,y
    x,-z+1/2,y
    z,-x+1/2,-y+1/2
    x,z,-y+1/2
    -z+1/2,x,-y+1/2
    -x+1/2,-z+1/2,-y+1/2
    y,z,x
    y,-z+1/2,-x+1/2
    z,y,-x+1/2
    -y+1/2,z,-x+1/2
    -z+1/2,-y+1/2,-x+1/2
    -y+1/2,-z+1/2,x
    z,-y+1/2,x
    -z+1/2,y,x
    -x,-y,-z
    y-1/2,-x,-z
    x-1/2,y-1/2,-z
    -y,x-1/2,-z
    -x,y-1/2,z-1/2
    -y,-x,z-1/2
    x-1/2,-y,z-1/2
    y-1/2,x-1/2,z-1/2
    -z,-x,-y
    x-1/2,-z,-y
    z-1/2,x-1/2,-y
    -x,z-1/2,-y
    -z,x-1/2,y-1/2
    -x,-z,y-1/2
    z-1/2,-x,y-1/2
    x-1/2,z-1/2,y-1/2
    -y,-z,-x
    -y,z-1/2,x-1/2
    -z,-y,x-1/2
    y-1/2,-z,x-1/2
    z-1/2,y-1/2,x-1/2
    y-1/2,z-1/2,-x
    -z,y-1/2,-x
    z-1/2,-y,-x
Pn-3n:1 x+1/4,y+1/4,z+1/4
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
    z,x,y
    -x,z,y
    -z,-x,y
    x,-z,y
    z,-x,-y
    x,z,-y
    -z,x,-y
    -x,-z,-y
    y,z,x
    y,-z,-x
    z,y,-x
    -y,z,-x
    -z,-y,-x
    -y,-z,x
    z,-y,x
    -z,y,x
    -x+1/2,-y+1/2,-z+1/2
    y+1/2,-x+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    -y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
    y+1/2,x+1/2,z+1/2
    -z+1/2,-x+1/2,-y+1/2
    x+1/2,-z+1/2,-y+1/2
    z+1/2,x+1/2,-y+1/2
    -x+1/2,z+1/2,-y+1/2
    -z+1/2,x+1/2,y+1/2
    -x+1/2,-z+1/2,y+1/2
    z+1/2,-x+1/2,y+1/2
    x+1/2,z+1/2,y+1/2
    -y+1/2,-z+1/2,-x+1/2
    -y+1/2,z+1/2,x+1/2
    -z+1/2,-y+1/2,x+1/2
    y+1/2,-z+1/2,x+1/2
    z+1/2,y+1/2,x+1/2
    y+1/2,z+1/2,-x+1/2
    -z+1/2,y+1/2,-x+1/2
    z+1/2,-y+1/2,-x+1/2
Pm-3n x,y,z
    x,y,z
    -y+1/2,x+1/2,z+1/2
    -x,-y,z
    y+1/2,-x+1/2,z+1/2
    x,-y,-z
    y+1/2,x+1/2,-z+1/2
    -x,y,-z
    -y+1/2,-x+1/2,-z+1/2
    z,x,y
    -x+1/2,z+1/2,y+1/2
    -z,-x,y
    x+1/2,-z+1/2,y+1/2
    z,-x,-y
    x+1/2,z+1/2,-y+1/2
    -z,x,-y
    -x+1/2,-z+1/2,-y+1/2
    y,z,x
    y,-z,-x
    z+1/2,y+1/2,-x+1/2
    -y,z,-x
    -z+1/2,-y+1/2,-x+1/2
    -y,-z,x
    z+1/2,-y+1/2,x+1/2
    -z+1/2,y+1/2,x+1/2
    -x,-y,-z
    y-1/2,-x-1/2,-z-1/2
    x,y,-z
    -y-1/2,x-1/2,-z-1/2
    -x,y,z
    -y-1/2,-x-1/2,z-1/2
    x,-y,z
    y-1/2,x-1/2,z-1/2
    -z,-x,-y
    x-1/2,-z-1/2,-y-1/2
    z,x,-y
    -x-1/2,z-1/2,-y-1/2
    -z,x,y
    -x-1/2,-z-1/2,y-1/2
    z,-x,y
    x-1/2,z-1/2,y-1/2
    -y,-z,-x
    -y,z,x
    -z-1/2,-y-1/2,x-1/2
    y,-z,x
    z-1/2,y-1/2,x-1/2
    y,z,-x
    -z-1/2,y-1/2,-x-1/2
    z-1/2,-y-1/2,-x-1/2
Pn-3m:2 x,y,z
    x,y,z
    -y,x+1/2,z+1/2
    -x+1/2,-y+1/2,z
    y+1/2,-x,z+1/2
    x,-y+1/2,-z+1/2
    y+1/2,x+1/2,-z
    -x+1/2,y,-z+1/2
    -y,-x,-z
    z,x,y
    -x,z+1/2,y+1/2
    -z+1/2,-x+1/2,y
    x+1/2,-z,y+1/2
    z,-x+1/2,-y+1/2
    x+1/2,z+1/2,-y
    -z+1/2,x,-y+1/2
    -x,-z,-y
    y,z,x
    y,-z+1/2,-x+1/2
    z+1/2,y+1/2,-x
    -y+1/2,z,-x+1/2
    -z,-y,-x
    -y+1/2,-z+1/2,x
    z+1/2,-y,x+1/2
    -z,y+1/2,x+1/2
    -x,-y,-z
    y,-x-1/2,-z-1/2
    x-1/2,y-1/2,-z
    -y-1/2,x,-z-1/2
    -x,y-1/2,z-1/2
    -y-1/2,-x-1/2,z
    x-1/2,-y,z-1/2
    y,x,z
    -z,-x,-y
    x,-z-1/2,-y-1/2
    z-1/2,x-1/2,-y
    -x-1/2,z,-y-1/2
    -z,x-1/2,y-1/2
    -x-1/2,-z-1/2,y
    z-1/2,-x,y-1/2
    x,z,y
    -y,-z,-x
    -y,z-1/2,x-1/2
    -z-1/2,-y-1/2,x
    y-1/2,-z,x-1/2
    z,y,x
    y-1/2,z-1/2,-x
    -z-1/2,y,-x-1/2
    z,-y-1/2,-x-1/2
Pn-3m:1 x-1/4,y-1/4,z-1/4
    x,y,z
    -y+1/2,x+1/2,z+1/2
    -x,-y,z
    y+1/2,-x+1/2,z+1/2
    x,-y,-z
    y+1/2,x+1/2,-z+1/2
    -x,y,-z
    -y+1/2,-x+1/2,-z+1/2
    z,x,y
    -x+1/2,z+1/2,y+1/2
    -z,-x,y
    x+1/2,-z+1/2,y+1/2
    z,-x,-y
    x+1/2,z+1/2,-y+1/2
    -z,x,-y
    -x+1/2,-z+1/2,-y+1/2
    y,z,x
    y,-z,-x
    z+1/2,y+1/2,-x+1/2
    -y,z,-x
    -z+1/2,-y+1/2,-x+1/2
    -y,-z,x
    z+1/2,-y+1/2,x+1/2
    -z+1/2,y+1/2,x+1/2
    -x+1/2,-y+1/2,-z+1/2
    y,-x,-z
    x+1/2,y+1/2,-z+1/2
    -y,x,-z
    -x+1/2,y+1/2,z+1/2
    -y,-x,z
    x+1/2,-y+1/2,z+1/2
    y,x,z
    -z+1/2,-x+1/2,-y+1/2
    x,-z,-y
    z+1/2,x+1/2,-y+1/2
    -x,z,-y
    -z+1/2,x+1/2,y+1/2
    -x,-z,y
    z+1/2,-x+1/2,y+1/2
    x,z,y
    -y+1/2,-z+1/2,-x+1/2
    -y+1/2,z+1/2,x+1/2
    -z,-y,x
    y+1/2,-z+1/2,x+1/2
    z,y,x
    y+1/2,z+1/2,-x+1/2
    -z,y,-x
    z,-y,-x
Fm-3m x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
    z,x,y
    -x,z,y
    -z,-x,y
    x,-z,y
    z,-x,-y
    x,z,-y
    -z,x,-y
    -x,-z,-y
    y,z,x
    y,-z,-x
    z,y,-x
    -y,z,-x
    -z,-y,-x
    -y,-z,x
    z,-y,x
    -z,y,x
    -x,-y,-z
    y,-x,-z
    x,y,-z
    -y,x,-z
    -x,y,z
    -y,-x,z
    x,-y,z
    y,x,z
    -z,-x,-y
    x,-z,-y
    z,x,-y
    -x,z,-y
    -z,x,y
    -x,-z,y
    z,-x,y
    x,z,y
    -y,-z,-x
    -y,z,x
    -z,-y,x
    y,-z,x
    z,y,x
    y,z,-x
    -z,y,-x
    z,-y,-x
    x,y+1/2,z+1/2
    -y,x+1/2,z+1/2
    -x,-y+1/2,z+1/2
    y,-x+1/2,z+1/2
    x,-y+1/2,-z+1/2
    y,x+1/2,-z+1/2
    -x,y+1/2,-z+1/2
    -y,-x+1/2,-z+1/2
    z,x+1/2,y+1/2
    -x,z+1/2,y+1/2
    -z,-x+1/2,y+1/2
    x,-z+1/2,y+1/2
    z,-x+1/2,-y+1/2
    x,z+1/2,-y+1/2
    -z,x+1/2,-y+1/2
    -x,-z+1/2,-y+1/2
    y,z+1/2,x+1/2
    y,-z+1/2,-x+1/2
    z,y+1/2,-x+1/2
    -y,z+1/2,-x+1/2
    -z,-y+1/2,-x+1/2
    -y,-z+1/2,x+1/2
    z,-y+1/2,x+1/2
    -z,y+1/2,x+1/2
    -x,-y+1/2,-z+1/2
    y,-x+1/2,-z+1/2
    x,y+1/2,-z+1/2
    -y,x+1/2,-z+1/2
    -x,y+1/2,z+1/2
    -y,-x+1/2,z+1/2
    x,-y+1/2,z+1/2
    y,x+1/2,z+1/2
    -z,-x+1/2,-y+1/2
    x,-z+1/2,-y+1/2
    z,x+1/2,-y+1/2
    -x,z+1/2,-y+1/2
    -z,x+1/2,y+1/2
    -x,-z+1/2,y+1/2
    z,-x+1/2,y+1/2
    x,z+1/2,y+1/2
    -y,-z+1/2,-x+1/2
    -y,z+1/2,x+1/2
    -z,-y+1/2,x+1/2
    y,-z+1/2,x+1/2
    z,y+1/2,x+1/2
    y,z+1/2,-x+1/2
    -z,y+1/2,-x+1/2
    z,-y+1/2,-x+1/2
    x+1/2,y,z+1/2
    -y+1/2,x,z+1/2
    -x+1/2,-y,z+1/2
    y+1/2,-x,z+1/2
    x+1/2,-y,-z+1/2
    y+1/2,x,-z+1/2
    -x+1/2,y,-z+1/2
    -y+1/2,-x,-z+1/2
    z+1/2,x,y+1/2
    -x+1/2,z,y+1/2
    -z+1/2,-x,y+1/2
    x+1/2,-z,y+1/2
    z+1/2,-x,-y+1/2
    x+1/2,z,-y+1/2
    -z+1/2,x,-y+1/2
    -x+1/2,-z,-y+1/2
    y+1/2,z,x+1/2
    y+1/2,-z,-x+1/2
    z+1/2,y,-x+1/2
    -y+1/2,z,-x+1/2
    -z+1/2,-y,-x+1/2
    -y+1/2,-z,x+1/2
    z+1/2,-y,x+1/2
    -z+1/2,y,x+1/2
    -x+1/2,-y,-z+1/2
    y+1/2,-x,-z+1/2
    x+1/2,y,-z+1/2
    -y+1/2,x,-z+1/2
    -x+1/2,y,z+1/2
    -y+1/2,-x,z+1/2
    x+1/2,-y,z+1/2
    y+1/2,x,z+1/2
    -z+1/2,-x,-y+1/2
    x+1/2,-z,-y+1/2
    z+1/2,x,-y+1/2
    -x+1/2,z,-y+1/2
    -z+1/2,x,y+1/2
    -x+1/2,-z,y+1/2
    z+1/2,-x,y+1/2
    x+1/2,z,y+1/2
    -y+1/2,-z,-x+1/2
    -y+1/2,z,x+1/2
    -z+1/2,-y,x+1/2
    y+1/2,-z,x+1/2
    z+1/2,y,x+1/2
    y+1/2,z,-x+1/2
    -z+1/2,y,-x+1/2
    z+1/2,-y,-x+1/2
    x+1/2,y+1/2,z
    -y+1/2,x+1/2,z
    -x+1/2,-y+1/2,z
    y+1/2,-x+1/2,z
    x+1/2,-y+1/2,-z
    y+1/2,x+1/2,-z
    -x+1/2,y+1/2,-z
    -y+1/2,-x+1/2,-z
    z+1/2,x+1/2,y
    -x+1/2,z+1/2,y
    -z+1/2,-x+1/2,y
    x+1/2,-z+1/2,y
    z+1/2,-x+1/2,-y
    x+1/2,z+1/2,-y
    -z+1/2,x+1/2,-y
    -x+1/2,-z+1/2,-y
    y+1/2,z+1/2,x
    y+1/2,-z+1/2,-x
    z+1/2,y+1/2,-x
    -y+1/2,z+1/2,-x
    -z+1/2,-y+1/2,-x
    -y+1/2,-z+1/2,x
    z+1/2,-y+1/2,x
    -z+1/2,y+1/2,x
    -x+1/2,-y+1/2,-z
    y+1/2,-x+1/2,-z
    x+1/2,y+1/2,-z
    -y+1/2,x+1/2,-z
    -x+1/2,y+1/2,z
    -y+1/2,-x+1/2,z
    x+1/2,-y+1/2,z
    y+1/2,x+1/2,z
    -z+1/2,-x+1/2,-y
    x+1/2,-z+1/2,-y
    z+1/2,x+1/2,-y
    -x+1/2,z+1/2,-y
    -z+1/2,x+1/2,y
    -x+1/2,-z+1/2,y
    z+1/2,-x+1/2,y
    x+1/2,z+1/2,y
    -y+1/2,-z+1/2,-x
    -y+1/2,z+1/2,x
    -z+1/2,-y+1/2,x
    y+1/2,-z+1/2,x
    z+1/2,y+1/2,x
    y+1/2,z+1/2,-x
    -z+1/2,y+1/2,-x
    z+1/2,-y+1/2,-x
Fm-3c x,y,z
    x,y,z
    -y+1/2,x,z
    -x+1/2,-y+1/2,z
    y,-x+1/2,z
    x,-y,-z
    y+1/2,x,-z
    -x+1/2,y+1/2,-z
    -y,-x+1/2,-z
    z,x,y
    -x+1/2,z,y
    -z+1/2,-x+1/2,y
    x,-z+1/2,y
    z,-x,-y
    x+1/2,z,-y
    -z+1/2,x+1/2,-y
    -x,-z+1/2,-y
    y,z,x
    y,-z+1/2,-x+1/2
    z,y,-x+1/2
    -y+1/2,z,-x+1/2
    -z+1/2,-y,-x
    -y,-z,x
    z,-y,x+1/2
    -z+1/2,y+1/2,x+1/2
    -x,-y,-z
    y-1/2,-x,-z
    x-1/2,y-1/2,-z
    -y,x-1/2,-z
    -x,y,z
    -y-1/2,-x,z
    x-1/2,-y-1/2,z
    y,x-1/2,z
    -z,-x,-y
    x-1/2,-z,-y
    z-1/2,x-1/2,-y
    -x,z-1/2,-y
    -z,x,y
    -x-1/2,-z,y
    z-1/2,-x-1/2,y
    x,z-1/2,y
    -y,-z,-x
    -y,z-1/2,x-1/2
    -z,-y,x-1/2
    y-1/2,-z,x-1/2
    z-1/2,y,x
    y,z,-x
    -z,y,-x-1/2
    z-1/2,-y-1/2,-x-1/2
    x,y+1/2,z+1/2
    -y+1/2,x+1/2,z+1/2
    -x+1/2,-y+1,z+1/2
    y,-x+1,z+1/2
    x,-y+1/2,-z+1/2
    y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1,-z+1/2
    -y,-x+1,-z+1/2
    z,x+1/2,y+1/2
    -x+1/2,z+1/2,y+1/2
    -z+1/2,-x+1,y+1/2
    x,-z+1,y+1/2
    z,-x+1/2,-y+1/2
    x+1/2,z+1/2,-y+1/2
    -z+1/2,x+1,-y+1/2
    -x,-z+1,-y+1/2
    y,z+1/2,x+1/2
    y,-z+1,-x+1
    z,y+1/2,-x+1
    -y+1/2,z+1/2,-x+1
    -z+1/2,-y+1/2,-x+1/2
    -y,-z+1/2,x+1/2
    z,-y+1/2,x+1
    -z+1/2,y+1,x+1
    -x,-y+1/2,-z+1/2
    y-1/2,-x+1/2,-z+1/2
    x-1/2,y,-z+1/2
    -y,x,-z+1/2
    -x,y+1/2,z+1/2
    -y-1/2,-x+1/2,z+1/2
    x-1/2,-y,z+1/2
    y,x,z+1/2
    -z,-x+1/2,-y+1/2
    x-1/2,-z+1/2,-y+1/2
    z-1/2,x,-y+1/2
    -x,z,-y+1/2
    -z,x+1/2,y+1/2
    -x-1/2,-z+1/2,y+1/2
    z-1/2,-x,y+1/2
    x,z,y+1/2
    -y,-z+1/2,-x+1/2
    -y,z,x
    -z,-y+1/2,x
    y-1/2,-z+1/2,x
    z-1/2,y+1/2,x+1/2
    y,z+1/2,-x+1/2
    -z,y+1/2,-x
    z-1/2,-y,-x
    x+1/2,y,z+1/2
    -y+1,x,z+1/2
    -x+1,-y+1/2,z+1/2
    y+1/2,-x+1/2,z+1/2
    x+1/2,-y,-z+1/2
    y+1,x,-z+1/2
    -x+1,y+1/2,-z+1/2
    -y+1/2,-x+1/2,-z+1/2
    z+1/2,x,y+1/2
    -x+1,z,y+1/2
    -z+1,-x+1/2,y+1/2
    x+1/2,-z+1/2,y+1/2
    z+1/2,-x,-y+1/2
    x+1,z,-y+1/2
    -z+1,x+1/2,-y+1/2
    -x+1/2,-z+1/2,-y+1/2
    y+1/2,z,x+1/2
    y+1/2,-z+1/2,-x+1
    z+1/2,y,-x+1
    -y+1,z,-x+1
    -z+1,-y,-x+1/2
    -y+1/2,-z,x+1/2
    z+1/2,-y,x+1
    -z+1,y+1/2,x+1
    -x+1/2,-y,-z+1/2
    y,-x,-z+1/2
    x,y-1/2,-z+1/2
    -y+1/2,x-1/2,-z+1/2
    -x+1/2,y,z+1/2
    -y,-x,z+1/2
    x,-y-1/2,z+1/2
    y+1/2,x-1/2,z+1/2
    -z+1/2,-x,-y+1/2
    x,-z,-y+1/2
    z,x-1/2,-y+1/2
    -x+1/2,z-1/2,-y+1/2
    -z+1/2,x,y+1/2
    -x,-z,y+1/2
    z,-x-1/2,y+1/2
    x+1/2,z-1/2,y+1/2
    -y+1/2,-z,-x+1/2
    -y+1/2,z-1/2,x
    -z+1/2,-y,x
    y,-z,x
    z,y,x+1/2
    y+1/2,z,-x+1/2
    -z+1/2,y,-x
    z,-y-1/2,-x
    x+1/2,y+1/2,z
    -y+1,x+1/2,z
    -x+1,-y+1,z
    y+1/2,-x+1,z
    x+1/2,-y+1/2,-z
    y+1,x+1/2,-z
    -x+1,y+1,-z
    -y+1/2,-x+1,-z
    z+1/2,x+1/2,y
    -x+1,z+1/2,y
    -z+1,-x+1,y
    x+1/2,-z+1,y
    z+1/2,-x+1/2,-y
    x+1,z+1/2,-y
    -z+1,x+1,-y
    -x+1/2,-z+1,-y
    y+1/2,z+1/2,x
    y+1/2,-z+1,-x+1/2
    z+1/2,y+1/2,-x+1/2
    -y+1,z+1/2,-x+1/2
    -z+1,-y+1/2,-x
    -y+1/2,-z+1/2,x
    z+1/2,-y+1/2,x+1/2
    -z+1,y+1,x+1/2
    -x+1/2,-y+1/2,-z
    y,-x+1/2,-z
    x,y,-z
    -y+1/2,x,-z
    -x+1/2,y+1/2,z
    -y,-x+1/2,z
    x,-y,z
    y+1/2,x,z
    -z+1/2,-x+1/2,-y
    x,-z+1/2,-y
    z,x,-y
    -x+1/2,z,-y
    -z+1/2,x+1/2,y
    -x,-z+1/2,y
    z,-x,y
    x+1/2,z,y
    -y+1/2,-z+1/2,-x
    -y+1/2,z,x-1/2
    -z+1/2,-y+1/2,x-1/2
    y,-z+1/2,x-1/2
    z,y+1/2,x
    y+1/2,z+1/2,-x
    -z+1/2,y+1/2,-x-1/2
    z,-y,-x-1/2
Fd-3m:2 x,y,z
    x,y,z
    -y,x+1/4,z+1/4
    -x+3/4,-y+1/4,z+1/2
    y+3/4,-x,z+3/4
    x,-y+1/4,-z+1/4
    y+3/4,x+1/4,-z+1/2
    -x+3/4,y,-z+3/4
    -y,-x,-z
    z,x,y
    -x,z+1/4,y+1/4
    -z+3/4,-x+1/4,y+1/2
    x+3/4,-z,y+3/4
    z,-x+1/4,-y+1/4
    x+3/4,z+1/4,-y+1/2
    -z+3/4,x,-y+3/4
    -x,-z,-y
    y,z,x
    y+1/2,-z+3/4,-x+1/4
    z+1/4,y+3/4,-x+1/2
    -y+1/4,z+1/2,-x+3/4
    -z,-y+1/2,-x+1/2
    -y+1/4,-z+1/4,x
    z+1/4,-y,x+1/4
    -z+1/2,y+1/4,x+3/4
    -x,-y,-z
    y,-x-1/4,-z-1/4
    x-3/4,y-1/4,-z-1/2
    -y-3/4,x,-z-3/4
    -x,y-1/4,z-1/4
    -y-3/4,-x-1/4,z-1/2
    x-3/4,-y,z-3/4
    y,x,z
    -z,-x,-y
    x,-z-1/4,-y-1/4
    z-3/4,x-1/4,-y-1/2
    -x-3/4,z,-y-3/4
    -z,x-1/4,y-1/4
    -x-3/4,-z-1/4,y-1/2
    z-3/4,-x,y-3/4
    x,z,y
    -y,-z,-x
    -y-1/2,z-3/4,x-1/4
    -z-1/4,-y-3/4,x-1/2
    y-1/4,-z-1/2,x-3/4
    z,y-1/2,x-1/2
    y-1/4,z-1/4,-x
    -z-1/4,y,-x-1/4
    z-1/2,-y-1/4,-x-3/4
    x,y+1/2,z+1/2
    -y,x+3/4,z+3/4
    -x+3/4,-y+3/4,z+1
    y+3/4,-x+1/2,z+5/4
    x,-y+3/4,-z+3/4
    y+3/4,x+3/4,-z+1
    -x+3/4,y+1/2,-z+5/4
    -y,-x+1/2,-z+1/2
    z,x+1/2,y+1/2
    -x,z+3/4,y+3/4
    -z+3/4,-x+3/4,y+1
    x+3/4,-z+1/2,y+5/4
    z,-x+3/4,-y+3/4
    x+3/4,z+3/4,-y+1
    -z+3/4,x+1/2,-y+5/4
    -x,-z+1/2,-y+1/2
    y,z+1/2,x+1/2
    y+1/2,-z+5/4,-x+3/4
    z+1/4,y+5/4,-x+1
    -y+1/4,z+1,-x+5/4
    -z,-y+1,-x+1
    -y+1/4,-z+3/4,x+1/2
    z+1/4,-y+1/2,x+3/4
    -z+1/2,y+3/4,x+5/4
    -x,-y+1/2,-z+1/2
    y,-x+1/4,-z+1/4
    x-3/4,y+1/4,-z
    -y-3/4,x+1/2,-z-1/4
    -x,y+1/4,z+1/4
    -y-3/4,-x+1/4,z
    x-3/4,-y+1/2,z-1/4
    y,x+1/2,z+1/2
    -z,-x+1/2,-y+1/2
    x,-z+1/4,-y+1/4
    z-3/4,x+1/4,-y
    -x-3/4,z+1/2,-y-1/4
    -z,x+1/4,y+1/4
    -x-3/4,-z+1/4,y
    z-3/4,-x+1/2,y-1/4
    x,z+1/2,y+1/2
    -y,-z+1/2,-x+1/2
    -y-1/2,z-1/4,x+1/4
    -z-1/4,-y-1/4,x
    y-1/4,-z,x-1/4
    z,y,x
    y-1/4,z+1/4,-x+1/2
    -z-1/4,y+1/2,-x+1/4
    z-1/2,-y+1/4,-x-1/4
    x+1/2,y,z+1/2
    -y+1/2,x+1/4,z+3/4
    -x+5/4,-y+1/4,z+1
    y+5/4,-x,z+5/4
    x+1/2,-y+1/4,-z+3/4
    y+5/4,x+1/4,-z+1
    -x+5/4,y,-z+5/4
    -y+1/2,-x,-z+1/2
    z+1/2,x,y+1/2
    -x+1/2,z+1/4,y+3/4
    -z+5/4,-x+1/4,y+1
    x+5/4,-z,y+5/4
    z+1/2,-x+1/4,-y+3/4
    x+5/4,z+1/4,-y+1
    -z+5/4,x,-y+5/4
    -x+1/2,-z,-y+1/2
    y+1/2,z,x+1/2
    y+1,-z+3/4,-x+3/4
    z+3/4,y+3/4,-x+1
    -y+3/4,z+1/2,-x+5/4
    -z+1/2,-y+1/2,-x+1
    -y+3/4,-z+1/4,x+1/2
    z+3/4,-y,x+3/4
    -z+1,y+1/4,x+5/4
    -x+1/2,-y,-z+1/2
    y+1/2,-x-1/4,-z+1/4
    x-1/4,y-1/4,-z
    -y-1/4,x,-z-1/4
    -x+1/2,y-1/4,z+1/4
    -y-1/4,-x-1/4,z
    x-1/4,-y,z-1/4
    y+1/2,x,z+1/2
    -z+1/2,-x,-y+1/2
    x+1/2,-z-1/4,-y+1/4
    z-1/4,x-1/4,-y
    -x-1/4,z,-y-1/4
    -z+1/2,x-1/4,y+1/4
    -x-1/4,-z-1/4,y
    z-1/4,-x,y-1/4
    x+1/2,z,y+1/2
    -y+1/2,-z,-x+1/2
    -y,z-3/4,x+1/4
    -z+1/4,-y-3/4,x
    y+1/4,-z-1/2,x-1/4
    z+1/2,y-1/2,x
    y+1/4,z-1/4,-x+1/2
    -z+1/4,y,-x+1/4
    z,-y-1/4,-x-1/4
    x+1/2,y+1/2,z
    -y+1/2,x+3/4,z+1/4
    -x+5/4,-y+3/4,z+1/2
    y+5/4,-x+1/2,z+3/4
    x+1/2,-y+3/4,-z+1/4
    y+5/4,x+3/4,-z+1/2
    -x+5/4,y+1/2,-z+3/4
    -y+1/2,-x+1/2,-z
    z+1/2,x+1/2,y
    -x+1/2,z+3/4,y+1/4
    -z+5/4,-x+3/4,y+1/2
    x+5/4,-z+1/2,y+3/4
    z+1/2,-x+3/4,-y+1/4
    x+5/4,z+3/4,-y+1/2
    -z+5/4,x+1/2,-y+3/4
    -x+1/2,-z+1/2,-y
    y+1/2,z+1/2,x
    y+1,-z+5/4,-x+1/4
    z+3/4,y+5/4,-x+1/2
    -y+3/4,z+1,-x+3/4
    -z+1/2,-y+1,-x+1/2
    -y+3/4,-z+3/4,x
    z+3/4,-y+1/2,x+1/4
    -z+1,y+3/4,x+3/4
    -x+1/2,-y+1/2,-z
    y+1/2,-x+1/4,-z-1/4
    x-1/4,y+1/4,-z-1/2
    -y-1/4,x+1/2,-z-3/4
    -x+1/2,y+1/4,z-1/4
    -y-1/4,-x+1/4,z-1/2
    x-1/4,-y+1/2,z-3/4
    y+1/2,x+1/2,z
    -z+1/2,-x+1/2,-y
    x+1/2,-z+1/4,-y-1/4
    z-1/4,x+1/4,-y-1/2
    -x-1/4,z+1/2,-y-3/4
    -z+1/2,x+1/4,y-1/4
    -x-1/4,-z+1/4,y-1/2
    z-1/4,-x+1/2,y-3/4
    x+1/2,z+1/2,y
    -y+1/2,-z+1/2,-x
    -y,z-1/4,x-1/4
    -z+1/4,-y-1/4,x-1/2
    y+1/4,-z,x-3/4
    z+1/2,y,x-1/2
    y+1/4,z+1/4,-x
    -z+1/4,y+1/2,-x-1/4
    z,-y+1/4,-x-3/4
Fd-3m:1 x-1/8,y-1/8,z-1/8
    x,y,z
    -y+1/4,x+1/4,z+1/4
    -x,-y+1/2,z+1/2
    y+3/4,-x+1/4,z+3/4
    x,-y,-z
    y+1/4,x+1/4,-z+1/4
    -x,y+1/2,-z+1/2
    -y+3/4,-x+1/4,-z+3/4
    z,x,y
    -x+1/4,z+1/4,y+1/4
    -z,-x+1/2,y+1/2
    x+3/4,-z+1/4,y+3/4
    z,-x,-y
    x+1/4,z+1/4,-y+1/4
    -z,x+1/2,-y+1/2
    -x+3/4,-z+1/4,-y+3/4
    y,z,x
    y+1/2,-z,-x+1/2
    z+1/4,y+3/4,-x+3/4
    -y+1/2,z+1/2,-x
    -z+1/4,-y+1/4,-x+1/4
    -y,-z,x
    z+1/4,-y+3/4,x+3/4
    -z+3/4,y+3/4,x+1/4
    -x+1/4,-y+1/4,-z+1/4
    y,-x,-z
    x+1/4,y-1/4,-z-1/4
    -y-1/2,x,-z-1/2
    -x+1/4,y+1/4,z+1/4
    -y,-x,z
    x+1/4,-y-1/4,z-1/4
    y-1/2,x,z-1/2
    -z+1/4,-x+1/4,-y+1/4
    x,-z,-y
    z+1/4,x-1/4,-y-1/4
    -x-1/2,z,-y-1/2
    -z+1/4,x+1/4,y+1/4
    -x,-z,y
    z+1/4,-x-1/4,y-1/4
    x-1/2,z,y-1/2
    -y+1/4,-z+1/4,-x+1/4
    -y-1/4,z+1/4,x-1/4
    -z,-y-1/2,x-1/2
    y-1/4,-z-1/4,x+1/4
    z,y,x
    y+1/4,z+1/4,-x+1/4
    -z,y-1/2,-x-1/2
    z-1/2,-y-1/2,-x
    x,y+1/2,z+1/2
    -y+1/4,x+3/4,z+3/4
    -x,-y+1,z+1
    y+3/4,-x+3/4,z+5/4
    x,-y+1/2,-z+1/2
    y+1/4,x+3/4,-z+3/4
    -x,y+1,-z+1
    -y+3/4,-x+3/4,-z+5/4
    z,x+1/2,y+1/2
    -x+1/4,z+3/4,y+3/4
    -z,-x+1,y+1
    x+3/4,-z+3/4,y+5/4
    z,-x+1/2,-y+1/2
    x+1/4,z+3/4,-y+3/4
    -z,x+1,-y+1
    -x+3/4,-z+3/4,-y+5/4
    y,z+1/2,x+1/2
    y+1/2,-z+1/2,-x+1
    z+1/4,y+5/4,-x+5/4
    -y+1/2,z+1,-x+1/2
    -z+1/4,-y+3/4,-x+3/4
    -y,-z+1/2,x+1/2
    z+1/4,-y+5/4,x+5/4
    -z+3/4,y+5/4,x+3/4
    -x+1/4,-y+3/4,-z+3/4
    y,-x+1/2,-z+1/2
    x+1/4,y+1/4,-z+1/4
    -y-1/2,x+1/2,-z
    -x+1/4,y+3/4,z+3/4
    -y,-x+1/2,z+1/2
    x+1/4,-y+1/4,z+1/4
    y-1/2,x+1/2,z
    -z+1/4,-x+3/4,-y+3/4
    x,-z+1/2,-y+1/2
    z+1/4,x+1/4,-y+1/4
    -x-1/2,z+1/2,-y
    -z+1/4,x+3/4,y+3/4
    -x,-z+1/2,y+1/2
    z+1/4,-x+1/4,y+1/4
    x-1/2,z+1/2,y
    -y+1/4,-z+3/4,-x+3/4
    -y-1/4,z+3/4,x+1/4
    -z,-y,x
    y-1/4,-z+1/4,x+3/4
    z,y+1/2,x+1/2
    y+1/4,z+3/4,-x+3/4
    -z,y,-x
    z-1/2,-y,-x+1/2
    x+1/2,y,z+1/2
    -y+3/4,x+1/4,z+3/4
    -x+1/2,-y+1/2,z+1
    y+5/4,-x+1/4,z+5/4
    x+1/2,-y,-z+1/2
    y+3/4,x+1/4,-z+3/4
    -x+1/2,y+1/2,-z+1
    -y+5/4,-x+1/4,-z+5/4
    z+1/2,x,y+1/2
    -x+3/4,z+1/4,y+3/4
    -z+1/2,-x+1/2,y+1
    x+5/4,-z+1/4,y+5/4
    z+1/2,-x,-y+1/2
    x+3/4,z+1/4,-y+3/4
    -z+1/2,x+1/2,-y+1
    -x+5/4,-z+1/4,-y+5/4
    y+1/2,z,x+1/2
    y+1,-z,-x+1
    z+3/4,y+3/4,-x+5/4
    -y+1,z+1/2,-x+1/2
    -z+3/4,-y+1/4,-x+3/4
    -y+1/2,-z,x+1/2
    z+3/4,-y+3/4,x+5/4
    -z+5/4,y+3/4,x+3/4
    -x+3/4,-y+1/4,-z+3/4
    y+1/2,-x,-z+1/2
    x+3/4,y-1/4,-z+1/4
    -y,x,-z
    -x+3/4,y+1/4,z+3/4
    -y+1/2,-x,z+1/2
    x+3/4,-y-1/4,z+1/4
    y,x,z
    -z+3/4,-x+1/4,-y+3/4
    x+1/2,-z,-y+1/2
    z+3/4,x-1/4,-y+1/4
    -x,z,-y
    -z+3/4,x+1/4,y+3/4
    -x+1/2,-z,y+1/2
    z+3/4,-x-1/4,y+1/4
    x,z,y
    -y+3/4,-z+1/4,-x+3/4
    -y+1/4,z+1/4,x+1/4
    -z+1/2,-y-1/2,x
    y+1/4,-z-1/4,x+3/4
    z+1/2,y,x+1/2
    y+3/4,z+1/4,-x+3/4
    -z+1/2,y-1/2,-x
    z,-y-1/2,-x+1/2
    x+1/2,y+1/2,z
    -y+3/4,x+3/4,z+1/4
    -x+1/2,-y+1,z+1/2
    y+5/4,-x+3/4,z+3/4
    x+1/2,-y+1/2,-z
    y+3/4,x+3/4,-z+1/4
    -x+1/2,y+1,-z+1/2
    -y+5/4,-x+3/4,-z+3/4
    z+1/2,x+1/2,y
    -x+3/4,z+3/4,y+1/4
    -z+1/2,-x+1,y+1/2
    x+5/4,-z+3/4,y+3/4
    z+1/2,-x+1/2,-y
    x+3/4,z+3/4,-y+1/4
    -z+1/2,x+1,-y+1/2
    -x+5/4,-z+3/4,-y+3/4
    y+1/2,z+1/2,x
    y+1,-z+1/2,-x+1/2
    z+3/4,y+5/4,-x+3/4
    -y+1,z+1,-x
    -z+3/4,-y+3/4,-x+1/4
    -y+1/2,-z+1/2,x
    z+3/4,-y+5/4,x+3/4
    -z+5/4,y+5/4,x+1/4
    -x+3/4,-y+3/4,-z+1/4
    y+1/2,-x+1/2,-z
    x+3/4,y+1/4,-z-1/4
    -y,x+1/2,-z-1/2
    -x+3/4,y+3/4,z+1/4
    -y+1/2,-x+1/2,z
    x+3/4,-y+1/4,z-1/4
    y,x+1/2,z-1/2
    -z+3/4,-x+3/4,-y+1/4
    x+1/2,-z+1/2,-y
    z+3/4,x+1/4,-y-1/4
    -x,z+1/2,-y-1/2
    -z+3/4,x+3/4,y+1/4
    -x+1/2,-z+1/2,y
    z+3/4,-x+1/4,y-1/4
    x,z+1/2,y-1/2
    -y+3/4,-z+3/4,-x+1/4
    -y+1/4,z+3/4,x-1/4
    -z+1/2,-y,x-1/2
    y+1/4,-z+1/4,x+1/4
    z+1/2,y+1/2,x
    y+3/4,z+3/4,-x+1/4
    -z+1/2,y,-x-1/2
    z,-y,-x
Fd-3c:2 x,y,z
    x,y,z
    -y+1/2,x+1/4,z+1/4
    -x+1/4,-y+3/4,z+1/2
    y+3/4,-x+1/2,z+3/4
    x,-y+1/4,-z+1/4
    y+1/4,x+1/4,-z+1/2
    -x+1/4,y+1/2,-z+3/4
    -y,-x+1/2,-z
    z,x,y
    -x+1/2,z+1/4,y+1/4
    -z+1/4,-x+3/4,y+1/2
    x+3/4,-z+1/2,y+3/4
    z,-x+1/4,-y+1/4
    x+1/4,z+1/4,-y+1/2
    -z+1/4,x+1/2,-y+3/4
    -x,-z+1/2,-y
    y,z,x
    y+1/2,-z+1/4,-x+3/4
    z+1/4,y+3/4,-x
    -y+3/4,z+1/2,-x+1/4
    -z+1/2,-y+1/2,-x+1/2
    -y+1/4,-z+1/4,x
    z+1/4,-y,x+3/4
    -z,y+3/4,x+1/4
    -x,-y,-z
    y-1/2,-x-1/4,-z-1/4
    x-1/4,y-3/4,-z-1/2
    -y-3/4,x-1/2,-z-3/4
    -x,y-1/4,z-1/4
    -y-1/4,-x-1/4,z-1/2
    x-1/4,-y-1/2,z-3/4
    y,x-1/2,z
    -z,-x,-y
    x-1/2,-z-1/4,-y-1/4
    z-1/4,x-3/4,-y-1/2
    -x-3/4,z-1/2,-y-3/4
    -z,x-1/4,y-1/4
    -x-1/4,-z-1/4,y-1/2
    z-1/4,-x-1/2,y-3/4
    x,z-1/2,y
    -y,-z,-x
    -y-1/2,z-1/4,x-3/4
    -z-1/4,-y-3/4,x
    y-3/4,-z-1/2,x-1/4
    z-1/2,y-1/2,x-1/2
    y-1/4,z-1/4,-x
    -z-1/4,y,-x-3/4
    z,-y-3/4,-x-1/4
    x,y+1/2,z+1/2
    -y+1/2,x+3/4,z+3/4
    -x+1/4,-y+5/4,z+1
    y+3/4,-x+1,z+5/4
    x,-y+3/4,-z+3/4
    y+1/4,x+3/4,-z+1
    -x+1/4,y+1,-z+5/4
    -y,-x+1,-z+1/2
    z,x+1/2,y+1/2
    -x+1/2,z+3/4,y+3/4
    -z+1/4,-x+5/4,y+1
    x+3/4,-z+1,y+5/4
    z,-x+3/4,-y+3/4
    x+1/4,z+3/4,-y+1
    -z+1/4,x+1,-y+5/4
    -x,-z+1,-y+1/2
    y,z+1/2,x+1/2
    y+1/2,-z+3/4,-x+5/4
    z+1/4,y+5/4,-x+1/2
    -y+3/4,z+1,-x+3/4
    -z+1/2,-y+1,-x+1
    -y+1/4,-z+3/4,x+1/2
    z+1/4,-y+1/2,x+5/4
    -z,y+5/4,x+3/4
    -x,-y+1/2,-z+1/2
    y-1/2,-x+1/4,-z+1/4
    x-1/4,y-1/4,-z
    -y-3/4,x,-z-1/4
    -x,y+1/4,z+1/4
    -y-1/4,-x+1/4,z
    x-1/4,-y,z-1/4
    y,x,z+1/2
    -z,-x+1/2,-y+1/2
    x-1/2,-z+1/4,-y+1/4
    z-1/4,x-1/4,-y
    -x-3/4,z,-y-1/4
    -z,x+1/4,y+1/4
    -x-1/4,-z+1/4,y
    z-1/4,-x,y-1/4
    x,z,y+1/2
    -y,-z+1/2,-x+1/2
    -y-1/2,z+1/4,x-1/4
    -z-1/4,-y-1/4,x+1/2
    y-3/4,-z,x+1/4
    z-1/2,y,x
    y-1/4,z+1/4,-x+1/2
    -z-1/4,y+1/2,-x-1/4
    z,-y-1/4,-x+1/4
    x+1/2,y,z+1/2
    -y+1,x+1/4,z+3/4
    -x+3/4,-y+3/4,z+1
    y+5/4,-x+1/2,z+5/4
    x+1/2,-y+1/4,-z+3/4
    y+3/4,x+1/4,-z+1
    -x+3/4,y+1/2,-z+5/4
    -y+1/2,-x+1/2,-z+1/2
    z+1/2,x,y+1/2
    -x+1,z+1/4,y+3/4
    -z+3/4,-x+3/4,y+1
    x+5/4,-z+1/2,y+5/4
    z+1/2,-x+1/4,-y+3/4
    x+3/4,z+1/4,-y+1
    -z+3/4,x+1/2,-y+5/4
    -x+1/2,-z+1/2,-y+1/2
    y+1/2,z,x+1/2
    y+1,-z+1/4,-x+5/4
    z+3/4,y+3/4,-x+1/2
    -y+5/4,z+1/2,-x+3/4
    -z+1,-y+1/2,-x+1
    -y+3/4,-z+1/4,x+1/2
    z+3/4,-y,x+5/4
    -z+1/2,y+3/4,x+3/4
    -x+1/2,-y,-z+1/2
    y,-x-1/4,-z+1/4
    x+1/4,y-3/4,-z
    -y-1/4,x-1/2,-z-1/4
    -x+1/2,y-1/4,z+1/4
    -y+1/4,-x-1/4,z
    x+1/4,-y-1/2,z-1/4
    y+1/2,x-1/2,z+1/2
    -z+1/2,-x,-y+1/2
    x,-z-1/4,-y+1/4
    z+1/4,x-3/4,-y
    -x-1/4,z-1/2,-y-1/4
    -z+1/2,x-1/4,y+1/4
    -x+1/4,-z-1/4,y
    z+1/4,-x-1/2,y-1/4
    x+1/2,z-1/2,y+1/2
    -y+1/2,-z,-x+1/2
    -y,z-1/4,x-1/4
    -z+1/4,-y-3/4,x+1/2
    y-1/4,-z-1/2,x+1/4
    z,y-1/2,x
    y+1/4,z-1/4,-x+1/2
    -z+1/4,y,-x-1/4
    z+1/2,-y-3/4,-x+1/4
    x+1/2,y+1/2,z
    -y+1,x+3/4,z+1/4
    -x+3/4,-y+5/4,z+1/2
    y+5/4,-x+1,z+3/4
    x+1/2,-y+3/4,-z+1/4
    y+3/4,x+3/4,-z+1/2
    -x+3/4,y+1,-z+3/4
    -y+1/2,-x+1,-z
    z+1/2,x+1/2,y
    -x+1,z+3/4,y+1/4
    -z+3/4,-x+5/4,y+1/2
    x+5/4,-z+1,y+3/4
    z+1/2,-x+3/4,-y+1/4
    x+3/4,z+3/4,-y+1/2
    -z+3/4,x+1,-y+3/4
    -x+1/2,-z+1,-y
    y+1/2,z+1/2,x
    y+1,-z+3/4,-x+3/4
    z+3/4,y+5/4,-x
    -y+5/4,z+1,-x+1/4
    -z+1,-y+1,-x+1/2
    -y+3/4,-z+3/4,x
    z+3/4,-y+1/2,x+3/4
    -z+1/2,y+5/4,x+1/4
    -x+1/2,-y+1/2,-z
    y,-x+1/4,-z-1/4
    x+1/4,y-1/4,-z-1/2
    -y-1/4,x,-z-3/4
    -x+1/2,y+1/4,z-1/4
    -y+1/4,-x+1/4,z-1/2
    x+1/4,-y,z-3/4
    y+1/2,x,z
    -z+1/2,-x+1/2,-y
    x,-z+1/4,-y-1/4
    z+1/4,x-1/4,-y-1/2
    -x-1/4,z,-y-3/4
    -z+1/2,x+1/4,y-1/4
    -x+1/4,-z+1/4,y-1/2
    z+1/4,-x,y-3/4
    x+1/2,z,y
    -y+1/2,-z+1/2,-x
    -y,z+1/4,x-3/4
    -z+1/4,-y-1/4,x
    y-1/4,-z,x-1/4
    z,y,x-1/2
    y+1/4,z+1/4,-x
    -z+1/4,y+1/2,-x-3/4
    z+1/2,-y-1/4,-x-1/4
Fd-3c:1 x+1/8,y+1/8,z+1/8
    x,y,z
    -y+1/4,x+1/4,z+1/4
    -x,-y+1/2,z+1/2
    y+3/4,-x+1/4,z+3/4
    x,-y,-z
    y+1/4,x+1/4,-z+1/4
    -x,y+1/2,-z+1/2
    -y+3/4,-x+1/4,-z+3/4
    z,x,y
    -x+1/4,z+1/4,y+1/4
    -z,-x+1/2,y+1/2
    x+3/4,-z+1/4,y+3/4
    z,-x,-y
    x+1/4,z+1/4,-y+1/4
    -z,x+1/2,-y+1/2
    -x+3/4,-z+1/4,-y+3/4
    y,z,x
    y+1/2,-z,-x+1/2
    z+1/4,y+3/4,-x+3/4
    -y+1/2,z+1/2,-x
    -z+1/4,-y+1/4,-x+1/4
    -y,-z,x
    z+1/4,-y+3/4,x+3/4
    -z+3/4,y+3/4,x+1/4
    -x+3/4,-y+1/4,-z+1/4
    y+1/2,-x,-z
    x+3/4,y-1/4,-z-1/4
    -y,x,-z-1/2
    -x+3/4,y+1/4,z+1/4
    -y+1/2,-x,z
    x+3/4,-y-1/4,z-1/4
    y,x,z-1/2
    -z+3/4,-x+1/4,-y+1/4
    x+1/2,-z,-y
    z+3/4,x-1/4,-y-1/4
    -x,z,-y-1/2
    -z+3/4,x+1/4,y+1/4
    -x+1/2,-z,y
    z+3/4,-x-1/4,y-1/4
    x,z,y-1/2
    -y+3/4,-z+1/4,-x+1/4
    -y+1/4,z+1/4,x-1/4
    -z+1/2,-y-1/2,x-1/2
    y+1/4,-z-1/4,x+1/4
    z+1/2,y,x
    y+3/4,z+1/4,-x+1/4
    -z+1/2,y-1/2,-x-1/2
    z,-y-1/2,-x
    x,y+1/2,z+1/2
    -y+1/4,x+3/4,z+3/4
    -x,-y+1,z+1
    y+3/4,-x+3/4,z+5/4
    x,-y+1/2,-z+1/2
    y+1/4,x+3/4,-z+3/4
    -x,y+1,-z+1
    -y+3/4,-x+3/4,-z+5/4
    z,x+1/2,y+1/2
    -x+1/4,z+3/4,y+3/4
    -z,-x+1,y+1
    x+3/4,-z+3/4,y+5/4
    z,-x+1/2,-y+1/2
    x+1/4,z+3/4,-y+3/4
    -z,x+1,-y+1
    -x+3/4,-z+3/4,-y+5/4
    y,z+1/2,x+1/2
    y+1/2,-z+1/2,-x+1
    z+1/4,y+5/4,-x+5/4
    -y+1/2,z+1,-x+1/2
    -z+1/4,-y+3/4,-x+3/4
    -y,-z+1/2,x+1/2
    z+1/4,-y+5/4,x+5/4
    -z+3/4,y+5/4,x+3/4
    -x+3/4,-y+3/4,-z+3/4
    y+1/2,-x+1/2,-z+1/2
    x+3/4,y+1/4,-z+1/4
    -y,x+1/2,-z
    -x+3/4,y+3/4,z+3/4
    -y+1/2,-x+1/2,z+1/2
    x+3/4,-y+1/4,z+1/4
    y,x+1/2,z
    -z+3/4,-x+3/4,-y+3/4
    x+1/2,-z+1/2,-y+1/2
    z+3/4,x+1/4,-y+1/4
    -x,z+1/2,-y
    -z+3/4,x+3/4,y+3/4
    -x+1/2,-z+1/2,y+1/2
    z+3/4,-x+1/4,y+1/4
    x,z+1/2,y
    -y+3/4,-z+3/4,-x+3/4
    -y+1/4,z+3/4,x+1/4
    -z+1/2,-y,x
    y+1/4,-z+1/4,x+3/4
    z+1/2,y+1/2,x+1/2
    y+3/4,z+3/4,-x+3/4
    -z+1/2,y,-x
    z,-y,-x+1/2
    x+1/2,y,z+1/2
    -y+3/4,x+1/4,z+3/4
    -x+1/2,-y+1/2,z+1
    y+5/4,-x+1/4,z+5/4
    x+1/2,-y,-z+1/2
    y+3/4,x+1/4,-z+3/4
    -x+1/2,y+1/2,-z+1
    -y+5/4,-x+1/4,-z+5/4
    z+1/2,x,y+1/2
    -x+3/4,z+1/4,y+3/4
    -z+1/2,-x+1/2,y+1
    x+5/4,-z+1/4,y+5/4
    z+1/2,-x,-y+1/2
    x+3/4,z+1/4,-y+3/4
    -z+1/2,x+1/2,-y+1
    -x+5/4,-z+1/4,-y+5/4
    y+1/2,z,x+1/2
    y+1,-z,-x+1
    z+3/4,y+3/4,-x+5/4
    -y+1,z+1/2,-x+1/2
    -z+3/4,-y+1/4,-x+3/4
    -y+1/2,-z,x+1/2
    z+3/4,-y+3/4,x+5/4
    -z+5/4,y+3/4,x+3/4
    -x+5/4,-y+1/4,-z+3/4
    y+1,-x,-z+1/2
    x+5/4,y-1/4,-z+1/4
    -y+1/2,x,-z
    -x+5/4,y+1/4,z+3/4
    -y+1,-x,z+1/2
    x+5/4,-y-1/4,z+1/4
    y+1/2,x,z
    -z+5/4,-x+1/4,-y+3/4
    x+1,-z,-y+1/2
    z+5/4,x-1/4,-y+1/4
    -x+1/2,z,-y
    -z+5/4,x+1/4,y+3/4
    -x+1,-z,y+1/2
    z+5/4,-x-1/4,y+1/4
    x+1/2,z,y
    -y+5/4,-z+1/4,-x+3/4
    -y+3/4,z+1/4,x+1/4
    -z+1,-y-1/2,x
    y+3/4,-z-1/4,x+3/4
    z+1,y,x+1/2
    y+5/4,z+1/4,-x+3/4
    -z+1,y-1/2,-x
    z+1/2,-y-1/2,-x+1/2
    x+1/2,y+1/2,z
    -y+3/4,x+3/4,z+1/4
    -x+1/2,-y+1,z+1/2
    y+5/4,-x+3/4,z+3/4
    x+1/2,-y+1/2,-z
    y+3/4,x+3/4,-z+1/4
    -x+1/2,y+1,-z+1/2
    -y+5/4,-x+3/4,-z+3/4
    z+1/2,x+1/2,y
    -x+3/4,z+3/4,y+1/4
    -z+1/2,-x+1,y+1/2
    x+5/4,-z+3/4,y+3/4
    z+1/2,-x+1/2,-y
    x+3/4,z+3/4,-y+1/4
    -z+1/2,x+1,-y+1/2
    -x+5/4,-z+3/4,-y+3/4
    y+1/2,z+1/2,x
    y+1,-z+1/2,-x+1/2
    z+3/4,y+5/4,-x+3/4
    -y+1,z+1,-x
    -z+3/4,-y+3/4,-x+1/4
    -y+1/2,-z+1/2,x
    z+3/4,-y+5/4,x+3/4
    -z+5/4,y+5/4,x+1/4
    -x+5/4,-y+3/4,-z+1/4
    y+1,-x+1/2,-z
    x+5/4,y+1/4,-z-1/4
    -y+1/2,x+1/2,-z-1/2
    -x+5/4,y+3/4,z+1/4
    -y+1,-x+1/2,z
    x+5/4,-y+1/4,z-1/4
    y+1/2,x+1/2,z-1/2
    -z+5/4,-x+3/4,-y+1/4
    x+1,-z+1/2,-y
    z+5/4,x+1/4,-y-1/4
    -x+1/2,z+1/2,-y-1/2
    -z+5/4,x+3/4,y+1/4
    -x+1,-z+1/2,y
    z+5/4,-x+1/4,y-1/4
    x+1/2,z+1/2,y-1/2
    -y+5/4,-z+3/4,-x+1/4
    -y+3/4,z+3/4,x-1/4
    -z+1,-y,x-1/2
    y+3/4,-z+1/4,x+1/4
    z+1,y+1/2,x
    y+5/4,z+3/4,-x+1/4
    -z+1,y,-x-1/2
    z+1/2,-y,-x
Im-3m x,y,z
    x,y,z
    -y,x,z
    -x,-y,z
    y,-x,z
    x,-y,-z
    y,x,-z
    -x,y,-z
    -y,-x,-z
    z,x,y
    -x,z,y
    -z,-x,y
    x,-z,y
    z,-x,-y
    x,z,-y
    -z,x,-y
    -x,-z,-y
    y,z,x
    y,-z,-x
    z,y,-x
    -y,z,-x
    -z,-y,-x
    -y,-z,x
    z,-y,x
    -z,y,x
    -x,-y,-z
    y,-x,-z
    x,y,-z
    -y,x,-z
    -x,y,z
    -y,-x,z
    x,-y,z
    y,x,z
    -z,-x,-y
    x,-z,-y
    z,x,-y
    -x,z,-y
    -z,x,y
    -x,-z,y
    z,-x,y
    x,z,y
    -y,-z,-x
    -y,z,x
    -z,-y,x
    y,-z,x
    z,y,x
    y,z,-x
    -z,y,-x
    z,-y,-x
    x+1/2,y+1/2,z+1/2
    -y+1/2,x+1/2,z+1/2
    -x+1/2,-y+1/2,z+1/2
    y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,-z+1/2
    y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,-z+1/2
    -y+1/2,-x+1/2,-z+1/2
    z+1/2,x+1/2,y+1/2
    -x+1/2,z+1/2,y+1/2
    -z+1/2,-x+1/2,y+1/2
    x+1/2,-z+1/2,y+1/2
    z+1/2,-x+1/2,-y+1/2
    x+1/2,z+1/2,-y+1/2
    -z+1/2,x+1/2,-y+1/2
    -x+1/2,-z+1/2,-y+1/2
    y+1/2,z+1/2,x+1/2
    y+1/2,-z+1/2,-x+1/2
    z+1/2,y+1/2,-x+1/2
    -y+1/2,z+1/2,-x+1/2
    -z+1/2,-y+1/2,-x+1/2
    -y+1/2,-z+1/2,x+1/2
    z+1/2,-y+1/2,x+1/2
    -z+1/2,y+1/2,x+1/2
    -x+1/2,-y+1/2,-z+1/2
    y+1/2,-x+1/2,-z+1/2
    x+1/2,y+1/2,-z+1/2
    -y+1/2,x+1/2,-z+1/2
    -x+1/2,y+1/2,z+1/2
    -y+1/2,-x+1/2,z+1/2
    x+1/2,-y+1/2,z+1/2
    y+1/2,x+1/2,z+1/2
    -z+1/2,-x+1/2,-y+1/2
    x+1/2,-z+1/2,-y+1/2
    z+1/2,x+1/2,-y+1/2
    -x+1/2,z+1/2,-y+1/2
    -z+1/2,x+1/2,y+1/2
    -x+1/2,-z+1/2,y+1/2
    z+1/2,-x+1/2,y+1/2
    x+1/2,z+1/2,y+1/2
    -y+1/2,-z+1/2,-x+1/2
    -y+1/2,z+1/2,x+1/2
    -z+1/2,-y+1/2,x+1/2
    y+1/2,-z+1/2,x+1/2
    z+1/2,y+1/2,x+1/2
    y+1/2,z+1/2,-x+1/2
    -z+1/2,y+1/2,-x+1/2
    z+1/2,-y+1/2,-x+1/2
Ia-3d x,y,z
    x,y,z
    -y+1/4,x+3/4,z+1/4
    -x+1/2,-y,z+1/2
    y+1/4,-x+1/4,z+3/4
    x,-y,-z+1/2
    y+1/4,x+3/4,-z+3/4
    -x+1/2,y,-z
    -y+1/4,-x+1/4,-z+1/4
    z,x,y
    -x+1/4,z+3/4,y+1/4
    -z+1/2,-x,y+1/2
    x+1/4,-z+1/4,y+3/4
    z,-x,-y+1/2
    x+1/4,z+3/4,-y+3/4
    -z+1/2,x,-y
    -x+1/4,-z+1/4,-y+1/4
    y,z,x
    y+1/2,-z+1/2,-x
    z+3/4,y+1/4,-x+1/4
    -y,z+1/2,-x+1/2
    -z+1/4,-y+1/4,-x+1/4
    -y+1/2,-z,x+1/2
    z+3/4,-y+3/4,x+1/4
    -z+3/4,y+1/4,x+3/4
    -x,-y,-z
    y-1/4,-x-3/4,-z-1/4
    x-1/2,y,-z-1/2
    -y-1/4,x-1/4,-z-3/4
    -x,y,z-1/2
    -y-1/4,-x-3/4,z-3/4
    x-1/2,-y,z
    y-1/4,x-1/4,z-1/4
    -z,-x,-y
    x-1/4,-z-3/4,-y-1/4
    z-1/2,x,-y-1/2
    -x-1/4,z-1/4,-y-3/4
    -z,x,y-1/2
    -x-1/4,-z-3/4,y-3/4
    z-1/2,-x,y
    x-1/4,z-1/4,y-1/4
    -y,-z,-x
    -y-1/2,z-1/2,x
    -z-3/4,-y-1/4,x-1/4
    y,-z-1/2,x-1/2
    z-1/4,y-1/4,x-1/4
    y-1/2,z,-x-1/2
    -z-3/4,y-3/4,-x-1/4
    z-3/4,-y-1/4,-x-3/4
    x+1/2,y+1/2,z+1/2
    -y+3/4,x+5/4,z+3/4
    -x+1,-y+1/2,z+1
    y+3/4,-x+3/4,z+5/4
    x+1/2,-y+1/2,-z+1
    y+3/4,x+5/4,-z+5/4
    -x+1,y+1/2,-z+1/2
    -y+3/4,-x+3/4,-z+3/4
    z+1/2,x+1/2,y+1/2
    -x+3/4,z+5/4,y+3/4
    -z+1,-x+1/2,y+1
    x+3/4,-z+3/4,y+5/4
    z+1/2,-x+1/2,-y+1
    x+3/4,z+5/4,-y+5/4
    -z+1,x+1/2,-y+1/2
    -x+3/4,-z+3/4,-y+3/4
    y+1/2,z+1/2,x+1/2
    y+1,-z+1,-x+1/2
    z+5/4,y+3/4,-x+3/4
    -y+1/2,z+1,-x+1
    -z+3/4,-y+3/4,-x+3/4
    -y+1,-z+1/2,x+1
    z+5/4,-y+5/4,x+3/4
    -z+5/4,y+3/4,x+5/4
    -x+1/2,-y+1/2,-z+1/2
    y+1/4,-x-1/4,-z+1/4
    x,y+1/2,-z
    -y+1/4,x+1/4,-z-1/4
    -x+1/2,y+1/2,z
    -y+1/4,-x-1/4,z-1/4
    x,-y+1/2,z+1/2
    y+1/4,x+1/4,z+1/4
    -z+1/2,-x+1/2,-y+1/2
    x+1/4,-z-1/4,-y+1/4
    z,x+1/2,-y
    -x+1/4,z+1/4,-y-1/4
    -z+1/2,x+1/2,y
    -x+1/4,-z-1/4,y-1/4
    z,-x+1/2,y+1/2
    x+1/4,z+1/4,y+1/4
    -y+1/2,-z+1/2,-x+1/2
    -y,z,x+1/2
    -z-1/4,-y+1/4,x+1/4
    y+1/2,-z,x
    z+1/4,y+1/4,x+1/4
    y,z+1/2,-x
    -z-1/4,y-1/4,-x+1/4
    z-1/4,-y+1/4,-x-1/4


# Short names for some of the settings.

alias P2 P121
alias P21 P1211
alias C2 C121
alias A2 A121
alias I2 I121
alias Pm P1m1
alias Pc P1c1
alias Pn P1n1
alias Pa P1a1
alias Cm C1m1
alias Am A1m1
alias Im I1m1
alias Cc C1c1
alias An A1n1
alias Ia I1a1
alias Aa A1a1
alias Cn C1n1
alias Ic I1c1
alias P2/m P12/m1
alias P21/m P121/m1
alias C2/m C12/m1
alias A2/m A12/m1
alias I2/m I12/m1
alias P2/c P12/c1
alias P2/n P12/n1
alias P2/a P12/a1
alias P21/c P121/c1
alias P21/n P121/n1
alias P21/a P121/a1
alias C2/c C12/c1
alias A2/n A12/n1
alias I2/a I12/a1
alias A2/a A12/a1
alias C2/n C12/n1
alias I2/c I12/c1

alias Pm3 Pm-3
alias Pn3 Pn-3
alias Fm3 Fm-3
alias Fd3 Fd-3
alias Im3 Im-3
alias Pa3 Pa-3
alias Ia3 Ia-3
alias Pm3m Pm-3m
alias Pn3n Pn-3n
alias Pm3n Pm-3n
alias Pn3m Pn-3m
alias Fm3m Fm-3m
alias Fm3c Fm-3c
alias Fd3m Fd-3m
alias Fd3c Fd-3c
alias Im3m Im-3m
alias Ia3d Ia-3d

# Lookup settings for use by the SpaceGroupFinder class.

lookup p1 oblique p x,y
lookup p2 oblique p x,y
lookup pm rectangular p x,y
lookup pg rectangular p x,y
lookup cm rectangular c x,y
lookup p2mm rectangular p x,y
lookup p2mg rectangular p x,y
lookup p2gg rectangular p x,y
lookup c2mm rectangular c x,y
lookup p4 square p x,y
lookup p4mm square p x,y
lookup p4gm square p x,y
lookup p3 hexagonal p x,y
lookup p3m1 hexagonal p x,y
lookup p31m hexagonal p x,y
lookup p6 hexagonal p x,y
lookup p6mm hexagonal p x,y

lookup P-43n cubic P x-1/4,y+1/4,z-1/4
lookup P42cm tetragonal P x,y,z
lookup I41cd tetragonal I x,y,z
lookup P4/mcc tetragonal P x,y,z-1/4
lookup P64 hexagonal P x,y,z
lookup C12/c1 monoclinic A -z+1/4,x,-y
lookup P-31c trigonal P x-y,x,z-1/4
lookup I41/amd:2 tetragonal I x-1/4,y,z
lookup P4bm tetragonal P x-1/4,y+1/4,z
lookup P3212 trigonal P x-y,x,z-1/6
lookup P42/ncm:2 tetragonal P y,-x,z-1/4
lookup R-3m:H trigonal R -y,x-y,z
lookup Pn-3m:2 cubic P x+1/4,y-1/4,z+1/4
lookup Immm orthorhombic I x,y,z
lookup P121 monoclinic P x,z,-y
lookup Pmmm orthorhombic P x,y,z
lookup I-43m cubic I x,y,z
lookup P3c1 trigonal P -y,x-y,z
lookup P1211 monoclinic P x,z,-y
lookup Pn-3n:2 cubic P x-1/4,y-1/4,z-1/4
lookup I-4c2 tetragonal I y,x,-z+1/4
lookup P42/mcm tetragonal P x,y,z-1/4
lookup R3c:H trigonal R -y,x-y,z
lookup P121/c1 monoclinic P x,z-1/4,-y
lookup P-6 hexagonal P x,y,z
lookup P4/mbm tetragonal P x-1/4,y-1/4,z
lookup P42bc tetragonal P x-1/4,y+1/4,z
lookup Aba2 orthorhombic C y,z,x
lookup P12/c1 monoclinic P x,z-1/4,-y
lookup P4/mnc tetragonal P x-1/4,y-1/4,z-1/4
lookup P6422 hexagonal P x-y,x,z-1/6
lookup P6 hexagonal P x,y,z
lookup C1m1 monoclinic A z,x,y
lookup P-4m2 tetragonal P y,x,-z
lookup P3112 trigonal P x-y,x,z-1/3
lookup Ibca orthorhombic I x,y-1/4,z-1/4
lookup P63/mcm hexagonal P x-y,x,z
lookup Fm-3 cubic F x,y,z
lookup Pma2 orthorhombic P x,y,z
lookup R32:H trigonal R -y,x-y,z
lookup Pmna orthorhombic P x-1/4,y,z
lookup F-43m cubic F x,y,z
lookup P4/ncc:2 tetragonal P y,-x,z-1/4
lookup P-4b2 tetragonal P y-3/4,x-1/4,-z
lookup P42/m tetragonal P x,y,z
lookup Pmm2 orthorhombic P x,y,z
lookup Pca21 orthorhombic P x,y,z
lookup Imm2 orthorhombic I x,y,z
lookup I41/acd:2 tetragonal I -x+1/4,-y,z-1/4
lookup P4mm tetragonal P x,y,z
lookup P6/m hexagonal P x,y,z
lookup P42/nbc:2 tetragonal P x-1/4,y-1/4,z
lookup P-43m cubic P x,y,z
lookup P42212 tetragonal P x-3/4,y-1/4,z-1/4
lookup Iba2 orthorhombic I x,y,z
lookup I422 tetragonal I y,-x,z
lookup P222 orthorhombic P x,y,z
lookup P6522 hexagonal P x-y,x,z-1/12
lookup I213 cubic I x,y,z
lookup P4222 tetragonal P x,y,z
lookup I4122 tetragonal I x+1/4,y-1/4,z-1/8
lookup P4122 tetragonal P x,y,z-1/4
lookup Cmma orthorhombic C x-1/4,y,z
lookup F432 cubic F x,y,z
lookup P23 cubic P x,y,z
lookup Pnna orthorhombic P x-1/4,y,z-1/4
lookup P3121 trigonal P -y,x-y,z
lookup Pm-3n cubic P x,y-1/2,z
lookup Pm-3m cubic P x,y,z
lookup F222 orthorhombic F x,y,z
lookup P6222 hexagonal P x-y,x,z-1/3
lookup Amm2 orthorhombic C y,z,x
lookup Pban:2 orthorhombic P x-1/4,y-1/4,z
lookup P4/mmm tetragonal P x,y,z
lookup P43 tetragonal P x,y,z
lookup F23 cubic F x,y,z
lookup Pmc21 orthorhombic P x,y,z
lookup P622 hexagonal P x-y,x,z
lookup P42nm tetragonal P x-1/4,y-1/4,z
lookup P-31m trigonal P x-y,x,z
lookup P312 trigonal P x-y,x,z
lookup I41 tetragonal I x+1/4,y-1/4,z
lookup I4132 cubic I x+1/4,y-1/2,z+1/4
lookup C12/m1 monoclinic A z,x,y
lookup P4nc tetragonal P x-1/4,y+1/4,z
lookup Pnn2 orthorhombic P x,y,z
lookup P4232 cubic P x,y-1/2,z
lookup P42/mbc tetragonal P x-1/4,y-1/4,z
lookup P-4 tetragonal P x,-y,-z
lookup R3:H trigonal R x,y,z
lookup Ibam orthorhombic I x,y,z-1/4
lookup P32 trigonal P x-y,x,z
lookup R3m:H trigonal R -y,x-y,z
lookup P31 trigonal P x-y,x,z
lookup P12/m1 monoclinic P x,z,-y
lookup P3221 trigonal P -y,x-y,z
lookup Ia-3 cubic I x,y,z
lookup Pmn21 orthorhombic P x-1/4,y,z
lookup P31m trigonal P x-y,x,z
lookup C2221 orthorhombic C x,y,z
lookup Pn-3:2 cubic P x-1/4,y-1/4,z-1/4
lookup I41/a:2 tetragonal I y-1/2,-x+1/4,z
lookup I432 cubic I x,y,z
lookup P-42m tetragonal P x,-y,-z
lookup Pnc2 orthorhombic P x,y,z
lookup Imma orthorhombic I x,y-1/4,z
lookup F-43c cubic F x,y+1/2,z
lookup Pbcm orthorhombic P x,y,z
lookup P63/mmc hexagonal P x-y,x,z-1/4
lookup Pbca orthorhombic P x-1/4,y,z
lookup Ccc2 orthorhombic C x,y,z
lookup P-4n2 tetragonal P y-3/4,x-1/4,-z+1/4
lookup I4cm tetragonal I y,-x,z
lookup P6122 hexagonal P x-y,x,z-5/12
lookup Cmmm orthorhombic C x,y,z
lookup P-6c2 hexagonal P x-y,x,z
lookup I222 orthorhombic I x,y,z
lookup P42/n:2 tetragonal P y-1/4,-x-1/4,z
lookup Pnnn:2 orthorhombic P x-1/4,y-1/4,z-1/4
lookup Cmca orthorhombic C x-1/4,y,z
lookup I-43d cubic I x-1/8,y+1/8,z-1/8
lookup Pba2 orthorhombic P x,y,z
lookup P-3m1 trigonal P -y,x-y,z
lookup R-3:H trigonal R x,y,z
lookup Pcc2 orthorhombic P x,y,z
lookup Cmcm orthorhombic C x,y,z
lookup C121 monoclinic A z,x,y
lookup Ccca:2 orthorhombic C x-1/4,y,z-1/4
lookup P42 tetragonal P x,y,z
lookup P41 tetragonal P x,y,z
lookup Ima2 orthorhombic I x,y,z
lookup P6/mmm hexagonal P x-y,x,z
lookup P4132 cubic P x+1/4,y-1/2,z+1/4
lookup P6322 hexagonal P x-y,x,z-1/4
lookup P42/nnm:2 tetragonal P x-1/4,y-1/4,z-1/4
lookup P432 cubic P x,y,z
lookup P6mm hexagonal P x-y,x,z
lookup I-4 tetragonal I -y,-x,-z
lookup C1c1 monoclinic A z,x,y
lookup Im-3 cubic I x,y,z
lookup I41md tetragonal I x,y,z
lookup P4/nmm:2 tetragonal P y,-x,z
lookup P1c1 monoclinic P x,z,-y
lookup P43212 tetragonal P y-1/4,-x-1/4,z-1/8
lookup P42/mnm tetragonal P x-3/4,y-1/4,z-1/4
lookup Pccn orthorhombic P x-1/4,y-1/4,z-1/4
lookup P4332 cubic P x-1/4,y-1/2,z-1/4
lookup Pccm orthorhombic P x,y,z-1/4
lookup P21212 orthorhombic P x,y,z
lookup Cmc21 orthorhombic C x,y,z
lookup Pcca orthorhombic P x-1/4,y,z-1/4
lookup Pbam orthorhombic P x,y,z
lookup I4/mcm tetragonal I x,y,z-1/4
lookup I-42d tetragonal I x-1/4,-y+1/4,-z+1/8
lookup Im-3m cubic I x,y,z
lookup Cmm2 orthorhombic C x,y,z
lookup P-42c tetragonal P x,-y,-z+1/4
lookup I-42m tetragonal I -x,y,-z
lookup P4/n:2 tetragonal P x-1/4,y-1/4,z
lookup P212121 orthorhombic P x-1/4,y,z
lookup Pna21 orthorhombic P x,y,z
lookup Cccm orthorhombic C x,y,z-1/4
lookup C222 orthorhombic C x,y,z
lookup P3 trigonal P x-y,x,z
lookup P1 triclinic P z,-y,x
lookup P321 trigonal P -y,x-y,z
lookup P-421c tetragonal P -y+1/4,-x-1/4,-z+1/4
lookup P4 tetragonal P x,y,z
lookup P42/nmc:2 tetragonal P y,-x,z
lookup P-421m tetragonal P -y+1/4,-x-1/4,-z
lookup P63 hexagonal P x,y,z
lookup Ia-3d cubic I x+1/4,y-1/2,z+1/4
lookup Fd-3:2 cubic F x-1/8,y-1/8,z-1/8
lookup P-62c hexagonal P x,y,z
lookup P4322 tetragonal P x,y,z-1/4
lookup P-62m hexagonal P x,y,z
lookup P4/nbm:2 tetragonal P x-1/4,y-1/4,z
lookup Pnnm orthorhombic P x,y,z-1/4
lookup P61 hexagonal P x,y,z
lookup Fm-3m cubic F x,y,z
lookup P6/mcc hexagonal P x-y,x,z-1/4
lookup P42mc tetragonal P x,y,z
lookup P65 hexagonal P x,y,z
lookup P-1 triclinic P z,-y,x
lookup P-3 trigonal P x-y,x,z
lookup P63cm hexagonal P x-y,x,z
lookup P422 tetragonal P x,y,z
lookup P62 hexagonal P x,y,z
lookup Fm-3c cubic F x-1/4,y-1/4,z-1/4
lookup P41212 tetragonal P x-3/4,y-1/4,z-3/8
lookup Ama2 orthorhombic C y,z,x
lookup I-4m2 tetragonal I x,-y,-z
lookup P31c trigonal P x-y,x,z
lookup Fddd:2 orthorhombic F x-1/8,y-1/8,z-1/8
lookup P1m1 monoclinic P x,z,-y
lookup Pnma orthorhombic P x-1/4,y,z-1/4
lookup Fmm2 orthorhombic F x,y,z
lookup P42/mmc tetragonal P x,y,z
lookup I4mm tetragonal I y,-x,z
lookup I23 cubic I x,y,z
lookup P63/m hexagonal P x,y,z
lookup I4/mmm tetragonal I y,-x,z
lookup Pmma orthorhombic P x-1/4,y,z
lookup P213 cubic P x-1/4,y-1/4,z-1/4
lookup P121/m1 monoclinic P x,z,-y
lookup P4212 tetragonal P x-3/4,y-1/4,z
lookup P3m1 trigonal P -y,x-y,z
lookup P-3c1 trigonal P -y,x-y,z-1/4
lookup Pmmn:2 orthorhombic P x-1/4,y-1/4,z
lookup Abm2 orthorhombic C y,z,x
lookup P-6m2 hexagonal P x-y,x,z
lookup P4/nnc:2 tetragonal P x-1/4,y-1/4,z-1/4
lookup Pbcn orthorhombic P x-1/4,y-1/4,z
lookup P4/m tetragonal P x,y,z
lookup P2221 orthorhombic P x,y,z
lookup Fd-3m:2 cubic F x+1/8,y-1/8,z+1/8
lookup P-4c2 tetragonal P y,x,-z+1/4
lookup P4cc tetragonal P x,y,z
lookup I4 tetragonal I y,-x,z
lookup Pa-3 cubic P x-1/4,y-1/4,z-1/4
lookup I212121 orthorhombic I x,y-1/4,z-1/4
lookup P6cc hexagonal P x-y,x,z
lookup F4132 cubic F x,y-1/4,z
lookup Fdd2 orthorhombic F x,y,z
lookup Pm-3 cubic P x,y,z
lookup Fd-3c:2 cubic F x-1/8,y-3/8,z-1/8
lookup R-3c:H trigonal R x,y,z
lookup P63mc hexagonal P x-y,x,z
lookup I4/m tetragonal I y,-x,z
lookup Fmmm orthorhombic F x,y,z
`;
