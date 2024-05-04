// BFS
    vector<int> BFSofgraph(int V, vector<int> adj[]) {
        // Code here
        unordered_map<int,vector<int>> adj2;
        for(int u=0; u<V; u++){
            for(auto v:adj[u]){
                adj2[u].push_back(v);
            }
        }
            
        vector<int>ans;
        vector<bool>visited(V, false);
        queue<int>q;
        q.push(0);
        visited[0] = true;
        ans.push_back(0);
            
        while(!q.empty()){
            auto u = q.front();
            q.pop();
                
            for(auto v:adj2[u]){
                if(visited[v] == false){
                    q.push(v);
                    visited[v] = true;
                    ans.push_back(v);
                }
            }
        }
        return ans;
    }



// Detect cycle in an undirected graph
Detect cycle in an undirected graph