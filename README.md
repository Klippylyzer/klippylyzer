# Klippylyzer - Analyze your Klippy logs and more

I started with a python script to graph temps over time to help identify wire breaks, and it kinda got away from the original minimal featureset. Now it can connect directly to your printer for pulling logs and doing extra analysis, save/manage configuration backups (no automatic restore functionality yet, but you can download a zip file), has an interactive configuration viewer for the actual processed configuration klipper is running on (as well as a backed up file viewer), bed mesh visualization tool

Current features:

* Temperature graphing with basic error analysis detecting broken wires and other common issues.
* Extract runtime klipper configuration
* Last log viewer, although it needs work
* Bed Mesh visualizer
* Configuration backups, viewer, and download (Stored in your browser)
* Print job history

Future feature ideas:

* More temperature analysis to detect PID issues
* Realtime graphs and analysis
* Dividing log data into boot/print segments for easier viewing
* Bundle exports / sharing, sharing backed-up configurations somewhere like gists.github.com
* Probe Accuracy, Z consistency testing, and bed meshing tools. These would actually be sending commands to your printer
* Dynamic generation of test gcodes, for things like pressure advance.
* Input shaper client / tools
