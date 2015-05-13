require 'sinatra'

get '/' do
    File.read(File.join('public', 'index2.html'))
end

