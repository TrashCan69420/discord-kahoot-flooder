import discord
import os
import time
import discord.ext
from discord.utils import get
from discord.ext import commands, tasks
from discord.ext.commands import has_permissions,  CheckFailure, check

client = discord.Client()

client = commands.Bot(command_prefix = '>') 

@client.event
async def on_ready():
    print("Flooder bot is online") 

@client.command()
async def flood(ctx, id_):
    await ctx.send("Please wait about 30 seconds to a minute. Bots will start being added shortly.")
    import requests
    if len(id_) < 8:
        try:
            outFile = open('id.txt','w')
            outFile.write(id_)
            outFile.close()
        except IOError as errno:
            print ("I/O error({0})".format(errno))
        os.system("npm run spam")

    
file = open('token.txt', 'r')
token = file.read()
    
client.run(token)
