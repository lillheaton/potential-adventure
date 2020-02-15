using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace PotentialAdventure
{
    public class GameHub : Hub
    {
        public async Task SendMessage(string commands)
        {
            await Clients.All.SendAsync("ReceiveCommand", commands);
        }
    }
}
