import jsonengine.main as eng

i = 0
eng.create({})
while (1):
    eng.patch({str(i):{'1':i}})
    i += 1
    