import http.server, os, sys
os.chdir('/Users/catherineasbridge/Desktop/manx-crown-diamonds-complete-project')
port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=port, bind='')
