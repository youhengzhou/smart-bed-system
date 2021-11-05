import sched, time
import streamtest_core


s = sched.scheduler(time.time, time.sleep)


def do_something(sc): 
    print("Doing stuff...")
    # do your stuff
    streamtest_core.update_database_every_few_seconds('something')
    s.enter(60, 1, do_something, (sc,))

s.enter(60, 1, do_something, (s,))
s.run()