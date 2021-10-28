import datetime
import jsonengine.main as eng

eng.create({},'testdatabase1') # this creates a new database
i = 0 # i is the database entry id
sel = '' # the placeholder information we input
while (sel != 'q' and 'quit' and 'exit'):
    sel = input('\n> ')
    eng.patch({str(i):{str(datetime.datetime.now()):str(sel)}},'testdatabase1')
    i += 1
    