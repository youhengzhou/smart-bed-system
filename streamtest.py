import datetime
import jsonengine.main as eng

if eng.retrieve('testdatabase1') == False:
    eng.create({},'testdatabase1') # this creates a new database
    eng.update({'___entry_number':0},'testdatabase1') # this updates the database

i = eng.retrieve_k('___entry_number','testdatabase1') # i is the database entry id
sel = '' # the placeholder information we input

while (sel != 'q' and 'quit' and 'exit'):
    sel = input('\n> ')

    if sel == 'del': # delete command, note, you must run vscode in administrator mode for this
        eng.delete('testdatabase1')
        print('\nDatabase deleted!')
        break

    eng.patch(
        {str(i):{

        'time':datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        'data':str(sel)}
        
        },'testdatabase1')

    i += 1
    eng.patch({'___entry_number':i},'testdatabase1') # updates the database id for the next available spot
    