// DFS
// Function to return a list containing the DFS traversal of the graph.
     void DFS(int u, unordered_map<int,vector<int>>& adj2, vector<bool>& visited, vector<int>& ans){
        if(visited[u] == true) return;
        
        ans.push_back(u);
        visited[u] = true;
        
        for(auto v:adj2[u]){
            if(visited[v] == false){
                DFS(v, adj2, visited, ans);
            }
        }
        
        return;
    }
  
    // Function to return a list containing the DFS traversal of the graph.
    vector<int> dfsOfGraph(int V, vector<int> adj[]) {
        // Code here
        unordered_map<int,vector<int>>adj2;
        for(int u=0; u<V; u++){
            for(int v=0; v<adj[u].size(); v++){
                adj2[u].push_back(adj[u][v]);
            }
        }
        vector<bool> visited(V,false);
        vector<int>ans;
        DFS(0, adj2, visited, ans);
        return ans;
    }






