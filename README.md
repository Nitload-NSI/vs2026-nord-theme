# VS2026 Nord Shell Theme

A Nord-inspired Visual Studio 2026 theme packaged as a VSIX extension.

## Files

- `VS2026.NordShell.csproj`: Visual Studio extension project.
- `source.extension.vsixmanifest`: VSIX manifest targeting Visual Studio 2026 18.x.
- `Themes/VS2026.NordShell.vstheme`: Shell theme colors, command bar icon compatibility colors, and migrated editor color categories for C#, C/C++, JSON, and XML-related classifiers.
- `docs/nord-colors.md`: Local record of Nord `nord0` through `nord15`.
- `references/CustomTheme.vstheme`: Local reference copy of the upstream NordFluentTheme theme used for editor color migration.
- `backups/VS2026.NordShell.before-editor-colors.vstheme`: Backup taken before editor color categories were imported.

GLSL-specific editor color entries were not present in the reference theme, so they have not been fabricated here.

## Build

```powershell
dotnet build
```
