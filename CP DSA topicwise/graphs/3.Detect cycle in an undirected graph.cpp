    bool dfs(int u, vector<int> adj[], bool vis[], int parent){
        vis[u] = true;
        for(auto v : adj[u]){
            if(v == parent) continue;
            if(vis[v]) return true;
            if(dfs(v, adj, vis, u)) return true;
        }
        return false;
    }
  
    // Function to detect cycle in an undirected graph.
    bool isCycle(int V, vector<int> adj[]) {
        // Code here
        bool vis[V+1] = {false};
        for(int i=0; i<V; i++){
            if(vis[i]) continue;
            if(dfs(i, adj, vis, -1)) return true;
        }
        return false;
    }