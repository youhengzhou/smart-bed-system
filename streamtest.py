import jsonengine.main as eng

i = 0
eng.c()
while (1):
    eng.p({str(i):{'1':i}})
    i += 1
    