public class UnionFind
{
    private readonly int[] _parent;
    private readonly int[] _rank;

    public UnionFind(int size)
    {
        _parent = new int[size];
        _rank = new int[size];
        for (var i = 0; i < size; i++) _parent[i] = i;
    }

    public int Find(int x)
    {
        if (_parent[x] != x) _parent[x] = Find(_parent[x]);
        return _parent[x];
    }

    public void Union(int a, int b)
    {
        var ra = Find(a);
        var rb = Find(b);
        if (ra == rb) return;

        if (_rank[ra] < _rank[rb])
        {
            var temp = ra;
            ra = rb;
            rb = temp;
        }

        _parent[rb] = ra;
        if (_rank[ra] == _rank[rb]) _rank[ra]++;
    }

    public bool Connected(int a, int b) => Find(a) == Find(b);
}
