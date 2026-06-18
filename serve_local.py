import http.server, os, sys
os.chdir('/Users/andyasbridge/Desktop/manx-crown-diamonds-complete-project 2')
port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=port, bind='')
