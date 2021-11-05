import datetime
import threading
import jsonengine.main as eng

if eng.retrieve('testdatabase1') == False:
    eng.create({},'testdatabase1') # this creates a new database
    eng.update({'___total_entry_numbers':0},'testdatabase1') # this updates the database

if eng.retrieve('every_few_seconds_database') == False:
    eng.create({},'every_few_seconds_database') # this creates a new database
    eng.update({'___total_entry_numbers':0},'every_few_seconds_database') # this updates the database



def update_database_every_few_seconds(string):
    '''
    This is a sample function that updates data in the json database every few seconds
    '''
    # threading.Timer(5.0, update_database_every_few_seconds).start()

    i = eng.retrieve_k('___total_entry_numbers','every_few_seconds_database') # i is the database entry id
    
    eng.patch(
        {str(i):{

        'time':datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        'data':str(string)}
        
        },'___total_entry_numbers')

    i += 1
    eng.patch({'___entry_number':i},'every_few_seconds_database') # updates the database id for the next available spot



def update_database_from_input(string):
    '''
    This is a sample function that updates data in the json database when it is called
    '''
    i = eng.retrieve_k('___total_entry_numbers','testdatabase1') # i is the database entry id
    
    eng.patch(
        {str(i):{

        'time':datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        'data':str(string)}
        
        },'testdatabase1')

    i += 1
    eng.patch({'___entry_number':i},'testdatabase1') # updates the database id for the next available spot
    


# sel = ''
# while (sel != 'q' and 'quit' and 'exit'):
#     sel = input('\n> ')

#     if sel == 'del': # delete command, note, you (should) run vscode in administrator mode for this
#         eng.delete('testdatabase1')
#         print('\nDatabase deleted!')
#         break

#     update_database_from_input(sel)

    