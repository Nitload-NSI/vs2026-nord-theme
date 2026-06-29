# VS2026 Nord Shell Theme

A Nord-inspired Visual Studio 2026 shell theme packaged as a VSIX extension.

## Files

- `VS2026.NordShell.csproj`: Visual Studio extension project.
- `source.extension.vsixmanifest`: VSIX manifest targeting Visual Studio 2026 18.x.
- `Themes/VS2026.NordShell.vstheme`: Shell-only theme colors using Visual Studio theme color tokens.
- `docs/nord-colors.md`: Local record of Nord `nord0` through `nord15`.

Editor classification colors are intentionally not included yet.

## Build

```powershell
dotnet build
```
