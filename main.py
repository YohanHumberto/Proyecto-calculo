import math

from sympy import integrate, symbols

x= symbols("x")
f = "sin(x+1) +1"

res = integrate(f, x)

print(res)
res2 = res.subs({x: 1}).eva
print(res2)
res3 = eval(res2);
print(res3)

